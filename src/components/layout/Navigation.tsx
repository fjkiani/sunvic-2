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

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const renderDropdown = (items: any[]) => (
    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none py-1 z-50">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
          onClick={handleLinkClick}
        >
          <div className="flex items-center">
            {item.icon && <span className="mr-2">{item.icon}</span>}
            <div>
              <div className="font-medium">{item.label}</div>
              {item.description && <div className="text-xs text-gray-500">{item.description}</div>}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  const renderMobileDropdown = (items: any[]) => (
    <div className="pl-4 border-l border-gray-200 mt-2 space-y-1">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
          onClick={handleLinkClick}
        >
          <div className="flex items-center">
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
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
          <div className="hidden md:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.href} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors focus:outline-none ${
                      location.pathname.startsWith(item.href) || activeDropdown === item.label
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                    <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                {item.dropdown && activeDropdown === item.label && renderDropdown(item.dropdown)}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {mainNavigation.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`flex items-center justify-between w-full px-3 py-2 text-base font-medium transition-colors rounded-md ${
                        location.pathname.startsWith(item.href) || activeDropdown === item.label
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon className={`h-5 w-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && item.dropdown && renderMobileDropdown(item.dropdown)}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors rounded-md ${
                      location.pathname === item.href
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
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