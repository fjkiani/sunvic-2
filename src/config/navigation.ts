// Centralized Navigation Configuration
// This ensures navbar and footer stay in sync automatically

export interface NavigationDropdownItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: NavigationDropdownItem[];
}

// Core service categories from our advanced renovation services
export const servicesDropdown: NavigationDropdownItem[] = [
  {
    id: 'engineering-planning',
    label: 'Engineering & Planning',
    href: '/service-details/smart-structural-engineering',
    description: 'AI-powered structural analysis and planning',
    icon: '🏗️'
  },
  {
    id: 'demolition-reconstruction',
    label: 'Demolition & Reconstruction', 
    href: '/service-details/rapid-demolition-reconstruction',
    description: 'Complete transformation in 48-72 hours',
    icon: '⚡'
  },
  {
    id: 'kitchen-innovation',
    label: 'Kitchen Innovation',
    href: '/service-details/luxury-smart-kitchens',
    description: 'Smart kitchens with IoT integration',
    icon: '🏠'
  },
  {
    id: 'bathroom-innovation', 
    label: 'Bathroom Innovation',
    href: '/service-details/spa-bathroom-sanctuaries',
    description: 'Spa-grade wellness sanctuaries',
    icon: '🛁'
  },
  {
    id: 'outdoor-living',
    label: 'Outdoor Living Spaces',
    href: '/service-details/outdoor-living-ecosystems',
    description: 'Complete outdoor transformations',
    icon: '🌿'
  },
  {
    id: 'basement-transformation',
    label: 'Basement Transformation',
    href: '/service-details/basement-transformation-suites',
    description: 'Multi-functional basement spaces',
    icon: '🏠'
  },
  {
    id: 'view-all-services',
    label: 'View All Services',
    href: '/services',
    description: 'Complete service overview',
    icon: '📋'
  }
];

// 2025 Innovation categories from enhanced services
export const innovationsDropdown: NavigationDropdownItem[] = [
  {
    id: 'luxury-smart-kitchens',
    label: 'Smart Kitchen Systems',
    href: '/enhanced-service/luxury-smart-kitchens',
    description: 'Health-focused smart kitchens with wellness integration',
    icon: '🏠'
  },
  {
    id: 'spa-grade-bathrooms',
    label: 'Spa Bathroom Sanctuaries',
    href: '/enhanced-service/spa-grade-bathrooms',
    description: 'Wellness bathrooms with therapy features',
    icon: '🛁'
  },
  {
    id: 'energy-smart-additions',
    label: 'Energy-Smart Home Additions',
    href: '/enhanced-service/energy-smart-additions',
    description: 'Sustainable additions with smart technology',
    icon: '⚡'
  },
  {
    id: 'view-all-innovations',
    label: 'View All Innovations',
    href: '/enhanced-services',
    description: 'Complete 2025 trends overview',
    icon: '🚀'
  }
];

// Equipment rental categories (top categories only for dropdown)
export const equipmentDropdown: NavigationDropdownItem[] = [
  {
    id: 'excavators',
    label: 'Excavators',
    href: '/rentals?category=excavators',
    description: 'Professional excavation equipment',
    icon: '⛏️'
  },
  {
    id: 'generators',
    label: 'Power & Generators',
    href: '/rentals?category=generators',
    description: 'Reliable power solutions',
    icon: '⚡'
  },
  {
    id: 'air-compressors',
    label: 'Air Compressors',
    href: '/rentals?category=air-compressors',
    description: 'High-performance air systems',
    icon: '💨'
  },
  {
    id: 'skid-steers',
    label: 'Skid Steers & Loaders',
    href: '/rentals?category=skid-steers',
    description: 'Versatile material handling',
    icon: '🚛'
  },
  {
    id: 'attachments',
    label: 'Attachments & Tools',
    href: '/rentals?category=attachments-excavator',
    description: 'Specialized equipment attachments',
    icon: '🔨'
  },
  {
    id: 'view-all-equipment',
    label: 'View All Equipment',
    href: '/rentals',
    description: 'Complete equipment fleet',
    icon: '🏗️'
  }
];

// Main navigation structure
export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/'
  },
  {
    id: 'about',
    label: 'About',
    href: '/about'
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: servicesDropdown
  },
  {
    id: 'innovations',
    label: '2025 Innovations',
    href: '/enhanced-services',
    hasDropdown: true,
    dropdownItems: innovationsDropdown
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    href: '/portfolio'
  },
  {
    id: 'equipment-rentals',
    label: 'Equipment Rentals',
    href: '/rentals',
    hasDropdown: true,
    dropdownItems: equipmentDropdown
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact'
  }
];

// Tri-state service areas (DMV region)
export const serviceAreas = [
  { state: 'New Jersey', cities: ['Old Bridge', 'Newark', 'Jersey City', 'Trenton', 'Camden'] },
  { state: 'New York', cities: ['New York City', 'Albany', 'Buffalo', 'Rochester', 'Syracuse'] },
  { state: 'Pennsylvania', cities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Reading', 'Scranton'] },
  { state: 'Delaware', cities: ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Smyrna'] },
  { state: 'Maryland', cities: ['Baltimore', 'Annapolis', 'Frederick', 'Gaithersburg', 'Rockville'] },
  { state: 'Virginia', cities: ['Virginia Beach', 'Norfolk', 'Richmond', 'Alexandria', 'Newport News'] },
  { state: 'Washington DC', cities: ['Northwest', 'Northeast', 'Southeast', 'Southwest'] }
];

// Legal and informational pages
export const legalPages = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap' },
  { label: 'Careers', href: '/careers' },
  { label: 'Warranties', href: '/warranties' }
]; 