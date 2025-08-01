import type { ProjectPhase, ProjectGalleryConfig } from '../components/ui/ProjectGallery';

export interface ProjectShowcase {
  id: string;
  title: string;
  description: string;
  phases: ProjectPhase[];
  config: ProjectGalleryConfig;
  metadata?: {
    location?: string;
    client?: string;
    completionDate?: string;
    projectValue?: string;
    duration?: string;
    tags?: string[];
  };
}

// Ground Up Construction Project
export const groundUpConstructionShowcase: ProjectShowcase = {
  id: 'ground-up-construction-2024',
  title: 'Modern Family Home - Ground Up Construction',
  description: 'Complete new home construction showcasing our comprehensive approach from initial blueprints to final construction.',
  phases: [
    {
      id: 'blueprints',
      title: 'Design & Planning',
      description: 'Architectural blueprints and engineering drawings showing the complete home design with structural details and room layouts.',
      images: [
        // TODO: Replace with your actual blueprint images
        // Your images: 1.jpg, 2.jpg, 3.jpg, 4.jpg
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop'
      ],
      duration: '4-6 weeks',
      details: [
        'Architectural design and space planning',
        'Structural engineering analysis and calculations',
        'Building permit acquisition and approvals',
        'Site survey and soil testing coordination',
        'Material specifications and supplier coordination'
      ],
      status: 'completed'
    },
    {
      id: 'foundation',
      title: 'Foundation & Site Work',
      description: 'Complete foundation construction including excavation, concrete forming, pouring, and site preparation for the structural phase.',
      images: [
        // TODO: Replace with your actual foundation images
        // Your images: 20241221_162643.jpg, 20241221_162647.jpg, 20241221_162826.jpg, 20241221_163309.jpg, 20241221_163328.jpg
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop'
      ],
      duration: '3-4 weeks',
      details: [
        'Site excavation and grading to precise specifications',
        'Foundation forming with steel reinforcement placement',
        'Concrete pouring with proper curing procedures',
        'Waterproofing and drainage system installation',
        'Utility rough-ins and connections preparation'
      ],
      status: 'completed'
    },
    {
      id: 'framing',
      title: 'Structural Framing',
      description: 'Complete structural framing including floor systems, wall framing, roof trusses, and all structural elements bringing the home to life.',
      images: [
        // TODO: Replace with your actual framing images
        // Your images: 20250102_143944.jpg, 20250102_143946.jpg, IMG-20250113-WA0023.jpg
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&h=600&fit=crop'
      ],
      duration: '3-4 weeks',
      details: [
        'Engineered floor system installation with proper spacing',
        'Wall framing with advanced building techniques',
        'Roof truss installation and structural verification',
        'Sheathing and building envelope completion',
        'Structural inspections and engineering sign-offs'
      ],
      status: 'in-progress'
    }
  ],
  config: {
    title: 'Project Construction Timeline',
    description: 'Follow our systematic approach to ground-up construction with quality at every phase.',
    accentColor: 'amber',
    showDuration: true,
    showStatus: true,
    gridCols: 'auto',
    imageAspectRatio: 'video'
  },
  metadata: {
    location: 'New Jersey',
    client: 'Private Residential',
    completionDate: 'Expected Q3 2025',
    projectValue: '$650,000',
    duration: '10-12 months',
    tags: ['new-construction', 'residential', 'engineered', 'family-home']
  }
};

// Kitchen Remodel Project Template (for future use)
export const createKitchenRemodelShowcase = (projectData: {
  id: string;
  title: string;
  images: { before: string[]; during: string[]; after: string[] };
  metadata?: Partial<ProjectShowcase['metadata']>;
}): ProjectShowcase => ({
  id: projectData.id,
  title: projectData.title,
  description: 'Complete kitchen transformation showcasing modern design and functionality.',
  phases: [
    {
      id: 'before',
      title: 'Before',
      description: 'Original kitchen condition and layout assessment.',
      images: projectData.images.before,
      duration: '1 week',
      details: [
        'Initial assessment and measurements',
        'Design consultation and planning',
        'Material selection and ordering',
        'Permit applications if required'
      ],
      status: 'completed'
    },
    {
      id: 'during',
      title: 'Renovation Process',
      description: 'Complete demolition, installation, and construction phases.',
      images: projectData.images.during,
      duration: '3-4 weeks',
      details: [
        'Careful demolition and debris removal',
        'Electrical and plumbing rough-in',
        'Cabinet installation and millwork',
        'Countertop templating and installation',
        'Appliance installation and testing'
      ],
      status: 'completed'
    },
    {
      id: 'after',
      title: 'Final Result',
      description: 'Completed kitchen with all finishing touches and final walkthrough.',
      images: projectData.images.after,
      duration: '1 week',
      details: [
        'Final paint and finishing work',
        'Hardware installation and adjustment',
        'Appliance calibration and testing',
        'Final cleaning and walkthrough',
        'Client training on new systems'
      ],
      status: 'completed'
    }
  ],
  config: {
    title: 'Kitchen Transformation',
    description: 'See how we transform kitchens with precision and attention to detail.',
    accentColor: 'orange',
    showDuration: true,
    showStatus: false,
    gridCols: 'auto',
    imageAspectRatio: 'video'
  },
  metadata: projectData.metadata
});

// Bathroom Renovation Project Template (for future use)
export const createBathroomRenovationShowcase = (projectData: {
  id: string;
  title: string;
  images: { before: string[]; demolition: string[]; installation: string[]; after: string[] };
  metadata?: Partial<ProjectShowcase['metadata']>;
}): ProjectShowcase => ({
  id: projectData.id,
  title: projectData.title,
  description: 'Spa-grade bathroom renovation with luxury finishes and modern amenities.',
  phases: [
    {
      id: 'before',
      title: 'Original Condition',
      description: 'Assessment of existing bathroom layout and condition.',
      images: projectData.images.before,
      duration: '1-2 days',
      status: 'completed'
    },
    {
      id: 'demolition',
      title: 'Demolition & Prep',
      description: 'Careful removal of existing fixtures and preparation for new installation.',
      images: projectData.images.demolition,
      duration: '2-3 days',
      status: 'completed'
    },
    {
      id: 'installation',
      title: 'Installation Process',
      description: 'Tile work, fixture installation, and plumbing connections.',
      images: projectData.images.installation,
      duration: '2-3 weeks',
      status: 'completed'
    },
    {
      id: 'after',
      title: 'Luxury Bathroom',
      description: 'Completed spa-grade bathroom with all luxury amenities.',
      images: projectData.images.after,
      duration: '1 week',
      status: 'completed'
    }
  ],
  config: {
    title: 'Bathroom Renovation Journey',
    description: 'Experience the transformation from outdated to luxury spa experience.',
    accentColor: 'blue',
    showDuration: true,
    showStatus: false,
    gridCols: 'auto',
    imageAspectRatio: 'video'
  },
  metadata: projectData.metadata
});

// Home Addition Project Template (for future use)
export const createHomeAdditionShowcase = (projectData: {
  id: string;
  title: string;
  images: { planning: string[]; foundation: string[]; framing: string[]; completion: string[] };
  metadata?: Partial<ProjectShowcase['metadata']>;
}): ProjectShowcase => ({
  id: projectData.id,
  title: projectData.title,
  description: 'Smart home addition seamlessly integrated with existing structure.',
  phases: [
    {
      id: 'planning',
      title: 'Design & Planning',
      description: 'Architectural planning and structural integration with existing home.',
      images: projectData.images.planning,
      duration: '3-4 weeks',
      status: 'completed'
    },
    {
      id: 'foundation',
      title: 'Foundation Work',
      description: 'New foundation construction and integration with existing structure.',
      images: projectData.images.foundation,
      duration: '2-3 weeks',
      status: 'completed'
    },
    {
      id: 'framing',
      title: 'Framing & Structure',
      description: 'Structural framing and roof integration with existing home.',
      images: projectData.images.framing,
      duration: '3-4 weeks',
      status: 'completed'
    },
    {
      id: 'completion',
      title: 'Finished Addition',
      description: 'Completed addition with seamless integration and modern amenities.',
      images: projectData.images.completion,
      duration: '4-6 weeks',
      status: 'completed'
    }
  ],
  config: {
    title: 'Home Addition Project',
    description: 'Expanding your living space with expert structural integration.',
    accentColor: 'green',
    showDuration: true,
    showStatus: false,
    gridCols: 'auto',
    imageAspectRatio: 'video'
  },
  metadata: projectData.metadata
});

// Full Home Remodeling Project
export const fullHomeRemodelingShowcase: ProjectShowcase = {
  id: 'full-home-remodeling-2024',
  title: 'Complete Home Transformation - Full Remodeling Project',
  description: 'Comprehensive home renovation showcasing coordinated kitchen, bathroom, basement, and smart home integration for a cohesive living experience.',
  phases: [
    {
      id: 'kitchen',
      title: 'Kitchen Renovation',
      description: 'Complete kitchen transformation with modern cabinetry, quartz countertops, smart appliances, and integrated technology for the heart of the home.',
      images: [
        // TODO: Replace with actual kitchen renovation images
        '/images/full-home-remodel/kitchen/1.png',
        '/images/full-home-remodel/kitchen/2.png',
        '/images/full-home-remodel/kitchen/3.png',
      ],
      duration: '4-5 weeks',
      details: [
        'Custom cabinetry design and installation',
        'Quartz countertops with waterfall edge',
        'Smart appliance integration with IoT connectivity',
        'Under-cabinet LED lighting with smart controls',
        'Tile backsplash with geometric patterns',
        'Kitchen island with built-in charging stations'
      ],
      status: 'completed'
    },
    {
      id: 'bathroom',
      title: 'Bathroom Transformations',
      description: 'Luxury spa-grade bathroom renovations featuring heated floors, smart fixtures, and wellness-focused design elements.',
      images: [
        // TODO: Replace with actual bathroom renovation images
        '/images/full-home-remodel/bathroom/1.png',
        '/images/full-home-remodel/bathroom/2.png',
        '/images/full-home-remodel/bathroom/3.png',
        '/images/full-home-remodel/bathroom/4.png',
        '/images/full-home-remodel/bathroom/5.png',
        '/images/full-home-remodel/bathroom/6.png',
        '/images/full-home-remodel/bathroom/7.png',
      ],
      duration: '3-4 weeks',
      details: [
        'Heated tile flooring throughout',
        'Smart shower systems with digital controls',
        'Floating vanities with integrated lighting',
        'Soaking tub with chromotherapy features',
        'Smart mirrors with built-in displays',
        'Automated ventilation and humidity control'
      ],
      status: 'completed'
    },
    {
      id: 'basement',
      title: 'Basement Finishing',
      description: 'Complete basement transformation into a multi-functional entertainment and utility space with proper waterproofing and climate control.',
      images: [
        // TODO: Replace with actual basement finishing images
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop'
      ],
      duration: '4-6 weeks',
      details: [
        'Comprehensive waterproofing and moisture control',
        'Luxury vinyl plank flooring installation',
        'Entertainment area with built-in media center',
        'Home office space with proper lighting',
        'Full bathroom addition with modern fixtures',
        'Climate control and air quality systems'
      ],
      status: 'in-progress'
    },
    {
      id: 'smart-home',
      title: 'Smart Home Integration',
      description: 'Whole-home automation system installation connecting all spaces with centralized control and intelligent features.',
      images: [
        // TODO: Replace with actual smart home integration images
        'images/',
       
      ],
      duration: '2-3 weeks',
      details: [
        'Centralized home automation hub installation',
        'Smart lighting control throughout the home',
        'Integrated security system with mobile monitoring',
        'Climate control automation and scheduling',
        'Voice control integration in all rooms',
        'High-speed networking infrastructure upgrade'
      ],
      status: 'upcoming'
    }
  ],
  config: {
    title: 'Full Home Transformation Timeline',
    description: 'Experience our coordinated approach to complete home renovation with seamless integration across all spaces.',
    accentColor: 'purple',
    showDuration: true,
    showStatus: true,
    gridCols: 'auto',
    imageAspectRatio: 'video'
  },
  metadata: {
    location: 'Princeton, NJ',
    client: 'Modern Family Home',
    completionDate: 'Expected Q2 2025',
    projectValue: '$275,000',
    duration: '12-16 weeks',
    tags: ['full-remodel', 'kitchen', 'bathroom', 'basement', 'smart-home', 'luxury']
  }
};

// Export all showcases
export const allProjectShowcases: ProjectShowcase[] = [
  groundUpConstructionShowcase,
  fullHomeRemodelingShowcase
];

// Helper function to get showcase by ID
export const getProjectShowcaseById = (id: string): ProjectShowcase | undefined => {
  return allProjectShowcases.find(showcase => showcase.id === id);
};

// Helper function to get showcases by tags
export const getProjectShowcasesByTag = (tag: string): ProjectShowcase[] => {
  return allProjectShowcases.filter(showcase => 
    showcase.metadata?.tags?.includes(tag)
  );
}; 