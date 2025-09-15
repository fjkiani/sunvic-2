// Centralized Navigation Configuration
// Single source of truth for navigation items

import { enhancedServices } from './enhancedServices';
import { rentalCategories } from './rentalEquipment';
import { enhancedPortfolioProjects } from './portfolioProjects';

export interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

// Dynamic Services Dropdown - Generated from enhancedServices
const getServiceIcon = (serviceId: string): string => {
  const iconMap: Record<string, string> = {
    'ground-up-construction': '🏗️',
    'full-home-remodeling': '🏠',
    'luxury-smart-kitchens': '🍳',
    'spa-bathroom-sanctuaries': '🛁',
    'energy-smart-additions': '⚡',
    'outdoor-living-ecosystems': '🌿',
    'basement-transformation-suites': '🎮',
    'whole-home-automation': '🤖',
    'luxury-aging-in-place': '♿',
    'rapid-demolition-reconstruction': '🔨'
  };
  return iconMap[serviceId] || '🔧';
};

const servicesDropdown: DropdownItem[] = enhancedServices.map(service => ({
  label: service.title,
  href: `/enhanced-service/${service.id}`,
  description: service.shortDescription,
  icon: getServiceIcon(service.id)
}));

// Portfolio Dropdown - Generated from enhancedPortfolioProjects
const getProjectIcon = (category: string): string => {
  const iconMap: Record<string, string> = {
    'Kitchen Innovation': '🍳',
    'Bathroom Innovation': '🛁',
    'Sustainable Expansion': '⚡',
    'Full Home Remodeling': '🏠',
    'Ground Up Construction': '🏗️'
  };
  return iconMap[category] || '✨';
};

const portfolioDropdown: DropdownItem[] = enhancedPortfolioProjects.map(project => ({
  label: project.title,
  href: `/project/${project.id}`,
  description: project.overview,
  icon: getProjectIcon(project.category)
}));

// Equipment Rentals Dropdown (top categories)
const equipmentDropdown: DropdownItem[] = rentalCategories
  .filter(cat => cat.id !== 'all')
  .slice(0, 8) // Show top 8 categories
  .map(category => ({
    label: category.name,
    href: `/rentals?category=${category.id}`,
    description: `Professional ${category.name.toLowerCase()}`,
    icon: category.icon
  }));

// Main Navigation Configuration
export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { 
    label: 'Services', 
    href: '/enhanced-services',
    dropdown: servicesDropdown
  },
  { 
    label: 'Portfolio', 
    href: '/portfolio',
    dropdown: portfolioDropdown
  },
  { 
    label: 'Equipment Rentals', 
    href: '/rentals',
    dropdown: equipmentDropdown
  },
  { label: 'Contact', href: '/contact' }
];

// Footer Links Configuration
export const footerLinks = {
  innovations: servicesDropdown.slice(0, 5), // Top 5 services for footer
  equipment: equipmentDropdown.slice(0, 6), // Top 6 equipment categories for footer
  portfolio: portfolioDropdown.slice(0, 4), // Top 4 portfolio projects for footer
  legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Sitemap', href: '/sitemap' }
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' }
  ],
  serviceAreas: [
    { label: 'New Jersey', href: '/service-areas/new-jersey' },
    { label: 'New York City', href: '/service-areas/new-york' },
    { label: 'Philadelphia', href: '/service-areas/philadelphia' },
    { label: 'Washington DC', href: '/service-areas/washington-dc' },
    { label: 'Maryland', href: '/service-areas/maryland' },
    { label: 'Virginia', href: '/service-areas/virginia' }
  ]
};

// Company information for consistent use
export const companyData = {
  name: 'Sunvic',
  tagline: 'Engineering Excellence in Every Project',
  phone: '732-824-9203',
  email: 'sunvicnj@gmail.com',
  address: 'Regional Office',
  serviceArea: 'Multi-State Service Area',
  hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
  social: {
    facebook: 'https://facebook.com/sunvichomes',
    instagram: 'https://instagram.com/sunvichomes',
    linkedin: 'https://linkedin.com/company/sunvichomes',
    youtube: 'https://youtube.com/sunvichomes'
  }
}; 