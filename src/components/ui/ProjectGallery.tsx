import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  XMarkIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export interface ProjectPhase {
  id: string;
  title: string;
  description: string;
  images: string[];
  duration?: string;
  details?: string[];
  status?: 'completed' | 'in-progress' | 'upcoming';
}

export interface ProjectGalleryConfig {
  title?: string;
  description?: string;
  accentColor?: string;
  showDuration?: boolean;
  showStatus?: boolean;
  gridCols?: 'auto' | '1' | '2' | '3' | '4';
  imageAspectRatio?: 'square' | 'video' | 'portrait';
}

interface ProjectGalleryProps {
  phases: ProjectPhase[];
  config?: ProjectGalleryConfig;
  className?: string;
}

const defaultConfig: ProjectGalleryConfig = {
  accentColor: 'amber',
  showDuration: true,
  showStatus: false,
  gridCols: 'auto',
  imageAspectRatio: 'video'
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ 
  phases,
  config = {},
  className = ''
}) => {
  const mergedConfig = { ...defaultConfig, ...config };
  const [selectedPhase, setSelectedPhase] = useState<string>(phases[0]?.id || '');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const currentPhase = phases.find(phase => phase.id === selectedPhase) || phases[0];
  const currentImage = currentPhase?.images[selectedImageIndex];

  // Dynamic color classes based on accent color
  const getColorClasses = () => {
    const colors = {
      amber: {
        border: 'border-amber-500',
        text: 'text-amber-600',
        bg: 'bg-amber-100',
        textSecondary: 'text-amber-800'
      },
      blue: {
        border: 'border-blue-500',
        text: 'text-blue-600',
        bg: 'bg-blue-100',
        textSecondary: 'text-blue-800'
      },
      green: {
        border: 'border-green-500',
        text: 'text-green-600',
        bg: 'bg-green-100',
        textSecondary: 'text-green-800'
      },
      purple: {
        border: 'border-purple-500',
        text: 'text-purple-600',
        bg: 'bg-purple-100',
        textSecondary: 'text-purple-800'
      },
      orange: {
        border: 'border-orange-500',
        text: 'text-orange-600',
        bg: 'bg-orange-100',
        textSecondary: 'text-orange-800'
      }
    };
    return colors[mergedConfig.accentColor as keyof typeof colors] || colors.amber;
  };

  const colorClasses = getColorClasses();

  // Grid column classes
  const getGridClasses = () => {
    if (mergedConfig.gridCols === 'auto') {
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
    return `grid-cols-${mergedConfig.gridCols}`;
  };

  // Aspect ratio classes
  const getAspectRatioClass = () => {
    switch (mergedConfig.imageAspectRatio) {
      case 'square': return 'aspect-square';
      case 'portrait': return 'aspect-[3/4]';
      case 'video': 
      default: return 'aspect-video';
    }
  };

  // Status indicator
  const getStatusIndicator = (status?: string) => {
    switch (status) {
      case 'completed':
        return <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Completed</span>;
      case 'in-progress':
        return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">In Progress</span>;
      case 'upcoming':
        return <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">Upcoming</span>;
      default:
        return null;
    }
  };

  const openLightbox = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setIsLightboxOpen(true);
  };

  const nextImage = () => {
    if (currentPhase) {
      setSelectedImageIndex((prev) => 
        prev === currentPhase.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (currentPhase) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? currentPhase.images.length - 1 : prev - 1
      );
    }
  };

  if (!phases.length) {
    return (
      <div className="bg-gray-50 p-8 text-center rounded-lg">
        <p className="text-gray-500">No project phases to display</p>
      </div>
    );
  }

  return (
    <div className={`bg-white ${className}`}>
      {/* Gallery Header */}
      {(mergedConfig.title || mergedConfig.description) && (
        <div className="p-6 border-b border-gray-200">
          {mergedConfig.title && (
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{mergedConfig.title}</h2>
          )}
          {mergedConfig.description && (
            <p className="text-gray-600">{mergedConfig.description}</p>
          )}
        </div>
      )}

      {/* Phase Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6 overflow-x-auto">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => {
                setSelectedPhase(phase.id);
                setSelectedImageIndex(0);
              }}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                selectedPhase === phase.id
                  ? `${colorClasses.border} ${colorClasses.text}`
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span>{phase.title}</span>
                {mergedConfig.showStatus && getStatusIndicator(phase.status)}
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Phase Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPhase}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Phase Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{currentPhase.title}</h3>
                <div className="flex items-center space-x-3">
                  {mergedConfig.showStatus && getStatusIndicator(currentPhase.status)}
                  {mergedConfig.showDuration && currentPhase.duration && (
                    <span className={`${colorClasses.bg} ${colorClasses.textSecondary} text-sm font-medium px-3 py-1 rounded-full flex items-center`}>
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {currentPhase.duration}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-4">{currentPhase.description}</p>
              
              {/* Phase Details */}
              {currentPhase.details && currentPhase.details.length > 0 && (
                <ul className="space-y-2 text-sm text-gray-600">
                  {currentPhase.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`w-2 h-2 ${colorClasses.bg} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Image Grid */}
            <div className={`grid ${getGridClasses()} gap-4`}>
              {currentPhase.images.map((image, index) => (
                <motion.div
                  key={`${selectedPhase}-${index}`}
                  className={`relative ${getAspectRatioClass()} bg-gray-100 rounded-lg overflow-hidden cursor-pointer group`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`${currentPhase.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-90 rounded-full p-2">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {currentPhase.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors"
                  >
                    <ChevronLeftIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors"
                  >
                    <ChevronRightIcon className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Main Image */}
              <motion.img
                key={`lightbox-${selectedPhase}-${selectedImageIndex}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                src={currentImage}
                alt={`${currentPhase.title} - Image ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                {selectedImageIndex + 1} of {currentPhase.images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery; 