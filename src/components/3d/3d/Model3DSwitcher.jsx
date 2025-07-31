"use client";
import React, { useState } from 'react';
import { Model3DViewer, MODEL_CONFIGS } from './VillaModel';

const Model3DSwitcher = ({ 
  availableModels = ["villa", "lakewood"], 
  defaultModel = "villa",
  showControls = true,
  height = "100vh",
  className = ""
}) => {
  const [currentModel, setCurrentModel] = useState(defaultModel);
  const [controlsEnabled, setControlsEnabled] = useState(false);

  const handleModelSwitch = (modelType) => {
    setCurrentModel(modelType);
    setControlsEnabled(false); // Reset controls when switching
  };

  const toggleControls = () => {
    setControlsEnabled(!controlsEnabled);
  };

  return (
    <div className={`relative ${className}`} style={{ height }}>
      {/* 3D Model Viewer */}
      <Model3DViewer 
        modelType={currentModel} 
        isControlsEnabled={controlsEnabled} 
      />
      
      {/* Model Switcher Controls */}
      {showControls && (
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {/* Model Selection Buttons */}
          <div className="flex gap-2">
            {availableModels.map((modelType) => (
              <button
                key={modelType}
                onClick={() => handleModelSwitch(modelType)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  currentModel === modelType
                    ? 'bg-white text-black shadow-lg'
                    : 'bg-black/50 text-white hover:bg-black/70'
                }`}
              >
                {modelType.charAt(0).toUpperCase() + modelType.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Controls Toggle */}
          <button
            onClick={toggleControls}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
              controlsEnabled
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-black/50 text-white hover:bg-black/70'
            }`}
          >
            {controlsEnabled ? 'Lock View' : 'Explore'}
          </button>
        </div>
      )}
      
      {/* Model Info Overlay */}
      {showControls && (
        <div className="absolute bottom-4 left-4 z-10 bg-black/50 text-white p-3 rounded-lg backdrop-blur-sm">
          <h3 className="font-bold text-lg">
            {currentModel.charAt(0).toUpperCase() + currentModel.slice(1)} Model
          </h3>
          <p className="text-sm opacity-80">
            {controlsEnabled ? 'Click and drag to explore' : 'Auto-rotating view'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Model3DSwitcher; 