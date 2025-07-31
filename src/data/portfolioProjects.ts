// Enhanced Portfolio Projects with Wellness & Smart Technology Features

export interface ProjectImage {
  id: string;
  url: string;
  caption: string;
  type: 'before' | 'after' | 'during' | 'detail';
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
    title: "Manhattan Wellness Kitchen Sanctuary",
    category: "Kitchen Innovation",
    location: "Upper East Side, Manhattan",
    client: "Private Residence",
    completedDate: "December 2024",
    overview: "A groundbreaking kitchen transformation that integrates health monitoring, beauty stations, and smart technology to create Manhattan's first certified wellness kitchen sanctuary.",
    challenge: "The clients, both health-conscious professionals, wanted a kitchen that would actively support their wellness goals while maintaining luxury aesthetics in a compact Manhattan space.",
    solution: "We designed a comprehensive wellness ecosystem featuring air/water purification, circadian lighting, beauty prep areas, and AI-powered health monitoring systems integrated seamlessly into a stunning modern design.",
    results: "40% improvement in air quality, 65% reduction in cooking time through smart automation, and a dedicated beauty station that has transformed the clients' daily routines. The project received excellent client reviews and referrals.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    images: [
      {
        id: "before-1",
        url: "https://images.unsplash.com/photo-1587411768418-7500d90e8405?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        caption: "Original kitchen layout with outdated appliances",
        type: "before"
      },
      {
        id: "after-1",
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        caption: "Transformed wellness kitchen with smart technology integration",
        type: "after"
      },
      {
        id: "detail-1",
        url: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        caption: "Custom beauty station with professional Hollywood lighting",
        type: "detail"
      },
      {
        id: "detail-2",
        url: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
    title: "Tribeca Spa Sanctuary with Health Monitoring",
    category: "Bathroom Innovation",
    location: "Tribeca, Manhattan",
    client: "Executive Residence",
    completedDate: "November 2024",
    overview: "A master bathroom transformation that creates a personal wellness retreat with steam therapy, beauty stations, health monitoring, and therapeutic features that rival luxury spas.",
    challenge: "Convert a standard master bathroom into a wellness sanctuary that provides spa-level treatments while monitoring and optimizing the clients' health and beauty routines.",
    solution: "Integrated steam therapy, chromotherapy, smart mirrors with health tracking, professional beauty lighting, and water purification systems in a luxurious design that feels like a private spa retreat.",
    results: "Daily stress reduction of 35% measured through biometric monitoring, 50% improvement in skin health through filtered water and steam therapy, and a beauty routine that saves 30 minutes daily through optimized lighting and organization.",
    heroImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    images: [
      {
        id: "before-1",
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        caption: "Original bathroom with basic fixtures",
        type: "before"
      },
      {
        id: "after-1",
        url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        caption: "Transformed spa sanctuary with wellness technology",
        type: "after"
      },
      {
        id: "detail-1",
        url: "https://images.unsplash.com/photo-1594736797933-d0d62ab2f3be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        caption: "Smart mirror with health monitoring and beauty lighting",
        type: "detail"
      },
      {
        id: "detail-2",
        url: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
    title: "Brooklyn Smart Home Addition with Energy Optimization",
    category: "Sustainable Expansion",
    location: "Park Slope, Brooklyn",
    client: "Family Residence",
    completedDate: "October 2024",
    overview: "An energy-positive home addition that combines smart building systems, wellness integration, and seamless indoor-outdoor living while actually reducing the home's overall energy consumption.",
    challenge: "Add 800 sq ft of living space while improving the existing home's energy efficiency, incorporating wellness features, and creating seamless indoor-outdoor connectivity for year-round entertaining.",
    solution: "Designed a net-zero addition with integrated solar systems, smart HVAC with air purification, biophilic design elements, and automated systems that optimize both energy usage and health metrics.",
    results: "Net-positive energy production of 120%, 40% improvement in whole-home air quality, seamless indoor-outdoor living that's used 300+ days per year, and health monitoring that helped the family identify and resolve allergy triggers.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    images: [
      {
        id: "before-1",
        url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
        caption: "Original home exterior before addition",
        type: "before"
      },
      {
        id: "after-1",
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        caption: "Completed addition with seamless integration",
        type: "after"
      },
      {
        id: "detail-1",
        url: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        caption: "Indoor-outdoor living space with smart climate control",
        type: "detail"
      },
      {
        id: "detail-2",
        url: "https://images.unsplash.com/photo-1562066138-97dee9f9d6bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
  }
];

export const portfolioCategories = [
  { id: 'all', name: 'All Projects', count: enhancedPortfolioProjects.length },
  { id: 'kitchen', name: 'Kitchen Innovation', count: enhancedPortfolioProjects.filter(p => p.category === 'Kitchen Innovation').length },
  { id: 'bathroom', name: 'Bathroom Innovation', count: enhancedPortfolioProjects.filter(p => p.category === 'Bathroom Innovation').length },
  { id: 'addition', name: 'Sustainable Expansion', count: enhancedPortfolioProjects.filter(p => p.category === 'Sustainable Expansion').length }
]; 
