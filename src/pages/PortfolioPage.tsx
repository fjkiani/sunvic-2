import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { enhancedPortfolioProjects, portfolioCategories } from '../data/portfolioProjects';

interface PortfolioPageProps {
  openConsultationForm?: (serviceType?: string) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ openConsultationForm }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Use the actual portfolio categories from the data

  const filteredProjects = selectedCategory === 'all'
    ? enhancedPortfolioProjects
    : enhancedPortfolioProjects.filter(project => {
        switch (selectedCategory) {
          case 'kitchen':
            return project.category === 'Kitchen Innovation';
          case 'bathroom':
            return project.category === 'Bathroom Innovation';
          case 'addition':
            return project.category === 'Sustainable Expansion';
          case 'full-home':
            return project.category === 'Full Home Remodeling';
          default:
            return true;
        }
      });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-transparent"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/full-home-remodel/1.jpg" 
            alt="Portfolio projects"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative text-center text-gray-900 section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary-100 border border-primary-300 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              2025 Innovations Portfolio
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Innovation Showcase
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Cutting-Edge Construction Solutions - Where Engineering Meets Tomorrow's Lifestyle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 section-container bg-white">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 hover:border-primary-300'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 section-container bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer"
              onClick={() => window.location.href = `/project/${project.id}`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-primary-600">
                    {project.category}
                  </span>
                </div>

                {/* 2025 Innovation Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    2025 Innovation
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.overview}
                </p>

                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <ClockIcon className="h-4 w-4 mr-2 text-primary-500" />
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <CalendarIcon className="h-4 w-4 mr-2 text-primary-500" />
                    <span>{project.value}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="text-xs bg-primary-100 text-primary-700 border border-primary-200 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Results */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                  <p className="text-sm text-amber-800 font-medium">
                    🏆 {project.results}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                  <Link
                    to={`/project/${project.id}`}
                    className="flex-1 bg-primary-600 text-white text-center py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    View Project
                  </Link>
                  {openConsultationForm && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openConsultationForm(project.title);
                      }}
                      className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors border border-gray-200"
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
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-gray-900">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {enhancedPortfolioProjects.length}
              </div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Future-Ready</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">5★</div>
              <div className="text-gray-600">Innovation Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Smart Integration</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-container text-center bg-white">
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
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage; 