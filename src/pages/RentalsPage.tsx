import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  WrenchScrewdriverIcon,
  TruckIcon,
  ShieldCheckIcon,
  PhoneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import EquipmentCard from '../components/rentals/EquipmentCard';
import { 
  rentalCategories, 
  getEquipmentByCategory,
  getFeaturedEquipment,
  equipmentStats
} from '../data/rentalEquipment';

interface RentalsPageProps {
  openConsultationForm: (serviceType: string) => void;
}

const RentalsPage: React.FC<RentalsPageProps> = ({ openConsultationForm }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState<'all' | 'under100' | '100-300' | 'over300'>('all');

  const featuredEquipment = getFeaturedEquipment(3);
  let filteredEquipment = getEquipmentByCategory(selectedCategory);

  // Apply price filter
  if (priceFilter !== 'all') {
    filteredEquipment = filteredEquipment.filter(item => {
      switch (priceFilter) {
        case 'under100':
          return item.dailyRate < 100;
        case '100-300':
          return item.dailyRate >= 100 && item.dailyRate <= 300;
        case 'over300':
          return item.dailyRate > 300;
        default:
          return true;
      }
    });
  }



  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/equipment/excavator-example.jpg"
            alt="Professional equipment fleet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative text-center text-white section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-blue-600/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              $200K+ Professional Fleet
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Equipment Rentals
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Access SunVic's professional-grade equipment fleet. The same tools we use for luxury renovations, now available for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Book Equipment Today
              </button>
              <a
                href="#featured-equipment"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                View Equipment Fleet
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment Stats */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{equipmentStats.totalEquipment}+</div>
              <div className="text-gray-600">Professional Tools</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{equipmentStats.categories}</div>
              <div className="text-gray-600">Equipment Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">${equipmentStats.averageDailyRate}</div>
              <div className="text-gray-600">Average Daily Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Rent From SunVic */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Rent from SunVic?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The same professional-grade equipment we use for luxury renovations, 
              maintained to the highest standards and available for your projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <WrenchScrewdriverIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Grade</h3>
              <p className="text-gray-600">
                The same tools used in our $200K+ equipment fleet for luxury home renovations. 
                No compromises on quality or performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TruckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery & Setup</h3>
              <p className="text-gray-600">
                Professional delivery, setup, and pickup service. We handle the logistics 
                so you can focus on your project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="h-16 w-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Training and technical support from our engineering team. 
                Get the most out of every tool with professional guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section id="featured-equipment" className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured Equipment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular professional tools, trusted by contractors and used in luxury renovations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredEquipment.map((equipment, index) => (
              <motion.div
                key={equipment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EquipmentCard 
                  equipment={equipment} 
                  openConsultationForm={openConsultationForm}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories & Filters */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Equipment Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive collection of professional construction and renovation equipment.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {rentalCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Price Filter */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-md">
              <div className="flex space-x-1">
                {[
                  { id: 'all', label: 'All Prices' },
                  { id: 'under100', label: 'Under $100' },
                  { id: '100-300', label: '$100-$300' },
                  { id: 'over300', label: 'Over $300' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setPriceFilter(filter.id as any)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      priceFilter === filter.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEquipment.map((equipment, index) => (
              <motion.div
                key={equipment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <EquipmentCard 
                  equipment={equipment} 
                  openConsultationForm={openConsultationForm}
                />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredEquipment.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No equipment found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or browse all categories.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceFilter('all');
                }}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

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
              Ready to Rent Equipment?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get access to professional-grade tools and equipment with delivery, 
              setup, and expert support included.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3">
                <CheckCircleIcon className="h-8 w-8 text-green-400" />
                <span className="text-lg">Professional Grade Equipment</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircleIcon className="h-8 w-8 text-green-400" />
                <span className="text-lg">Delivery & Setup Included</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircleIcon className="h-8 w-8 text-green-400" />
                <span className="text-lg">Expert Training & Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Equipment Consultation
              </button>
              <a
                href="tel:+1-555-SUNVIC-1"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call for Immediate Rental
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RentalsPage; 