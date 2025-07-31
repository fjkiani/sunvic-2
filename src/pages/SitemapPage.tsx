import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navigationItems, serviceAreas, legalPages } from '../config/navigation';
import { enhancedServices } from '../data/enhancedServices';
import { enhancedPortfolioProjects } from '../data/portfolioProjects';
import { rentalCategories } from '../data/rentalEquipment';

const SitemapPage: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="section-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Sitemap</h1>
            <p className="text-gray-600 mb-8">
              Complete overview of SunVic Home Remodeling website structure. Last updated: {lastUpdated}
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Main Navigation */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Main Navigation
                </h2>
                <div className="space-y-6">
                  {navigationItems.map((item) => (
                    <div key={item.id}>
                      <Link 
                        to={item.href}
                        className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {item.label}
                      </Link>
                      {item.dropdownItems && (
                        <ul className="mt-3 ml-4 space-y-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <li key={dropdownItem.id}>
                              <Link
                                to={dropdownItem.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
                              >
                                <span className="mr-2">{dropdownItem.icon}</span>
                                {dropdownItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Enhanced Services */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  2025 Innovation Services
                </h2>
                <div className="space-y-3">
                  <Link 
                    to="/enhanced-services"
                    className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors block"
                  >
                    All Innovations Overview
                  </Link>
                  <ul className="ml-4 space-y-2">
                    {enhancedServices.map((service) => (
                      <li key={service.id}>
                        <Link
                          to={`/enhanced-service/${service.id}`}
                          className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Portfolio Projects */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Portfolio Projects
                </h2>
                <div className="space-y-3">
                  <Link 
                    to="/portfolio"
                    className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors block"
                  >
                    Portfolio Overview
                  </Link>
                  <ul className="ml-4 space-y-2">
                    {enhancedPortfolioProjects.map((project) => (
                      <li key={project.id}>
                        <Link
                          to={`/project/${project.id}`}
                          className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          {project.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Equipment Rentals */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Equipment Rentals
                </h2>
                <div className="space-y-3">
                  <Link 
                    to="/rentals"
                    className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors block"
                  >
                    Equipment Fleet Overview
                  </Link>
                  <ul className="ml-4 space-y-2">
                    {rentalCategories.filter(cat => cat.id !== 'all').map((category) => (
                      <li key={category.id}>
                        <Link
                          to={`/rentals?category=${category.id}`}
                          className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
                        >
                          <span className="mr-2">{category.icon}</span>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Service Areas */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Service Areas
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600">SunVic serves the tri-state region:</p>
                  {serviceAreas.map((area) => (
                    <div key={area.state}>
                      <h3 className="font-medium text-gray-900 mb-2">{area.state}</h3>
                      <ul className="ml-4 grid grid-cols-2 gap-1 text-sm text-gray-600">
                        {area.cities.map((city) => (
                          <li key={city}>{city}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Legal & Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Legal & Information
                </h2>
                <div className="space-y-3">
                  {legalPages.map((page) => (
                    <Link
                      key={page.href}
                      to={page.href}
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              </section>

            </div>

            {/* Quick Stats */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Website Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{navigationItems.length}</div>
                  <div className="text-sm text-gray-600">Main Pages</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{enhancedServices.length}</div>
                  <div className="text-sm text-gray-600">Innovation Services</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{enhancedPortfolioProjects.length}</div>
                  <div className="text-sm text-gray-600">Portfolio Projects</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{rentalCategories.length - 1}</div>
                  <div className="text-sm text-gray-600">Equipment Categories</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SitemapPage; 