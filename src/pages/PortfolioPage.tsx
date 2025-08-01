import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { enhancedServices } from '../data/enhancedServices';

interface PortfolioPageProps {
  openConsultationForm?: (serviceType?: string) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ openConsultationForm }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Create portfolio categories from enhanced services
  const portfolioCategories = [
    { id: 'all', name: 'All Projects', count: enhancedServices.length },
    { id: 'construction', name: 'Construction', count: enhancedServices.filter(s => s.category.includes('Construction')).length },
    { id: 'remodeling', name: 'Remodeling', count: enhancedServices.filter(s => s.category.includes('Transformation') || s.category.includes('Innovation')).length },
    { id: 'smart-home', name: 'Smart Home', count: enhancedServices.filter(s => s.category.includes('Technology')).length },
    { id: 'outdoor', name: 'Outdoor Living', count: enhancedServices.filter(s => s.category.includes('Outdoor')).length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? enhancedServices
    : enhancedServices.filter(service => {
        switch (selectedCategory) {
          case 'construction':
            return service.category.includes('Construction');
          case 'remodeling':
            return service.category.includes('Transformation') || service.category.includes('Innovation');
          case 'smart-home':
            return service.category.includes('Technology');
          case 'outdoor':
            return service.category.includes('Outdoor');
          default:
            return true;
        }
      });

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80" 
            alt="Portfolio projects"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative text-center text-white section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-purple-600/20 border border-purple-400/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              2025 Innovations Portfolio
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Innovation Showcase
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Cutting-Edge Construction Solutions - Where Engineering Meets Tomorrow's Lifestyle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 section-container">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                    service.categoryColor || 'bg-blue-600'
                  }`}>
                    {service.category}
                  </span>
                </div>

                {/* 2025 Innovation Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                    2025 Innovation
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>

                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300 text-sm">
                    <ClockIcon className="h-4 w-4 mr-2 text-primary-400" />
                    <span>{service.timeline}</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <CalendarIcon className="h-4 w-4 mr-2 text-primary-400" />
                    <span>{service.priceRange}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.trends2025.slice(0, 2).map((trend, i) => (
                      <span key={i} className="text-xs bg-primary-600/20 text-primary-300 border border-primary-600/30 px-2 py-1 rounded">
                        {trend}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Competitive Advantage */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-4">
                  <p className="text-sm text-amber-200 font-medium">
                    🏆 {service.competitorAdvantage}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    to={`/enhanced-service/${service.id}`}
                    className="flex-1 bg-primary-600 text-white text-center py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    View Details
                  </Link>
                  {openConsultationForm && (
                    <button
                      onClick={() => openConsultationForm(service.title)}
                      className="bg-white/10 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                      title="Request Consultation"
                    >
                      <PhoneIcon className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">
                {enhancedServices.length}
              </div>
              <div className="text-gray-300">2025 Innovations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">100%</div>
              <div className="text-gray-300">Future-Ready</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">5★</div>
              <div className="text-gray-300">Innovation Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
              <div className="text-gray-300">Smart Integration</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can bring your vision to life with our engineering expertise and innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Consultation
            </Link>
            <Link 
              to="/enhanced-services"
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage; 