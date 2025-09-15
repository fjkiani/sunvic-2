// AI Video Generation Scripts for SunVic Construction
// Detailed prompts for LLM video generation tools

export interface VideoScript {
  id: string;
  title: string;
  duration: string;
  purpose: string;
  targetAudience: string;
  script: string;
  visualElements: string[];
  audioElements: string[];
  technicalSpecs: {
    resolution: string;
    aspectRatio: string;
    frameRate: string;
    style: string;
  };
  callToAction: string;
}

export const videoScripts: VideoScript[] = [
  {
    id: "hero-showcase",
    title: "SunVic Construction - Hero Showcase",
    duration: "60-90 seconds",
    purpose: "Main brand showcase highlighting our luxury home remodeling capabilities",
    targetAudience: "High-end homeowners, luxury real estate clients, affluent families",
    script: `
# SunVic Construction Hero Video Script

## Opening Sequence (0-10 seconds)
**Visual**: Aerial drone shot of a luxury home at sunset, transitioning to our logo with elegant typography
**Audio**: Inspiring orchestral music building up
**Text Overlay**: "Transforming Dreams Into Reality"

## Brand Introduction (10-20 seconds)
**Visual**: Quick montage of our team in action - architects reviewing blueprints, craftsmen working, project managers coordinating
**Audio**: Confident, professional voiceover
**Voiceover**: "At SunVic Construction, we don't just build homes. We craft luxury experiences that elevate your lifestyle."

## Service Showcase (20-50 seconds)
**Visual**: Split-screen montage showing before/after transformations:
- Kitchen: Outdated 90s kitchen → Modern wellness kitchen with smart appliances
- Bathroom: Basic bathroom → Spa-like sanctuary with chromotherapy lighting
- Full Home: Traditional home → Smart home with integrated technology
- Addition: Empty lot → Stunning sustainable addition

**Audio**: Dynamic music with building intensity
**Voiceover**: "From ground-up construction to complete home transformations, we specialize in luxury remodeling that integrates wellness, technology, and sustainability. Our innovative approach combines structural engineering with smart home technology, creating spaces that don't just look beautiful—they enhance your health and well-being."

## Process Highlight (50-70 seconds)
**Visual**: Time-lapse sequences showing our systematic approach:
- Initial consultation and 3D modeling
- Precision construction with quality materials
- Smart technology integration
- Final walkthrough and client satisfaction

**Audio**: Music continues with subtle construction sounds
**Voiceover**: "Our systematic approach ensures every project is delivered on time, on budget, and exceeds expectations. We own our equipment, control our timeline, and guarantee your satisfaction."

## Closing (70-90 seconds)
**Visual**: Final montage of completed projects, happy clients, and our team
**Audio**: Music crescendo with inspiring finish
**Voiceover**: "Ready to transform your home into a luxury sanctuary? Contact SunVic Construction today."
**Text Overlay**: "Schedule Your Consultation"
**Call-to-Action**: "Visit sunvic.com or call (555) 123-4567"
    `,
    visualElements: [
      "Aerial drone shots of luxury homes",
      "Before/after transformation montages",
      "Time-lapse construction sequences",
      "3D architectural renderings",
      "Smart home technology demonstrations",
      "Wellness features showcase (chromotherapy, air purification)",
      "Team members in professional settings",
      "High-quality construction materials and tools",
      "Client testimonials and reactions",
      "SunVic logo and branding elements"
    ],
    audioElements: [
      "Inspiring orchestral music (builds from soft to powerful)",
      "Professional, confident male voiceover",
      "Subtle construction sounds (hammering, sawing, machinery)",
      "Smart home technology sounds (beeps, whirring)",
      "Natural ambient sounds (birds, wind, water)",
      "Client testimonial audio clips",
      "Music crescendo for emotional impact"
    ],
    technicalSpecs: {
      resolution: "4K (3840x2160)",
      aspectRatio: "16:9",
      frameRate: "24fps",
      style: "Cinematic, luxury, professional, modern"
    },
    callToAction: "Schedule Your Consultation - Visit sunvic.com or call (555) 123-4567"
  }
];

// Additional video concepts for future development
export const futureVideoConcepts = [
  {
    id: "kitchen-transformation",
    title: "Wellness Kitchen Transformation",
    description: "Focus on our luxury kitchen remodeling with wellness features"
  },
  {
    id: "bathroom-sanctuary",
    title: "Spa Bathroom Sanctuary",
    description: "Showcase our spa-grade bathroom renovations with smart technology"
  },
  {
    id: "smart-home-integration",
    title: "Smart Home Integration",
    description: "Demonstrate our smart home technology and automation capabilities"
  },
  {
    id: "sustainable-construction",
    title: "Sustainable Luxury Construction",
    description: "Highlight our eco-friendly building practices and materials"
  },
  {
    id: "client-testimonials",
    title: "Client Success Stories",
    description: "Real client testimonials and project showcases"
  }
];

// Video generation prompts for different AI tools
export const aiVideoPrompts = {
  runway: {
    hero: "Create a 60-second luxury construction company hero video. Start with aerial drone shot of luxury home at sunset, transition to logo. Show before/after kitchen transformation from outdated to modern wellness kitchen. Include time-lapse construction, smart home technology, spa bathroom features. Cinematic style, 4K resolution, inspiring orchestral music. Professional voiceover about luxury home remodeling and wellness integration.",
    kitchen: "Generate a 45-second kitchen transformation video. Show outdated 90s kitchen with old appliances, then transform to modern wellness kitchen with smart appliances, chromotherapy lighting, air purification system. Include 3D renderings, construction process, final reveal. Luxury aesthetic, professional quality, inspiring music.",
    bathroom: "Create a 40-second spa bathroom video. Start with basic bathroom, transform to luxury spa sanctuary with chromotherapy lighting, smart mirrors, wellness features. Show construction process, technology integration, final luxurious result. Cinematic style, wellness-focused, professional quality."
  },
  pika: {
    hero: "Luxury construction company hero video: aerial shot of luxury home, logo reveal, before/after transformations of kitchen, bathroom, full home. Show construction process, smart technology, wellness features. 60 seconds, cinematic style, inspiring music, professional voiceover about luxury remodeling.",
    process: "Construction process video: show systematic approach from consultation to completion. Include 3D modeling, precision construction, quality materials, smart technology integration, client satisfaction. 45 seconds, professional style, time-lapse elements."
  },
  stableVideo: {
    hero: "Generate luxury construction showcase video. Start with luxury home exterior, show interior transformations of kitchen and bathroom. Include construction process, smart home technology, wellness features. Cinematic quality, 4K resolution, inspiring orchestral music, professional voiceover about luxury home remodeling."
  }
};

// Video metadata for SEO and social media
export const videoMetadata = {
  hero: {
    title: "SunVic Construction - Luxury Home Remodeling Showcase",
    description: "Experience the transformation of luxury homes with SunVic Construction. From wellness kitchens to spa bathrooms, we create spaces that enhance your lifestyle.",
    tags: ["luxury construction", "home remodeling", "wellness design", "smart homes", "kitchen renovation", "bathroom design"],
    thumbnail: "hero-video-thumbnail.jpg",
    duration: "90 seconds"
  }
};
