import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { mainNavigation, companyData } from '../../data/navigation';
import logoImage from '../../assets/logo/sunvic.png';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    // Add a longer delay to prevent dropdown from closing when moving to dropdown
    setTimeout(() => {
      setActiveDropdown(null);
    }, 500);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const renderDropdown = (items: any[], label: string) => (
    <div 
      className="absolute left-0 mt-3 w-96 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none py-2 z-[60] border border-gray-100 transform transition-all duration-200 ease-in-out"
      onMouseEnter={() => setActiveDropdown(label)}
      onMouseLeave={() => {
        setTimeout(() => {
          setActiveDropdown(null);
        }, 300);
      }}
    >
      <div className="max-h-96 overflow-y-auto">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            <div className="flex items-start">
              {item.icon && <span className="mr-3 text-lg flex-shrink-0 mt-0.5">{item.icon}</span>}
              <div className="flex-1">
                <div className="font-medium text-gray-900">{item.label}</div>
                {item.description && (
                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  const renderMobileDropdown = (items: any[]) => (
    <div className="pl-4 border-l-2 border-orange-200 mt-2 space-y-1 bg-gray-50 rounded-r-lg py-2">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-white rounded-md transition-colors duration-200"
          onClick={handleLinkClick}
        >
          <div className="flex items-start">
            {item.icon && <span className="mr-2 text-base mt-0.5">{item.icon}</span>}
            <div>
              <div className="font-medium">{item.label}</div>
              {item.description && (
                <div className="text-xs text-gray-500 mt-1">{item.description}</div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src={logoImage} 
                alt={companyData.name}
                className="h-12 w-auto mr-3"
              />
              <span className="text-2xl font-bold text-gray-900">
                {companyData.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {mainNavigation.map((item) => (
              <div 
                key={item.href} 
                className="relative group"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                {item.dropdown ? (
                  <>
                    <Link
                      to={item.href}
                      title={`Go to ${item.label} page`}
                      className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:underline ${
                        location.pathname.startsWith(item.href) || activeDropdown === item.label
                          ? 'text-orange-600 bg-orange-50'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </Link>
                    {activeDropdown === item.label && renderDropdown(item.dropdown, item.label)}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    title={`Go to ${item.label} page`}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:underline ${
                      location.pathname === item.href
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600 p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg max-h-screen overflow-y-auto">
            {mainNavigation.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`flex items-center justify-between w-full px-3 py-3 text-base font-medium transition-colors duration-200 rounded-lg ${
                        location.pathname.startsWith(item.href) || activeDropdown === item.label
                          ? 'text-orange-600 bg-orange-50'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && item.dropdown && renderMobileDropdown(item.dropdown)}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-3 py-3 text-base font-medium transition-colors duration-200 rounded-lg ${
                      location.pathname === item.href
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 