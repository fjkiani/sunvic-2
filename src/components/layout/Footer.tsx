import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { mainNavigation, footerLinks, companyData } from '../../data/navigation';
import logoImage from '../../assets/logo/sunvic.png';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  // Extract navigation items for footer (excluding dropdowns)
  const quickLinks = mainNavigation.filter(item => !item.dropdown);

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Company Info - Takes up more space for better prominence */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt={companyData.name}
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-white">
                {companyData.name}
              </span>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {companyData.tagline}. Founded by Rutgers-trained engineer Sunny Rattu, 
              we bring precision, reliability, and uncompromising quality to every project.
            </p>
            
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <p className="text-orange-400 font-semibold mb-4 text-sm uppercase tracking-wide">
                Licensed & Insured • NJ Certified • Tri-State Leader
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <PhoneIcon className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
                  <a href={`tel:${companyData.phone}`} className="hover:text-orange-400 transition-colors text-lg font-medium">
                    {companyData.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <EnvelopeIcon className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
                  <a href={`mailto:${companyData.email}`} className="hover:text-orange-400 transition-colors">
                    {companyData.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPinIcon className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
                  <span>{companyData.address}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <ClockIcon className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
                  <span>{companyData.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links - Organized in a cleaner grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white border-b border-orange-400 pb-2">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        to={link.href} 
                        className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                      >
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white border-b border-orange-400 pb-2">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {footerLinks.services.slice(0, 6).map((service) => (
                    <li key={service.href}>
                      <Link 
                        to={service.href} 
                        className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                      >
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Innovations & Equipment */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white border-b border-orange-400 pb-2">
                  Specialties
                </h3>
                <ul className="space-y-3">
                  {footerLinks.innovations.slice(0, 3).map((innovation) => (
                    <li key={innovation.href}>
                      <Link 
                        to={innovation.href} 
                        className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                      >
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {innovation.label}
                      </Link>
                    </li>
                  ))}
                  {footerLinks.equipment.slice(0, 3).map((equipment) => (
                    <li key={equipment.href}>
                      <Link 
                        to={equipment.href} 
                        className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                      >
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {equipment.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas Section - Redesigned for better readability */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">Service Areas</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Professional home remodeling and equipment rental services across New Jersey and the tri-state area
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {footerLinks.serviceAreas.map((area) => (
                <div key={area.href} className="text-center">
                  <Link 
                    to={area.href}
                    className="block p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors group"
                  >
                    <span className="text-orange-400 group-hover:text-orange-300 font-semibold">
                      {area.label}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400">
                <span className="text-orange-400 font-semibold">Serving the entire tri-state region</span> with professional construction and renovation services
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Cleaner design */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-center lg:text-left">
              <p className="text-lg">
                © {currentYear} <span className="text-white font-semibold">{companyData.name}</span> Home Remodeling. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-8 text-gray-400">
              {footerLinks.legal.map((page) => (
                <Link 
                  key={page.href} 
                  to={page.href} 
                  className="hover:text-orange-400 transition-colors text-sm uppercase tracking-wide font-medium"
                >
                  {page.label}
                </Link>
              ))}
              <Link to="/careers" className="hover:text-orange-400 transition-colors text-sm uppercase tracking-wide font-medium">
                Careers
              </Link>
              <Link to="/warranties" className="hover:text-orange-400 transition-colors text-sm uppercase tracking-wide font-medium">
                Warranties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 