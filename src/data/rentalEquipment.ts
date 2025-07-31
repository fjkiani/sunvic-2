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
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
    technology: "Sigma Profile Airend Technology",
    description: "Heavy-duty 375 CFM diesel air compressor for large-scale construction and industrial applications",
    detailedDescription: "The Kaeser 375 CFM compressor delivers exceptional performance with Sigma Profile airend technology, providing superior efficiency and reliability for demanding construction environments.",
    model: "Kaeser 375",
    manufacturer: "Kaeser",
    dailyRate: 385,
    weeklyRate: 800,
    monthlyRate: 1975,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "375 CFM high-volume air delivery",
      "Sigma Profile airend",
      "Advanced cooling system",
      "Heavy-duty towable frame",
      "Fuel-efficient operation"
    ],
    specifications: {
      "Air Delivery": "375 CFM",
      "Operating Pressure": "175 PSI",
      "Engine Type": "Tier 4 Diesel",
      "Fuel Capacity": "25 gallons",
      "Weight": "3,200 lbs"
    },
    applications: [
      "Large construction projects",
      "Multiple pneumatic tools",
      "Heavy demolition work",
      "Industrial applications",
      "Extended operation periods"
    ],
    safetyFeatures: [
      "Automatic shutdown system",
      "Pressure monitoring",
      "Thermal protection",
      "Emergency stops"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['High Volume', 'Industrial', 'Efficient', 'Heavy Duty']
  },

  // ARROW BOARDS
  {
    id: "wanco-solar-arrow-board",
    name: "Solar Power Arrow Board",
    category: "arrow-boards",
    subcategory: "Solar Power",
    technology: "Solar Charging Technology",
    description: "Eco-friendly solar-powered arrow board for traffic control and work zone safety",
    detailedDescription: "The Wanco solar arrow board provides reliable traffic control with environmentally friendly solar power operation, featuring bright LED displays and wireless remote control for enhanced safety.",
    model: "Wanco",
    manufacturer: "Wanco",
    dailyRate: 105,
    weeklyRate: 250,
    monthlyRate: 550,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Solar panel charging system",
      "Bright LED arrow display",
      "Wireless remote control",
      "Multiple display patterns",
      "Weather-resistant design"
    ],
    specifications: {
      "Display Type": "LED Arrow",
      "Power Source": "Solar with battery backup",
      "Visibility Range": "1 mile",
      "Operating Hours": "7+ days continuous",
      "Weight": "250 lbs"
    },
    applications: [
      "Traffic control zones",
      "Construction site safety",
      "Road work projects",
      "Event traffic management",
      "Emergency response"
    ],
    safetyFeatures: [
      "High-visibility LED display",
      "Photocell automatic operation",
      "Low battery warning",
      "Stable mounting system"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Solar Powered', 'Traffic Control', 'LED', 'Wireless']
  },

  // BACKHOES
  {
    id: "john-deere-310",
    name: "17751 LB Backhoe EXT Hoe Compaction EropsW/ Heat & AC",
    category: "backhoes",
    subcategory: "EXT Hoe",
    technology: "Extended Hoe Hydraulic System",
    description: "Professional-grade backhoe with extended hoe reach, climate-controlled cab, and compaction capabilities",
    detailedDescription: "The John Deere 310 backhoe combines powerful digging performance with operator comfort, featuring extended hoe reach for maximum versatility and climate-controlled EROPS cab for all-weather operation.",
    model: "John Deere 310",
    manufacturer: "John Deere",
    dailyRate: 400,
    weeklyRate: 1195,
    monthlyRate: 2900,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "32-33 inch drum width",
      "Remote control operation",
      "Compact design",
      "Dual drum configuration",
      "Low ground pressure"
    ],
    specifications: {
      "Operating Weight": "3,000 lbs (1.5 ton)",
      "Drum Width": "32-33 inches",
      "Engine Power": "35 hp",
      "Compaction Force": "8,500 lbs",
      "Remote Range": "150 ft"
    },
    applications: [
      "Trench compaction",
      "Utility work",
      "Confined space compaction",
      "Pipe bedding",
      "Small area compaction"
    ],
    safetyFeatures: [
      "Remote operation capability",
      "Emergency stop function",
      "Protective barriers",
      "Low vibration design"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Trench Work', 'Remote Control', 'Compact', 'Utility']
  },

  // DOZERS
  {
    id: "komatsu-d-37px",
    name: "19,000 LB Dozer-Erops W/Heat AC",
    category: "dozers",
    subcategory: "Erops W/Heat AC",
    technology: "Hydrostatic Drive System",
    description: "Powerful crawler dozer with hydrostatic transmission and climate-controlled cab",
    detailedDescription: "The Komatsu D-37PX dozer combines powerful earthmoving capability with operator comfort, featuring hydrostatic drive for precise control and EROPS cab with climate control for all-day operation.",
    model: "Komatsu D-37PX",
    manufacturer: "Komatsu",
    dailyRate: 450,
    weeklyRate: 1500,
    monthlyRate: 4500,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Hydrostatic transmission",
      "EROPS cab with heat & AC",
      "Semi-U blade configuration",
      "Load sensing hydraulics",
      "Undercarriage protection"
    ],
    specifications: {
      "Operating Weight": "19,000 lbs",
      "Engine Power": "105 hp",
      "Blade Capacity": "2.7 cu yd",
      "Ground Pressure": "6.2 PSI",
      "Travel Speed": "6.8 mph"
    },
    applications: [
      "Site preparation",
      "Grading work",
      "Material pushing",
      "Rough grading",
      "Land clearing"
    ],
    safetyFeatures: [
      "ROPS/FOPS certified cab",
      "Blade float protection",
      "Hydraulic lockouts",
      "Emergency systems"
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
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Cat Connect technology",
      "Spacious EROPS cab",
      "Advanced hydraulic system",
      "Fuel-efficient operation",
      "Easy maintenance access"
    ],
    specifications: {
      "Operating Weight": "13,000 lbs",
      "Max Dig Depth": "13 ft 1 in",
      "Max Reach": "20 ft 8 in",
      "Engine Power": "48 hp",
      "Bucket Capacity": "0.53 cu yd"
    },
    applications: [
      "General construction",
      "Utility work",
      "Material handling",
      "Site preparation",
      "Trenching operations"
    ],
    safetyFeatures: [
      "ROPS/FOPS protection",
      "Hydraulic lockout system",
      "Backup alarm",
      "Emergency hydraulic shut-off"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Cat Connect', 'Mid-Size', 'Fuel Efficient', 'Construction']
  },

  {
    id: "cat-308",
    name: "18,000 LB Excavator-Erops W/ Heat & AC",
    category: "excavators",
    subcategory: "Erops W/ Heat & AC",
    technology: "Smart Mode Technology",
    description: "Versatile excavator with smart mode operation and enhanced digging performance",
    detailedDescription: "The Cat 308 excavator delivers optimal balance of power and efficiency with Smart Mode technology that automatically adjusts engine and hydraulic performance based on working conditions.",
    model: "Cat 308",
    manufacturer: "Cat",
    dailyRate: 500,
    weeklyRate: 1450,
    monthlyRate: 4100,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Smart Mode technology",
      "Enhanced digging force",
      "Premium EROPS cab",
      "Advanced display system",
      "Hydraulic quick coupler ready"
    ],
    specifications: {
      "Operating Weight": "18,000 lbs",
      "Max Dig Depth": "14 ft 9 in",
      "Max Reach": "23 ft 7 in",
      "Engine Power": "60 hp",
      "Bucket Capacity": "0.8 cu yd"
    },
    applications: [
      "Medium construction projects",
      "Road construction",
      "Building construction",
      "Material loading",
      "Precision excavation"
    ],
    safetyFeatures: [
      "Enhanced ROPS cab",
      "Joystick lockouts",
      "Travel warning system",
      "Emergency lowering"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Smart Mode', 'Versatile', 'Enhanced Power', 'Medium Duty']
  },

  {
    id: "komatsu-pc138-11",
    name: "30,000 LB Excavator-Erops W/ Heat & AC",
    category: "excavators",
    subcategory: "Erops W/ Heat & AC",
    technology: "KOMTRAX Monitoring System",
    description: "Large excavator with advanced monitoring and superior digging capability",
    detailedDescription: "The Komatsu PC138-11 combines powerful hydraulic performance with KOMTRAX monitoring system for enhanced productivity tracking and maintenance scheduling.",
    model: "Komatsu PC138-11",
    manufacturer: "Komatsu",
    dailyRate: 675,
    weeklyRate: 1850,
    monthlyRate: 5200,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "KOMTRAX monitoring system",
      "High-performance hydraulics",
      "Spacious operator compartment",
      "Advanced cooling system",
      "Heavy-duty undercarriage"
    ],
    specifications: {
      "Operating Weight": "30,000 lbs",
      "Max Dig Depth": "19 ft 8 in",
      "Max Reach": "31 ft 2 in",
      "Engine Power": "103 hp",
      "Bucket Capacity": "1.54 cu yd"
    },
    applications: [
      "Large construction projects",
      "Infrastructure development",
      "Mass excavation",
      "Heavy material handling",
      "Commercial construction"
    ],
    safetyFeatures: [
      "Advanced ROPS structure",
      "Machine monitoring alerts",
      "Hydraulic lockout valves",
      "Emergency shutdown system"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Large Scale', 'KOMTRAX', 'High Performance', 'Commercial']
  },

  {
    id: "komatsu-pc238",
    name: "56,000 LB Excavator-Erops W/ Heat & AC",
    category: "excavators",
    subcategory: "Erops W/ Heat & AC",
    technology: "Advanced Hydraulic Matching",
    description: "Heavy-duty excavator for large-scale construction with maximum digging force",
    detailedDescription: "The Komatsu PC238 represents the pinnacle of excavator performance with advanced hydraulic matching technology delivering exceptional productivity for the most demanding construction projects.",
    model: "Komatsu PC238",
    manufacturer: "Komatsu",
    dailyRate: 1500,
    weeklyRate: 3500,
    monthlyRate: 8800,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Advanced hydraulic matching",
      "Maximum digging force",
      "Premium operator environment",
      "Heavy-duty construction",
      "Extended service intervals"
    ],
    specifications: {
      "Operating Weight": "56,000 lbs",
      "Max Dig Depth": "23 ft 7 in",
      "Max Reach": "37 ft 1 in",
      "Engine Power": "177 hp",
      "Bucket Capacity": "2.62 cu yd"
    },
    applications: [
      "Major infrastructure projects",
      "Mining operations",
      "Large-scale earthmoving",
      "Heavy demolition",
      "Industrial construction"
    ],
    safetyFeatures: [
      "Reinforced ROPS cab",
      "Advanced monitoring systems",
      "Multiple safety lockouts",
      "Emergency response systems"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'limited',
    tags: ['Heavy Duty', 'Maximum Power', 'Industrial', 'Large Scale']
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
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
    detailedDescription: "The Tecnogen G-45 provides reliable power with advanced engine management system that monitors and optimizes performance while ensuring long-term durability and minimal maintenance.",
    model: "Tecnogen G-45",
    manufacturer: "Tecnogen",
    dailyRate: 550,
    weeklyRate: 1275,
    monthlyRate: 2300,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "45KVA maximum output",
      "Advanced engine management",
      "Sound-attenuated enclosure",
      "Heavy-duty alternator",
      "Extended maintenance intervals"
    ],
    specifications: {
      "Power Output": "45KVA (36kW)",
      "Voltage": "120/208V 3-phase",
      "Engine Management": "Electronic",
      "Noise Level": "68 dB(A)",
      "Fuel Tank": "50 gallons"
    },
    applications: [
      "Heavy-duty construction",
      "Industrial facilities",
      "Event power supply",
      "Emergency services",
      "Critical power applications"
    ],
    safetyFeatures: [
      "Engine protection system",
      "Overload protection",
      "Low noise operation",
      "Automatic voltage regulation"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Premium Power', 'Quiet Operation', 'Heavy Duty', 'Industrial']
  },

  // LIGHT TOWERS
  {
    id: "allmand-nite-light-pro",
    name: "4-5000 Watt Led Light Tower",
    category: "light-towers",
    subcategory: "LED",
    technology: "LED Illumination Technology",
    description: "Energy-efficient LED light tower providing superior illumination for work sites",
    detailedDescription: "The Allmand Nite Light Pro features advanced LED technology delivering 4-5000 watts of bright, even illumination while consuming significantly less fuel than traditional lighting systems.",
    model: "Allmand Nite Light Pro",
    manufacturer: "Allmand",
    dailyRate: 105,
    weeklyRate: 295,
    monthlyRate: 495,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "4-5000 watt LED array",
      "30-foot telescoping mast",
      "360-degree rotation",
      "Fuel-efficient operation",
      "Remote control capability"
    ],
    specifications: {
      "Light Output": "4-5000 watts LED",
      "Mast Height": "30 feet",
      "Coverage Area": "7+ acres",
      "Runtime": "100+ hours",
      "Fuel Tank": "20 gallons"
    },
    applications: [
      "Night construction work",
      "Security lighting",
      "Emergency response",
      "Event lighting",
      "Road work illumination"
    ],
    safetyFeatures: [
      "Automatic mast lowering",
      "Wind speed monitoring",
      "LED overheat protection",
      "Stable outrigger system"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['LED Technology', 'Energy Efficient', 'Remote Control', 'Wide Coverage']
  },

  // PRESSURE WASHERS
  {
    id: "shark-hot-water-pressure-washer",
    name: "3,000-3,500 PSI Hot Water Gas Powered Pressure Washer",
    category: "pressure-washers",
    subcategory: "Hot Water Gas Powered",
    technology: "Hot Water Cleaning System",
    description: "High-pressure hot water system for heavy-duty cleaning and surface preparation",
    detailedDescription: "The Shark hot water pressure washer delivers 3,000-3,500 PSI of cleaning power with heated water for superior cleaning performance on grease, oil, and stubborn contaminants.",
    model: "Shark",
    manufacturer: "Shark",
    dailyRate: 175,
    weeklyRate: 495,
    monthlyRate: 950,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "3,000-3,500 PSI pressure",
      "Hot water heating system",
      "Professional-grade pump",
      "Multiple nozzle attachments",
      "Heavy-duty construction"
    ],
    specifications: {
      "Pressure": "3,000-3,500 PSI",
      "Water Temperature": "Up to 200°F",
      "Flow Rate": "3.5 GPM",
      "Engine": "Gas powered",
      "Hose Length": "50 feet"
    },
    applications: [
      "Equipment cleaning",
      "Surface preparation",
      "Grease removal",
      "Industrial cleaning",
      "Concrete cleaning"
    ],
    safetyFeatures: [
      "Thermal relief valve",
      "Pressure regulation",
      "Safety trigger gun",
      "Non-slip platform"
    ],
    operatorRequired: false,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Hot Water', 'High Pressure', 'Professional', 'Heavy Duty']
  },

  // SKID STEERS
  {
    id: "cat-262-d3",
    name: "Wheel Skid Steer Erops W Heat & AC",
    category: "skid-steers",
    subcategory: "Wheel",
    technology: "Advanced Display System",
    description: "Wheeled skid steer with advanced display and climate-controlled cab for versatile applications",
    detailedDescription: "The Cat 262 D3 wheel skid steer provides excellent maneuverability and traction with advanced display technology and comfortable EROPS cab for extended operation periods.",
    model: "Cat 262 D3",
    manufacturer: "Cat",
    dailyRate: 400,
    weeklyRate: 950,
    monthlyRate: 2500,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Wheeled design for hard surfaces",
      "Advanced display system",
      "EROPS cab with climate control",
      "High-flow hydraulics",
      "Quick-attach system"
    ],
    specifications: {
      "Operating Capacity": "2,200 lbs",
      "Tipping Load": "6,300 lbs",
      "Engine Power": "74 hp",
      "Operating Weight": "8,900 lbs",
      "Travel Speed": "12 mph"
    },
    applications: [
      "Material handling",
      "Site cleanup",
      "Landscaping",
      "Snow removal",
      "Attachment work"
    ],
    safetyFeatures: [
      "ROPS/FOPS certified",
      "Seat belt interlock",
      "Hydraulic lockouts",
      "Backup alarm"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Wheeled', 'Versatile', 'Climate Control', 'High Flow']
  },

  {
    id: "cat-279-d3",
    name: "Track Skid Steer Erops W Heat & AC",
    category: "skid-steers",
    subcategory: "Track",
    technology: "Intelligent Hydraulics",
    description: "Track skid steer with intelligent hydraulics and superior traction for challenging terrain",
    detailedDescription: "The Cat 279 D3 track skid steer delivers exceptional performance on soft ground with intelligent hydraulics that automatically adjust to load conditions and operator preferences.",
    model: "Cat 279 D3",
    manufacturer: "Cat",
    dailyRate: 650,
    weeklyRate: 1700,
    monthlyRate: 3800,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Rubber track system",
      "Intelligent hydraulics",
      "Enhanced operator station",
      "Superior ground pressure distribution",
      "Advanced cooling system"
    ],
    specifications: {
      "Operating Capacity": "2,700 lbs",
      "Tipping Load": "7,700 lbs",
      "Engine Power": "74 hp",
      "Operating Weight": "10,200 lbs",
      "Ground Pressure": "4.8 PSI"
    },
    applications: [
      "Soft ground operations",
      "Finished surfaces",
      "Precise material placement",
      "Landscaping projects",
      "Sensitive area work"
    ],
    safetyFeatures: [
      "Enhanced visibility design",
      "Intelligent hydraulic protection",
      "Emergency hydraulic cutoff",
      "Advanced filtration system"
    ],
    operatorRequired: true,
    deliveryIncluded: true,
    availability: 'available',
    tags: ['Track System', 'Intelligent', 'Low Ground Pressure', 'Precise Control']
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