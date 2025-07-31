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
    <footer className={`bg-secondary-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          
          {/* Company Info - Spans 2 columns */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt={companyData.name}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">
                {companyData.name}
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyData.tagline}. Founded by Rutgers-trained engineer Sunny Raftu, 
              we bring precision, reliability, and uncompromising 
              quality to every project.
            </p>
            
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Licensed & Insured • NJ Certified • Tri-State Leader</p>
            </div>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="h-4 w-4 mr-3 text-primary-400" />
                <a href={`tel:${companyData.phone}`} className="hover:text-primary-400 transition-colors">
                  {companyData.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="h-4 w-4 mr-3 text-primary-400" />
                <a href={`mailto:${companyData.email}`} className="hover:text-primary-400 transition-colors">
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPinIcon className="h-4 w-4 mr-3 text-primary-400" />
                <span>{companyData.address}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <ClockIcon className="h-4 w-4 mr-3 text-primary-400" />
                <span>{companyData.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2025 Innovations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">2025 Innovations</h3>
            <ul className="space-y-2">
              {footerLinks.innovations.map((innovation) => (
                <li key={innovation.href}>
                  <Link 
                    to={innovation.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {innovation.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment Rentals */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Equipment</h3>
            <ul className="space-y-2">
              {footerLinks.equipment.map((equipment) => (
                <li key={equipment.href}>
                  <Link 
                    to={equipment.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {equipment.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="mt-16 pt-8 border-t border-secondary-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Tri-State Service Areas</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Professional home remodeling and equipment rental services across the DMV region
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {footerLinks.serviceAreas.map((area) => (
              <div key={area.href} className="space-y-2">
                <Link 
                  to={area.href}
                  className="text-primary-400 hover:text-primary-300 transition-colors font-medium text-sm"
                >
                  {area.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Serving the entire DMV region with professional home remodeling and equipment rental services
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} {companyData.name} Home Remodeling. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
              {footerLinks.legal.map((page) => (
                <Link 
                  key={page.href} 
                  to={page.href} 
                  className="hover:text-primary-400 transition-colors"
                >
                  {page.label}
                </Link>
              ))}
              <Link to="/careers" className="hover:text-primary-400 transition-colors">
                Careers
              </Link>
              <Link to="/warranties" className="hover:text-primary-400 transition-colors">
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