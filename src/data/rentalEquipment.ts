// SunVic's Actual Professional Equipment Fleet

export interface RentalEquipment {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  technology: string;
  description: string;
  detailedDescription: string;
  model: string;
  manufacturer: string;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  image: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  applications: string[];
  safetyFeatures: string[];
  operatorRequired: boolean;
  deliveryIncluded: boolean;
  availability: 'available' | 'limited' | 'maintenance';
  tags: string[];
}

export const rentalCategories = [
  { id: 'all', name: 'All Equipment', icon: '🏗️' },
  { id: 'air-compressors', name: 'Air Compressors', icon: '💨' },
  { id: 'arrow-boards', name: 'Arrow Boards', icon: '⬅️' },
  { id: 'backhoes', name: 'Backhoes', icon: '🚜' },
  { id: 'rollers', name: 'Rollers', icon: '🗞️' },
  { id: 'dozers', name: 'Dozers', icon: '🚚' },
  { id: 'excavators', name: 'Excavators', icon: '⛏️' },
  { id: 'generators', name: 'Generators', icon: '⚡' },
  { id: 'light-towers', name: 'Light Towers', icon: '💡' },
  { id: 'pressure-washers', name: 'Pressure Washers', icon: '🚿' },
  { id: 'skid-steers', name: 'Skid Steers', icon: '🚛' },
  { id: 'wheel-loaders', name: 'Wheel Loaders', icon: '🏗️' },
  { id: 'telehandlers', name: 'Telehandlers', icon: '🏗️' },
  { id: 'attachments-excavator', name: 'Excavator Attachments', icon: '🔨' },
  { id: 'misc-attachments', name: 'Misc Attachments', icon: '🛠️' },
  { id: 'electric-equipment', name: 'Electric Equipment', icon: '🔋' }
];

export const rentalEquipment: RentalEquipment[] = [
  // AIR COMPRESSORS
  {
    id: "atlas-copco-185",
    name: "185 CFM Air Compressor Towable Diesel",
    category: "air-compressors",
    subcategory: "Towable Diesel",
    technology: "Advanced Compression Technology",
    description: "High-performance towable diesel air compressor delivering 185 CFM for pneumatic tools and equipment",
    detailedDescription: "The Atlas Copco 185 CFM air compressor provides reliable compressed air for construction sites, featuring efficient diesel engine operation and rugged towable design for easy transportation between job sites.",
    model: "Atlas Copco 185",
    manufacturer: "Atlas Copco",
    dailyRate: 105,
    weeklyRate: 330,
    monthlyRate: 675,
    image: "https://images.unsplash.com/photo-1634729108541-516ad78c6ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "185 CFM air delivery",
      "Diesel engine operation",
      "Towable design with highway tires",
      "All-weather operation",
      "Low noise design"
    ],
    specifications: {
      "Air Delivery": "185 CFM",
      "Operating Pressure": "150 PSI",
      "Engine Type": "Diesel",
      "Fuel Capacity": "12 gallons",
      "Weight": "2,100 lbs"
    },
    applications: [
      "Pneumatic tool operation",
      "Sandblasting projects",
      "Construction site air supply",
      "Concrete breaking",
      "General construction work"
    ],
    safetyFeatures: [
      "Pressure relief valve",
      "Emergency shut-off",
      "Oil pressure monitoring",
      "Temperature protection"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Air Supply', 'Diesel', 'Towable', 'Construction']
  },

  {
    id: "kaeser-375",
    name: "375 CFM Air Compressor Towable Diesel",
    category: "air-compressors",
    subcategory: "Towable Diesel",
    technology: "Efficiency Drive Technology",
    description: "Heavy-duty 375 CFM towable diesel air compressor for high-demand applications",
    detailedDescription: "The Kaeser 375 CFM air compressor features efficiency drive technology for optimal fuel consumption and maximum air output, perfect for large construction projects requiring sustained air supply.",
    model: "Kaeser 375",
    manufacturer: "Kaeser",
    dailyRate: 150,
    weeklyRate: 475,
    monthlyRate: 925,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    features: [
      "375 CFM high output",
      "Efficiency drive technology",
      "Heavy-duty towable chassis",
      "Extended runtime capability",
      "Dual air outlets"
    ],
    specifications: {
      "Air Delivery": "375 CFM",
      "Operating Pressure": "175 PSI",
      "Engine Type": "Tier 4 Diesel",
      "Fuel Capacity": "18 gallons",
      "Weight": "3,200 lbs"
    },
    applications: [
      "Large pneumatic tool operations",
      "Industrial sandblasting",
      "Multi-crew construction sites",
      "Heavy demolition work",
      "Extended operation projects"
    ],
    safetyFeatures: [
      "Advanced pressure monitoring",
      "Automatic shutdown systems",
      "Oil level protection",
      "Overheat protection"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['High Output', 'Efficiency', 'Heavy Duty', 'Industrial']
  },

  // ARROW BOARDS
  {
    id: "wanco-arrow-board",
    name: "Arrow Board 15 Bulb Solar",
    category: "arrow-boards",
    subcategory: "Solar",
    technology: "Solar Power Technology",
    description: "Solar-powered 15 bulb arrow board for traffic control and work zone safety",
    detailedDescription: "The Wanco solar arrow board provides reliable traffic direction with 15 high-intensity LED bulbs, solar power system for extended operation, and wireless remote control for safe operation.",
    model: "Wanco WSAB-15S",
    manufacturer: "Wanco",
    dailyRate: 125,
    weeklyRate: 395,
    monthlyRate: 750,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "15 high-intensity LED bulbs",
      "Solar power system",
      "Wireless remote control",
      "Multiple display patterns",
      "Towable design"
    ],
    specifications: {
      "Display Size": "48\" x 24\"",
      "Power Source": "Solar with battery backup",
      "Operating Time": "7+ days",
      "Weight": "850 lbs",
      "Visibility Range": "1/2 mile"
    },
    applications: [
      "Construction work zones",
      "Road maintenance",
      "Traffic diversion",
      "Emergency response",
      "Event traffic control"
    ],
    safetyFeatures: [
      "MUTCD compliant",
      "Automatic dimming",
      "Storm resistant design",
      "Emergency flasher mode"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Solar Powered', 'Traffic Safety', 'Remote Control', 'MUTCD']
  },

  // BACKHOES
  {
    id: "john-deere-310",
    name: "17,000 LB Backhoe Extended-Hoe W/ AC",
    category: "backhoes",
    subcategory: "Extended-Hoe W/ AC",
    technology: "PowerTech Engine Technology",
    description: "Versatile 17,000 lb backhoe with extended hoe configuration and climate-controlled cab",
    detailedDescription: "The John Deere 310 backhoe combines powerful digging performance with operator comfort, featuring extended hoe reach for maximum versatility and climate-controlled EROPS cab for all-weather operation.",
    model: "John Deere 310",
    manufacturer: "John Deere",
    dailyRate: 400,
    weeklyRate: 1195,
    monthlyRate: 2900,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Extended hoe configuration",
      "EROPS cab with heat & AC",
      "Compaction capabilities",
      "4WD traction system",
      "Hydraulic thumb attachment"
    ],
    specifications: {
      "Operating Weight": "17,751 lbs",
      "Max Dig Depth": "18 ft",
      "Max Reach": "21 ft",
      "Engine Power": "84 hp",
      "Bucket Capacity": "1.0 cu yd"
    },
    applications: [
      "Excavation projects",
      "Utility installation",
      "Foundation work",
      "Landscaping",
      "Material handling"
    ],
    safetyFeatures: [
      "ROPS/FOPS certified cab",
      "Hydraulic lockouts",
      "Backup alarm",
      "LED work lights"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Extended Reach', 'Climate Control', 'Versatile', 'Professional']
  },

  // ROLLERS
  {
    id: "bomag-bw211",
    name: "10-12 Ton Dirt Roller 84\" Drum",
    category: "rollers",
    subcategory: "Dirt Roller",
    technology: "Vibratory Compaction Technology",
    description: "Heavy-duty vibratory dirt roller for soil compaction with 84-inch drum width",
    detailedDescription: "The Bomag BW211 vibratory roller delivers superior compaction performance with advanced vibration control and wide 84-inch drum for efficient soil stabilization on large construction projects.",
    model: "Bomag BW211",
    manufacturer: "Bomag",
    dailyRate: 700,
    weeklyRate: 1900,
    monthlyRate: 5600,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "84-inch wide drum",
      "Vibratory compaction system",
      "10-12 ton operating weight",
      "Articulated steering",
      "Water spray system"
    ],
    specifications: {
      "Operating Weight": "10-12 tons",
      "Drum Width": "84 inches",
      "Compaction Force": "32,000 lbs",
      "Engine Power": "129 hp",
      "Travel Speed": "7.5 mph"
    },
    applications: [
      "Soil compaction",
      "Road base preparation",
      "Large area compaction",
      "Foundation preparation",
      "Parking lot construction"
    ],
    safetyFeatures: [
      "ROPS protection",
      "Vibration isolation",
      "Emergency stops",
      "Visibility mirrors"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Heavy Compaction', 'Wide Drum', 'Vibratory', 'Professional']
  },

  {
    id: "wacker-neuson-rts3",
    name: "Trench Roller 32-33\" Drums 1.5 Ton 3000LB",
    category: "rollers",
    subcategory: "Trench Roller",
    technology: "Dual Drum Compaction",
    description: "Compact trench roller ideal for confined spaces and utility trench compaction",
    detailedDescription: "The Wacker Neuson RTS3 trench roller provides precision compaction in tight spaces with dual drum design and remote control operation for enhanced safety and efficiency.",
    model: "Wacker Neuson RTS3",
    manufacturer: "Wacker Neuson",
    dailyRate: 395,
    weeklyRate: 950,
    monthlyRate: 1950,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2158&q=80",
    features: [
      "32-33 inch drum width",
      "Remote control operation",
      "Dual drum design",
      "Compact footprint",
      "Variable speed control"
    ],
    specifications: {
      "Operating Weight": "3,000 lbs",
      "Drum Width": "32-33 inches",
      "Compaction Force": "8,500 lbs",
      "Engine Power": "25 hp",
      "Remote Range": "150 ft"
    },
    applications: [
      "Utility trench compaction",
      "Confined space work",
      "Pipe bedding",
      "Foundation trenches",
      "Landscape construction"
    ],
    safetyFeatures: [
      "Remote operation capability",
      "Emergency stop function",
      "Vibration dampening",
      "High visibility design"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Compact', 'Remote Control', 'Trench Work', 'Precision']
  },

  // DOZERS
  {
    id: "cat-d4k-xl",
    name: "D4K-XL LGP Bulldozer W/ 6-Way Blade",
    category: "dozers",
    subcategory: "LGP Bulldozer W/ 6-Way Blade",
    technology: "Low Ground Pressure Technology",
    description: "Low ground pressure bulldozer with 6-way blade for precision earthmoving",
    detailedDescription: "The Cat D4K-XL LGP bulldozer features low ground pressure undercarriage for sensitive terrain work and 6-way blade for precise grading and material handling in various conditions.",
    model: "Cat D4K-XL LGP",
    manufacturer: "Cat",
    dailyRate: 1200,
    weeklyRate: 3600,
    monthlyRate: 8950,
    image: "https://images.unsplash.com/photo-1574116164516-3c213a5fdb86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Low ground pressure undercarriage",
      "6-way hydraulic blade",
      "EROPS cab with AC",
      "Hydrostatic transmission",
      "Advanced hydraulics"
    ],
    specifications: {
      "Operating Weight": "19,400 lbs",
      "Engine Power": "84 hp",
      "Blade Capacity": "2.5 cu yd",
      "Ground Pressure": "6.8 psi",
      "Travel Speed": "6.8 mph"
    },
    applications: [
      "Site preparation",
      "Finish grading",
      "Material spreading",
      "Slope work",
      "Landscaping projects"
    ],
    safetyFeatures: [
      "ROPS/FOPS cab",
      "Hydraulic blade control",
      "Backup alarm",
      "Emergency engine stop"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Earthmoving', 'Climate Control', 'Hydrostatic', 'Professional']
  },

  // EXCAVATORS
  {
    id: "takeuchi-tb240",
    name: "8,900 LB Excavator-Erops W/ Heat & AC",
    category: "excavators",
    subcategory: "Erops W/ Heat & AC",
    technology: "Intelligent Hydraulic System",
    description: "Compact excavator with advanced hydraulics and climate-controlled operator cab",
    detailedDescription: "The Takeuchi TB240 mini excavator delivers exceptional performance in tight spaces with intelligent hydraulic system and comfortable EROPS cab featuring heat and air conditioning.",
    model: "Takeuchi TB240",
    manufacturer: "Takeuchi",
    dailyRate: 300,
    weeklyRate: 1000,
    monthlyRate: 2500,
    image: "https://images.unsplash.com/photo-1601207068481-70b17c896ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Intelligent hydraulic system",
      "EROPS cab with climate control",
      "Zero tail swing design",
      "Auxiliary hydraulics",
      "Rubber track system"
    ],
    specifications: {
      "Operating Weight": "8,900 lbs",
      "Max Dig Depth": "11 ft 6 in",
      "Max Reach": "18 ft 1 in",
      "Engine Power": "40 hp",
      "Bucket Capacity": "0.31 cu yd"
    },
    applications: [
      "Residential excavation",
      "Utility installation",
      "Landscaping projects",
      "Foundation work",
      "Confined space digging"
    ],
    safetyFeatures: [
      "ROPS certified cab",
      "Hydraulic lockouts",
      "Travel alarm",
      "LED work lights"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Compact', 'Climate Control', 'Zero Tail Swing', 'Residential']
  },

  {
    id: "cat-305-5",
    name: "13,000LB Excavator-Erops W/ Heat & AC",
    category: "excavators",
    subcategory: "Erops W/ Heat & AC",
    technology: "Cat Connect Technology",
    description: "Mid-size excavator with Cat Connect technology and premium operator comfort",
    detailedDescription: "The Cat 305.5 excavator features advanced Cat Connect technology for enhanced productivity and fuel efficiency, with spacious EROPS cab and climate control for operator comfort.",
    model: "Cat 305.5",
    manufacturer: "Cat",
    dailyRate: 375,
    weeklyRate: 1250,
    monthlyRate: 3200,
    image: "https://images.unsplash.com/photo-1592491001571-8d63a1df0df0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Cat Connect technology",
      "Spacious EROPS cab",
      "Advanced hydraulic system",
      "Fuel-efficient operation",
      "Easy maintenance access"
    ],
    specifications: {
      "Operating Weight": "13,000 lbs",
      "Max Dig Depth": "14 ft 3 in",
      "Max Reach": "22 ft 7 in",
      "Engine Power": "54 hp",
      "Bucket Capacity": "0.57 cu yd"
    },
    applications: [
      "General excavation",
      "Utility trenching",
      "Foundation preparation",
      "Material handling",
      "Site development"
    ],
    safetyFeatures: [
      "ROPS/FOPS cab",
      "Hydraulic quick coupler",
      "Operator presence system",
      "Emergency hydraulic stop"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Mid-Size', 'Connect Technology', 'Efficient', 'Versatile']
  },

  {
    id: "cat-308",
    name: "18,000LB Excavator-Erops W/ Heat & AC",
    category: "excavators",
    subcategory: "Erops W/ Heat & AC",
    technology: "Advanced Hydraulic System",
    description: "Heavy-duty excavator with advanced hydraulics for demanding applications",
    detailedDescription: "The Cat 308 excavator delivers superior performance for heavy excavation work with advanced hydraulic system, comfortable operator cab, and excellent fuel efficiency for extended operation.",
    model: "Cat 308",
    manufacturer: "Cat",
    dailyRate: 450,
    weeklyRate: 1500,
    monthlyRate: 3900,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    features: [
      "Advanced hydraulic system",
      "Heavy-duty undercarriage",
      "Premium operator cab",
      "High breakout force",
      "Multiple work tool compatibility"
    ],
    specifications: {
      "Operating Weight": "18,000 lbs",
      "Max Dig Depth": "17 ft 4 in",
      "Max Reach": "25 ft 7 in",
      "Engine Power": "74 hp",
      "Bucket Capacity": "0.84 cu yd"
    },
    applications: [
      "Heavy excavation",
      "Large utility work",
      "Commercial construction",
      "Road construction",
      "Material loading"
    ],
    safetyFeatures: [
      "ROPS/FOPS protection",
      "Hydraulic pilot controls",
      "Travel alarm system",
      "Emergency shutdown"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Heavy Duty', 'Commercial', 'High Performance', 'Reliable']
  },

  {
    id: "cat-320",
    name: "46,000LB Excavator-Erops W/ Heat & AC",
    category: "excavators",
    subcategory: "Erops W/ Heat & AC",
    technology: "Cat C7.1 Engine Technology",
    description: "Large excavator with Cat C7.1 engine for maximum productivity and efficiency",
    detailedDescription: "The Cat 320 excavator features the powerful Cat C7.1 engine with advanced technology for optimal fuel efficiency and productivity in the most demanding applications.",
    model: "Cat 320",
    manufacturer: "Cat",
    dailyRate: 750,
    weeklyRate: 2500,
    monthlyRate: 6500,
    image: "https://images.unsplash.com/photo-1615117948010-0a8b4c8bcb6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    features: [
      "Cat C7.1 ACERT engine",
      "Advanced operator station",
      "Superior hydraulic performance",
      "Extended maintenance intervals",
      "Cat Connect GRADE technology"
    ],
    specifications: {
      "Operating Weight": "46,000 lbs",
      "Max Dig Depth": "22 ft 8 in",
      "Max Reach": "33 ft 2 in",
      "Engine Power": "174 hp",
      "Bucket Capacity": "2.2 cu yd"
    },
    applications: [
      "Large-scale excavation",
      "Infrastructure projects",
      "Mining operations",
      "Mass excavation",
      "Heavy material handling"
    ],
    safetyFeatures: [
      "ROPS/FOPS certified",
      "Advanced hydraulic lockouts",
      "Operator presence monitoring",
      "Emergency stop systems"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Large Scale', 'Infrastructure', 'High Productivity', 'Advanced']
  },

  {
    id: "cat-336",
    name: "80,000LB Excavator-Erops W/ Heat & AC",
    category: "excavators",
    subcategory: "Erops W/ Heat & AC",
    technology: "Cat C9.3 Engine Technology",
    description: "Heavy-duty excavator with Cat C9.3 engine for the most demanding applications",
    detailedDescription: "The Cat 336 excavator is designed for the toughest jobs with powerful Cat C9.3 engine, advanced hydraulic system, and premium operator comfort for maximum productivity.",
    model: "Cat 336",
    manufacturer: "Cat",
    dailyRate: 1250,
    weeklyRate: 4200,
    monthlyRate: 11000,
    image: "https://images.unsplash.com/photo-1593789198777-f29bc259780e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Cat C9.3 ACERT engine",
      "Premium operator environment",
      "Maximum hydraulic performance",
      "Heavy-duty structure",
      "Advanced monitoring systems"
    ],
    specifications: {
      "Operating Weight": "80,000 lbs",
      "Max Dig Depth": "28 ft 5 in",
      "Max Reach": "39 ft 8 in",
      "Engine Power": "299 hp",
      "Bucket Capacity": "4.0 cu yd"
    },
    applications: [
      "Large infrastructure projects",
      "Mining and quarrying",
      "Heavy demolition",
      "Mass earthmoving",
      "Industrial applications"
    ],
    safetyFeatures: [
      "Enhanced ROPS/FOPS",
      "Advanced hydraulic controls",
      "Comprehensive monitoring",
      "Emergency response systems"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'limited',
    tags: ['Heavy Industrial', 'Mining', 'Large Projects', 'Maximum Power']
  },

  // GENERATORS
  {
    id: "atlas-copco-q-25",
    name: "20KVA Generator - Towable Diesel",
    category: "generators",
    subcategory: "Towable Diesel",
    technology: "Clean Power Technology",
    description: "Reliable 20KVA diesel generator with clean power output for sensitive equipment",
    detailedDescription: "The Atlas Copco Q-25 generator provides stable, clean power with low THD output suitable for sensitive electronic equipment and general construction power needs.",
    model: "Atlas Copco Q-25",
    manufacturer: "Atlas Copco",
    dailyRate: 300,
    weeklyRate: 675,
    monthlyRate: 1700,
    image: "https://images.unsplash.com/photo-1607093965580-3b15868b5cd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "20KVA power output",
      "Clean power technology",
      "Towable design",
      "Fuel-efficient operation",
      "All-weather enclosure"
    ],
    specifications: {
      "Power Output": "20KVA (16kW)",
      "Voltage": "120/240V",
      "Fuel Type": "Diesel",
      "Runtime": "12+ hours",
      "Fuel Tank": "25 gallons"
    },
    applications: [
      "Construction site power",
      "Emergency backup power",
      "Event power supply",
      "Temporary installations",
      "Remote work sites"
    ],
    safetyFeatures: [
      "Ground fault protection",
      "Automatic shutdown",
      "Low oil pressure protection",
      "Weatherproof design"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Clean Power', 'Towable', 'Reliable', 'All Weather']
  },

  {
    id: "wacker-neuson-g-50",
    name: "38KVA Generator-Towable Diesel",
    category: "generators",
    subcategory: "Towable Diesel",
    technology: "Intelligent Load Management",
    description: "High-capacity 38KVA generator with intelligent load management for optimal efficiency",
    detailedDescription: "The Wacker Neuson G-50 generator features intelligent load management that automatically adjusts engine speed based on electrical demand, maximizing fuel efficiency and reducing emissions.",
    model: "Wacker Neuson G-50",
    manufacturer: "Wacker Neuson",
    dailyRate: 445,
    weeklyRate: 1050,
    monthlyRate: 1975,
    image: "https://images.unsplash.com/photo-1589595358526-2e2c33565dac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    features: [
      "38KVA power capacity",
      "Intelligent load management",
      "Tier 4 compliant engine",
      "Digital control panel",
      "Remote monitoring capability"
    ],
    specifications: {
      "Power Output": "38KVA (30kW)",
      "Voltage": "120/208V 3-phase",
      "Engine": "Tier 4 Diesel",
      "Runtime": "10+ hours",
      "Fuel Tank": "40 gallons"
    },
    applications: [
      "Large construction sites",
      "Multiple tool operation",
      "Commercial applications",
      "Industrial power needs",
      "Extended runtime projects"
    ],
    safetyFeatures: [
      "Digital monitoring system",
      "Automatic fault detection",
      "Emergency stop function",
      "Thermal protection"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['High Capacity', 'Intelligent', 'Tier 4', 'Commercial']
  },

  {
    id: "tecnogen-g-45",
    name: "45KVA Generator-Towable Diesel",
    category: "generators",
    subcategory: "Towable Diesel",
    technology: "Advanced Engine Management",
    description: "Premium 45KVA generator with advanced engine management for maximum reliability",
    detailedDescription: "The Tecnogen G-45 generator combines advanced engine management with premium components for exceptional reliability and performance in demanding applications.",
    model: "Tecnogen G-45",
    manufacturer: "Tecnogen",
    dailyRate: 500,
    weeklyRate: 1200,
    monthlyRate: 2400,
    image: "https://images.unsplash.com/photo-1587613865763-4b8b0d19c25b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "45KVA premium output",
      "Advanced engine management",
      "Sound-attenuated enclosure",
      "Digital display panel",
      "Automatic start/stop"
    ],
    specifications: {
      "Power Output": "45KVA (36kW)",
      "Voltage": "120/208V 3-phase",
      "Engine": "Premium Diesel",
      "Runtime": "12+ hours",
      "Fuel Tank": "50 gallons"
    },
    applications: [
      "Critical power applications",
      "Large commercial sites",
      "Extended operation needs",
      "Sensitive equipment power",
      "Backup power systems"
    ],
    safetyFeatures: [
      "Advanced control system",
      "Multi-level protection",
      "Automatic monitoring",
      "Emergency shutdown"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Premium', 'Reliable', 'Commercial', 'Advanced Controls']
  },

  // LIGHT TOWERS
  {
    id: "terex-al4000",
    name: "6KW Light Tower with 4x1000W Metal Halide",
    category: "light-towers",
    subcategory: "6KW with 4x1000W Metal Halide",
    technology: "Metal Halide Lighting Technology",
    description: "High-intensity 6KW light tower with four 1000W metal halide lamps for large area illumination",
    detailedDescription: "The Terex AL4000 light tower provides exceptional illumination with four 1000W metal halide lamps, hydraulic mast extension to 30 feet, and reliable diesel engine operation.",
    model: "Terex AL4000",
    manufacturer: "Terex",
    dailyRate: 175,
    weeklyRate: 525,
    monthlyRate: 1050,
    image: "https://images.unsplash.com/photo-1504233151023-a9650c1dee4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Four 1000W metal halide lamps",
      "30-foot hydraulic mast",
      "360-degree rotation",
      "Diesel engine operation",
      "Towable design"
    ],
    specifications: {
      "Light Output": "400,000+ lumens",
      "Mast Height": "30 ft",
      "Coverage Area": "5+ acres",
      "Runtime": "70+ hours",
      "Fuel Tank": "38 gallons"
    },
    applications: [
      "Construction site lighting",
      "Road construction",
      "Emergency response",
      "Event lighting",
      "Security lighting"
    ],
    safetyFeatures: [
      "Breakaway mast design",
      "Outrigger stabilizers",
      "Wind speed monitoring",
      "Ground fault protection"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['High Intensity', 'Large Coverage', 'Towable', 'Professional']
  },

  // PRESSURE WASHERS
  {
    id: "pressure-pro-4000",
    name: "4000 PSI Pressure Washer Hot Water Diesel",
    category: "pressure-washers",
    subcategory: "Hot Water Diesel",
    technology: "Hot Water Cleaning Technology",
    description: "High-pressure 4000 PSI hot water pressure washer for heavy-duty cleaning applications",
    detailedDescription: "The Pressure Pro 4000 combines high pressure with hot water cleaning for superior results on grease, oil, and stubborn stains. Diesel-powered for extended operation.",
    model: "Pressure Pro 4000HW",
    manufacturer: "Pressure Pro",
    dailyRate: 225,
    weeklyRate: 675,
    monthlyRate: 1350,
    image: "https://images.unsplash.com/photo-1633259584604-afdc243122ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "4000 PSI pressure output",
      "Hot water cleaning capability",
      "Diesel engine operation",
      "Professional-grade pump",
      "Heavy-duty frame"
    ],
    specifications: {
      "Pressure": "4000 PSI",
      "Flow Rate": "4.0 GPM",
      "Water Temperature": "Up to 200°F",
      "Engine": "Diesel",
      "Hose Length": "50 ft"
    },
    applications: [
      "Heavy equipment cleaning",
      "Concrete preparation",
      "Grease removal",
      "Industrial cleaning",
      "Surface preparation"
    ],
    safetyFeatures: [
      "Thermal relief valve",
      "Pressure relief system",
      "Ground fault protection",
      "Safety trigger gun"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Hot Water', 'High Pressure', 'Industrial', 'Diesel']
  },

  // SKID STEERS
  {
    id: "cat-242d",
    name: "1,800 LB Skid Steer w/Bucket",
    category: "skid-steers",
    subcategory: "w/Bucket",
    technology: "Radial Lift Design",
    description: "Compact 1,800 lb skid steer with radial lift design for excellent digging and loading performance",
    detailedDescription: "The Cat 242D skid steer features radial lift design for superior digging performance and excellent visibility, with comfortable operator station and reliable operation.",
    model: "Cat 242D",
    manufacturer: "Cat",
    dailyRate: 350,
    weeklyRate: 1050,
    monthlyRate: 2500,
    image: "https://images.unsplash.com/photo-1592491001451-8d2a8b17b8c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Radial lift design",
      "Excellent visibility",
      "Comfortable operator station",
      "High flow auxiliary hydraulics",
      "Easy maintenance access"
    ],
    specifications: {
      "Operating Weight": "7,565 lbs",
      "Operating Capacity": "1,800 lbs",
      "Engine Power": "74 hp",
      "Bucket Capacity": "0.75 cu yd",
      "Lift Height": "10 ft 6 in"
    },
    applications: [
      "Material handling",
      "Site preparation",
      "Landscaping",
      "Construction support",
      "Loading operations"
    ],
    safetyFeatures: [
      "ROPS/FOPS protection",
      "Hydraulic pilot controls",
      "Seat belt interlock",
      "Emergency hydraulic stop"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Compact', 'Versatile', 'High Visibility', 'Reliable']
  },

  // WHEEL LOADERS
  {
    id: "case-321f",
    name: "13,000 LB Wheel Loader",
    category: "wheel-loaders",
    subcategory: "13,000 LB",
    technology: "PowerShift Transmission",
    description: "Compact wheel loader with PowerShift transmission for efficient material handling",
    detailedDescription: "The Case 321F wheel loader combines compact size with powerful performance, featuring PowerShift transmission and excellent visibility for precise material handling operations.",
    model: "Case 321F",
    manufacturer: "Case",
    dailyRate: 400,
    weeklyRate: 1100,
    monthlyRate: 3200,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "PowerShift transmission",
      "Excellent visibility design",
      "High breakout force",
      "Comfortable operator station",
      "Easy maintenance access"
    ],
    specifications: {
      "Operating Weight": "13,000 lbs",
      "Bucket Capacity": "1.4 cu yd",
      "Engine Power": "74 hp",
      "Breakout Force": "12,600 lbs",
      "Travel Speed": "25 mph"
    },
    applications: [
      "Material loading",
      "Site preparation",
      "Snow removal",
      "Aggregate handling",
      "General construction"
    ],
    safetyFeatures: [
      "ROPS/FOPS protection",
      "Excellent sight lines",
      "Emergency brake system",
      "Hydraulic lockouts"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Compact', 'PowerShift', 'Versatile', 'High Visibility']
  },

  {
    id: "cat-938g",
    name: "30,000 Wheel Loader",
    category: "wheel-loaders",
    subcategory: "30,000 LB",
    technology: "Advanced Powertrain",
    description: "Heavy-duty wheel loader with advanced powertrain for maximum productivity",
    detailedDescription: "The Cat 938G wheel loader delivers exceptional performance with advanced powertrain technology, providing optimal power delivery and fuel efficiency for demanding applications.",
    model: "Cat 938G",
    manufacturer: "Cat",
    dailyRate: 550,
    weeklyRate: 1700,
    monthlyRate: 3900,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Advanced powertrain system",
      "High-performance hydraulics",
      "Spacious operator compartment",
      "Integrated weighing system",
      "Premium ride control"
    ],
    specifications: {
      "Operating Weight": "30,000 lbs",
      "Bucket Capacity": "3.5 cu yd",
      "Engine Power": "174 hp",
      "Breakout Force": "28,400 lbs",
      "Travel Speed": "25 mph"
    },
    applications: [
      "Heavy material handling",
      "Aggregate production",
      "Large construction projects",
      "Quarry operations",
      "Industrial applications"
    ],
    safetyFeatures: [
      "Advanced monitoring system",
      "Stability control",
      "Emergency steering",
      "Enhanced brake system"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Heavy Duty', 'Advanced Powertrain', 'High Capacity', 'Industrial']
  },

  // TELEHANDLERS
  {
    id: "jlg-g-10",
    name: "10,000LB Telehandler 55FT",
    category: "telehandlers",
    subcategory: "10,000LB",
    technology: "SkyPower Technology",
    description: "Versatile telehandler with 55-foot reach and 10,000-pound capacity for material placement",
    detailedDescription: "The JLG G-10 telehandler features SkyPower technology providing exceptional lift performance and precision control for material handling at height with maximum safety.",
    model: "JLG G-10",
    manufacturer: "JLG",
    dailyRate: 575,
    weeklyRate: 1600,
    monthlyRate: 3500,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "55-foot maximum lift height",
      "10,000-pound capacity",
      "SkyPower technology",
      "Multiple attachment options",
      "Load management system"
    ],
    specifications: {
      "Max Lift Height": "55 feet",
      "Max Capacity": "10,000 lbs",
      "Forward Reach": "42 feet",
      "Engine Power": "100 hp",
      "Operating Weight": "32,000 lbs"
    },
    applications: [
      "Material placement at height",
      "Construction site logistics",
      "Roofing projects",
      "Industrial maintenance",
      "Warehouse operations"
    ],
    safetyFeatures: [
      "Load moment indicator",
      "Stability monitoring",
      "Emergency lowering",
      "360-degree visibility"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['High Reach', 'Heavy Capacity', 'SkyPower', 'Versatile']
  },

  {
    id: "cat-tl122d",
    name: "12,000LB Telehandler 55FT",
    category: "telehandlers",
    subcategory: "12,000LB",
    technology: "Intelligent Boom Control",
    description: "High-capacity telehandler with intelligent boom control for precise material handling",
    detailedDescription: "The Cat TL122D telehandler delivers superior performance with intelligent boom control that provides smooth, precise movements and enhanced operator confidence for demanding lifting operations.",
    model: "Cat TL122D",
    manufacturer: "Cat",
    dailyRate: 875,
    weeklyRate: 2200,
    monthlyRate: 5300,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "12,000-pound lift capacity",
      "Intelligent boom control",
      "Advanced hydraulic system",
      "Operator comfort package",
      "Enhanced stability system"
    ],
    specifications: {
      "Max Lift Height": "55 feet",
      "Max Capacity": "12,000 lbs",
      "Forward Reach": "44 feet",
      "Engine Power": "129 hp",
      "Operating Weight": "38,000 lbs"
    },
    applications: [
      "Heavy material placement",
      "Large construction projects",
      "Industrial installations",
      "Infrastructure work",
      "Commercial construction"
    ],
    safetyFeatures: [
      "Advanced load charts",
      "Boom positioning system",
      "Hydraulic lockouts",
      "Enhanced visibility package"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['High Capacity', 'Intelligent Control', 'Heavy Duty', 'Commercial']
  },

  // EXCAVATOR ATTACHMENTS
  {
    id: "indeco-hp550",
    name: "550LB Hammer",
    category: "attachments-excavator",
    subcategory: "Hammer",
    technology: "Variable Energy System",
    description: "Hydraulic hammer attachment with variable energy for precise breaking applications",
    detailedDescription: "The Indeco HP550 hydraulic hammer features variable energy system allowing operators to adjust impact force for different materials and applications, maximizing efficiency and reducing wear.",
    model: "Indeco HP550",
    manufacturer: "Indeco",
    dailyRate: 375,
    weeklyRate: 660,
    monthlyRate: 1975,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Variable energy control",
      "Auto-lubrication system",
      "Sound dampening design",
      "Easy installation",
      "Multiple tool options"
    ],
    specifications: {
      "Impact Energy": "550 Joules",
      "Operating Weight": "550 lbs",
      "Blows per Minute": "500-1000",
      "Carrier Weight": "6-12 tons",
      "Working Pressure": "2900 PSI"
    },
    applications: [
      "Concrete demolition",
      "Rock breaking",
      "Foundation removal",
      "Trenching in hard materials",
      "Utility work"
    ],
    safetyFeatures: [
      "Auto-stop on blank firing",
      "Pressure regulation",
      "Sound reduction features",
      "Vibration dampening"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Variable Energy', 'Demolition', 'Precise Control', 'Versatile']
  },

  {
    id: "indeco-hp1250",
    name: "1,250 Hammer",
    category: "attachments-excavator",
    subcategory: "Hammer",
    technology: "High-Frequency Impact",
    description: "Heavy-duty hydraulic hammer for demanding demolition and breaking applications",
    detailedDescription: "The Indeco HP1250 delivers powerful impact energy with high-frequency technology for efficient breaking of concrete, rock, and other hard materials in heavy construction applications.",
    model: "Indeco HP1250",
    manufacturer: "Indeco",
    dailyRate: 350,
    weeklyRate: 800,
    monthlyRate: 2495,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "High-frequency impact system",
      "Robust construction",
      "Advanced seal technology",
      "Optimized energy transfer",
      "Low maintenance design"
    ],
    specifications: {
      "Impact Energy": "1,250 Joules",
      "Operating Weight": "1,250 lbs",
      "Blows per Minute": "450-900",
      "Carrier Weight": "12-20 tons",
      "Working Pressure": "3200 PSI"
    },
    applications: [
      "Heavy demolition",
      "Road construction",
      "Bridge demolition",
      "Large concrete breaking",
      "Industrial demolition"
    ],
    safetyFeatures: [
      "Automatic shut-off system",
      "Hydraulic accumulator",
      "Pressure monitoring",
      "Noise reduction technology"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Heavy Demolition', 'High Frequency', 'Industrial', 'Robust']
  },

  {
    id: "hensley-jthb120",
    name: "2,500 LB Hammer",
    category: "attachments-excavator",
    subcategory: "Hammer",
    technology: "Advanced Impact Technology",
    description: "Ultra-heavy hydraulic hammer for the most demanding breaking applications",
    detailedDescription: "The Hensley JTHB120 represents the pinnacle of hydraulic hammer technology, delivering massive impact energy for the most challenging demolition and breaking operations.",
    model: "Hensley JTHB120",
    manufacturer: "Hensley",
    dailyRate: 675,
    weeklyRate: 1800,
    monthlyRate: 4100,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Ultra-high impact energy",
      "Advanced damping system",
      "Reinforced housing",
      "Extended service life",
      "Maximum productivity design"
    ],
    specifications: {
      "Impact Energy": "2,500 Joules",
      "Operating Weight": "2,500 lbs",
      "Blows per Minute": "300-600",
      "Carrier Weight": "20-35 tons",
      "Working Pressure": "3500 PSI"
    },
    applications: [
      "Major demolition projects",
      "Quarry operations",
      "Mining applications",
      "Infrastructure demolition",
      "Heavy construction"
    ],
    safetyFeatures: [
      "Advanced vibration control",
      "Pressure relief systems",
      "Emergency stop capability",
      "Enhanced operator protection"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'limited',
    tags: ['Ultra Heavy', 'Maximum Impact', 'Industrial', 'Specialized']
  },

  {
    id: "v32-breaker",
    name: "5,000LB Hammer",
    category: "attachments-excavator",
    subcategory: "Hammer",
    technology: "Extreme Impact System",
    description: "Extreme-duty hydraulic hammer for the largest demolition and mining operations",
    detailedDescription: "The V32 Breaker delivers unmatched impact energy for the most demanding applications, featuring extreme impact system technology designed for maximum productivity in large-scale operations.",
    model: "V32 Breaker",
    manufacturer: "V32",
    dailyRate: 900,
    weeklyRate: 2550,
    monthlyRate: 6700,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Extreme impact system",
      "Maximum energy transfer",
      "Ultra-robust construction",
      "Advanced cooling system",
      "Professional-grade durability"
    ],
    specifications: {
      "Impact Energy": "5,000 Joules",
      "Operating Weight": "5,000 lbs",
      "Blows per Minute": "200-450",
      "Carrier Weight": "35-60 tons",
      "Working Pressure": "4000 PSI"
    },
    applications: [
      "Large-scale demolition",
      "Mining operations",
      "Major infrastructure projects",
      "Quarry development",
      "Industrial demolition"
    ],
    safetyFeatures: [
      "Maximum vibration isolation",
      "Multiple safety systems",
      "Emergency shutdown",
      "Professional monitoring"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'limited',
    tags: ['Extreme Duty', 'Maximum Power', 'Mining Grade', 'Professional']
  },

  // MISC ATTACHMENTS
  {
    id: "kenco-barrier-clamp",
    name: "Barrier Clamp",
    category: "misc-attachments",
    subcategory: "Clamp",
    technology: "Hydraulic Clamping System",
    description: "Specialized clamp attachment for handling concrete barriers and precast elements",
    detailedDescription: "The Kenco barrier clamp provides secure handling of concrete barriers, jersey barriers, and precast concrete elements with hydraulic clamping system for safe and efficient material placement.",
    model: "Kenco",
    manufacturer: "Kenco",
    dailyRate: 95,
    weeklyRate: 250,
    monthlyRate: 500,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Hydraulic clamping action",
      "Adjustable jaw opening",
      "Safety backup systems",
      "Quick attachment system",
      "Durable construction"
    ],
    specifications: {
      "Clamping Force": "12,000 lbs",
      "Jaw Opening": "6-36 inches",
      "Weight": "850 lbs",
      "Attachment Type": "Quick coupler",
      "Working Pressure": "3000 PSI"
    },
    applications: [
      "Concrete barrier placement",
      "Precast element handling",
      "Construction site logistics",
      "Road construction",
      "Infrastructure projects"
    ],
    safetyFeatures: [
      "Safety backup clamps",
      "Pressure monitoring",
      "Emergency release",
      "Load indicators"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Barrier Handling', 'Hydraulic', 'Safety', 'Specialized']
  },

  {
    id: "atoz-skeleton-bucket",
    name: "Skeleton Bucket (Fits Cat 308 Only)",
    category: "misc-attachments",
    subcategory: "Bucket",
    technology: "Selective Sorting Design",
    description: "Specialized skeleton bucket for material sorting and separation on Cat 308 excavators",
    detailedDescription: "The AtoZ skeleton bucket features selective sorting design with strategically spaced tines for efficient separation of materials while allowing fines to pass through, perfect for cleanup and sorting operations.",
    model: "AtoZ",
    manufacturer: "AtoZ",
    dailyRate: 375,
    weeklyRate: 750,
    monthlyRate: 1800,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Selective material sorting",
      "Cat 308 specific fit",
      "Reinforced tine construction",
      "Easy installation",
      "Optimized spacing design"
    ],
    specifications: {
      "Bucket Width": "24 inches",
      "Tine Spacing": "3 inches",
      "Weight": "650 lbs",
      "Compatibility": "Cat 308 only",
      "Material": "High-strength steel"
    },
    applications: [
      "Material sorting",
      "Site cleanup",
      "Demolition sorting",
      "Landscaping cleanup",
      "Utility work"
    ],
    safetyFeatures: [
      "Reinforced attachment points",
      "Smooth operation design",
      "High-visibility construction",
      "Balanced weight distribution"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Material Sorting', 'Cat 308 Specific', 'Cleanup', 'Specialized']
  },

  // ELECTRIC EQUIPMENT
  {
    id: "mitsubishi-pw23",
    name: "Electric Pallet Jack",
    category: "electric-equipment",
    subcategory: "Pallet Jack",
    technology: "Electric Drive System",
    description: "Electric pallet jack for efficient material handling with zero emissions operation",
    detailedDescription: "The Mitsubishi PW23 electric pallet jack provides quiet, emission-free operation for indoor material handling with advanced electric drive system and ergonomic design for operator comfort.",
    model: "Mitsubishi PW23",
    manufacturer: "Mitsubishi",
    dailyRate: 150,
    weeklyRate: 350,
    monthlyRate: 650,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Zero emissions operation",
      "Electric drive system",
      "Ergonomic operator controls",
      "Compact design",
      "Low maintenance operation"
    ],
    specifications: {
      "Load Capacity": "4,500 lbs",
      "Fork Length": "48 inches",
      "Battery Type": "24V sealed",
      "Operating Time": "8+ hours",
      "Weight": "875 lbs"
    },
    applications: [
      "Warehouse operations",
      "Indoor material handling",
      "Loading dock operations",
      "Manufacturing facilities",
      "Distribution centers"
    ],
    safetyFeatures: [
      "Emergency stop button",
      "Speed limiting control",
      "Battery monitoring",
      "Operator presence system"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Electric', 'Zero Emissions', 'Indoor Use', 'Efficient']
  }
];

// Helper functions for filtering and sorting
export const getEquipmentByCategory = (category: string) => {
  if (category === 'all') return rentalEquipment;
  return rentalEquipment.filter(item => item.category === category);
};

export const getEquipmentById = (id: string) => {
  return rentalEquipment.find(item => item.id === id);
};

export const getFeaturedEquipment = (count: number = 6) => {
  return rentalEquipment
    .filter(item => item.availability === 'available')
    .slice(0, count);
};

export const getEquipmentByPriceRange = (maxDaily: number) => {
  return rentalEquipment.filter(item => item.dailyRate <= maxDaily);
};

// Equipment statistics
export const equipmentStats = {
  totalEquipment: rentalEquipment.length,
  categories: rentalCategories.length - 1, // excluding 'all'
  averageDailyRate: Math.round(
    rentalEquipment.reduce((sum, item) => sum + item.dailyRate, 0) / rentalEquipment.length
  ),
  totalFleetValue: 200000 // SunVic's $200K+ fleet value
}; 