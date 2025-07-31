// Enhanced Service Data with 2025 Trends & Competitive Insights
// Based on market research of luxury home remodeling trends

export interface EnhancedService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  category: string;
  competitorAdvantage: string;
  features: string[];
  equipment: string[];
  wellnessFeatures: string[];
  smartFeatures: string[];
  sustainabilityFeatures: string[];
  beautyFeatures?: string[];
  timeline: string;
  priceRange: string;
  processSteps: {
    title: string;
    description: string;
    duration: string;
  }[];
  marketDifferentiators: string[];
  trends2025: string[];
}

export const enhancedServices: EnhancedService[] = [
  {
    id: "luxury-smart-kitchens",
    title: "Luxury Smart Kitchen Systems",
    shortDescription: "Health-focused smart kitchens with wellness integration, beauty lighting, and AI optimization.",
    fullDescription: "Transform your kitchen into a health and wellness command center with integrated smart appliances, air/water purification, circadian lighting, and beauty stations. Our IoT-integrated systems create intelligent culinary environments that support healthy living, optimize energy usage, and include dedicated beauty prep areas with professional-grade lighting.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: "luxury-smart-kitchens",
    category: "Kitchen Innovation",
    competitorAdvantage: "While competitors focus on aesthetics, we integrate complete wellness ecosystems with owned equipment advantage",
    features: [
      "IoT-integrated appliance networks with health monitoring",
      "AI-powered energy and nutrition optimization",
      "Custom millwork with hidden storage solutions",
      "Professional-grade equipment installation",
      "Voice-controlled home automation with wellness tracking",
      "Integrated beauty and grooming stations"
    ],
    equipment: [
      "Smart home integration systems",
      "Professional appliance installation equipment", 
      "Custom millwork fabrication tools",
      "Air quality monitoring systems",
      "Water filtration installation equipment"
    ],
    wellnessFeatures: [
      "HEPA air filtration with real-time monitoring",
      "Reverse osmosis water systems with mineral enhancement",
      "Steam cooking and air frying appliances for healthy meals",
      "Herb garden integration with grow lights",
      "Circadian rhythm lighting for optimal health",
      "Sound therapy and meditation spaces"
    ],
    smartFeatures: [
      "AI Meal Planning: Nutritional optimization based on health goals",
      "Smart Inventory: Automatic grocery ordering and expiration tracking", 
      "Energy Optimization: Predictive usage patterns and cost reduction",
      "Health Monitoring: Air quality, water purity, and usage analytics",
      "Voice Control: Hands-free operation for hygiene and convenience",
      "Beauty Lighting: Professional-grade lighting for skincare routines"
    ],
    sustainabilityFeatures: [
      "Recycled quartz countertops with zero silica content",
      "Energy-efficient appliances with smart grid integration",
      "Sustainable wood cabinetry with low-VOC finishes",
      "Water conservation systems with usage tracking",
      "LED lighting with 90% energy reduction",
      "Compost integration and waste reduction systems"
    ],
    beautyFeatures: [
      "Makeup station with professional Hollywood lighting",
      "Heated mirrors with anti-fog technology",
      "Beauty product storage with temperature control",
      "Skincare prep area with filtered water",
      "Color-accurate lighting for beauty routines"
    ],
    timeline: "4-6 weeks",
    priceRange: "$65,000-$200,000",
    processSteps: [
      {
        title: "Wellness Assessment & Design",
        description: "Comprehensive health goals analysis, smart home integration planning, and beauty routine assessment to create a personalized kitchen ecosystem.",
        duration: "1 week"
      },
      {
        title: "3D Modeling & Engineering",
        description: "Advanced 3D scanning and structural analysis to optimize layout for wellness features, smart systems, and beauty integration.",
        duration: "3-5 days"
      },
      {
        title: "Smart Systems Pre-Installation", 
        description: "Pre-wiring for smart devices, air quality systems, water filtration, and beauty lighting circuits.",
        duration: "2-3 days"
      },
      {
        title: "Precision Installation",
        description: "Installation of smart appliances, wellness systems, beauty stations, and final system integration with testing.",
        duration: "2-3 weeks"
      },
      {
        title: "Wellness Optimization",
        description: "AI system training, health monitoring setup, beauty lighting calibration, and user training for optimal wellness benefits.",
        duration: "3-5 days"
      }
    ],
    marketDifferentiators: [
      "First in NYC to integrate comprehensive wellness ecosystems",
      "Professional beauty station integration (trending 2025)",
      "AI health optimization (competitor gap)",
      "Equipment ownership ensures smart device compatibility",
      "Circadian lighting for health (major 2025 trend)"
    ],
    trends2025: [
      "Health & wellness integration",
      "Beauty-focused design features", 
      "Smart technology with AI optimization",
      "Sustainable luxury materials",
      "Seamless indoor-outdoor connectivity"
    ]
  },

  {
    id: "spa-bathroom-sanctuaries",
    title: "Spa-Grade Bathroom Sanctuaries", 
    shortDescription: "Wellness-focused bathroom retreats with beauty integration, health monitoring, and therapeutic features.",
    fullDescription: "Create a personal wellness sanctuary with heated floors, custom steam rooms, therapeutic lighting, smart mirrors, integrated sound systems, and professional beauty stations. Our advanced systems include health monitoring, water purification, and beauty-grade lighting that transforms your bathroom into a luxury spa experience.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: "spa-bathroom-sanctuaries",
    category: "Bathroom Innovation",
    competitorAdvantage: "Competitors offer basic bathrooms; we create complete wellness sanctuaries with integrated beauty stations",
    features: [
      "Radiant heated flooring with smart temperature control",
      "Custom steam room with chromotherapy lighting",
      "Smart mirrors with beauty lighting and health tracking",
      "Professional beauty stations with Hollywood lighting",
      "Luxury rainfall and therapeutic body spray systems",
      "Heated towel and robe systems with automated scheduling"
    ],
    equipment: [
      "Radiant heating installation systems",
      "Steam generation and safety equipment",
      "Advanced plumbing and electrical tools",
      "Smart mirror installation equipment",
      "Beauty lighting installation tools"
    ],
    wellnessFeatures: [
      "Steam therapy with essential oil diffusion",
      "Chromotherapy lighting for mood enhancement", 
      "Air purification with UV-C sterilization",
      "Water filtration for skin and hair health",
      "Sound therapy with waterproof speakers",
      "Temperature therapy with contrast showers",
      "Health monitoring through smart mirrors"
    ],
    smartFeatures: [
      "Health Monitoring: Daily wellness tracking through smart mirrors",
      "Beauty Optimization: Lighting adjustment for skincare routines",
      "Steam Control: Automated steam sessions with health benefits tracking",
      "Water Quality: Smart filtration with mineral optimization for skin",
      "Mood Lighting: Circadian rhythm support and therapy lighting",
      "Sound Wellness: Meditation and relaxation audio integration"
    ],
    sustainabilityFeatures: [
      "Water recycling systems for steam and showers",
      "Energy-efficient heated floors with smart scheduling",
      "Sustainable tile materials with recycled content",
      "LED therapy lighting with 80% energy savings",
      "Low-flow fixtures with pressure optimization",
      "Non-toxic, VOC-free finishes and sealers"
    ],
    beautyFeatures: [
      "Hollywood-style vanity lighting with color accuracy",
      "Makeup storage with climate control",
      "Skincare refrigeration for products",
      "Beauty tool charging stations",
      "Professional-grade magnifying mirrors",
      "Steam facials integrated into daily routines"
    ],
    timeline: "3-5 weeks",
    priceRange: "$55,000-$120,000",
    processSteps: [
      {
        title: "Wellness & Beauty Assessment",
        description: "Personal wellness goal analysis, beauty routine evaluation, and health monitoring requirements to design your perfect sanctuary.",
        duration: "3-5 days"
      },
      {
        title: "Spa Design Engineering",
        description: "Steam room engineering, heated floor planning, smart mirror integration, and beauty station design with professional lighting.",
        duration: "1 week"
      },
      {
        title: "Infrastructure Installation",
        description: "Electrical, plumbing, heated floors, steam systems, and smart device pre-wiring for seamless integration.",
        duration: "1 week"
      },
      {
        title: "Luxury Installation",
        description: "Premium finishes, smart mirrors, beauty stations, steam room completion, and all wellness technology integration.",
        duration: "1-2 weeks"
      },
      {
        title: "Wellness Calibration",
        description: "Health monitoring setup, beauty lighting optimization, steam therapy programming, and comprehensive user training.",
        duration: "2-3 days"
      }
    ],
    marketDifferentiators: [
      "Integrated beauty stations (major 2025 trend)",
      "Health monitoring through smart mirrors",
      "Steam therapy with wellness tracking",
      "Professional beauty lighting systems",
      "Complete spa experience at home"
    ],
    trends2025: [
      "Beauty and wellness integration",
      "Health monitoring technology",
      "Therapeutic lighting design",
      "Sustainable luxury materials",
      "Professional-grade home beauty stations"
    ]
  },

  {
    id: "energy-smart-additions",
    title: "Energy-Smart Home Additions",
    shortDescription: "Net-zero energy additions with wellness integration, smart building systems, and seamless indoor-outdoor living.",
    fullDescription: "Create intelligent, energy-positive additions that improve your home's efficiency while expanding your space. Our structural engineering team designs additions with integrated solar systems, smart HVAC, advanced wellness features, and seamless indoor-outdoor connectivity that actually reduce your overall energy costs.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: "energy-smart-additions",
    category: "Sustainable Expansion",
    competitorAdvantage: "While others just add space, we add intelligent, energy-positive space with wellness integration",
    features: [
      "Net-zero energy design with solar integration",
      "Smart HVAC with air purification and wellness monitoring",
      "Advanced insulation and air sealing for health",
      "Energy monitoring with health impact tracking",
      "Structural integration that enhances existing home wellness",
      "Seamless indoor-outdoor living with biophilic design"
    ],
    equipment: [
      "Solar installation and integration equipment",
      "Smart HVAC installation systems",
      "Energy monitoring and automation tools",
      "Advanced insulation installation equipment",
      "Structural engineering and reinforcement tools"
    ],
    wellnessFeatures: [
      "Air quality monitoring and purification systems",
      "Natural light optimization for circadian health",
      "Biophilic design elements with living walls",
      "Noise reduction for stress management",
      "Temperature optimization for sleep quality",
      "Humidity control for respiratory health",
      "EMF reduction through smart design"
    ],
    smartFeatures: [
      "Energy Production: Solar optimization with weather prediction",
      "Health Monitoring: Air quality and environmental wellness tracking",
      "Climate Control: Predictive HVAC with health optimization",
      "Light Management: Circadian rhythm support and mood lighting",
      "Security Integration: Wellness-focused monitoring and automation",
      "Usage Analytics: Health impact reporting and optimization"
    ],
    sustainabilityFeatures: [
      "Net-positive energy production with solar panels",
      "Sustainable building materials with health benefits",
      "Rainwater collection and filtration systems",
      "Native landscaping with wellness garden integration",
      "Carbon-negative construction practices",
      "Waste reduction and recycling systems"
    ],
    timeline: "8-12 weeks",
    priceRange: "$95,000-$275,000",
    processSteps: [
      {
        title: "Wellness & Energy Assessment",
        description: "Comprehensive analysis of energy needs, wellness goals, and structural requirements for optimal health and efficiency integration.",
        duration: "1-2 weeks"
      },
      {
        title: "Structural Engineering & Design",
        description: "Advanced engineering for seamless integration, solar optimization, wellness systems planning, and indoor-outdoor connectivity.",
        duration: "2 weeks"
      },
      {
        title: "Smart Infrastructure Installation",
        description: "Foundation, framing, electrical, plumbing, HVAC, smart systems, and wellness technology pre-installation.",
        duration: "3-4 weeks"
      },
      {
        title: "Energy Systems Integration",
        description: "Solar installation, smart HVAC, energy storage, wellness monitoring systems, and automated controls integration.",
        duration: "2-3 weeks"
      },
      {
        title: "Wellness Optimization & Testing",
        description: "System calibration, energy production optimization, health monitoring setup, and comprehensive performance testing.",
        duration: "1 week"
      }
    ],
    marketDifferentiators: [
      "Net-zero energy with wellness integration",
      "Seamless indoor-outdoor living (competitor gap)",
      "Health-focused smart building systems",
      "Structural engineering with energy optimization",
      "Biophilic design integration"
    ],
    trends2025: [
      "Seamless indoor-outdoor living",
      "Health and wellness integration",
      "Smart technology with AI optimization",
      "Sustainable luxury design",
      "Biophilic design elements"
    ]
  }
];

// Market insights for competitive positioning
export const marketInsights = {
  competitorGaps: [
    "Health & wellness integration in luxury design",
    "Beauty-focused features and professional lighting",
    "Seamless indoor-outdoor living spaces",
    "Smart technology with health monitoring",
    "Equipment ownership for better integration",
    "Luxury aging-in-place solutions",
    "Comprehensive sustainability with luxury aesthetics"
  ],
  trends2025: [
    "Health and wellness as primary design driver",
    "Beauty integration in kitchen and bath design",
    "Smart technology with AI and health monitoring",
    "Sustainable materials without luxury compromise",
    "Seamless indoor-outdoor connectivity",
    "Circadian lighting for health optimization",
    "Professional-grade home beauty stations"
  ],
  sunvicAdvantages: [
    "$200K+ owned equipment fleet for better integration",
    "Engineering expertise for complex wellness systems",
    "First in market with comprehensive wellness integration",
    "Smart technology expertise with health focus",
    "Structural engineering for seamless additions",
    "Equipment ownership ensures project timeline certainty"
  ]
}; 
// Based on market research of luxury home remodeling trends

export interface EnhancedService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  category: string;
  competitorAdvantage: string;
  features: string[];
  equipment: string[];
  wellnessFeatures: string[];
  smartFeatures: string[];
  sustainabilityFeatures: string[];
  beautyFeatures?: string[];
  timeline: string;
  priceRange: string;
  processSteps: {
    title: string;
    description: string;
    duration: string;
  }[];
  marketDifferentiators: string[];
  trends2025: string[];
}

export const enhancedServices: EnhancedService[] = [
  {
    id: "luxury-smart-kitchens",
    title: "Luxury Smart Kitchen Systems",
    shortDescription: "Health-focused smart kitchens with wellness integration, beauty lighting, and AI optimization.",
    fullDescription: "Transform your kitchen into a health and wellness command center with integrated smart appliances, air/water purification, circadian lighting, and beauty stations. Our IoT-integrated systems create intelligent culinary environments that support healthy living, optimize energy usage, and include dedicated beauty prep areas with professional-grade lighting.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: "luxury-smart-kitchens",
    category: "Kitchen Innovation",
    competitorAdvantage: "While competitors focus on aesthetics, we integrate complete wellness ecosystems with owned equipment advantage",
    features: [
      "IoT-integrated appliance networks with health monitoring",
      "AI-powered energy and nutrition optimization",
      "Custom millwork with hidden storage solutions",
      "Professional-grade equipment installation",
      "Voice-controlled home automation with wellness tracking",
      "Integrated beauty and grooming stations"
    ],
    equipment: [
      "Smart home integration systems",
      "Professional appliance installation equipment", 
      "Custom millwork fabrication tools",
      "Air quality monitoring systems",
      "Water filtration installation equipment"
    ],
    wellnessFeatures: [
      "HEPA air filtration with real-time monitoring",
      "Reverse osmosis water systems with mineral enhancement",
      "Steam cooking and air frying appliances for healthy meals",
      "Herb garden integration with grow lights",
      "Circadian rhythm lighting for optimal health",
      "Sound therapy and meditation spaces"
    ],
    smartFeatures: [
      "AI Meal Planning: Nutritional optimization based on health goals",
      "Smart Inventory: Automatic grocery ordering and expiration tracking", 
      "Energy Optimization: Predictive usage patterns and cost reduction",
      "Health Monitoring: Air quality, water purity, and usage analytics",
      "Voice Control: Hands-free operation for hygiene and convenience",
      "Beauty Lighting: Professional-grade lighting for skincare routines"
    ],
    sustainabilityFeatures: [
      "Recycled quartz countertops with zero silica content",
      "Energy-efficient appliances with smart grid integration",
      "Sustainable wood cabinetry with low-VOC finishes",
      "Water conservation systems with usage tracking",
      "LED lighting with 90% energy reduction",
      "Compost integration and waste reduction systems"
    ],
    beautyFeatures: [
      "Makeup station with professional Hollywood lighting",
      "Heated mirrors with anti-fog technology",
      "Beauty product storage with temperature control",
      "Skincare prep area with filtered water",
      "Color-accurate lighting for beauty routines"
    ],
    timeline: "4-6 weeks",
    priceRange: "$65,000-$200,000",
    processSteps: [
      {
        title: "Wellness Assessment & Design",
        description: "Comprehensive health goals analysis, smart home integration planning, and beauty routine assessment to create a personalized kitchen ecosystem.",
        duration: "1 week"
      },
      {
        title: "3D Modeling & Engineering",
        description: "Advanced 3D scanning and structural analysis to optimize layout for wellness features, smart systems, and beauty integration.",
        duration: "3-5 days"
      },
      {
        title: "Smart Systems Pre-Installation", 
        description: "Pre-wiring for smart devices, air quality systems, water filtration, and beauty lighting circuits.",
        duration: "2-3 days"
      },
      {
        title: "Precision Installation",
        description: "Installation of smart appliances, wellness systems, beauty stations, and final system integration with testing.",
        duration: "2-3 weeks"
      },
      {
        title: "Wellness Optimization",
        description: "AI system training, health monitoring setup, beauty lighting calibration, and user training for optimal wellness benefits.",
        duration: "3-5 days"
      }
    ],
    marketDifferentiators: [
      "First in NYC to integrate comprehensive wellness ecosystems",
      "Professional beauty station integration (trending 2025)",
      "AI health optimization (competitor gap)",
      "Equipment ownership ensures smart device compatibility",
      "Circadian lighting for health (major 2025 trend)"
    ],
    trends2025: [
      "Health & wellness integration",
      "Beauty-focused design features", 
      "Smart technology with AI optimization",
      "Sustainable luxury materials",
      "Seamless indoor-outdoor connectivity"
    ]
  },

  {
    id: "spa-bathroom-sanctuaries",
    title: "Spa-Grade Bathroom Sanctuaries", 
    shortDescription: "Wellness-focused bathroom retreats with beauty integration, health monitoring, and therapeutic features.",
    fullDescription: "Create a personal wellness sanctuary with heated floors, custom steam rooms, therapeutic lighting, smart mirrors, integrated sound systems, and professional beauty stations. Our advanced systems include health monitoring, water purification, and beauty-grade lighting that transforms your bathroom into a luxury spa experience.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: "spa-bathroom-sanctuaries",
    category: "Bathroom Innovation",
    competitorAdvantage: "Competitors offer basic bathrooms; we create complete wellness sanctuaries with integrated beauty stations",
    features: [
      "Radiant heated flooring with smart temperature control",
      "Custom steam room with chromotherapy lighting",
      "Smart mirrors with beauty lighting and health tracking",
      "Professional beauty stations with Hollywood lighting",
      "Luxury rainfall and therapeutic body spray systems",
      "Heated towel and robe systems with automated scheduling"
    ],
    equipment: [
      "Radiant heating installation systems",
      "Steam generation and safety equipment",
      "Advanced plumbing and electrical tools",
      "Smart mirror installation equipment",
      "Beauty lighting installation tools"
    ],
    wellnessFeatures: [
      "Steam therapy with essential oil diffusion",
      "Chromotherapy lighting for mood enhancement", 
      "Air purification with UV-C sterilization",
      "Water filtration for skin and hair health",
      "Sound therapy with waterproof speakers",
      "Temperature therapy with contrast showers",
      "Health monitoring through smart mirrors"
    ],
    smartFeatures: [
      "Health Monitoring: Daily wellness tracking through smart mirrors",
      "Beauty Optimization: Lighting adjustment for skincare routines",
      "Steam Control: Automated steam sessions with health benefits tracking",
      "Water Quality: Smart filtration with mineral optimization for skin",
      "Mood Lighting: Circadian rhythm support and therapy lighting",
      "Sound Wellness: Meditation and relaxation audio integration"
    ],
    sustainabilityFeatures: [
      "Water recycling systems for steam and showers",
      "Energy-efficient heated floors with smart scheduling",
      "Sustainable tile materials with recycled content",
      "LED therapy lighting with 80% energy savings",
      "Low-flow fixtures with pressure optimization",
      "Non-toxic, VOC-free finishes and sealers"
    ],
    beautyFeatures: [
      "Hollywood-style vanity lighting with color accuracy",
      "Makeup storage with climate control",
      "Skincare refrigeration for products",
      "Beauty tool charging stations",
      "Professional-grade magnifying mirrors",
      "Steam facials integrated into daily routines"
    ],
    timeline: "3-5 weeks",
    priceRange: "$55,000-$120,000",
    processSteps: [
      {
        title: "Wellness & Beauty Assessment",
        description: "Personal wellness goal analysis, beauty routine evaluation, and health monitoring requirements to design your perfect sanctuary.",
        duration: "3-5 days"
      },
      {
        title: "Spa Design Engineering",
        description: "Steam room engineering, heated floor planning, smart mirror integration, and beauty station design with professional lighting.",
        duration: "1 week"
      },
      {
        title: "Infrastructure Installation",
        description: "Electrical, plumbing, heated floors, steam systems, and smart device pre-wiring for seamless integration.",
        duration: "1 week"
      },
      {
        title: "Luxury Installation",
        description: "Premium finishes, smart mirrors, beauty stations, steam room completion, and all wellness technology integration.",
        duration: "1-2 weeks"
      },
      {
        title: "Wellness Calibration",
        description: "Health monitoring setup, beauty lighting optimization, steam therapy programming, and comprehensive user training.",
        duration: "2-3 days"
      }
    ],
    marketDifferentiators: [
      "Integrated beauty stations (major 2025 trend)",
      "Health monitoring through smart mirrors",
      "Steam therapy with wellness tracking",
      "Professional beauty lighting systems",
      "Complete spa experience at home"
    ],
    trends2025: [
      "Beauty and wellness integration",
      "Health monitoring technology",
      "Therapeutic lighting design",
      "Sustainable luxury materials",
      "Professional-grade home beauty stations"
    ]
  },

  {
    id: "energy-smart-additions",
    title: "Energy-Smart Home Additions",
    shortDescription: "Net-zero energy additions with wellness integration, smart building systems, and seamless indoor-outdoor living.",
    fullDescription: "Create intelligent, energy-positive additions that improve your home's efficiency while expanding your space. Our structural engineering team designs additions with integrated solar systems, smart HVAC, advanced wellness features, and seamless indoor-outdoor connectivity that actually reduce your overall energy costs.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: "energy-smart-additions",
    category: "Sustainable Expansion",
    competitorAdvantage: "While others just add space, we add intelligent, energy-positive space with wellness integration",
    features: [
      "Net-zero energy design with solar integration",
      "Smart HVAC with air purification and wellness monitoring",
      "Advanced insulation and air sealing for health",
      "Energy monitoring with health impact tracking",
      "Structural integration that enhances existing home wellness",
      "Seamless indoor-outdoor living with biophilic design"
    ],
    equipment: [
      "Solar installation and integration equipment",
      "Smart HVAC installation systems",
      "Energy monitoring and automation tools",
      "Advanced insulation installation equipment",
      "Structural engineering and reinforcement tools"
    ],
    wellnessFeatures: [
      "Air quality monitoring and purification systems",
      "Natural light optimization for circadian health",
      "Biophilic design elements with living walls",
      "Noise reduction for stress management",
      "Temperature optimization for sleep quality",
      "Humidity control for respiratory health",
      "EMF reduction through smart design"
    ],
    smartFeatures: [
      "Energy Production: Solar optimization with weather prediction",
      "Health Monitoring: Air quality and environmental wellness tracking",
      "Climate Control: Predictive HVAC with health optimization",
      "Light Management: Circadian rhythm support and mood lighting",
      "Security Integration: Wellness-focused monitoring and automation",
      "Usage Analytics: Health impact reporting and optimization"
    ],
    sustainabilityFeatures: [
      "Net-positive energy production with solar panels",
      "Sustainable building materials with health benefits",
      "Rainwater collection and filtration systems",
      "Native landscaping with wellness garden integration",
      "Carbon-negative construction practices",
      "Waste reduction and recycling systems"
    ],
    timeline: "8-12 weeks",
    priceRange: "$95,000-$275,000",
    processSteps: [
      {
        title: "Wellness & Energy Assessment",
        description: "Comprehensive analysis of energy needs, wellness goals, and structural requirements for optimal health and efficiency integration.",
        duration: "1-2 weeks"
      },
      {
        title: "Structural Engineering & Design",
        description: "Advanced engineering for seamless integration, solar optimization, wellness systems planning, and indoor-outdoor connectivity.",
        duration: "2 weeks"
      },
      {
        title: "Smart Infrastructure Installation",
        description: "Foundation, framing, electrical, plumbing, HVAC, smart systems, and wellness technology pre-installation.",
        duration: "3-4 weeks"
      },
      {
        title: "Energy Systems Integration",
        description: "Solar installation, smart HVAC, energy storage, wellness monitoring systems, and automated controls integration.",
        duration: "2-3 weeks"
      },
      {
        title: "Wellness Optimization & Testing",
        description: "System calibration, energy production optimization, health monitoring setup, and comprehensive performance testing.",
        duration: "1 week"
      }
    ],
    marketDifferentiators: [
      "Net-zero energy with wellness integration",
      "Seamless indoor-outdoor living (competitor gap)",
      "Health-focused smart building systems",
      "Structural engineering with energy optimization",
      "Biophilic design integration"
    ],
    trends2025: [
      "Seamless indoor-outdoor living",
      "Health and wellness integration",
      "Smart technology with AI optimization",
      "Sustainable luxury design",
      "Biophilic design elements"
    ]
  }
];

// Market insights for competitive positioning
export const marketInsights = {
  competitorGaps: [
    "Health & wellness integration in luxury design",
    "Beauty-focused features and professional lighting",
    "Seamless indoor-outdoor living spaces",
    "Smart technology with health monitoring",
    "Equipment ownership for better integration",
    "Luxury aging-in-place solutions",
    "Comprehensive sustainability with luxury aesthetics"
  ],
  trends2025: [
    "Health and wellness as primary design driver",
    "Beauty integration in kitchen and bath design",
    "Smart technology with AI and health monitoring",
    "Sustainable materials without luxury compromise",
    "Seamless indoor-outdoor connectivity",
    "Circadian lighting for health optimization",
    "Professional-grade home beauty stations"
  ],
  sunvicAdvantages: [
    "$200K+ owned equipment fleet for better integration",
    "Engineering expertise for complex wellness systems",
    "First in market with comprehensive wellness integration",
    "Smart technology expertise with health focus",
    "Structural engineering for seamless additions",
    "Equipment ownership ensures project timeline certainty"
  ]
}; 
// Based on market research of luxury home remodeling trends

export interface EnhancedService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  category: string;
  competitorAdvantage: string;
  features: string[];
  equipment: string[];
  wellnessFeatures: string[];
  smartFeatures: string[];
  sustainabilityFeatures: string[];
  beautyFeatures?: string[];
  timeline: string;
  priceRange: string;
  processSteps: {
    title: string;
    description: string;
    duration: string;
  }[];
  marketDifferentiators: string[];
  trends2025: string[];
}

export const enhancedServices: EnhancedService[] = [
  {
    id: "luxury-smart-kitchens",
    title: "Luxury Smart Kitchen Systems",
    shortDescription: "Health-focused smart kitchens with wellness integration, beauty lighting, and AI optimization.",
    fullDescription: "Transform your kitchen into a health and wellness command center with integrated smart appliances, air/water purification, circadian lighting, and beauty stations. Our IoT-integrated systems create intelligent culinary environments that support healthy living, optimize energy usage, and include dedicated beauty prep areas with professional-grade lighting.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: "luxury-smart-kitchens",
    category: "Kitchen Innovation",
    competitorAdvantage: "While competitors focus on aesthetics, we integrate complete wellness ecosystems with owned equipment advantage",
    features: [
      "IoT-integrated appliance networks with health monitoring",
      "AI-powered energy and nutrition optimization",
      "Custom millwork with hidden storage solutions",
      "Professional-grade equipment installation",
      "Voice-controlled home automation with wellness tracking",
      "Integrated beauty and grooming stations"
    ],
    equipment: [
      "Smart home integration systems",
      "Professional appliance installation equipment", 
      "Custom millwork fabrication tools",
      "Air quality monitoring systems",
      "Water filtration installation equipment"
    ],
    wellnessFeatures: [
      "HEPA air filtration with real-time monitoring",
      "Reverse osmosis water systems with mineral enhancement",
      "Steam cooking and air frying appliances for healthy meals",
      "Herb garden integration with grow lights",
      "Circadian rhythm lighting for optimal health",
      "Sound therapy and meditation spaces"
    ],
    smartFeatures: [
      "AI Meal Planning: Nutritional optimization based on health goals",
      "Smart Inventory: Automatic grocery ordering and expiration tracking", 
      "Energy Optimization: Predictive usage patterns and cost reduction",
      "Health Monitoring: Air quality, water purity, and usage analytics",
      "Voice Control: Hands-free operation for hygiene and convenience",
      "Beauty Lighting: Professional-grade lighting for skincare routines"
    ],
    sustainabilityFeatures: [
      "Recycled quartz countertops with zero silica content",
      "Energy-efficient appliances with smart grid integration",
      "Sustainable wood cabinetry with low-VOC finishes",
      "Water conservation systems with usage tracking",
      "LED lighting with 90% energy reduction",
      "Compost integration and waste reduction systems"
    ],
    beautyFeatures: [
      "Makeup station with professional Hollywood lighting",
      "Heated mirrors with anti-fog technology",
      "Beauty product storage with temperature control",
      "Skincare prep area with filtered water",
      "Color-accurate lighting for beauty routines"
    ],
    timeline: "4-6 weeks",
    priceRange: "$65,000-$200,000",
    processSteps: [
      {
        title: "Wellness Assessment & Design",
        description: "Comprehensive health goals analysis, smart home integration planning, and beauty routine assessment to create a personalized kitchen ecosystem.",
        duration: "1 week"
      },
      {
        title: "3D Modeling & Engineering",
        description: "Advanced 3D scanning and structural analysis to optimize layout for wellness features, smart systems, and beauty integration.",
        duration: "3-5 days"
      },
      {
        title: "Smart Systems Pre-Installation", 
        description: "Pre-wiring for smart devices, air quality systems, water filtration, and beauty lighting circuits.",
        duration: "2-3 days"
      },
      {
        title: "Precision Installation",
        description: "Installation of smart appliances, wellness systems, beauty stations, and final system integration with testing.",
        duration: "2-3 weeks"
      },
      {
        title: "Wellness Optimization",
        description: "AI system training, health monitoring setup, beauty lighting calibration, and user training for optimal wellness benefits.",
        duration: "3-5 days"
      }
    ],
    marketDifferentiators: [
      "First in NYC to integrate comprehensive wellness ecosystems",
      "Professional beauty station integration (trending 2025)",
      "AI health optimization (competitor gap)",
      "Equipment ownership ensures smart device compatibility",
      "Circadian lighting for health (major 2025 trend)"
    ],
    trends2025: [
      "Health & wellness integration",
      "Beauty-focused design features", 
      "Smart technology with AI optimization",
      "Sustainable luxury materials",
      "Seamless indoor-outdoor connectivity"
    ]
  },

  {
    id: "spa-bathroom-sanctuaries",
    title: "Spa-Grade Bathroom Sanctuaries", 
    shortDescription: "Wellness-focused bathroom retreats with beauty integration, health monitoring, and therapeutic features.",
    fullDescription: "Create a personal wellness sanctuary with heated floors, custom steam rooms, therapeutic lighting, smart mirrors, integrated sound systems, and professional beauty stations. Our advanced systems include health monitoring, water purification, and beauty-grade lighting that transforms your bathroom into a luxury spa experience.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: "spa-bathroom-sanctuaries",
    category: "Bathroom Innovation",
    competitorAdvantage: "Competitors offer basic bathrooms; we create complete wellness sanctuaries with integrated beauty stations",
    features: [
      "Radiant heated flooring with smart temperature control",
      "Custom steam room with chromotherapy lighting",
      "Smart mirrors with beauty lighting and health tracking",
      "Professional beauty stations with Hollywood lighting",
      "Luxury rainfall and therapeutic body spray systems",
      "Heated towel and robe systems with automated scheduling"
    ],
    equipment: [
      "Radiant heating installation systems",
      "Steam generation and safety equipment",
      "Advanced plumbing and electrical tools",
      "Smart mirror installation equipment",
      "Beauty lighting installation tools"
    ],
    wellnessFeatures: [
      "Steam therapy with essential oil diffusion",
      "Chromotherapy lighting for mood enhancement", 
      "Air purification with UV-C sterilization",
      "Water filtration for skin and hair health",
      "Sound therapy with waterproof speakers",
      "Temperature therapy with contrast showers",
      "Health monitoring through smart mirrors"
    ],
    smartFeatures: [
      "Health Monitoring: Daily wellness tracking through smart mirrors",
      "Beauty Optimization: Lighting adjustment for skincare routines",
      "Steam Control: Automated steam sessions with health benefits tracking",
      "Water Quality: Smart filtration with mineral optimization for skin",
      "Mood Lighting: Circadian rhythm support and therapy lighting",
      "Sound Wellness: Meditation and relaxation audio integration"
    ],
    sustainabilityFeatures: [
      "Water recycling systems for steam and showers",
      "Energy-efficient heated floors with smart scheduling",
      "Sustainable tile materials with recycled content",
      "LED therapy lighting with 80% energy savings",
      "Low-flow fixtures with pressure optimization",
      "Non-toxic, VOC-free finishes and sealers"
    ],
    beautyFeatures: [
      "Hollywood-style vanity lighting with color accuracy",
      "Makeup storage with climate control",
      "Skincare refrigeration for products",
      "Beauty tool charging stations",
      "Professional-grade magnifying mirrors",
      "Steam facials integrated into daily routines"
    ],
    timeline: "3-5 weeks",
    priceRange: "$55,000-$120,000",
    processSteps: [
      {
        title: "Wellness & Beauty Assessment",
        description: "Personal wellness goal analysis, beauty routine evaluation, and health monitoring requirements to design your perfect sanctuary.",
        duration: "3-5 days"
      },
      {
        title: "Spa Design Engineering",
        description: "Steam room engineering, heated floor planning, smart mirror integration, and beauty station design with professional lighting.",
        duration: "1 week"
      },
      {
        title: "Infrastructure Installation",
        description: "Electrical, plumbing, heated floors, steam systems, and smart device pre-wiring for seamless integration.",
        duration: "1 week"
      },
      {
        title: "Luxury Installation",
        description: "Premium finishes, smart mirrors, beauty stations, steam room completion, and all wellness technology integration.",
        duration: "1-2 weeks"
      },
      {
        title: "Wellness Calibration",
        description: "Health monitoring setup, beauty lighting optimization, steam therapy programming, and comprehensive user training.",
        duration: "2-3 days"
      }
    ],
    marketDifferentiators: [
      "Integrated beauty stations (major 2025 trend)",
      "Health monitoring through smart mirrors",
      "Steam therapy with wellness tracking",
      "Professional beauty lighting systems",
      "Complete spa experience at home"
    ],
    trends2025: [
      "Beauty and wellness integration",
      "Health monitoring technology",
      "Therapeutic lighting design",
      "Sustainable luxury materials",
      "Professional-grade home beauty stations"
    ]
  },

  {
    id: "energy-smart-additions",
    title: "Energy-Smart Home Additions",
    shortDescription: "Net-zero energy additions with wellness integration, smart building systems, and seamless indoor-outdoor living.",
    fullDescription: "Create intelligent, energy-positive additions that improve your home's efficiency while expanding your space. Our structural engineering team designs additions with integrated solar systems, smart HVAC, advanced wellness features, and seamless indoor-outdoor connectivity that actually reduce your overall energy costs.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: "energy-smart-additions",
    category: "Sustainable Expansion",
    competitorAdvantage: "While others just add space, we add intelligent, energy-positive space with wellness integration",
    features: [
      "Net-zero energy design with solar integration",
      "Smart HVAC with air purification and wellness monitoring",
      "Advanced insulation and air sealing for health",
      "Energy monitoring with health impact tracking",
      "Structural integration that enhances existing home wellness",
      "Seamless indoor-outdoor living with biophilic design"
    ],
    equipment: [
      "Solar installation and integration equipment",
      "Smart HVAC installation systems",
      "Energy monitoring and automation tools",
      "Advanced insulation installation equipment",
      "Structural engineering and reinforcement tools"
    ],
    wellnessFeatures: [
      "Air quality monitoring and purification systems",
      "Natural light optimization for circadian health",
      "Biophilic design elements with living walls",
      "Noise reduction for stress management",
      "Temperature optimization for sleep quality",
      "Humidity control for respiratory health",
      "EMF reduction through smart design"
    ],
    smartFeatures: [
      "Energy Production: Solar optimization with weather prediction",
      "Health Monitoring: Air quality and environmental wellness tracking",
      "Climate Control: Predictive HVAC with health optimization",
      "Light Management: Circadian rhythm support and mood lighting",
      "Security Integration: Wellness-focused monitoring and automation",
      "Usage Analytics: Health impact reporting and optimization"
    ],
    sustainabilityFeatures: [
      "Net-positive energy production with solar panels",
      "Sustainable building materials with health benefits",
      "Rainwater collection and filtration systems",
      "Native landscaping with wellness garden integration",
      "Carbon-negative construction practices",
      "Waste reduction and recycling systems"
    ],
    timeline: "8-12 weeks",
    priceRange: "$95,000-$275,000",
    processSteps: [
      {
        title: "Wellness & Energy Assessment",
        description: "Comprehensive analysis of energy needs, wellness goals, and structural requirements for optimal health and efficiency integration.",
        duration: "1-2 weeks"
      },
      {
        title: "Structural Engineering & Design",
        description: "Advanced engineering for seamless integration, solar optimization, wellness systems planning, and indoor-outdoor connectivity.",
        duration: "2 weeks"
      },
      {
        title: "Smart Infrastructure Installation",
        description: "Foundation, framing, electrical, plumbing, HVAC, smart systems, and wellness technology pre-installation.",
        duration: "3-4 weeks"
      },
      {
        title: "Energy Systems Integration",
        description: "Solar installation, smart HVAC, energy storage, wellness monitoring systems, and automated controls integration.",
        duration: "2-3 weeks"
      },
      {
        title: "Wellness Optimization & Testing",
        description: "System calibration, energy production optimization, health monitoring setup, and comprehensive performance testing.",
        duration: "1 week"
      }
    ],
    marketDifferentiators: [
      "Net-zero energy with wellness integration",
      "Seamless indoor-outdoor living (competitor gap)",
      "Health-focused smart building systems",
      "Structural engineering with energy optimization",
      "Biophilic design integration"
    ],
    trends2025: [
      "Seamless indoor-outdoor living",
      "Health and wellness integration",
      "Smart technology with AI optimization",
      "Sustainable luxury design",
      "Biophilic design elements"
    ]
  }
];

// Market insights for competitive positioning
export const marketInsights = {
  competitorGaps: [
    "Health & wellness integration in luxury design",
    "Beauty-focused features and professional lighting",
    "Seamless indoor-outdoor living spaces",
    "Smart technology with health monitoring",
    "Equipment ownership for better integration",
    "Luxury aging-in-place solutions",
    "Comprehensive sustainability with luxury aesthetics"
  ],
  trends2025: [
    "Health and wellness as primary design driver",
    "Beauty integration in kitchen and bath design",
    "Smart technology with AI and health monitoring",
    "Sustainable materials without luxury compromise",
    "Seamless indoor-outdoor connectivity",
    "Circadian lighting for health optimization",
    "Professional-grade home beauty stations"
  ],
  sunvicAdvantages: [
    "$200K+ owned equipment fleet for better integration",
    "Engineering expertise for complex wellness systems",
    "First in market with comprehensive wellness integration",
    "Smart technology expertise with health focus",
    "Structural engineering for seamless additions",
    "Equipment ownership ensures project timeline certainty"
  ]
}; 