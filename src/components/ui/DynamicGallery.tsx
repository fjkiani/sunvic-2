// Dynamic Gallery Component
// Automatically creates galleries from project/service data without hard-coding

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  getProjectImages, 
  getServiceImages, 
  createGalleryPhases, 
  createGalleryConfig
} from '../../utils/imageManager';
import type { ImageData } from '../../utils/imageManager';
import ProjectGallery from './ProjectGallery';

interface DynamicGalleryProps {
  projectId?: string;
  serviceId?: string;
  title?: string;
  description?: string;
  className?: string;
}

const DynamicGallery: React.FC<DynamicGalleryProps> = ({
  projectId,
  serviceId,
  title,
  description,
  className = ''
}) => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Get images based on project or service ID
  const images: ImageData[] = projectId 
    ? getProjectImages(projectId)
    : serviceId 
    ? getServiceImages(serviceId)
    : [];

  if (images.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-gray-500">No images available for this project.</p>
      </div>
    );
  }

  // Create gallery phases dynamically
  const phases = createGalleryPhases(images);
  
  // Create gallery config dynamically
  const config = createGalleryConfig(
    images[0]?.category || 'General',
    title || `${projectId ? 'Project' : 'Service'} Gallery`
  );

  // Override config with custom title/description if provided
  if (title) config.title = title;
  if (description) config.description = description;

  const openLightbox = (image: ImageData) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={className}>
      {/* Dynamic Project Gallery */}
      <ProjectGallery 
        phases={phases}
        config={config}
      />

      {/* Enhanced Image Grid with Lightbox */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          All Images
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.url}
                alt={image.alt || image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              
              {/* Image Type Badge */}
              <div className="absolute top-2 left-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                  image.type === 'before' ? 'bg-red-600/90' :
                  image.type === 'after' ? 'bg-green-600/90' :
                  image.type === 'during' ? 'bg-blue-600/90' :
                  image.type === 'detail' ? 'bg-purple-600/90' :
                  image.type === 'process' ? 'bg-orange-600/90' :
                  'bg-gray-600/90'
                }`}>
                  {image.type}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-90 rounded-full p-2">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm font-medium truncate">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt || selectedImage.caption}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">{selectedImage.caption}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    selectedImage.type === 'before' ? 'bg-red-600' :
                    selectedImage.type === 'after' ? 'bg-green-600' :
                    selectedImage.type === 'during' ? 'bg-blue-600' :
                    selectedImage.type === 'detail' ? 'bg-purple-600' :
                    selectedImage.type === 'process' ? 'bg-orange-600' :
                    'bg-gray-600'
                  }`}>
                    {selectedImage.type}
                  </span>
                  {selectedImage.category && (
                    <span>{selectedImage.category}</span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicGallery;
