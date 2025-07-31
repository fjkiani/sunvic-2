// Centralized Navigation Configuration
// Single source of truth for navigation items

import { enhancedServices } from './enhancedServices';
import { rentalCategories } from './rentalEquipment';
import { advancedRenovationServices } from './content';

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

// Core Services Dropdown
const servicesDropdown: DropdownItem[] = [
  {
    label: 'Engineering Planning',
    href: '/services',
    description: 'Structural analysis and engineering solutions',
    icon: '🏗️'
  },
  {
    label: 'Kitchen Remodeling',
    href: '/services#kitchen',
    description: 'Luxury kitchen transformations',
    icon: '🍳'
  },
  {
    label: 'Bathroom Renovation',
    href: '/services#bathroom',
    description: 'Spa-grade bathroom upgrades',
    icon: '🛁'
  },
  {
    label: 'Home Additions',
    href: '/services#additions',
    description: 'Smart structural additions',
    icon: '🏠'
  },
  {
    label: 'Whole Home Renovation',
    href: '/services#whole-home',
    description: 'Complete home transformations',
    icon: '✨'
  }
];

// 2025 Innovations Dropdown (from enhanced services)
const innovationsDropdown: DropdownItem[] = enhancedServices.map(service => ({
  label: service.title,
  href: `/enhanced-service/${service.id}`,
  description: service.shortDescription,
  icon: service.icon
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
    href: '/services',
    dropdown: servicesDropdown
  },
  { 
    label: '2025 Innovations', 
    href: '/enhanced-services',
    dropdown: innovationsDropdown
  },
  { label: 'Portfolio', href: '/portfolio' },
  { 
    label: 'Equipment Rentals', 
    href: '/rentals',
    dropdown: equipmentDropdown
  },
  { label: 'Contact', href: '/contact' }
];

// Footer-specific links
export const footerLinks = {
  quickLinks: mainNavigation.filter(item => !item.dropdown),
  services: servicesDropdown,
  innovations: innovationsDropdown.slice(0, 4), // Top 4 for footer
  equipment: equipmentDropdown.slice(0, 6), // Top 6 for footer
  legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Sitemap', href: '/sitemap' }
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
  name: 'SunVic',
  tagline: 'Engineering Excellence in Every Project',
  phone: '732-824-9203',
  email: 'sunvicnj@gmail.com',
  address: 'Old Bridge, NJ',
  serviceArea: 'Tri-State Area (NJ, NY, PA, DC, MD, VA)',
  hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
  social: {
    facebook: 'https://facebook.com/sunvichomes',
    instagram: 'https://instagram.com/sunvichomes',
    linkedin: 'https://linkedin.com/company/sunvichomes',
    youtube: 'https://youtube.com/sunvichomes'
  }
}; 