import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ClockIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { enhancedServices } from '../data/enhancedServices';

interface ServiceDetailsListingPageProps {
  openConsultationForm?: (serviceType?: string) => void;
}

const ServiceDetailsListingPage: React.FC<ServiceDetailsListingPageProps> = ({ openConsultationForm }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? enhancedServices 
    : enhancedServices.filter(service => {
        switch (selectedCategory) {
          case 'engineering':
            return service.category === 'Engineering & Planning';
          case 'kitchen':
            return service.category === 'Kitchen Innovation';
          case 'bathroom':
            return service.category === 'Bathroom Innovation';
          case 'outdoor':
            return service.category === 'Outdoor Innovation';
          case 'expansion':
            return service.category === 'Space Expansion' || service.category === 'Sustainable Expansion';
          case 'technology':
            return service.category === 'Smart Home Technology';
          case 'accessibility':
            return service.category === 'Accessibility & Wellness';
          case 'demolition':
            return service.category === 'Demolition & Reconstruction';
          default:
            return true;
        }
      });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/full-home-remodel/1.jpg"
            alt="Luxury home renovation services"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
        </div>
        
        <div className="relative section-container">
          <motion.div
            className="max-w-4xl"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-blue-400 font-semibold mb-4 tracking-wide uppercase">
              Luxury Home Transformation
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-7xl text-white mb-6">
              Service Details
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Explore our comprehensive service offerings with detailed information, pricing, and process timelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", name: "All Services", count: enhancedServices.length },
              { id: "engineering", name: "Engineering & Planning", count: enhancedServices.filter(s => s.category === 'Engineering & Planning').length },
              { id: "kitchen", name: "Kitchen Innovation", count: enhancedServices.filter(s => s.category === 'Kitchen Innovation').length },
              { id: "bathroom", name: "Bathroom Innovation", count: enhancedServices.filter(s => s.category === 'Bathroom Innovation').length },
              { id: "outdoor", name: "Outdoor Innovation", count: enhancedServices.filter(s => s.category === 'Outdoor Innovation').length },
              { id: "expansion", name: "Space Expansion", count: enhancedServices.filter(s => s.category === 'Space Expansion' || s.category === 'Sustainable Expansion').length },
              { id: "technology", name: "Smart Home Technology", count: enhancedServices.filter(s => s.category === 'Smart Home Technology').length },
              { id: "accessibility", name: "Accessibility & Wellness", count: enhancedServices.filter(s => s.category === 'Accessibility & Wellness').length },
              { id: "demolition", name: "Demolition & Reconstruction", count: enhancedServices.filter(s => s.category === 'Demolition & Reconstruction').length }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                onClick={() => window.location.href = `/enhanced-service/${service.id}`}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
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

                  {/* Service Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                      <ClockIcon className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{service.timeline}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <CurrencyDollarIcon className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{service.priceRange}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-700 border border-blue-200 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Competitive Advantage */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-amber-800 font-medium">
                      🏆 {service.competitorAdvantage}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    <Link
                      to={`/enhanced-service/${service.id}`}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      View Details
                    </Link>
                    {openConsultationForm && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openConsultationForm(service.title);
                        }}
                        className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors border border-gray-200"
                        title="Request Consultation"
                      >
                        <WrenchScrewdriverIcon className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
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
                View Enhanced Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsListingPage;
