import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { companyInfo } from '../../data/content';
import { navigationItems, serviceAreas, legalPages } from '../../config/navigation';
import logoImage from '../../assets/logo/sunvic.png';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  // Extract navigation items for footer (excluding dropdowns)
  const mainNavigationLinks = navigationItems.map(item => ({
    label: item.label,
    href: item.href
  }));

  // Get service dropdown items for services section
  const servicesNavItem = navigationItems.find(item => item.id === 'services');
  const serviceLinks = servicesNavItem?.dropdownItems?.slice(0, -1) || []; // Exclude "View All"

  // Get innovations dropdown for innovations section
  const innovationsNavItem = navigationItems.find(item => item.id === 'innovations');
  const innovationLinks = innovationsNavItem?.dropdownItems?.slice(0, -1) || []; // Exclude "View All"

  // Get equipment categories for equipment section
  const equipmentNavItem = navigationItems.find(item => item.id === 'equipment-rentals');
  const equipmentLinks = equipmentNavItem?.dropdownItems?.slice(0, -1) || []; // Exclude "View All"

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
                alt={companyInfo.name}
                className="h-10 w-auto"
              />
              <span className="font-display font-bold text-2xl">SunVic</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Engineering excellence in home remodeling. Founded by Rutgers-trained engineer Sunny Rattu, 
              we bring precision, reliability, and uncompromising quality to every project.
            </p>
            <div className="text-sm text-gray-400 mb-6">
              Licensed & Insured • NJ Certified • Tri-State Leader
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a 
                  href={`tel:${companyInfo.contact.phone}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{companyInfo.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <ClockIcon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{companyInfo.contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {mainNavigationLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2025 Innovations */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">2025 Innovations</h3>
            <ul className="space-y-3">
              {innovationLinks.map((innovation) => (
                <li key={innovation.id}>
                  <Link 
                    to={innovation.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {innovation.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment Rentals */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Equipment</h3>
            <ul className="space-y-3">
              {equipmentLinks.map((equipment) => (
                <li key={equipment.id}>
                  <Link 
                    to={equipment.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {equipment.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <h3 className="font-display font-semibold text-lg mb-6 text-center">Tri-State Service Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {serviceAreas.map((area) => (
              <div key={area.state} className="text-center">
                <h4 className="font-semibold text-primary-400 mb-3 text-sm">{area.state}</h4>
                <ul className="space-y-1">
                  {area.cities.map((city) => (
                    <li key={city} className="text-gray-400 text-xs">
                      {city}
                    </li>
                  ))}
                </ul>
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
              © {currentYear} SunVic Home Remodeling. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
              {legalPages.map((page) => (
                <Link 
                  key={page.href} 
                  to={page.href} 
                  className="hover:text-primary-400 transition-colors"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 