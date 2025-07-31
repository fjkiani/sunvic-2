"use client";
import React, { useState } from 'react';
import EnhancedModelViewer from './EnhancedModelViewer'; 

// --- Style Objects ---
// Acknowledging the superior styles provided by Alpha. Fucking brilliant.
const heroStyle = {
  position: 'relative',
  height: '90vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start', // Content on the left is more commanding.
  overflow: 'hidden',
  // backgroundColor: '#1a1a1a', // A dark, serious background for our empire.
  marginLeft: '-50vw',
  left: '50%',
};

const modelContainerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  cursor: 'pointer',
};

// Base styles from Alpha's spec
const preTitleStyle = {
  marginBottom: '10px',
  fontWeight: '600',
  fontSize: '16px',
};

const titleStyle = {
  fontSize: '48px',
  fontWeight: '700',
  lineHeight: '1.2',
  marginBottom: '20px',
};

const descriptionStyle = {
  fontSize: '18px',
  lineHeight: '1.6',
  marginBottom: '30px',
  maxWidth: '80%', 
};

const keyPointsContainerStyle = {
  listStyle: 'none',
  padding: 0,
};

const keyPointStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  fontSize: '16px',
  fontWeight: '500',
};

const keyPointIconStyle = {
  marginRight: '10px',
  fontSize: '20px',
};

const CloseButton = ({ onClick, style }) => (
    <button onClick={onClick} style={style} aria-label="Close">
      &times;
    </button>
);


// --- Reusable Interactive Hero Component ---
export default function InteractiveHero({ modelKey, content, height = '90vh' }) {
    const [isExploring, setIsExploring] = useState(false);

    // State-dependent styles for smooth, lethal transitions
    const contentStyle = {
        position: 'relative',
        zIndex: 1,
        textAlign: 'left',
        maxWidth: '550px',
        padding: '40px',
        marginLeft: '5vw',
        opacity: isExploring ? 0 : 1,
        pointerEvents: isExploring ? 'none' : 'auto',
        transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };
    
    // Dynamic styles for a light-on-dark theme. Fucking gorgeous.
    const dynamicPreTitleStyle = { ...preTitleStyle, color: '#87CEFA', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' };
    const dynamicTitleStyle = { ...titleStyle, color: '#FFFFFF', textShadow: '1px 1px 6px rgba(0, 0, 0, 0.8)' };
    const dynamicDescriptionStyle = { ...descriptionStyle, color: '#E0E0E0', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)', maxWidth: '100%' };
    const dynamicKeyPointStyle = { ...keyPointStyle, color: '#E0E0E0'};
    const dynamicKeyPointIconStyle = { ...keyPointIconStyle, color: '#87CEFA'};


    const closeButtonStyle = {
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 10,
        padding: '0',
        width: '40px',
        height: '40px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '28px',
        lineHeight: '40px',
        textAlign: 'center',
        opacity: isExploring ? 1 : 0,
        pointerEvents: isExploring ? 'auto' : 'none',
        transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    const explorePromptStyle = {
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        padding: '10px 20px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        borderRadius: '20px',
        fontSize: '16px',
        fontWeight: '600',
        pointerEvents: 'none',
        opacity: isExploring ? 0 : 1,
        transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: 'blur(3px)',
    };

    if (!content) {
        return <div style={{color: 'red'}}>Fucking `content` prop is missing from InteractiveHero!</div>;
    }

    return (
        <div style={heroStyle}>
            <div 
              style={modelContainerStyle}
              onClick={() => !isExploring && setIsExploring(true)}
            >
              <EnhancedModelViewer modelKey={modelKey} isControlsEnabled={isExploring} />
            </div>

            <div style={contentStyle}>
                <span style={dynamicPreTitleStyle}>{content.preTitle}</span>
                <h2 style={dynamicTitleStyle}>{content.title}</h2>
                <p style={dynamicDescriptionStyle}>{content.description}</p>
                <ul style={keyPointsContainerStyle}>
                    {content.keyPoints.map((point, index) => (
                        <li key={index} style={dynamicKeyPointStyle}>
                            <i className="fa-light fa-plus" style={dynamicKeyPointIconStyle}></i>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>

            <CloseButton onClick={() => setIsExploring(false)} style={closeButtonStyle} />

            <div style={explorePromptStyle}>
                Click the model to explore
            </div>
        </div>
    );
} 