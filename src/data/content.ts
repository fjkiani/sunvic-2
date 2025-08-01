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
    description: 'Built on Sunny Rattu\'s established reputation for delivering projects on time and within budget.',
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
      id: "full-kitchen-remodeling",
      title: "Full Kitchen Remodeling",
      shortDescription: "Full kitchen remodeling with custom cabinetry, countertops, appliances, and smart systems.",
      fullDescription: "Beyond basic kitchen remodeling, we create intelligent culinary environments with integrated smart appliances, automated lighting and climate control, custom storage solutions, and professional-grade equipment installation.",
      image: "https://drive.google.com/drive/folders/109IMZmWESteMDxzGHAOKdahBrSUPniOU?dmr=1&ec=wgc-drive-hero-goto",
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
    project: 'Home Remodeling & Design'
  },
  {
    id: 'a-shah',
    name: 'A Shah',
    role: 'Verified Customer',
    content: 'Highly professional. Very reasonable price for the flooring he did for my home. Will recommend his service to friends and family.',
    rating: 5,
    project: 'Flooring Installation'
  },
  {
    id: 'ambikasamar',
    name: 'Ambikasamar',
    role: 'Verified Customer • 5 reviews',
    content: 'Great Contractor. Very nice people. Excellent job done for my bathroom. I highly recommend him.',
    rating: 5,
    project: 'Bathroom Renovation'
  },
  {
    id: 'preet-s',
    name: 'Preet S',
    role: 'Verified Customer • 5 reviews',
    content: 'The amount of quality work SR provide is beyond amazing.. I\'m amazed with SR service him and his team did a great job in our whole house. He always answered our phone when contractors ignore your calls after the deposit that can be scary but SR he always answered my phone calls.. just amazing. I definitely recommend this company. Thank you so much for making our house look so beautiful :) we get so many compliments.',
    rating: 5,
    project: 'Whole House Renovation'
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