import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HeartIcon,
  SparklesIcon,
  CpuChipIcon,
  HomeIcon,
  TrophyIcon,
  ChartBarIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

import { enhancedServices, marketInsights } from '../data/enhancedServices';

interface EnhancedServicesPageProps {
  openConsultationForm: (serviceType?: string) => void;
}

const EnhancedServicesPage: React.FC<EnhancedServicesPageProps> = ({ openConsultationForm }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Services', icon: HomeIcon },
    { id: 'wellness', name: 'Health & Wellness', icon: HeartIcon },
    { id: 'technology', name: 'Smart Technology', icon: CpuChipIcon },
    { id: 'sustainability', name: 'Eco-Luxury', icon: SparklesIcon }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? enhancedServices 
    : enhancedServices.filter(service => 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.trends2025.some(trend => trend.toLowerCase().includes(selectedCategory))
      );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative section-container section-padding min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-block bg-blue-600/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                2025 Luxury Innovation Leader
              </div>

              <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                The Future of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Luxury </span>
                Living
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Experience wellness-integrated smart homes with beauty-focused design, 
                health monitoring, and sustainable luxury that competitors can't deliver.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => openConsultationForm()}
                  className="btn-primary inline-flex items-center"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Schedule Wellness Consultation
                </button>
                <Link
                  to="/portfolio"
                  className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 inline-flex items-center justify-center"
                >
                  View Our Innovations
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>

              {/* Key Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                  <div className="text-sm text-gray-400">Energy Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-sm text-gray-400">Wellness Integration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">5</div>
                  <div className="text-sm text-gray-400">Market-First Features</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Competitive Advantage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:justify-self-end"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md">
                <h3 className="text-white font-bold text-xl mb-6 flex items-center">
                  <TrophyIcon className="h-6 w-6 text-yellow-400 mr-3" />
                  Market Leadership
                </h3>
                <div className="space-y-4">
                  {marketInsights.competitorGaps.slice(0, 5).map((gap, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <ChartBarIcon className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm">{gap}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wellness-integrated, technology-enhanced services that set new standards in luxury home renovation.
            </p>
          </motion.div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => window.location.href = `/enhanced-service/${service.id}`}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {service.category}
                  </div>

                  {/* Price Range */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-80">Starting at</div>
                    <div className="text-lg font-bold">{service.priceRange.split('-')[0]}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.trends2025.slice(0, 3).map((trend, i) => (
                        <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                          {trend}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Competitive Advantage */}
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-3 mb-4">
                    <p className="text-sm text-amber-800 font-medium">
                      🏆 {service.competitorAdvantage}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    <Link
                      to={`/enhanced-service/${service.id}`}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Explore Features
                    </Link>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openConsultationForm(service.title);
                      }}
                      className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <PhoneIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trends 2025 Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leading 2025 Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While competitors follow trends, we set them. Discover how SunVic is pioneering 
              the future of luxury home design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketInsights.trends2025.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <SparklesIcon className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{trend}</h3>
                {/* <p className="text-sm text-gray-600">
                   {trend.toLowerCase()} with engineering excellence and proven results.
                </p> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the Future of Luxury Living?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join Manhattan's most discerning homeowners who choose SunVic for wellness-integrated, 
              technology-enhanced spaces that competitors simply can't deliver.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openConsultationForm()}
                className="btn-primary inline-flex items-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Schedule Wellness Consultation
              </button>
              <Link to="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                View Our Innovations
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedServicesPage; 
