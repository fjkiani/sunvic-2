"use client";
import React from 'react';

const Model3DLoader = ({ 
  isLoading = true, 
  progress = 0, 
  error = null, 
  modelName = "3D Model",
  height = "100vh",
  showProgress = true 
}) => {
  if (error) {
    return (
      <div className="model-3d-loader error" style={{ height }}>
        <div className="loader-content">
          <div className="error-icon">⚠️</div>
          <h3>Failed to Load {modelName}</h3>
          <p>Unable to load the 3D model. Please check your connection and try again.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="retry-button"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!isLoading) return null;

  return (
    <div className="model-3d-loader" style={{ height }}>
      <div className="loader-content">
        {/* SunVic Logo/Icon */}
        <div className="loader-icon">
          <div className="engineering-icon">
            <div className="gear gear-1">⚙️</div>
            <div className="gear gear-2">⚙️</div>
          </div>
        </div>
        
        {/* Loading Text */}
        <h3 className="loader-title">Engineering {modelName}</h3>
        <p className="loader-subtitle">Precision takes time...</p>
        
        {/* Progress Bar */}
        {showProgress && (
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${Math.min(progress * 100, 100)}%` }}
              ></div>
            </div>
            <span className="progress-text">{Math.round(progress * 100)}%</span>
          </div>
        )}
        
        {/* Loading Animation */}
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <style jsx>{`
        .model-3d-loader {
          width: 100%;
          background: linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        
        .model-3d-loader::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.05) 0%, transparent 50%);
          animation: backgroundShift 8s ease-in-out infinite alternate;
        }
        
        .loader-content {
          text-align: center;
          z-index: 2;
          position: relative;
          max-width: 400px;
          padding: 40px;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(0, 212, 255, 0.2);
        }
        
        .loader-icon {
          margin-bottom: 30px;
        }
        
        .engineering-icon {
          position: relative;
          display: inline-block;
          width: 80px;
          height: 80px;
        }
        
        .gear {
          position: absolute;
          font-size: 2.5rem;
          animation: rotate 3s linear infinite;
        }
        
        .gear-1 {
          top: 0;
          left: 0;
          color: #00d4ff;
          filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.5));
        }
        
        .gear-2 {
          bottom: 0;
          right: 0;
          color: #ffffff;
          animation-direction: reverse;
          animation-duration: 2s;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
        }
        
        .loader-title {
          color: #ffffff;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          letter-spacing: 1px;
        }
        
        .loader-subtitle {
          color: #00d4ff;
          font-size: 1.1rem;
          margin-bottom: 30px;
          font-style: italic;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        }
        
        .progress-container {
          margin-bottom: 30px;
        }
        
        .progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
          border: 1px solid rgba(0, 212, 255, 0.3);
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00d4ff 0%, #0099cc 100%);
          border-radius: 4px;
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
        
        .progress-text {
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        }
        
        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        
        .loading-dots span {
          width: 12px;
          height: 12px;
          background: #00d4ff;
          border-radius: 50%;
          animation: loadingDots 1.5s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
        
        .loading-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .loading-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        /* Error State */
        .model-3d-loader.error {
          background: linear-gradient(135deg, #2d1b1b 0%, #4a2c2c 50%, #2d1b1b 100%);
        }
        
        .error-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .retry-button {
          background: #ff4444;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .retry-button:hover {
          background: #ff6666;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 68, 68, 0.3);
        }
        
        /* Animations */
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes loadingDots {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        
        @keyframes backgroundShift {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Model3DLoader; 