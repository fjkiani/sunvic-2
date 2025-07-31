// Centralized content management for SunVic website
// This approach follows DRY principles and makes content updates easy

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
  icon?: string;
}

export interface AdvancedService {
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
  timeline: string;
  priceRange: string;
  link: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  credentials?: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  beforeAfter?: {
    before: string;
    after: string;
  };
  details: {
    duration: string;
    budget: string;
    scope: string[];
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  project: string;
  avatar?: string; // Add avatar field for testimonial icons
}

// Company Information
export const companyInfo = {
  name: 'SunVic',
  tagline: 'Engineering Excellence in Every Project',
  founder: {
    name: 'Sunny Rattu',
    credentials: 'Engineering Graduate, Rutgers University',
    philosophy: 'Engineering-first approach to luxury home remodeling'
  },
  contact: {
    phone: '732-824-9203',
    email: 'sunvicnj@gmail.com',
    address: 'Old Bridge, NJ',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM'
  },
  social: {
    facebook: 'https://facebook.com/sunvichomes',
    instagram: 'https://instagram.com/sunvichomes',
    linkedin: 'https://linkedin.com/company/sunvichomes',
    youtube: 'https://youtube.com/sunvichomes'
  }
};

// Core Differentiators (from the provided context)
export const coreDifferentiators = [
  {
    title: 'Engineering-Led Design',
    description: 'Every project is approached with systematic, precision-oriented methodology that guarantees structural soundness and flawless execution.',
    icon: 'engineering'
  },
  {
    title: 'Integrated Equipment Rental',
    description: 'Direct control over specialized tools and heavy machinery eliminates delays and reduces costs.',
    icon: 'equipment'
  },
  {
    title: 'Proven Reliability',
    description: 'Built on Sunny Ritu\'s established reputation for delivering projects on time and within budget.',
    icon: 'reliability'
  }
];

// Advanced Home Renovation Services - Surpassing NJ Competitors
export const advancedRenovationServices = {
  sectionTitle: {
    preTitle: "Luxury Home Transformation",
    title: "Revolutionary Home Renovation Services",
    description: "While other NJ contractors rely on rentals and subcontractors, SunVic's owned equipment fleet and integrated approach delivers services that competitors simply cannot match.",
    viewAllText: "View All Advanced Services",
    viewAllLink: "/services"
  },
  
  services: [
    {
      id: "smart-structural-engineering",
      title: "Smart Structural Engineering",
      shortDescription: "AI-powered structural analysis with real-time 3D modeling and instant load calculations.",
      fullDescription: "Our engineers use advanced structural analysis software combined with 3D scanning technology to create precise digital twins of your home. This allows for complex renovations that competitors avoid, including load-bearing wall removal, multi-story additions, and foundation modifications.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "smart-structural-engineering",
      category: "Engineering & Planning",
      competitorAdvantage: "While Bellari and Laslo avoid complex structural work, we embrace it",
      features: [
        "3D structural scanning and analysis",
        "Real-time load calculation software",
        "Seismic and wind resistance optimization",
        "Foundation reinforcement planning",
        "Multi-story addition engineering"
      ],
      equipment: ["Structural analysis software", "3D laser scanners", "Ground-penetrating radar"],
      timeline: "2-3 weeks",
      priceRange: "$5,000-$15,000",
      link: "/service-details/smart-structural-engineering"
    },
    
    {
      id: "rapid-demolition-reconstruction",
      title: "Rapid Demolition & Reconstruction",
      shortDescription: "Complete room transformation in 48-72 hours using our owned heavy equipment fleet.",
      fullDescription: "Our owned excavators, concrete breakers, and specialized demolition equipment allow us to complete full kitchen or bathroom demolition and structural prep in days, not weeks. No waiting for rental equipment or coordinating multiple subcontractors.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "rapid-demolition-reconstruction",
      category: "Demolition & Reconstruction",
      competitorAdvantage: "KraftMaster and Advantage take 2-3 weeks for what we do in 3 days",
      features: [
        "48-hour complete room demolition",
        "Precision concrete cutting and removal",
        "Structural steel installation",
        "Immediate debris removal",
        "Same-day electrical and plumbing rough-in"
      ],
      equipment: ["Excavators", "Concrete breakers", "Steel cutting equipment", "Debris removal trucks"],
      timeline: "2-3 days",
      priceRange: "$8,000-$25,000",
      link: "/service-details/rapid-demolition-reconstruction"
    },
    
    {
      id: "luxury-smart-kitchens",
      title: "Luxury Smart Kitchen Systems",
      shortDescription: "Fully integrated smart kitchens with IoT appliances, automated systems, and custom millwork.",
      fullDescription: "Beyond basic kitchen remodeling, we create intelligent culinary environments with integrated smart appliances, automated lighting and climate control, custom storage solutions, and professional-grade equipment installation.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "luxury-smart-kitchens",
      category: "Kitchen Innovation",
      competitorAdvantage: "While Laslo Kitchens focuses on cabinets, we integrate entire smart ecosystems",
      features: [
        "IoT-integrated appliance networks",
        "Automated lighting and climate systems",
        "Custom millwork and storage solutions",
        "Professional-grade equipment installation",
        "Voice-controlled home automation",
        "Energy monitoring and optimization"
      ],
      equipment: ["Custom millwork tools", "Smart home integration systems", "Professional appliance installation equipment"],
      timeline: "3-4 weeks",
      priceRange: "$45,000-$150,000",
      link: "/service-details/luxury-smart-kitchens"
    },
    
    {
      id: "spa-bathroom-sanctuaries",
      title: "Spa-Grade Bathroom Sanctuaries",
      shortDescription: "Luxury spa experiences with heated floors, steam systems, and therapeutic features.",
      fullDescription: "Transform bathrooms into personal wellness retreats with heated flooring systems, custom steam rooms, therapeutic lighting, smart mirrors, and integrated sound systems. Our plumbing and electrical teams handle complex installations that typical contractors cannot.",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "spa-bathroom-sanctuaries",
      category: "Bathroom Innovation",
      competitorAdvantage: "Magnolia and Block Renovation offer basic bathrooms; we create wellness sanctuaries",
      features: [
        "Radiant heated flooring systems",
        "Custom steam room installation",
        "Therapeutic chromotherapy lighting",
        "Smart mirror and sound integration",
        "Luxury rainfall and body spray systems",
        "Heated towel and robe systems"
      ],
      equipment: ["Radiant heating systems", "Steam generation equipment", "Advanced plumbing tools"],
      timeline: "2-3 weeks",
      priceRange: "$35,000-$85,000",
      link: "/service-details/spa-bathroom-sanctuaries"
    },
    
    {
      id: "outdoor-living-ecosystems",
      title: "Outdoor Living Ecosystems",
      shortDescription: "Complete outdoor transformation with kitchens, fire features, and entertainment systems.",
      fullDescription: "Our excavation and concrete capabilities allow us to create stunning outdoor living spaces with custom patios, outdoor kitchens, fire features, water elements, and integrated entertainment systems. All done in-house without subcontractors.",
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "outdoor-living-ecosystems",
      category: "Outdoor Innovation",
      competitorAdvantage: "JMC and Monk's subcontract everything; we own the equipment to do it all",
      features: [
        "Custom concrete and stone work",
        "Outdoor kitchen and bar installation",
        "Fire pit and fireplace construction",
        "Water feature integration",
        "Outdoor entertainment systems",
        "Landscape lighting and irrigation"
      ],
      equipment: ["Excavators", "Concrete mixers", "Stone cutting equipment", "Landscape machinery"],
      timeline: "3-5 weeks",
      priceRange: "$25,000-$75,000",
      link: "/service-details/outdoor-living-ecosystems"
    },
    
    {
      id: "energy-smart-additions",
      title: "Energy-Smart Home Additions",
      shortDescription: "Net-zero energy additions with solar integration and smart building systems.",
      fullDescription: "Our structural engineering team designs additions that not only expand your space but improve your home's energy efficiency. Integrated solar systems, smart HVAC, and advanced insulation create additions that pay for themselves.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "energy-smart-additions",
      category: "Sustainable Expansion",
      competitorAdvantage: "While others just add space, we add intelligent, energy-positive space",
      features: [
        "Net-zero energy design",
        "Integrated solar panel systems",
        "Smart HVAC and climate control",
        "Advanced insulation and air sealing",
        "Energy monitoring and optimization",
        "Structural integration with existing home"
      ],
      equipment: ["Solar installation equipment", "Energy monitoring systems", "Advanced insulation tools"],
      timeline: "6-10 weeks",
      priceRange: "$75,000-$200,000",
      link: "/service-details/energy-smart-additions"
    },
    
    {
      id: "basement-transformation-suites",
      title: "Basement Transformation Suites",
      shortDescription: "Complete basement conversions into luxury living spaces with moisture control and smart systems.",
      fullDescription: "Our waterproofing and excavation expertise allows us to transform basements into stunning living spaces. We handle moisture control, ceiling height increases, emergency egress, and luxury finishes that create true lower-level living suites.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "basement-transformation-suites",
      category: "Space Expansion",
      competitorAdvantage: "Competitors avoid complex basement work; we specialize in it",
      features: [
        "Professional waterproofing systems",
        "Ceiling height increase (dig-down)",
        "Emergency egress installation",
        "Luxury flooring and finishes",
        "Full kitchen and bathroom installation",
        "Smart lighting and climate control"
      ],
      equipment: ["Waterproofing systems", "Excavation equipment", "Concrete cutting tools"],
      timeline: "4-6 weeks",
      priceRange: "$35,000-$95,000",
      link: "/service-details/basement-transformation-suites"
    },
    
    {
      id: "whole-home-automation",
      title: "Whole-Home Automation Integration",
      shortDescription: "Complete smart home transformation with integrated systems and AI-powered optimization.",
      fullDescription: "Beyond basic smart devices, we create integrated home ecosystems with centralized control, AI-powered optimization, security integration, and energy management. Our electrical team handles complex wiring and system integration.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "whole-home-automation",
      category: "Smart Home Technology",
      competitorAdvantage: "Others install devices; we create intelligent home ecosystems",
      features: [
        "Centralized smart home control",
        "AI-powered energy optimization",
        "Integrated security and monitoring",
        "Voice and app-based control",
        "Automated lighting and climate",
        "Smart appliance orchestration"
      ],
      equipment: ["Smart home hubs", "Advanced wiring systems", "Automation controllers"],
      timeline: "2-4 weeks",
      priceRange: "$15,000-$45,000",
      link: "/service-details/whole-home-automation"
    },
    
    {
      id: "luxury-aging-in-place",
      title: "Luxury Aging-in-Place Solutions",
      shortDescription: "Sophisticated accessibility modifications that maintain luxury aesthetics and home value.",
      fullDescription: "Our aging-in-place modifications don't compromise style. We create seamless accessibility solutions including zero-threshold showers, hidden grab bars, smart lighting, and emergency response systems that blend with luxury design.",
      image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "luxury-aging-in-place",
      category: "Accessibility & Wellness",
      competitorAdvantage: "Others make homes accessible; we make them accessible and beautiful",
      features: [
        "Zero-threshold luxury showers",
        "Hidden and stylish grab bars",
        "Smart lighting and emergency systems",
        "Accessible kitchen and bathroom design",
        "Ramp and entrance modifications",
        "Smart home health monitoring"
      ],
      equipment: ["Accessibility modification tools", "Smart health monitoring systems"],
      timeline: "2-3 weeks",
      priceRange: "$20,000-$60,000",
      link: "/service-details/luxury-aging-in-place"
    }
  ],
  
  // Service categories for filtering
  categories: [
    { id: "all", name: "All Services", count: 9 },
    { id: "engineering", name: "Engineering & Planning", count: 1 },
    { id: "demolition", name: "Demolition & Reconstruction", count: 1 },
    { id: "kitchen", name: "Kitchen Innovation", count: 1 },
    { id: "bathroom", name: "Bathroom Innovation", count: 1 },
    { id: "outdoor", name: "Outdoor Innovation", count: 1 },
    { id: "expansion", name: "Space Expansion", count: 2 },
    { id: "technology", name: "Smart Home Technology", count: 1 },
    { id: "accessibility", name: "Accessibility & Wellness", count: 1 }
  ]
};

// Basic Services Data (keeping for backwards compatibility)
export const services: Service[] = [
  {
    id: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into a culinary masterpiece with our engineering-precision approach.',
    features: [
      'Custom cabinet design & installation',
      'Premium countertop solutions',
      'Advanced electrical & plumbing',
      'Smart appliance integration',
      'Professional lighting design'
    ],
    icon: 'kitchen'
  },
  {
    id: 'bathroom-renovation',
    title: 'Bathroom Renovation',
    description: 'Create luxury spa-like bathrooms with systematic attention to functionality and aesthetics.',
    features: [
      'Modern fixture installation',
      'Custom tile & stonework',
      'Heated flooring systems',
      'Advanced ventilation',
      'Water-efficient solutions'
    ],
    icon: 'bathroom'
  },
  {
    id: 'home-additions',
    title: 'Home Additions',
    description: 'Expand your living space with structurally sound, beautifully integrated additions.',
    features: [
      'Structural engineering analysis',
      'Foundation & framing work',
      'Electrical & plumbing integration',
      'Energy-efficient design',
      'Seamless architectural integration'
    ],
    icon: 'addition'
  },
  {
    id: 'custom-carpentry',
    title: 'Custom Carpentry',
    description: 'Precision-crafted built-ins, trim work, and custom millwork using advanced techniques.',
    features: [
      'Built-in storage solutions',
      'Crown molding & trim',
      'Custom shelving & cabinetry',
      'Hardwood flooring',
      'Architectural millwork'
    ],
    icon: 'carpentry'
  },
  {
    id: 'equipment-rental',
    title: 'Equipment Rental',
    description: 'Access to our professional-grade equipment for contractors and DIY enthusiasts.',
    features: [
      'Heavy machinery rental',
      'Specialized tools & equipment',
      'Delivery & pickup service',
      'Expert operation guidance',
      'Competitive daily/weekly rates'
    ],
    icon: 'equipment'
  }
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: 'sunny',
    name: 'Sunny ',
    role: 'Founder & Lead Engineer',
    bio: 'Rutgers University engineering graduate with a passion for precision and quality. Sunny brings systematic engineering methodology to luxury home remodeling.',
    credentials: [
      'Engineering Degree, Rutgers University',
      'Licensed General Contractor',
      'Certified Remodeler',
      '15+ Years Construction Experience'
    ]
  }
];

// Sample Projects Data
export const projects: ProjectData[] = [
  {
    id: 'manhattan-penthouse',
    title: 'Manhattan Penthouse Kitchen',
    category: 'Kitchen Remodeling',
    description: 'Complete luxury kitchen transformation with custom cabinetry and premium appliances.',
    images: ['/images/projects/penthouse-1.jpg', '/images/projects/penthouse-2.jpg'],
    details: {
      duration: '8 weeks',
      budget: '$85,000 - $120,000',
      scope: ['Custom cabinetry', 'Marble countertops', 'High-end appliances', 'Smart home integration']
    }
  },
  {
    id: 'brooklyn-bathroom',
    title: 'Brooklyn Heights Master Bath',
    category: 'Bathroom Renovation',
    description: 'Spa-inspired master bathroom with heated floors and smart fixtures.',
    images: ['/images/projects/bathroom-1.jpg', '/images/projects/bathroom-2.jpg'],
    details: {
      duration: '6 weeks',
      budget: '$45,000 - $65,000',
      scope: ['Heated flooring', 'Custom vanity', 'Walk-in shower', 'Smart mirrors']
    }
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'fahad-kiani',
    name: 'Fahad Kiani',
    role: 'Local Guide • 41 reviews • 30 photos',
    content: 'Sunny is a highly skilled professional who excels in home remodeling, renovations, and construction services. The quality of work is both dependable and impeccable. I highly recommend Sunvic for anyone looking to remodel or design their home.',
    rating: 5,
    project: 'Home Remodeling & Design',
    avatar: 'fahad-kiani.svg'
  },
  {
    id: 'a-shah',
    name: 'A Shah',
    role: 'Verified Customer',
    content: 'Highly professional. Very reasonable price for the flooring he did for my home. Will recommend his service to friends and family.',
    rating: 5,
    project: 'Flooring Installation',
    avatar: 'a-shah.svg'
  },
  {
    id: 'ambikasamar',
    name: 'Ambikasamar',
    role: 'Verified Customer • 5 reviews',
    content: 'Great Contractor. Very nice people. Excellent job done for my bathroom. I highly recommend him.',
    rating: 5,
    project: 'Bathroom Renovation',
    avatar: 'ambikasamar.svg'
  },
  {
    id: 'preet-s',
    name: 'Preet S',
    role: 'Verified Customer • 5 reviews',
    content: 'The amount of quality work SR provide is beyond amazing.. I\'m amazed with SR service him and his team did a great job in our whole house. He always answered our phone when contractors ignore your calls after the deposit that can be scary but SR he always answered my phone calls.. just amazing. I definitely recommend this company. Thank you so much for making our house look so beautiful :) we get so many compliments.',
    rating: 5,
    project: 'Whole House Renovation',
    avatar: 'preet-s.svg'
  }
];

// FAQ Data
export const faqs = [
  {
    question: 'What makes SunVic different from other remodeling companies?',
    answer: 'Our founder\'s engineering background from Rutgers University brings a systematic, precision-oriented approach to every project. Plus, our integrated equipment rental business eliminates common delays and cost overruns.'
  },
  {
    question: 'Do you handle permits and inspections?',
    answer: 'Yes, we handle all permit applications and coordinate with city inspectors. Our engineering background ensures all work meets or exceeds building codes.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve the NYC metropolitan area, including Manhattan, Brooklyn, Queens, and the Bronx.'
  },
  {
    question: 'How do you provide project estimates?',
    answer: 'We provide detailed, transparent estimates after an in-home consultation. Our engineering approach allows us to identify potential issues early and provide accurate budgets.'
  },
  {
    question: 'What warranty do you provide?',
    answer: 'We provide comprehensive warranties on all workmanship and materials. Specific terms vary by project scope and materials used.'
  }
];

// Blog/News Articles (sample)
export const blogPosts = [
  {
    id: 'engineering-approach-remodeling',
    title: 'Why an Engineering Approach Matters in Home Remodeling',
    excerpt: 'Discover how systematic engineering methodology ensures superior results in luxury home renovations.',
    date: '2024-03-15',
    category: 'Insights',
    readTime: '5 min read'
  },
  {
    id: 'kitchen-trends-2024',
    title: '2024 Kitchen Design Trends That Last',
    excerpt: 'Explore timeless kitchen design trends that combine beauty with functional engineering.',
    date: '2024-03-10',
    category: 'Design',
    readTime: '7 min read'
  }
]; 