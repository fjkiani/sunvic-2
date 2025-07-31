import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  SparklesIcon,
  Cog6ToothIcon,
  BuildingOfficeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

// Define interface locally to avoid import issues
interface AdvancedService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  category: string;
  competitorAdvantage: string;
  features: string[];
  equipment: string[];
  timeline: string;
  priceRange: string;
  link: string;
}

interface ServiceCardProps {
  service: AdvancedService;
  variant?: 'standard' | 'featured' | 'compact';
  index?: number;
  showCompetitorAdvantage?: boolean;
  showPricing?: boolean;
  showEquipment?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  variant = 'standard',
  showCompetitorAdvantage = false,
  showPricing = false,
  showEquipment = false
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'smart-structural-engineering':
        return Cog6ToothIcon;
      case 'rapid-demolition-reconstruction':
        return WrenchScrewdriverIcon;
      case 'luxury-smart-kitchens':
        return HomeIcon;
      case 'spa-bathroom-sanctuaries':
        return SparklesIcon;
      case 'outdoor-living-ecosystems':
        return BuildingOfficeIcon;
      case 'energy-smart-additions':
      case 'basement-transformation-suites':
        return HomeIcon;
      case 'whole-home-automation':
        return Cog6ToothIcon;
      case 'luxury-aging-in-place':
        return UserGroupIcon;
      default:
        return WrenchScrewdriverIcon;
    }
  };

  const IconComponent = getServiceIcon(service.icon);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Engineering & Planning':
        return 'bg-blue-600';
      case 'Demolition & Reconstruction':
        return 'bg-red-600';
      case 'Kitchen Innovation':
        return 'bg-orange-600';
      case 'Bathroom Innovation':
        return 'bg-cyan-600';
      case 'Outdoor Innovation':
        return 'bg-green-600';
      case 'Sustainable Expansion':
        return 'bg-emerald-600';
      case 'Space Expansion':
        return 'bg-purple-600';
      case 'Smart Home Technology':
        return 'bg-indigo-600';
      case 'Accessibility & Wellness':
        return 'bg-pink-600';
      default:
        return 'bg-blue-600';
    }
  };

  if (variant === 'compact') {
    return (
      <motion.div
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <div className={`${getCategoryColor(service.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
              {service.category}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-blue-300 transition-colors">
              {service.title}
            </h3>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-4 line-clamp-2">
            {service.shortDescription}
          </p>
          
          {showPricing && (
            <div className="flex items-center justify-between mb-4 text-sm">
              <div className="flex items-center text-gray-500">
                <ClockIcon className="w-4 h-4 mr-1" />
                {service.timeline}
              </div>
              <div className="flex items-center text-green-600 font-semibold">
                <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                {service.priceRange}
              </div>
            </div>
          )}

          <Link 
            to={`/service-details/${service.id}`}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group-hover:translate-x-1 transition-transform"
          >
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </motion.div>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.div
        className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
      >
        <div className="relative h-64 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute top-6 left-6">
            <div className={`${getCategoryColor(service.category)} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
              {service.category}
            </div>
          </div>
          <div className="absolute top-6 right-6">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-blue-300 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-200 text-lg">
              {service.shortDescription}
            </p>
          </div>
        </div>
        
        <div className="p-8">
          {showCompetitorAdvantage && (
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
              <p className="text-blue-800 font-medium text-sm">
                <span className="font-semibold">Competitive Advantage:</span> {service.competitorAdvantage}
              </p>
            </div>
          )}

          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-start text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {showEquipment && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Our Equipment:</h4>
                <ul className="space-y-2">
                  {service.equipment.slice(0, 3).map((equipment) => (
                    <li key={equipment} className="flex items-start text-sm">
                      <WrenchScrewdriverIcon className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{equipment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {showPricing && (
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6">
              <div className="flex items-center text-gray-600">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span className="font-medium">Timeline: {service.timeline}</span>
              </div>
              <div className="flex items-center text-green-600 font-bold">
                <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                <span>{service.priceRange}</span>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to={`/service-details/${service.id}`}
              className="btn-primary flex-1 text-center"
            >
              Get Detailed Quote
            </Link>
            <Link 
              to="/portfolio"
              className="btn-outline flex-1 text-center"
            >
              View Examples
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard variant
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className={`${getCategoryColor(service.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
            {service.category}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
            <IconComponent className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-blue-300 transition-colors">
            {service.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">
          {service.shortDescription}
        </p>

        {showCompetitorAdvantage && (
          <div className="bg-blue-50 border-l-4 border-blue-600 p-3 mb-4">
            <p className="text-blue-800 text-sm font-medium">
              {service.competitorAdvantage}
            </p>
          </div>
        )}

        <div className="space-y-2 mb-4">
          {service.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-start text-sm">
              <CheckCircleIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>

        {showPricing && (
          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="flex items-center text-gray-500">
              <ClockIcon className="w-4 h-4 mr-1" />
              {service.timeline}
            </div>
            <div className="flex items-center text-green-600 font-semibold">
              <CurrencyDollarIcon className="w-4 h-4 mr-1" />
              {service.priceRange}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <Link 
            to={`/service-details/${service.id}`}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group-hover:translate-x-1 transition-transform"
          >
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
          <Link
            to="/contact"
            className="text-gray-500 hover:text-gray-700 font-medium text-sm"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 