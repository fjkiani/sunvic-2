// Enhanced Service Data with 2025 Trends & Competitive Insights
// Based on market research of luxury home remodeling trends

export interface EnhancedService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  iconComponent?: string; // For dynamic icon mapping
  category: string;
  categoryColor?: string; // For dynamic color mapping
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

// Icon and color mapping configuration
export const serviceConfig = {
  icons: {
    'ground-up-construction': 'BuildingOfficeIcon',
    'full-home-remodeling': 'HomeIcon',
    'rapid-demolition-reconstruction': 'WrenchScrewdriverIcon', 
    'luxury-smart-kitchens': 'HomeIcon',
    'spa-bathroom-sanctuaries': 'SparklesIcon',
    'outdoor-living-ecosystems': 'BuildingOfficeIcon',
    'energy-smart-additions': 'HomeIcon',
    'basement-transformation-suites': 'HomeIcon',
    'whole-home-automation': 'Cog6ToothIcon',
    'luxury-aging-in-place': 'UserGroupIcon',
    // Default fallback
    'default': 'WrenchScrewdriverIcon'
  } as Record<string, string>,
  categoryColors: {
    'Ground Up Construction': 'bg-amber-600',
    'Whole Home Transformation': 'bg-purple-600',
    'Demolition & Reconstruction': 'bg-red-600',
    'Kitchen Innovation': 'bg-orange-600',
    'Bathroom Innovation': 'bg-cyan-600',
    'Outdoor Innovation': 'bg-green-600',
    'Sustainable Expansion': 'bg-emerald-600',
    'Space Expansion': 'bg-purple-600',
    'Smart Home Technology': 'bg-indigo-600',
    'Accessibility & Wellness': 'bg-pink-600',
    // Default fallback
    'default': 'bg-blue-600'
  } as Record<string, string>
};

export const enhancedServices: EnhancedService[] = [
  {
    id: "ground-up-construction",
    title: "Ground Up Construction",
    shortDescription: "Complete new home construction from foundation to finish with structural engineering expertise and superior craftsmanship.",
    fullDescription: "Transform your vision into reality with our comprehensive ground-up construction services. From initial site preparation and foundation work to final finishing touches, we handle every aspect of new home construction. Our structural engineering expertise ensures code compliance, safety, and longevity while delivering the modern, energy-efficient home you've always dreamed of.",
    image: "/images/full-home-remodel/1.jpg",
    icon: "ground-up-construction",
    iconComponent: "BuildingOfficeIcon",
    category: "Ground Up Construction",
    categoryColor: "bg-amber-600",
    competitorAdvantage: "Unlike general contractors, we combine structural engineering expertise with construction execution - ensuring your home is built right from the ground up with no costly engineering surprises",
    features: [
      "Complete site preparation and excavation services",
      "Engineered foundation systems with proper drainage",
      "Structural framing with advanced engineering analysis",
      "Modern building envelope and energy efficiency",
      "Full electrical, plumbing, and HVAC integration",
      "Custom architectural details and finish work"
    ],
    equipment: [
      "Excavation and earthmoving equipment",
      "Foundation forming and concrete systems", 
      "Advanced framing tools and laser levels",
      "Crane services for structural elements",
      "Professional grade power tools and equipment"
    ],
    wellnessFeatures: [
      "Optimized natural lighting and ventilation design",
      "Non-toxic building materials and low-VOC finishes",
      "Advanced air filtration and HVAC systems",
      "Sound insulation for peaceful living spaces",
      "Universal design principles for accessibility",
      "Energy-efficient systems reducing environmental impact"
    ],
    smartFeatures: [
      "Smart home pre-wiring throughout the structure",
      "Energy monitoring and management systems", 
      "Advanced security system integration",
      "Home automation infrastructure planning",
      "High-speed networking and WiFi optimization",
      "Future-ready technology infrastructure"
    ],
    sustainabilityFeatures: [
      "Energy-efficient building envelope design",
      "Sustainable and locally-sourced materials",
      "Water conservation plumbing systems",
      "Solar-ready electrical infrastructure",
      "High-performance insulation and windows",
      "Waste reduction and recycling during construction"
    ],
    timeline: "8-12 months",
    priceRange: "$450,000-$850,000",
    processSteps: [
      {
        title: "Design & Engineering Phase",
        description: "Architectural planning, structural engineering analysis, permit acquisition, and detailed construction drawings. Site survey and soil analysis included.",
        duration: "4-6 weeks"
      },
      {
        title: "Site Preparation & Foundation",
        description: "Excavation, utility connections, foundation forming, concrete pouring, and waterproofing. Includes all below-grade work and site drainage.",
        duration: "3-4 weeks"
      },
      {
        title: "Structural Framing", 
        description: "Complete structural framing including floor systems, walls, roof trusses, and sheathing. Includes structural inspections and engineering verification.",
        duration: "3-4 weeks"
      },
      {
        title: "Systems Installation",
        description: "Electrical, plumbing, and HVAC rough-in work. Insulation installation and drywall completion. All systems tested and inspected.",
        duration: "6-8 weeks"
      },
      {
        title: "Finish Work & Final Details",
        description: "Flooring, cabinetry, trim work, painting, fixtures, and final inspections. Landscaping and exterior finishing included.",
        duration: "8-10 weeks"
      }
    ],
    marketDifferentiators: [
      "Structural engineer on staff ensures proper foundation and framing",
      "Comprehensive project management from start to finish",
      "Energy efficiency focus with modern building techniques",
      "Transparent pricing with detailed project tracking",
      "Local expertise with New Jersey building codes and soil conditions"
    ],
    trends2025: [
      "Energy-efficient new construction",
      "Smart home integration from day one", 
      "Sustainable building materials and practices",
      "Open floor plans with flexible spaces",
      "Advanced HVAC and air quality systems"
    ]
  },

  {
    id: "full-home-remodeling",
    title: "Full Home Remodeling",
    shortDescription: "Complete home transformation including kitchen, bathrooms, basement, and smart home integration with seamless project coordination.",
    fullDescription: "Transform your entire home with our comprehensive remodeling approach. We coordinate all phases from kitchen and bathroom renovations to basement finishing and smart home integration, ensuring a cohesive design and efficient timeline. Our engineering expertise allows us to handle complex structural modifications while integrating modern technology throughout your home.",
    image: "/images/full-home-remodel/fullHome.png",
    icon: "full-home-remodeling",
    iconComponent: "HomeIcon",
    category: "Whole Home Transformation",
    categoryColor: "bg-purple-600",
    competitorAdvantage: "While competitors handle projects piecemeal, we coordinate all phases simultaneously - ensuring design coherence, timeline efficiency, and cost savings through bulk purchasing and integrated planning",
    features: [
      "Comprehensive kitchen renovation with smart appliances",
      "Luxury bathroom transformations with spa features",
      "Basement finishing with entertainment and utility zones",
      "Whole-home smart technology integration",
      "Structural modifications and space optimization",
      "Energy efficiency upgrades throughout"
    ],
    equipment: [
      "Advanced kitchen installation tools and equipment",
      "Bathroom renovation and plumbing systems",
      "Basement waterproofing and finishing equipment",
      "Smart home automation installation tools",
      "Electrical and networking infrastructure equipment"
    ],
    wellnessFeatures: [
      "Air quality improvement with whole-home filtration",
      "Water purification systems throughout the home",
      "Circadian lighting in all living spaces",
      "Sound dampening for peaceful environments",
      "Non-toxic materials and low-VOC finishes",
      "Temperature and humidity control optimization"
    ],
    smartFeatures: [
      "Integrated home automation with centralized control",
      "Smart security systems with mobile monitoring",
      "Energy management and optimization systems",
      "Automated lighting and climate control",
      "High-speed networking infrastructure",
      "Voice control integration throughout"
    ],
    sustainabilityFeatures: [
      "Energy-efficient appliances and systems",
      "Sustainable material selection",
      "Water conservation fixtures and systems",
      "LED lighting conversion throughout",
      "Insulation and weatherization upgrades",
      "Solar-ready electrical infrastructure"
    ],
    timeline: "12-16 weeks",
    priceRange: "$150,000-$400,000",
    processSteps: [
      {
        title: "Design & Planning Phase",
        description: "Comprehensive home assessment, integrated design planning, permits, and detailed project coordination across all renovation areas.",
        duration: "3-4 weeks"
      },
      {
        title: "Kitchen Renovation",
        description: "Complete kitchen transformation including cabinetry, countertops, appliances, and smart technology integration.",
        duration: "4-5 weeks"
      },
      {
        title: "Bathroom Transformations",
        description: "Luxury bathroom renovations with spa features, modern fixtures, and smart home integration.",
        duration: "3-4 weeks"
      },
      {
        title: "Basement Finishing",
        description: "Complete basement transformation including waterproofing, flooring, lighting, and entertainment areas.",
        duration: "4-6 weeks"
      },
      {
        title: "Smart Home Integration & Final Details",
        description: "Whole-home technology installation, final finishing touches, system testing, and client training.",
        duration: "2-3 weeks"
      }
    ],
    marketDifferentiators: [
      "Simultaneous coordination of all renovation phases",
      "Integrated smart home technology from day one",
      "Structural engineering expertise for complex modifications",
      "Bulk purchasing power reduces costs across all phases",
      "Single point of contact for entire home transformation"
    ],
    trends2025: [
      "Whole-home integration and smart technology",
      "Multi-functional spaces and flexible layouts",
      "Wellness-focused design throughout the home",
      "Sustainable materials and energy efficiency",
      "Seamless indoor-outdoor living integration"
    ]
  },

  {
    id: "spa-bathroom-sanctuaries",
    title: "Spa-Grade Bathroom Sanctuaries", 
    shortDescription: "Wellness-focused bathroom retreats with beauty integration, health monitoring, and therapeutic features.",
    fullDescription: "Create a personal wellness sanctuary with heated floors, custom steam rooms, therapeutic lighting, smart mirrors, integrated sound systems, and professional beauty stations. Our advanced systems include health monitoring, water purification, and beauty-grade lighting that transforms your bathroom into a luxury spa experience.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    icon: "spa-bathroom-sanctuaries",
    iconComponent: "SparklesIcon",
    category: "Bathroom Innovation",
    categoryColor: "bg-cyan-600",
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
    iconComponent: "HomeIcon",
    category: "Sustainable Expansion",
    categoryColor: "bg-emerald-600",
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
  iconComponent?: string; // For dynamic icon mapping
  category: string;
  categoryColor?: string; // For dynamic color mapping
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

