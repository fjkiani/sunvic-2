import React from 'react';
import ProjectGallery from './ProjectGallery';
import { groundUpConstructionShowcase } from '../../data/projectShowcases';

interface ConstructionGalleryProps {
  className?: string;
}

// Simple wrapper component for backward compatibility
const ConstructionGallery: React.FC<ConstructionGalleryProps> = ({ className }) => {
  return (
    <ProjectGallery 
      phases={groundUpConstructionShowcase.phases}
      config={groundUpConstructionShowcase.config}
      className={className}
    />
  );
};

export default ConstructionGallery; 