import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  PhoneIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  priceRange: string;
  timeline: string;
  category: string;
  competitorAdvantage: string;
  keyFeatures: string[];
  onConsultationClick: () => void;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  description,
  image,
  priceRange,
  timeline,
  category,
  competitorAdvantage,
  keyFeatures,
  onConsultationClick
}) => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
      </div>

      {/* Content */}
      <div className="relative section-container section-padding min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-blue-400 mb-6">
              <Link to="/services" className="hover:text-blue-300 transition-colors flex items-center">
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
            </div>

            {/* Category Badge */}
            <div className="inline-block bg-blue-600/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {category}
            </div>

            {/* Title */}
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-blue-300 font-medium mb-6">
              {subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Key Stats */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <CurrencyDollarIcon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Investment Range</div>
                  <div className="text-lg font-semibold text-white">{priceRange}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Timeline</div>
                  <div className="text-lg font-semibold text-white">{timeline}</div>
                </div>
              </div>
            </div>

            {/* Competitive Advantage */}
            <div className="bg-amber-500/10 border border-amber-400/20 rounded-lg p-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-amber-300 font-semibold text-sm uppercase tracking-wide mb-1">
                    SunVic Advantage
                  </div>
                  <p className="text-white">{competitorAdvantage}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onConsultationClick}
                className="btn-primary inline-flex items-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Schedule Consultation
              </button>
              <Link
                to="/portfolio"
                className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Key Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:justify-self-end"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md">
              <h3 className="text-white font-bold text-xl mb-6">What's Included</h3>
              <div className="space-y-4">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero; 
