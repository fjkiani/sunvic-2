import React from 'react';
import { Link } from 'react-router-dom';
import { mainNavigation, footerLinks, companyData } from '../data/navigation';

const SitemapPage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Navigation */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li><Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
                <li><Link to="/about" className="text-blue-600 hover:text-blue-800">About Us</Link></li>
                <li><Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
                <li><Link to="/portfolio" className="text-blue-600 hover:text-blue-800">Portfolio</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services</h2>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-blue-600 hover:text-blue-800">All Services</Link></li>
                {mainNavigation.find(item => item.label === 'Services')?.dropdown?.map((service) => (
                  <li key={service.href}>
                    <Link to={service.href} className="text-blue-600 hover:text-blue-800 text-sm pl-4">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2025 Innovations */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2025 Innovations</h2>
              <ul className="space-y-2">
                <li><Link to="/enhanced-services" className="text-blue-600 hover:text-blue-800">All Innovations</Link></li>
                {mainNavigation.find(item => item.label === '2025 Innovations')?.dropdown?.map((innovation) => (
                  <li key={innovation.href}>
                    <Link to={innovation.href} className="text-blue-600 hover:text-blue-800 text-sm pl-4">
                      {innovation.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment Rentals */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Equipment Rentals</h2>
              <ul className="space-y-2">
                <li><Link to="/rentals" className="text-blue-600 hover:text-blue-800">All Equipment</Link></li>
                {mainNavigation.find(item => item.label === 'Equipment Rentals')?.dropdown?.map((equipment) => (
                  <li key={equipment.href}>
                    <Link to={equipment.href} className="text-blue-600 hover:text-blue-800 text-sm pl-4">
                      {equipment.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Areas</h2>
              <ul className="space-y-2">
                {footerLinks.serviceAreas.map((area) => (
                  <li key={area.href}>
                    <Link to={area.href} className="text-blue-600 hover:text-blue-800 text-sm">
                      {area.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal & Company</h2>
              <ul className="space-y-2">
                {footerLinks.legal.map((page) => (
                  <li key={page.href}>
                    <Link to={page.href} className="text-blue-600 hover:text-blue-800">
                      {page.label}
                    </Link>
                  </li>
                ))}
                <li><Link to="/careers" className="text-blue-600 hover:text-blue-800">Careers</Link></li>
                <li><Link to="/warranties" className="text-blue-600 hover:text-blue-800">Warranties</Link></li>
              </ul>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>{companyData.name} Home Remodeling</strong></p>
                  <p>{companyData.tagline}</p>
                  <p>Phone: {companyData.phone}</p>
                  <p>Email: {companyData.email}</p>
                  <p>Location: {companyData.address}</p>
                  <p>Service Area: {companyData.serviceArea}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <p><Link to="/contact" className="text-blue-600 hover:text-blue-800">Get Free Consultation</Link></p>
                  <p><Link to="/portfolio" className="text-blue-600 hover:text-blue-800">View Our Work</Link></p>
                  <p><Link to="/rentals" className="text-blue-600 hover:text-blue-800">Rent Equipment</Link></p>
                  <p><Link to="/enhanced-services" className="text-blue-600 hover:text-blue-800">2025 Innovations</Link></p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-center text-gray-500">
              <p>&copy; {currentYear} {companyData.name} Home Remodeling. All rights reserved.</p>
              <p className="text-sm mt-1">Engineering excellence in home remodeling since our founding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage; 