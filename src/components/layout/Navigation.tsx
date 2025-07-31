import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { companyInfo } from '../../data/content';
import logoImage from '../../assets/logo/sunvic.png';
import { navigationItems } from '../../config/navigation';
import type { NavigationItem, NavigationDropdownItem } from '../../config/navigation';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const isActivePath = (href: string, dropdownItems?: NavigationDropdownItem[]) => {
    if (location.pathname === href) return true;
    
    // Check if any dropdown item is active
    if (dropdownItems) {
      return dropdownItems.some(item => 
        location.pathname === item.href || 
        location.pathname.startsWith(item.href.split('?')[0])
      );
    }
    
    return false;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeDropdowns}>
              <img 
                src={logoImage} 
                alt={companyInfo.name}
                className="h-12 w-auto mr-3"
              />
              <span className="text-2xl font-bold text-gray-900">
                {companyInfo.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item: NavigationItem) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.id)}
                      className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                        isActivePath(item.href, item.dropdownItems)
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon 
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.id && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        <div className="grid gap-1 p-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.id}
                              to={dropdownItem.href}
                              onClick={closeDropdowns}
                              className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                            >
                              <span className="text-2xl mr-3 mt-1">{dropdownItem.icon}</span>
                              <div className="flex-1">
                                <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {dropdownItem.label}
                                </div>
                                {dropdownItem.description && (
                                  <div className="text-sm text-gray-500 mt-1">
                                    {dropdownItem.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={closeDropdowns}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
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
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item: NavigationItem) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(`mobile-${item.id}`)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-colors ${
                        isActivePath(item.href, item.dropdownItems)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon 
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === `mobile-${item.id}` ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {activeDropdown === `mobile-${item.id}` && (
                      <div className="pl-6 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            to={dropdownItem.href}
                            onClick={() => {
                              setIsOpen(false);
                              closeDropdowns();
                            }}
                            className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          >
                            <span className="text-lg mr-2">{dropdownItem.icon}</span>
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdowns when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeDropdowns}
        />
      )}
    </nav>
  );
};

export default Navigation; 