import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  CheckCircleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import type { RentalEquipment } from '../../data/rentalEquipment';

interface EquipmentCardProps {
  equipment: RentalEquipment;
  onRentClick: (equipment: RentalEquipment) => void;
  variant?: 'default' | 'featured' | 'compact';
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ 
  equipment, 
  onRentClick, 
  variant = 'default' 
}) => {
  const isAvailable = equipment.availability === 'available';
  const cardClasses = {
    default: 'group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden',
    featured: 'group bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-200',
    compact: 'group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden'
  };

  const availabilityColors = {
    available: 'bg-green-600',
    limited: 'bg-yellow-600',
    maintenance: 'bg-red-600'
  };

  const availabilityText = {
    available: 'Available',
    limited: 'Limited',
    maintenance: 'Maintenance'
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cardClasses[variant]}
    >
      {/* Equipment Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={equipment.image}
          alt={equipment.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
          {equipment.category.replace('-', ' ')}
        </div>

        {/* Availability Badge */}
        <div className={`absolute top-4 right-4 ${availabilityColors[equipment.availability]} text-white px-3 py-1 rounded-full text-xs font-medium flex items-center`}>
          <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
          {availabilityText[equipment.availability]}
        </div>

        {/* Featured Badge */}
        {variant === 'featured' && (
          <div className="absolute top-16 left-4 bg-yellow-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
            ⭐ Featured
          </div>
        )}

        {/* Daily Rate */}
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-sm opacity-80">Daily Rate</div>
          <div className="text-xl font-bold">${equipment.dailyRate}</div>
        </div>

        {/* Operator Required */}
        {equipment.operatorRequired && (
          <div className="absolute bottom-4 right-4 bg-orange-600/90 text-white px-2 py-1 rounded text-xs">
            Operator Required
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
            {equipment.name}
          </h3>
        </div>

        {/* Manufacturer & Model */}
        <div className="flex items-center text-gray-600 mb-3">
          <WrenchScrewdriverIcon className="h-4 w-4 mr-2" />
          <span className="text-sm">{equipment.manufacturer} - {equipment.model}</span>
        </div>

        {/* Technology */}
        <div className="bg-purple-50 border-l-4 border-purple-400 p-3 mb-4">
          <p className="text-sm text-purple-800 font-medium">
            🔧 {equipment.technology}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {equipment.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="space-y-1">
            {equipment.features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Options */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div className="bg-gray-50 rounded p-2">
            <div className="text-xs text-gray-500">Daily</div>
            <div className="text-sm font-bold text-gray-900">${equipment.dailyRate}</div>
          </div>
          <div className="bg-blue-50 rounded p-2">
            <div className="text-xs text-blue-600">Weekly</div>
            <div className="text-sm font-bold text-blue-900">${equipment.weeklyRate}</div>
          </div>
          <div className="bg-green-50 rounded p-2">
            <div className="text-xs text-green-600">Monthly</div>
            <div className="text-sm font-bold text-green-900">${equipment.monthlyRate}</div>
          </div>
        </div>

        {/* Services */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center">
            <TruckIcon className="w-4 h-4 mr-1" />
            <span>{equipment.deliveryIncluded ? 'Delivery Included' : 'Pickup Only'}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-4 h-4 mr-1" />
            <span>{equipment.operatorRequired ? 'Training Available' : 'Ready to Use'}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {equipment.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onRentClick(equipment)}
            disabled={!isAvailable}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              isAvailable
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-400 text-gray-600 cursor-not-allowed'
            }`}
          >
            {isAvailable ? 'Rent Now' : 'Unavailable'}
          </button>
          <Link
            to={`/rental/${equipment.id}`}
            className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
            title="View details"
          >
            <InformationCircleIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Additional Info for Featured */}
        {variant === 'featured' && (
          <div className="mt-4 p-3 bg-blue-100 rounded-lg">
            <p className="text-sm text-blue-800 font-medium">
              ⚡ Most Popular - Book 3+ days for additional discounts
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EquipmentCard; 