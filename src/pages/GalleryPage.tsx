// Gallery Page - Showcase of our work and capabilities
// Displays project galleries, service showcases, and visual content

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  PhotoIcon, 
  VideoCameraIcon, 
  SparklesIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { enhancedPortfolioProjects } from '../data/portfolioProjects';
import { enhancedServices } from '../data/enhancedServices';

const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'services' | 'process'>('projects');

  const tabs = [
    { id: 'projects', label: 'Project Gallery', icon: PhotoIcon },
    { id: 'services', label: 'Service Showcase', icon: SparklesIcon },
    { id: 'process', label: 'Our Process', icon: VideoCameraIcon }
  ];

  return (
    <>
      <Helmet>
        <title>Gallery | SunVic Construction</title>
        <meta 
          name="description" 
          content="Explore our portfolio of luxury home remodeling projects, service showcases, and construction process documentation." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Work Gallery
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of luxury home remodeling projects, innovative service showcases, 
                and behind-the-scenes construction process documentation.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {activeTab === 'projects' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Project Portfolio
                </h2>
                <p className="text-lg text-gray-600">
                  Showcasing our completed luxury home remodeling projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {enhancedPortfolioProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-90 rounded-full p-3">
                          <EyeIcon className="h-6 w-6 text-gray-800" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.overview}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{project.location}</span>
                        <span className="font-medium text-primary-600">{project.value}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Service Showcase
                </h2>
                <p className="text-lg text-gray-600">
                  Explore our innovative service offerings and capabilities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {enhancedServices.slice(0, 6).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-90 rounded-full p-3">
                          <SparklesIcon className="h-6 w-6 text-gray-800" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{service.category}</span>
                        <span className="font-medium text-primary-600">{service.priceRange}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'process' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Construction Process
                </h2>
                <p className="text-lg text-gray-600">
                  See how we bring your vision to life through our systematic approach
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Consultation & Planning",
                    description: "Initial assessment and 3D modeling",
                    image: "/images/full-home-remodel/1.jpg"
                  },
                  {
                    step: "02", 
                    title: "Design & Engineering",
                    description: "Structural analysis and detailed planning",
                    image: "/images/full-home-remodel/kitchen/1.png"
                  },
                  {
                    step: "03",
                    title: "Construction & Installation",
                    description: "Precision work with quality materials",
                    image: "/images/full-home-remodel/kitchen/2.png"
                  },
                  {
                    step: "04",
                    title: "Final Walkthrough",
                    description: "Quality control and client satisfaction",
                    image: "/images/bathroom/1.jpeg"
                  }
                ].map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={process.image}
                        alt={process.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {process.step}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Let's discuss how we can transform your space into a luxury sanctuary.
              </p>
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
