// Image constants and management for SunVic website
// Centralized approach for dynamic image handling

import logoImage from '../assets/logo/sunvic.png';

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export interface ProjectImage {
  id: string;
  title: string;
  category: string;
  src: string;
  description?: string;
}

export interface ServiceImage {
  id: string;
  serviceId: string;
  src: string;
  alt: string;
  category?: string;
}

export interface BrandAsset {
  logo: string;
  logoAlt: string;
  favicon: string;
}

// Hero Slider Images - Main homepage carousel
export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-main',
    title: 'Engineering Certainty',
    subtitle: 'SunVic Home Remodeling',
    description: 'While others promise art, we deliver certainty. SunVic is where visionary architecture meets uncompromising engineering to create flawlessly executed spaces—on time, on budget, every time.',
    backgroundImage: '/images/hero/hero1.png',
    ctaText: 'Explore Our Process',
    ctaLink: '/services',
    secondaryCtaText: 'Schedule Consultation',
    secondaryCtaLink: '/contact'
  },
  {
    id: 'hero-kitchen',
    title: 'Luxury Kitchen Transformations',
    subtitle: 'Engineering-Led Design',
    description: 'From $45,000 smart kitchen systems to complete culinary transformations. Our IoT-integrated appliances and custom millwork create intelligent cooking environments that competitors simply cannot match.',
    backgroundImage: '/images/hero/hero2.png',
    ctaText: 'View Kitchen Projects',
    ctaLink: '/service-details/luxury-smart-kitchens',
    secondaryCtaText: 'Get Kitchen Quote',
    secondaryCtaLink: '/contact'
  },
  {
    id: 'hero-bathroom',
    title: 'Spa-Grade Bathroom Sanctuaries',
    subtitle: 'Wellness & Engineering',
    description: 'Transform your bathroom into a personal wellness retreat with heated floors, custom steam rooms, and therapeutic lighting. $35,000-$85,000 luxury sanctuaries that blend form with function.',
    backgroundImage: '/images/hero/hero3.png',
    ctaText: 'View Bathroom Projects',
    ctaLink: '/service-details/spa-bathroom-sanctuaries',
    secondaryCtaText: 'Get Bathroom Quote',
    secondaryCtaLink: '/contact'
  },
  {
    id: 'hero-additions',
    title: 'Energy-Smart Home Additions',
    subtitle: 'Sustainable Expansion',
    description: 'Net-zero energy additions that not only expand your space but improve efficiency. Our $75,000-$200,000 intelligent additions integrate solar systems and smart HVAC for energy-positive living.',
    backgroundImage: '/images/hero/hero1.png',
    ctaText: 'View Addition Projects',
    ctaLink: '/service-details/energy-smart-additions',
    secondaryCtaText: 'Get Addition Quote',
    secondaryCtaLink: '/contact'
  }
];

// Project Portfolio Images
export const projectImages: ProjectImage[] = [
  {
    id: 'modern-kitchen-1',
    title: 'Modern Kitchen Renovation',
    category: 'kitchen',
    src: '/images/projects/kitchen-modern-1.jpg',
    description: 'Contemporary kitchen with smart appliances and custom cabinetry'
  },
  {
    id: 'luxury-bathroom-1',
    title: 'Luxury Master Bathroom',
    category: 'bathroom',
    src: '/images/projects/bathroom-luxury-1.jpg',
    description: 'Spa-like master bathroom with heated floors and smart fixtures'
  },
  {
    id: 'home-addition-1',
    title: 'Two-Story Addition',
    category: 'addition',
    src: '/images/projects/addition-modern-1.jpg',
    description: 'Seamlessly integrated two-story addition with energy-efficient design'
  },
  {
    id: 'basement-conversion-1',
    title: 'Basement Living Suite',
    category: 'basement',
    src: '/images/projects/basement-suite-1.jpg',
    description: 'Complete basement transformation into luxury living space'
  }
];

// Service-Specific Images
export const serviceImages: ServiceImage[] = [
  {
    id: 'kitchen-service-1',
    serviceId: 'luxury-smart-kitchens',
    src: '/images/services/kitchen-smart-1.jpg',
    alt: 'Smart kitchen with IoT appliances',
    category: 'process'
  },
  {
    id: 'bathroom-service-1',
    serviceId: 'spa-bathroom-sanctuaries',
    src: '/images/services/bathroom-spa-1.jpg',
    alt: 'Spa-grade bathroom renovation',
    category: 'completed'
  },
  {
    id: 'structural-service-1',
    serviceId: 'smart-structural-engineering',
    src: '/images/services/structural-engineering-1.jpg',
    alt: 'Structural engineering and 3D analysis',
    category: 'process'
  }
];

// Brand Assets
export const brandAssets: BrandAsset = {
  logo: logoImage,
  logoAlt: 'SunVic Home Remodeling - Engineering Excellence',
  favicon: '/logo/sunvic.png'
};

// Utility Functions
export const getProjectImagesByCategory = (category: string): ProjectImage[] => {
  return projectImages.filter(image => image.category === category);
};

export const getServiceImages = (serviceId: string): ServiceImage[] => {
  return serviceImages.filter(image => image.serviceId === serviceId);
};

export const getHeroSlideById = (id: string): HeroSlide | undefined => {
  return heroSlides.find(slide => slide.id === id);
}; 