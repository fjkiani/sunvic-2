import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  PhoneIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

import { getEquipmentById } from '../data/rentalEquipment';

interface EquipmentDetailsPageProps {
  openConsultationForm: (serviceType?: string) => void;
}

const EquipmentDetailsPage: React.FC<EquipmentDetailsPageProps> = ({ 
  openConsultationForm 
}) => {
  const { equipmentId } = useParams<{ equipmentId: string }>();
  
  const equipment = getEquipmentById(equipmentId!);

  if (!equipment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Equipment Not Found</h1>
          <p className="text-gray-600 mb-6">The requested equipment could not be found.</p>
          <Link to="/rentals" className="btn-primary">
            View All Equipment
          </Link>
        </div>
      </div>
    );
  }

  const availabilityColors = {
    available: 'bg-green-600',
    limited: 'bg-yellow-600',
    maintenance: 'bg-red-600'
  };

  const availabilityText = {
    available: 'Available Now',
    limited: 'Limited Availability',
    maintenance: 'Under Maintenance'
  };

  return (
    <div className="w-full pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={equipment.image}
            alt={equipment.name}
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
                <Link to="/rentals" className="hover:text-blue-300 transition-colors flex items-center">
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Back to Equipment
                </Link>
              </div>

              {/* Category Badge */}
              <div className="inline-block bg-blue-600/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 capitalize">
                {equipment.category.replace('-', ' ')}
              </div>

              {/* Availability Badge */}
              <div className={`inline-block ${availabilityColors[equipment.availability]} text-white px-4 py-2 rounded-full text-sm font-medium mb-6 ml-3`}>
                {availabilityText[equipment.availability]}
              </div>

              {/* Equipment Name */}
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {equipment.name}
              </h1>

              {/* Manufacturer & Model */}
              <p className="text-xl lg:text-2xl text-blue-300 font-medium mb-6">
                {equipment.manufacturer} - {equipment.model}
              </p>

              {/* Technology */}
              <div className="bg-purple-600/20 border border-purple-400/30 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-purple-400 flex-shrink-0" />
                  <div>
                    <div className="text-purple-300 font-semibold text-sm uppercase tracking-wide mb-1">
                      Technology
                    </div>
                    <p className="text-white">{equipment.technology}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {equipment.detailedDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openConsultationForm(`Equipment Rental: ${equipment.name}`)}
                  disabled={equipment.availability !== 'available'}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                    equipment.availability === 'available'
                      ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                      : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  {equipment.availability === 'available' ? 'Rent This Equipment' : 'Currently Unavailable'}
                </button>
                <Link
                  to="/rentals"
                  className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 inline-flex items-center justify-center"
                >
                  Browse More Equipment
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Pricing & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:justify-self-end"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md">
                <h3 className="text-white font-bold text-xl mb-6">Rental Pricing</h3>
                
                {/* Pricing Options */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <div>
                      <div className="text-white font-semibold">Daily Rate</div>
                      <div className="text-gray-300 text-sm">Per day</div>
                    </div>
                    <div className="text-2xl font-bold text-white">${equipment.dailyRate}</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-blue-600/20 rounded-lg border border-blue-400/30">
                    <div>
                      <div className="text-white font-semibold">Weekly Rate</div>
                      <div className="text-blue-300 text-sm">Best value</div>
                    </div>
                    <div className="text-2xl font-bold text-white">${equipment.weeklyRate}</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-600/20 rounded-lg border border-green-400/30">
                    <div>
                      <div className="text-white font-semibold">Monthly Rate</div>
                      <div className="text-green-300 text-sm">Maximum savings</div>
                    </div>
                    <div className="text-2xl font-bold text-white">${equipment.monthlyRate}</div>
                  </div>
                </div>

                {/* Services Included */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <TruckIcon className="h-5 w-5 text-green-400" />
                    <span className="text-gray-200">
                      {equipment.deliveryIncluded ? 'Delivery Included' : 'Pickup Required'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ClockIcon className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-200">
                      {equipment.operatorRequired ? 'Training Available' : 'Ready to Use'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-200">24/7 Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features & Specifications */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Features & Specifications</h2>
              
              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="space-y-3">
                  {equipment.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-3">
                    {Object.entries(equipment.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="text-gray-600 font-medium">{key}:</span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Applications & Safety */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications & Safety</h2>
              
              {/* Applications */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal Applications</h3>
                <div className="grid grid-cols-1 gap-3">
                  {equipment.applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2" />
                  Safety Features
                </h3>
                <div className="space-y-3">
                  {equipment.safetyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Tags */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Equipment Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {equipment.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operator Requirements */}
      {equipment.operatorRequired && (
        <section className="section-padding bg-yellow-50">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <InformationCircleIcon className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Operator Training Required
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                This equipment requires specialized training for safe operation. SunVic provides 
                comprehensive training sessions with our certified operators.
              </p>
              <button
                onClick={() => openConsultationForm(`Training for ${equipment.name}`)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Training Session
              </button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Ready to Rent This Equipment?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get professional-grade equipment with delivery, setup, and expert support. 
              Same-day delivery available for urgent projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => openConsultationForm(`Equipment Rental: ${equipment.name}`)}
                disabled={equipment.availability !== 'available'}
                className={`font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  equipment.availability === 'available'
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
              >
                {equipment.availability === 'available' ? 'Book This Equipment' : 'Currently Unavailable'}
              </button>
              <a
                href="tel:+1-555-SUNVIC-1"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call for Immediate Rental
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">${equipment.dailyRate}/day</div>
                <div className="text-sm opacity-80">Starting Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{equipment.deliveryIncluded ? 'Free' : 'Pickup'}</div>
                <div className="text-sm opacity-80">Delivery Option</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentDetailsPage; 