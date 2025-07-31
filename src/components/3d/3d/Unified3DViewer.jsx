"use client";
import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, useProgress } from "@react-three/drei";
import { projectPortfolio } from "@/constants/content";
import * as THREE from "three";

// Loading component
const LoadingSpinner = ({ progress = 0, modelName = "3D Model" }) => (
  <div className="unified-3d-loader">
    <div className="loader-content">
      <div className="loader-icon">
        <div className="engineering-icon">
          <div className="gear gear-1">⚙️</div>
          <div className="gear gear-2">⚙️</div>
        </div>
      </div>
      <h3 className="loader-title">Loading {modelName}</h3>
      <p className="loader-subtitle">Engineering precision takes time...</p>
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        </div>
        <span className="progress-text">{Math.round(progress)}%</span>
      </div>
    </div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, modelKey, onRetry }) => (
  <div className="unified-3d-error">
    <div className="error-content">
      <div className="error-icon">⚠️</div>
      <h3>Failed to Load {modelKey}</h3>
      <p>Unable to load the 3D model. Please check your connection and try again.</p>
      <button onClick={onRetry} className="retry-button">
        Retry
      </button>
    </div>
  </div>
);

// 3D Model component
const Model3D = ({ modelKey, onLoad, onError }) => {
  const config = projectPortfolio[modelKey];
  
  if (!config) {
    onError(new Error(`Model "${modelKey}" not found in portfolio`));
    return null;
  }

  try {
    const { scene } = useGLTF(config.path);
    
    useEffect(() => {
      if (scene && onLoad) {
        onLoad();
      }
    }, [scene, onLoad]);

    return (
      <primitive 
        object={scene} 
        scale={config.scale || 1} 
        position={config.position || [0, 0, 0]} 
      />
    );
  } catch (error) {
    onError(error);
    return null;
  }
};

// Camera controller component
const CameraController = ({ modelKey, cameraConfig, autoRotate, autoRotateSpeed }) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const config = projectPortfolio[modelKey];

  useEffect(() => {
    if (config?.camera && camera) {
      const { position, target, fov } = { ...config.camera, ...cameraConfig };
      
      if (position) camera.position.set(...position);
      if (fov) camera.fov = fov;
      if (target && controlsRef.current) {
        controlsRef.current.target.set(...target);
      }
      
      camera.updateProjectionMatrix();
      controlsRef.current?.update();
    }
  }, [modelKey, cameraConfig, camera, config]);

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      autoRotate={autoRotate}
      autoRotateSpeed={autoRotateSpeed || config?.autoRotateSpeed || 0.5}
      enableDamping={true}
      dampingFactor={0.05}
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      maxPolarAngle={Math.PI / 2.1}
      minPolarAngle={Math.PI / 3}
    />
  );
};

// Model switcher component
const ModelSwitcher = ({ 
  models, 
  activeModel, 
  onModelChange, 
  showLabels = true,
  position = "bottom-center" 
}) => {
  if (!models || models.length <= 1) return null;

  const positionClasses = {
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4"
  };

  return (
    <div className={`model-switcher ${positionClasses[position]}`}>
      <div className="switcher-container">
        {models.map((modelKey, index) => {
          const config = projectPortfolio[modelKey];
          const isActive = activeModel === modelKey;
          
          return (
            <button
              key={modelKey}
              className={`model-button ${isActive ? 'active' : ''}`}
              onClick={() => onModelChange(modelKey)}
              title={config?.title || modelKey}
            >
              {showLabels ? (
                <span className="model-label">
                  {config?.title?.split(' ')[0] || modelKey}
                </span>
              ) : (
                <span className="model-dot"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Exploration controls
const ExplorationControls = ({ 
  isExploring, 
  onToggleExploration, 
  onClose,
  showExplorePrompt = true,
  showCloseButton = true 
}) => (
  <>
    {/* Explore prompt */}
    {showExplorePrompt && !isExploring && (
      <div className="explore-prompt" onClick={onToggleExploration}>
        <div className="prompt-content">
          <i className="fa-solid fa-hand-pointer"></i>
          <span>Click to explore in 3D</span>
        </div>
      </div>
    )}

    {/* Close button */}
    {showCloseButton && isExploring && (
      <button className="close-exploration" onClick={onClose}>
        <i className="fa-solid fa-times"></i>
      </button>
    )}
  </>
);

// Main Unified 3D Viewer Component
const Unified3DViewer = ({
  // Model configuration
  models = ["villa"],
  activeModel: controlledActiveModel,
  onModelChange,
  
  // Display settings
  height = "100vh",
  width = "100%",
  backgroundColor = "transparent",
  
  // Camera settings
  cameraConfig = {},
  
  // Interaction settings
  autoRotate = false,
  autoRotateSpeed,
  enableControls = true,
  enableZoom = true,
  enablePan = true,
  enableRotate = true,
  
  // UI elements
  showModelSwitcher = true,
  showExplorePrompt = true,
  showCloseButton = true,
  switcherPosition = "bottom-center",
  showSwitcherLabels = true,
  
  // Lighting
  ambientIntensity = 1.2,
  directionalIntensity = 1.5,
  directionalPosition = [10, 20, 5],
  
  // Environment
  environment = "warehouse",
  
  // Events
  onLoad,
  onError,
  onClick,
  
  // Performance
  enableSuspense = true,
  fallback,
  
  // Styling
  className = "",
  style = {}
}) => {
  const [internalActiveModel, setInternalActiveModel] = useState(models[0]);
  const [isExploring, setIsExploring] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const activeModel = controlledActiveModel || internalActiveModel;
  const { progress } = useProgress();
  
  useEffect(() => {
    setLoadingProgress(progress);
  }, [progress]);

  const handleModelChange = (modelKey) => {
    setError(null);
    setIsLoading(true);
    
    if (onModelChange) {
      onModelChange(modelKey);
    } else {
      setInternalActiveModel(modelKey);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setError(null);
    if (onLoad) onLoad();
  };

  const handleError = (error) => {
    setIsLoading(false);
    setError(error);
    if (onError) onError(error);
  };

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    handleModelChange(activeModel);
  };

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    } else if (!isExploring && enableControls) {
      setIsExploring(true);
    }
  };

  const handleCloseExploration = () => {
    setIsExploring(false);
  };

  const containerStyle = {
    height,
    width,
    backgroundColor,
    position: 'relative',
    overflow: 'hidden',
    cursor: isExploring ? 'grab' : 'pointer',
    ...style
  };

  if (error) {
    return (
      <div className={`unified-3d-viewer ${className}`} style={containerStyle}>
        <ErrorFallback 
          error={error} 
          modelKey={activeModel} 
          onRetry={handleRetry} 
        />
      </div>
    );
  }

  const canvasContent = (
    <Canvas
      camera={{ 
        position: projectPortfolio[activeModel]?.camera?.position || [0, 0, 5],
        fov: projectPortfolio[activeModel]?.camera?.fov || 50 
      }}
      onClick={handleClick}
    >
      <ambientLight intensity={ambientIntensity} />
      <directionalLight 
        position={directionalPosition} 
        intensity={directionalIntensity} 
      />
      
      <Model3D 
        modelKey={activeModel} 
        onLoad={handleLoad}
        onError={handleError}
      />
      
      <Environment preset={environment} />
      
      {enableControls && (
        <CameraController
          modelKey={activeModel}
          cameraConfig={cameraConfig}
          autoRotate={autoRotate && !isExploring}
          autoRotateSpeed={autoRotateSpeed}
        />
      )}
    </Canvas>
  );

  return (
    <div className={`unified-3d-viewer ${className}`} style={containerStyle}>
      {isLoading && (
        <LoadingSpinner 
          progress={loadingProgress} 
          modelName={projectPortfolio[activeModel]?.title || activeModel} 
        />
      )}
      
      {enableSuspense ? (
        <Suspense fallback={fallback || <LoadingSpinner />}>
          {canvasContent}
        </Suspense>
      ) : (
        canvasContent
      )}
      
      {/* UI Controls */}
      {models.length > 1 && showModelSwitcher && (
        <ModelSwitcher
          models={models}
          activeModel={activeModel}
          onModelChange={handleModelChange}
          showLabels={showSwitcherLabels}
          position={switcherPosition}
        />
      )}
      
      <ExplorationControls
        isExploring={isExploring}
        onToggleExploration={() => setIsExploring(!isExploring)}
        onClose={handleCloseExploration}
        showExplorePrompt={showExplorePrompt}
        showCloseButton={showCloseButton}
      />

      {/* Styles */}
      <style jsx>{`
        .unified-3d-viewer {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .unified-3d-loader, .unified-3d-error {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          z-index: 10;
        }

        .loader-content, .error-content {
          text-align: center;
          padding: 2rem;
        }

        .loader-icon {
          margin-bottom: 1rem;
        }

        .engineering-icon {
          position: relative;
          display: inline-block;
        }

        .gear {
          font-size: 2rem;
          animation: spin 3s linear infinite;
        }

        .gear-1 {
          animation-direction: normal;
        }

        .gear-2 {
          animation-direction: reverse;
          margin-left: -0.5rem;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .loader-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #00d4ff;
        }

        .loader-subtitle {
          font-size: 1rem;
          margin-bottom: 1.5rem;
          opacity: 0.8;
        }

        .progress-container {
          width: 200px;
          margin: 0 auto;
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00d4ff, #0099cc);
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 0.9rem;
          color: #00d4ff;
        }

        .error-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .retry-button {
          background: #007bff;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          margin-top: 1rem;
        }

        .retry-button:hover {
          background: #0056b3;
        }

        .model-switcher {
          position: absolute;
          z-index: 5;
        }

        .switcher-container {
          display: flex;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.7);
          padding: 0.75rem;
          border-radius: 25px;
          backdrop-filter: blur(10px);
        }

        .model-button {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid transparent;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .model-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .model-button.active {
          background: #00d4ff;
          border-color: #00d4ff;
          color: white;
        }

        .model-dot {
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: currentColor;
        }

        .explore-prompt {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 5;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .explore-prompt:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: translateX(-50%) translateY(-2px);
        }

        .prompt-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .close-exploration {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border: 2px solid white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
          backdrop-filter: blur(10px);
        }

        .close-exploration:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Unified3DViewer;

// Export additional utilities
export { LoadingSpinner, ErrorFallback, ModelSwitcher, ExplorationControls }; 