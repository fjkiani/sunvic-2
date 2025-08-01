import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { RentalEquipment } from '../../data/rentalEquipment';

interface EquipmentCardProps {
  equipment: RentalEquipment;
  openConsultationForm?: (serviceType: string) => void;
}

// Create a placeholder image generator based on equipment category
const getPlaceholderImage = (category: string) => {
  const placeholders: { [key: string]: string } = {
    'air-compressors': 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'excavators': 'https://images.unsplash.com/photo-1581093458791-9d42c2eb3e17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'generators': 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'skid-steers': 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'backhoes': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'dozers': 'https://images.unsplash.com/photo-1581094271652-1775b92b3558?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'rollers': 'https://images.unsplash.com/photo-1581094271783-62986ff96842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'light-towers': 'https://images.unsplash.com/photo-1621905501751-4b85e5e65b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'pressure-washers': 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'telehandlers': 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'wheel-loaders': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'arrow-boards': 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  };
  
  return placeholders[category] || 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
};

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipment, openConsultationForm }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const getImageSrc = () => {
    if (imageError || equipment.image.includes('404') || equipment.image.startsWith('/images/rentals/')) {
      return getPlaceholderImage(equipment.category);
    }
    return equipment.image;
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'limited': return 'bg-yellow-100 text-yellow-800';
      case 'maintenance': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available': return 'Available';
      case 'limited': return 'Limited Stock';
      case 'maintenance': return 'In Maintenance';
      default: return 'Check Availability';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={getImageSrc()}
          alt={equipment.name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        
        {/* Availability Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getAvailabilityColor(equipment.availability)}`}>
            {getAvailabilityText(equipment.availability)}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {equipment.subcategory}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {equipment.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">{equipment.manufacturer}</span> • {equipment.model}
          </p>
          <p className="text-gray-700 line-clamp-3">
            {equipment.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {equipment.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Daily</div>
              <div className="text-lg font-bold text-gray-900">{formatPrice(equipment.dailyRate)}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Weekly</div>
              <div className="text-lg font-bold text-orange-600">{formatPrice(equipment.weeklyRate)}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Monthly</div>
              <div className="text-lg font-bold text-gray-900">{formatPrice(equipment.monthlyRate)}</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to={`/rental/${equipment.id}`}
            className="flex-1 bg-orange-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
          >
            View Details
          </Link>
          <button
            onClick={() => openConsultationForm && openConsultationForm(`${equipment.name} Rental`)}
            className="flex-1 border-2 border-orange-600 text-orange-600 text-center py-3 px-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
          >
            Get Quote
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>{equipment.operatorRequired ? 'Operator Required' : 'Self-Operated'}</span>
            <span>{equipment.deliveryIncluded ? 'Delivery Included' : 'Pickup Available'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard; 