"use client";
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

function Model(props) {
  const { scene } = useGLTF('/assets/3d/family_lakewood_estates/scene.gltf');
  return <primitive object={scene} {...props} />;
}

const Controls = ({ isEnabled }) => {
  const controlsRef = useRef();
  useFrame(() => controlsRef.current && controlsRef.current.update());

  return (
    <OrbitControls
      ref={controlsRef}
      enabled={isEnabled}
      enableZoom={true}
      autoRotate={!isEnabled}
      autoRotateSpeed={0.05}
      enableDamping={true}
      dampingFactor={0.1}
    />
  );
};

export default function LakewoodModel({ isControlsEnabled }) {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Canvas camera={{ position: [-5, 1, 25], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 20, 5]} intensity={0.5} />
          <Model scale={1} position={[0, -1, 0]} />
          <Environment preset="city" />
          <Controls isEnabled={isControlsEnabled} />
        </Suspense>
      </Canvas>
    </div>
  );
} 
