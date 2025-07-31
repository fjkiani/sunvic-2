"use client";
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

// Simple Villa Model
const Villa = () => {
  const { scene } = useGLTF('/assets/3d/villa/scene.gltf');
  console.log('Villa model loaded:', scene);
  console.log('Villa bounding box:', scene.children);
  return (
    <primitive object={scene} scale={0.1} position={[0, 0, 0]} />
  );
};

// Simple Lakewood Model  
const Lakewood = () => {
  const { scene } = useGLTF('/assets/3d/family_lakewood_estates/scene.gltf');
  console.log('Lakewood model loaded:', scene);
  console.log('Lakewood bounding box:', scene.children);
  return (
    <primitive object={scene} scale={0.1} position={[0, 0, 0]} />
  );
};

const Rome = () => {
  const { scene } = useGLTF('/assets/rome/scene.gltf');
  console.log('Rome model loaded:', scene);
  console.log('Rome bounding box:', scene.children);
  return (
    <primitive object={scene} scale={0.8} position={[0, -0.5, 0]} />
  );
};

const Unified3DShowcase = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isExploring, setIsExploring] = useState(false);

  // Configuration for different sections
  const sections = [
    {
      id: 'engineering',
      model: 'villa',
      camera: { position: [10, 0, 0], target: [0, 0, 0] },
      title: 'Engineering Certainty',
      subtitle: 'Precision in Every Detail',
      description: 'While others promise art, we deliver certainty. Every project engineered to perfection.',
      keyPoints: ['Radical Transparency', 'Predictive Timelines', 'Structural Integrity'],
      gradient: 'linear-gradient(135deg, rgba(240,240,240,0.3) 0%, rgba(220,220,220,0.4) 100%)'
    },
    {
      id: 'precision',
      model: 'lakewood', 
      camera: { position: [1, 1, 1.5], target: [0, 0, 0] },
      title: 'Structural Precision',
      subtitle: 'Engineering Excellence',
      description: 'Rutgers-trained engineering meets luxury design. Every beam calculated, every detail verified.',
      keyPoints: ['Load-Bearing Analysis', 'Material Optimization', 'Code Compliance'],
      gradient: 'linear-gradient(135deg, rgba(240,240,240,0.3) 0%, rgba(220,220,220,0.4) 100%)'
    },
    {
      id: 'transparency',
      model: 'villa',
      camera: { position: [-1, 1, 1.5], target: [0, 0, 0] },
      title: 'Radical Transparency',
      subtitle: 'Project Management Redefined',
      description: 'Real-time updates, predictive timelines, zero surprises. Engineering approach to project delivery.',
      keyPoints: ['Live Progress Tracking', 'Cost Breakdown', 'Risk Mitigation'],
      gradient: 'linear-gradient(135deg, rgba(240,240,240,0.3) 0%, rgba(220,220,220,0.4) 100%)'
    },
    {
      id: 'heritage',
      model: 'rome',
      camera: { position: [-1, 0, 0], target: [0, 0, 0] },
      title: 'Classical Heritage',
      subtitle: 'Timeless Design Principles',
      description: 'Drawing from centuries of architectural mastery. Roman engineering principles meet modern precision.',
      keyPoints: ['Historical Accuracy', 'Proportional Harmony', 'Enduring Materials'],
      gradient: 'linear-gradient(135deg, rgba(184,134,11,0.3) 0%, rgba(120,53,15,0.4) 100%)'
    }
  ];

  const currentSectionData = sections[currentSection];

  const handleModelClick = () => {
    if (!isExploring) {
      setIsExploring(true);
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setIsExploring(false);
  };

  const containerStyle = {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    cursor: isExploring ? 'auto' : 'pointer',
  };

  const modelContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'auto',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: currentSectionData.gradient,
    zIndex: 1,
    transition: 'all 0.8s ease-in-out',
    pointerEvents: 'none',
    opacity: isExploring ? 0 : 1,
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '80px',
    transform: 'translateY(-50%)',
    zIndex: 2,
    maxWidth: '600px',
    color: 'white',
    opacity: isExploring ? 0 : 1,
    pointerEvents: isExploring ? 'none' : 'auto',
    transition: 'opacity 0.5s ease-in-out',
  };

  const textContentStyle = {
    width: '100%',
  };

  const subtitleStyle = {
    color: '#00d4ff',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  };

  const titleStyle = {
    fontSize: '64px',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '20px',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
  };

  const descriptionStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '30px',
    color: '#f0f0f0',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  };

  const keyPointsStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const keyPointStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
  };

  const iconStyle = {
    color: '#00d4ff',
    marginRight: '12px',
    fontSize: '18px',
  };

  const navigationStyle = {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 3,
    display: 'flex',
    gap: '15px',
  };

  const navButtonStyle = (index) => ({
    padding: '12px 24px',
    backgroundColor: currentSection === index ? '#00d4ff' : 'rgba(255, 255, 255, 0.2)',
    color: currentSection === index ? '#000' : '#fff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  });

  const explorePromptStyle = {
    position: 'absolute',
    bottom: '120px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 3,
    padding: '12px 24px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: '600',
    backdropFilter: 'blur(10px)',
    opacity: isExploring ? 0 : 1,
    transition: 'opacity 0.5s ease-in-out',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '30px',
    right: '30px',
    zIndex: 10,
    width: '50px',
    height: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '32px',
    lineHeight: '50px',
    textAlign: 'center',
    opacity: isExploring ? 1 : 0,
    pointerEvents: isExploring ? 'auto' : 'none',
    transition: 'opacity 0.5s ease-in-out',
    backdropFilter: 'blur(10px)',
  };

  return (
    <div style={containerStyle} onClick={handleModelClick}>
      {/* 3D Model Background */}
      <div style={modelContainerStyle}>
        <Canvas camera={{ position: currentSectionData.camera.position, fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 20, 5]} intensity={1.5} />
            <directionalLight position={[-10, -20, -5]} intensity={0.8} />
            <pointLight position={[0, 10, 0]} intensity={1} />
            
            {currentSectionData.model === 'villa' ? <Villa /> : 
             currentSectionData.model === 'lakewood' ? <Lakewood /> : 
             currentSectionData.model === 'rome' ? <Rome /> : <Rome />}
            
            <Environment preset="sunset" />
            <OrbitControls 
              enabled={isExploring}
              enablePan={true} 
              enableZoom={true} 
              enableRotate={true}
              target={currentSectionData.camera.target}
              autoRotate={!isExploring}
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div style={overlayStyle}>
        <div style={contentStyle}>
          <div style={textContentStyle}>
            <p style={subtitleStyle}>{currentSectionData.subtitle}</p>
            <h1 style={titleStyle}>{currentSectionData.title}</h1>
            <p style={descriptionStyle}>{currentSectionData.description}</p>
            
            <ul style={keyPointsStyle}>
              {currentSectionData.keyPoints.map((point, index) => (
                <li key={index} style={keyPointStyle}>
                  <i className="fa-light fa-check" style={iconStyle}></i>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div style={navigationStyle}>
        {sections.map((section, index) => (
          <button
            key={section.id}
            style={navButtonStyle(index)}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSection(index);
            }}
          >
            {section.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Explore Prompt */}
      <div style={explorePromptStyle}>
        Click Anywhere to Explore in 3D
      </div>

      {/* Close Button */}
      <button style={closeButtonStyle} onClick={handleCloseClick}>
        &times;
      </button>
    </div>
  );
};

export default Unified3DShowcase; 