"use client";
import React, { Suspense, useRef, useEffect } from "react";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

// Model configurations - easily extensible for new models
const MODEL_CONFIGS = {
  villa: {
    path: "/assets/3d/villa/scene.gltf",
    scale: 1.5,
    position: [0, -1.5, 0],
    camera: { position: [100, -10, -100], fov: 50 },
    environment: "city"
  },
  lakewood: {
    path: "/assets/3d/family_lakewood_estates/scene.gltf",
    scale: 1,
    position: [0, -1, 0],
    camera: { position: [5, 10, 25], fov: 50 },
    environment: "sunset"
  },
  rome: {
    path: "/assets/rome/scene.gltf",
    scale: 0.8,
    position: [0, -0.5, 0],
    camera: { position: [-1.5, -0.55, -0.40], fov: 75 },
    environment: "warehouse"
  }
};

const Model3D = ({ modelType }) => {
  const config = MODEL_CONFIGS[modelType];
  const { scene } = useGLTF(config.path);
  return <primitive object={scene} scale={config.scale} position={config.position} />;
};

const Controls = ({ isEnabled }) => {
  const controlsRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enabled = isEnabled;
    }
  }, [isEnabled]);

  useFrame(() => {
    if (controlsRef.current && !isEnabled) {
      controlsRef.current.autoRotate = true;
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enabled={isEnabled}
      enableZoom={true}
      autoRotate={!isEnabled}
      autoRotateSpeed={0.05}
      maxPolarAngle={Math.PI / 2.1}
      minPolarAngle={Math.PI / 3}
    />
  );
};

const Model3DViewer = ({ modelType = "villa", isControlsEnabled = false }) => {
  const config = MODEL_CONFIGS[modelType];
  
  if (!config) {
    console.error(`Model type "${modelType}" not found in configurations`);
    return null;
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Canvas camera={config.camera}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 20, 5]} intensity={0.5} />
          <Model3D modelType={modelType} />
          <Environment preset={config.environment} />
          <Controls isEnabled={isControlsEnabled} />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Legacy component name for backward compatibility
const VillaModel = ({ isControlsEnabled }) => {
  return <Model3DViewer modelType="villa" isControlsEnabled={isControlsEnabled} />;
};

export default VillaModel;
export { Model3DViewer, MODEL_CONFIGS }; 