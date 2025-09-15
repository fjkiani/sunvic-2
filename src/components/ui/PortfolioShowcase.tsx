// Portfolio Showcase Slider Component
// Displays featured projects in a dynamic slider format

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  EyeIcon,
  MapPinIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { enhancedPortfolioProjects } from '../../data/portfolioProjects';

interface PortfolioShowcaseProps {
  className?: string;
}

const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get featured projects (first 6)
  const featuredProjects = enhancedPortfolioProjects.slice(0, 6);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? featuredProjects.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === featuredProjects.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px]">
              {/* Left Column - Project Info */}
              <div className="p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                    {featuredProjects[currentIndex].category}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {featuredProjects[currentIndex].title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {featuredProjects[currentIndex].overview}
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPinIcon className="h-5 w-5" />
                      <span>{featuredProjects[currentIndex].location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-primary-600 font-semibold">
                      <CurrencyDollarIcon className="h-5 w-5" />
                      <span>{featuredProjects[currentIndex].value}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Link
                      to={`/project/${featuredProjects[currentIndex].id}`}
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    >
                      <EyeIcon className="h-5 w-5 mr-2" />
                      View Project
                    </Link>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      View All Projects
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Column - Project Image */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative overflow-hidden rounded-xl shadow-2xl"
                >
                  <img
                    src={featuredProjects[currentIndex].heroImage}
                    alt={featuredProjects[currentIndex].title}
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all hover:scale-110"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-primary-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
      
    </div>
  );
};

export default PortfolioShowcase;
