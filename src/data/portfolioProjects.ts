// Enhanced Portfolio Projects with Wellness & Smart Technology Features

export interface ProjectImage {
  id: string;
  url: string;
  caption: string;
  type: 'after' | 'during' | 'detail';
}

export interface EnhancedProject {
  id: string;
  title: string;
  category: string;
  location: string;
  client: string;
  completedDate: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  images: ProjectImage[];
  heroImage: string;
  value: string;
  timeline: string;
  size: string;
  features: string[];
  wellnessFeatures: string[];
  smartFeatures: string[];
  sustainabilityFeatures: string[];
  equipmentUsed: string[];
  awards?: string[];
  clientTestimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  relatedServices: string[];
  tags: string[];
}

export const enhancedPortfolioProjects: EnhancedProject[] = [
  {
    id: "manhattan-wellness-kitchen",
    title: "Wellness Kitchen Sanctuary",
    category: "Kitchen Innovation",
    location: "Urban Residence",
    client: "Private Residence",
    completedDate: "December 2024",
    overview: "A groundbreaking kitchen transformation that integrates health monitoring, beauty stations, and smart technology to create a certified wellness kitchen sanctuary.",
    challenge: "The clients, both health-conscious professionals, wanted a kitchen that would actively support their wellness goals while maintaining luxury aesthetics in a compact urban space.",
    solution: "We designed a comprehensive wellness ecosystem featuring air/water purification, circadian lighting, beauty prep areas, and AI-powered health monitoring systems integrated seamlessly into a stunning modern design.",
    results: "40% improvement in air quality, 65% reduction in cooking time through smart automation, and a dedicated beauty station that has transformed the clients' daily routines. The project received excellent client reviews and referrals.",
    heroImage: "/images/full-home-remodel/fullHome.png",
    images: [
      {
        id: "after-1",
        url: "/images/full-home-remodel/kitchen/2.png",
        caption: "Transformed wellness kitchen with smart technology integration",
        type: "after"
      },
      {
        id: "detail-1",
        url: "/images/full-home-remodel/kitchen/3.png",
        caption: "Custom beauty station with professional Hollywood lighting",
        type: "detail"
      },
      {
        id: "detail-2",
        url: "/images/full-home-remodel/1.jpg",
        caption: "Smart appliances with health monitoring displays",
        type: "detail"
      }
    ],
    value: "$125,000",
    timeline: "5 weeks",
    size: "450 sq ft",
    features: [
      "Custom Italian cabinetry with hidden storage",
      "Quartz waterfall countertops with zero silica content",
      "Professional-grade smart appliances",
      "Integrated herb garden with grow lights",
      "Hidden appliance garage with auto-lift mechanisms"
    ],
    wellnessFeatures: [
      "HEPA air filtration with real-time monitoring",
      "Reverse osmosis water system with mineral enhancement",
      "Circadian rhythm lighting for optimal health",
      "Steam cooking stations for nutrient preservation",
      "Air quality sensors with automated ventilation"
    ],
    smartFeatures: [
      "AI-powered meal planning with nutritional optimization",
      "Smart inventory management with grocery ordering",
      "Voice-controlled everything with health tracking",
      "Energy optimization with usage analytics",
      "Beauty lighting with color temperature adjustment"
    ],
    sustainabilityFeatures: [
      "Energy-efficient appliances reducing consumption by 45%",
      "Water conservation system with usage tracking",
      "Sustainable materials with low-VOC finishes",
      "Compost integration system",
      "Solar-powered herb garden lighting"
    ],
    equipmentUsed: [
      "Custom millwork fabrication tools",
      "Smart home integration systems",
      "Air quality monitoring equipment",
      "Water filtration installation systems",
      "Professional lighting installation tools"
    ],
    clientTestimonial: {
      quote: "This kitchen has literally transformed our health and daily routines. The air quality monitoring alerts us to cooking adjustments, the beauty station has professional-grade lighting for our skincare routine, and the smart systems learn our preferences. It's like having a wellness coach built into our kitchen.",
      author: "Dr. Sarah Chen",
      title: "Homeowner"
    },
    relatedServices: ["luxury-smart-kitchens"],
    tags: ["Wellness", "Smart Technology", "Beauty Integration", "Health Monitoring", "Sustainable Luxury"]
  },

  {
    id: "tribeca-spa-bathroom",
    title: "Spa Sanctuary with Health Monitoring",
    category: "Bathroom Innovation",
    location: "Urban Residence",
    client: "Executive Residence",
    completedDate: "November 2024",
    overview: "A master bathroom transformation that creates a personal wellness retreat with steam therapy, beauty stations, health monitoring, and therapeutic features that rival luxury spas.",
    challenge: "Convert a standard master bathroom into a wellness sanctuary that provides spa-level treatments while monitoring and optimizing the clients' health and beauty routines.",
    solution: "Integrated steam therapy, chromotherapy, smart mirrors with health tracking, professional beauty lighting, and water purification systems in a luxurious design that feels like a private spa retreat.",
    results: "Daily stress reduction of 35% measured through biometric monitoring, 50% improvement in skin health through filtered water and steam therapy, and a beauty routine that saves 30 minutes daily through optimized lighting and organization.",
    heroImage: "/images/bathroom/1.jpeg",
    images: [
      {
        id: "after-1",
        url: "/images/bathroom/3.jpeg",
        caption: "Transformed spa sanctuary with wellness technology",
        type: "after"
      },
      {
        id: "detail-1",
        url: "/images/bathroom/4.jpeg",
        caption: "Smart mirror with health monitoring and beauty lighting",
        type: "detail"
      },
      {
        id: "detail-2",
        url: "/images/bathroom/5.jpeg",
        caption: "Steam shower with chromotherapy lighting",
        type: "detail"
      }
    ],
    value: "$95,000",
    timeline: "4 weeks",
    size: "280 sq ft",
    features: [
      "Custom steam room with essential oil diffusion",
      "Heated marble floors with smart temperature control",
      "Rainfall shower with therapeutic body sprays",
      "Professional beauty vanity with Hollywood lighting",
      "Heated towel and robe systems"
    ],
    wellnessFeatures: [
      "Steam therapy with essential oil integration",
      "Chromotherapy lighting for mood enhancement",
      "Water filtration for skin and hair health",
      "Air purification with UV-C sterilization",
      "Temperature therapy with contrast shower options"
    ],
    smartFeatures: [
      "Health monitoring through smart mirrors",
      "Beauty lighting optimization for skincare routines",
      "Automated steam sessions with health tracking",
      "Water quality monitoring with mineral adjustment",
      "Sound therapy integration for meditation"
    ],
    sustainabilityFeatures: [
      "Water recycling system for steam and showers",
      "Energy-efficient heated floors with smart scheduling",
      "Sustainable tile materials with recycled content",
      "LED therapy lighting with 80% energy savings",
      "Low-flow fixtures with pressure optimization"
    ],
    equipmentUsed: [
      "Steam generation and installation equipment",
      "Smart mirror installation systems",
      "Radiant heating installation tools",
      "Water filtration systems",
      "Beauty lighting installation equipment"
    ],
    clientTestimonial: {
      quote: "It's like having a luxury spa in our home. The steam therapy helps me unwind after stressful days, the smart mirror tracks my wellness goals, and the beauty lighting makes my skincare routine feel professional. We've saved thousands on spa visits while improving our health.",
      author: "Michael Torres",
      title: "Investment Executive"
    },
    relatedServices: ["spa-bathroom-sanctuaries"],
    tags: ["Spa Design", "Health Monitoring", "Steam Therapy", "Beauty Integration", "Wellness Technology"]
  },

  {
    id: "brooklyn-smart-addition",
    title: "Smart Home Addition",
    category: "Sustainable Expansion",
    location: "Urban Residence",
    client: "Family Residence",
    completedDate: "October 2024",
    overview: "A complete bathroom remodel that includes a steam shower, smart mirror, and wellness features.",
    challenge: "The clients wanted a bathroom that would be a personal wellness retreat, with a steam shower, smart mirror, and wellness features.",
    solution: "We designed a comprehensive wellness ecosystem featuring steam therapy, chromotherapy, smart mirrors with health tracking, professional beauty lighting, and water purification systems in a luxurious design that feels like a private spa retreat.",
    results: "Daily stress reduction of 35% measured through biometric monitoring, 50% improvement in skin health through filtered water and steam therapy, and a beauty routine that saves 30 minutes daily through optimized lighting and organization.",
    heroImage: "/images/projects/bathroom.png",
    images: [
      {
        id: "after-1",
        url: "/images/full-home-remodel/fullHome.png",
        caption: "Completed addition with seamless integration",
        type: "after"
      },
      {
        id: "detail-1",
        url: "/images/full-home-remodel/kitchen/1.png",
        caption: "Indoor-outdoor living space with smart climate control",
        type: "detail"
      },
      {
        id: "detail-2",
        url: "/images/full-home-remodel/kitchen/2.png",
        caption: "Solar panel integration with smart energy monitoring",
        type: "detail"
      }
    ],
    value: "$185,000",
    timeline: "10 weeks",
    size: "800 sq ft addition",
    features: [
      "Seamless structural integration with existing home",
      "Floor-to-ceiling windows with smart glass technology",
      "Integrated solar panel system with battery storage",
      "Smart HVAC with zoned climate control",
      "Biophilic design with living wall integration"
    ],
    wellnessFeatures: [
      "Air quality monitoring and automated purification",
      "Circadian lighting that adjusts throughout the day",
      "Biophilic design elements with living plants",
      "Noise reduction systems for stress management",
      "Natural light optimization for vitamin D synthesis"
    ],
    smartFeatures: [
      "Energy production optimization with weather prediction",
      "Health monitoring through environmental sensors",
      "Automated climate control with health optimization",
      "Smart lighting with circadian rhythm support",
      "Usage analytics with health impact reporting"
    ],
    sustainabilityFeatures: [
      "Net-positive energy production with solar panels",
      "Rainwater collection and filtration system",
      "Sustainable building materials with health benefits",
      "Native landscaping with wellness garden integration",
      "Carbon-negative construction practices"
    ],
    equipmentUsed: [
      "Solar installation and integration equipment",
      "Smart HVAC installation systems",
      "Structural engineering tools",
      "Energy monitoring equipment",
      "Biophilic design installation systems"
    ],
    clientTestimonial: {
      quote: "The addition feels like it was always part of our home, but it's actually producing more energy than our entire house used before. The air quality monitoring helped us discover our daughter's allergies were triggered by specific conditions, and now the system automatically adjusts to prevent them. It's like having a health guardian for our family.",
      author: "Jennifer and Mark Rodriguez",
      title: "Homeowners"
    },
    relatedServices: ["energy-smart-additions"],
    tags: ["Energy Positive", "Smart Building", "Biophilic Design", "Health Monitoring", "Indoor-Outdoor Living"]
  },
  {
    id: "princeton-full-home-transformation",
    title: "Full Home Transformation",
    category: "Full Home Remodeling",
    location: "Suburban Residence",
    client: "Dr. & Mrs. Chen",
    completedDate: "2024",
    overview: "Complete home transformation including kitchen, bathrooms, basement, and smart home integration with seamless project coordination.",
    challenge: "The 1960s ranch home needed complete modernization while maintaining structural integrity and adding smart home technology throughout.",
    solution: "We coordinated a comprehensive renovation including kitchen and bathroom renovations, basement finishing, and smart home integration with a single project timeline.",
    results: "Transformed a dated ranch into a modern smart home with luxury finishes and integrated technology systems.",
    heroImage: "/images/full-home-remodel/fullHome.png",
    value: "$450,000",
    timeline: "16 weeks",
    size: "3,200 sq ft",
    features: [
      "Complete kitchen renovation with smart appliances",
      "Master bathroom spa transformation", 
      "Basement finishing with home theater",
      "Smart home integration throughout",
      "Energy-efficient upgrades"
    ],
    wellnessFeatures: [
      "Air purification systems",
      "Natural lighting optimization",
      "Spa-grade bathroom features"
    ],
    smartFeatures: [
      "Whole-home automation",
      "Smart climate control",
      "Integrated security systems"
    ],
    sustainabilityFeatures: [
      "Energy-efficient appliances",
      "Solar panel integration",
      "Sustainable materials"
    ],
    equipmentUsed: [
      "Custom millwork tools",
      "Smart home integration systems",
      "Professional installation equipment"
    ],
    images: [
      {
        id: "after-1", 
        url: "/images/full-home-remodel/fullHome.png",
        caption: "Transformed modern home with smart technology",
        type: "after"
      },
      {
        id: "detail-1",
        url: "/images/full-home-remodel/kitchen/1.png",
        caption: "Smart kitchen with integrated appliances",
        type: "detail"
      },
      {
        id: "detail-2",
        url: "/images/bathroom/1.jpeg",
        caption: "Spa-grade master bathroom",
        type: "detail"
      }
    ],
    clientTestimonial: {
      quote: "SunVic transformed our entire home into a modern smart home. The coordination was seamless and the results exceeded our expectations.",
      author: "Dr. Chen",
      title: "Homeowner"
    },
    relatedServices: ["full-home-remodeling", "luxury-smart-kitchens", "spa-bathroom-sanctuaries"],
    tags: ["full-home", "smart-home", "luxury", "renovation"]
  }
];

export const portfolioCategories = [
  { id: 'all', name: 'All Projects', count: enhancedPortfolioProjects.length },
  { id: 'kitchen', name: 'Kitchen Innovation', count: enhancedPortfolioProjects.filter(p => p.category === 'Kitchen Innovation').length },
  { id: 'bathroom', name: 'Bathroom Innovation', count: enhancedPortfolioProjects.filter(p => p.category === 'Bathroom Innovation').length },
  { id: 'addition', name: 'Sustainable Expansion', count: enhancedPortfolioProjects.filter(p => p.category === 'Sustainable Expansion').length },
  { id: 'full-home', name: 'Full Home Remodeling', count: enhancedPortfolioProjects.filter(p => p.category === 'Full Home Remodeling').length }
]; 
