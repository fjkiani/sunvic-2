import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from './Slider';
import { heroSlides } from '../../constants/images';

interface HeroSliderProps {
  autoplay?: boolean;
  autoplayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  height?: string;
  className?: string;
  openConsultationForm?: (serviceType?: string) => void;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  autoplay = true,
  autoplayDelay = 5000,
  showNavigation = true,
  showPagination = true,
  height = 'h-screen',
  className = '',
  openConsultationForm
}) => {
  // Convert hero slides to slider format
  const slides = heroSlides.map((slide) => ({
    id: slide.id,
    content: (
      <div className={`relative ${height} w-full overflow-hidden`}>
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={slide.backgroundImage}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 w-full h-full" />
        </div>
        
        {/* Content */}
        <div className="relative h-full w-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-blue-400 font-semibold mb-4 tracking-wide uppercase">
                  {slide.subtitle}
                </div>
                <h1 className="font-display font-bold text-5xl lg:text-7xl text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={slide.ctaLink} className="btn-primary">
                    {slide.ctaText}
                  </Link>
                  {slide.secondaryCtaText && slide.secondaryCtaLink && (
                    <>
                      {(slide.secondaryCtaText.toLowerCase().includes('consultation') || 
                        slide.secondaryCtaText.toLowerCase().includes('quote')) && openConsultationForm ? (
                        <button
                          onClick={() => {
                            const serviceType = slide.id === 'hero-kitchen' ? 'Full Home Construction' :
                                             slide.id === 'hero-bathroom' ? 'Spa Bathroom Sanctuary' :
                                             slide.id === 'hero-additions' ? 'Energy-Smart Home Addition' : '';
                            openConsultationForm(serviceType);
                          }}
                          className="btn-outline border-white text-white hover:bg-white hover:text-gray-900"
                        >
                          {slide.secondaryCtaText}
                        </button>
                      ) : (
                        <Link 
                          to={slide.secondaryCtaLink}
                          className="btn-outline border-white text-white hover:bg-white hover:text-gray-900"
                        >
                          {slide.secondaryCtaText}
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    ),
    overlay: false // We're handling overlay manually
  }));

  return (
    <div className={`w-full ${className}`}>
      <Slider
        slides={slides}
        height={height}
        autoplay={autoplay}
        autoplayDelay={autoplayDelay}
        showNavigation={showNavigation}
        showPagination={showPagination}
        effect="fade"
        className="w-full"
      />
    </div>
  );
};

export default HeroSlider; 