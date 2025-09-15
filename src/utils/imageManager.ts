// Dynamic Image Management System
// Automatically extracts and organizes images from project and service data

import { enhancedPortfolioProjects } from '../data/portfolioProjects';
import type { EnhancedProject } from '../data/portfolioProjects';
import { enhancedServices } from '../data/enhancedServices';
import type { EnhancedService } from '../data/enhancedServices';

export interface ImageData {
  id: string;
  url: string;
  caption: string;
  type: 'before' | 'after' | 'during' | 'detail' | 'process' | 'hero';
  category?: string;
  projectId?: string;
  serviceId?: string;
  tags?: string[];
  alt?: string;
}

export interface GalleryConfig {
  title: string;
  description?: string;
  accentColor: 'amber' | 'blue' | 'green' | 'purple' | 'orange';
  showCaptions: boolean;
  showTypes: boolean;
  gridCols: 'auto' | '1' | '2' | '3' | '4';
  imageAspectRatio: 'square' | 'video' | 'portrait';
}

// Extract all images from project data
export const extractProjectImages = (project: EnhancedProject): ImageData[] => {
  return project.images.map(image => ({
    id: image.id,
    url: image.url,
    caption: image.caption,
    type: image.type,
    category: project.category,
    projectId: project.id,
    tags: [project.category, project.location, ...project.tags],
    alt: `${project.title} - ${image.caption}`
  }));
};

// Extract all images from service data (using service image as hero)
export const extractServiceImages = (service: EnhancedService): ImageData[] => {
  const images: ImageData[] = [
    {
      id: `${service.id}-hero`,
      url: service.image,
      caption: `${service.title} - Main Image`,
      type: 'hero',
      category: service.category,
      serviceId: service.id,
      tags: [service.category, ...service.trends2025],
      alt: `${service.title} - ${service.shortDescription}`
    }
  ];

  // Add process step images if available
  if (service.processSteps) {
    service.processSteps.forEach((step, index) => {
      // Generate placeholder images for process steps
      const processImageUrl = `/images/full-home-remodel/1.jpg`;
      images.push({
        id: `${service.id}-process-${index}`,
        url: processImageUrl,
        caption: step.title,
        type: 'process',
        category: service.category,
        serviceId: service.id,
        tags: [service.category, 'process', step.title],
        alt: `${service.title} - ${step.title}`
      });
    });
  }

  return images;
};

// Get all images for a specific project
export const getProjectImages = (projectId: string): ImageData[] => {
  const project = enhancedPortfolioProjects.find(p => p.id === projectId);
  if (!project) return [];
  return extractProjectImages(project);
};

// Get all images for a specific service
export const getServiceImages = (serviceId: string): ImageData[] => {
  const service = enhancedServices.find(s => s.id === serviceId);
  if (!service) return [];
  return extractServiceImages(service);
};

// Get images by type (before, after, during, detail, process, hero)
export const getImagesByType = (images: ImageData[], type: ImageData['type']): ImageData[] => {
  return images.filter(img => img.type === type);
};

// Get images by category
export const getImagesByCategory = (images: ImageData[], category: string): ImageData[] => {
  return images.filter(img => img.category === category);
};

// Get images by tags
export const getImagesByTags = (images: ImageData[], tags: string[]): ImageData[] => {
  return images.filter(img => 
    tags.some(tag => img.tags?.includes(tag))
  );
};

// Create dynamic gallery phases from images
export const createGalleryPhases = (images: ImageData[]): any[] => {
  const phases: any[] = [];
  const typeGroups = images.reduce((acc, img) => {
    if (!acc[img.type]) acc[img.type] = [];
    acc[img.type].push(img);
    return acc;
  }, {} as Record<string, ImageData[]>);

  // Create phases for each type
  Object.entries(typeGroups).forEach(([type, typeImages]) => {
    if (typeImages.length > 0) {
      phases.push({
        id: type,
        title: getTypeTitle(type),
        description: getTypeDescription(type),
        images: typeImages.map(img => img.url),
        duration: getTypeDuration(type),
        status: 'completed' as const
      });
    }
  });

  return phases;
};

// Helper functions for type titles and descriptions
const getTypeTitle = (type: string): string => {
  const titles: Record<string, string> = {
    'before': 'Before Transformation',
    'after': 'After Transformation', 
    'during': 'Construction Process',
    'detail': 'Project Details',
    'process': 'Our Process',
    'hero': 'Project Overview'
  };
  return titles[type] || type.charAt(0).toUpperCase() + type.slice(1);
};

const getTypeDescription = (type: string): string => {
  const descriptions: Record<string, string> = {
    'before': 'Initial conditions and existing state before our work began.',
    'after': 'Final results showcasing the completed transformation.',
    'during': 'Work in progress showing our construction process.',
    'detail': 'Close-up views of specific features and finishes.',
    'process': 'Our systematic approach to project execution.',
    'hero': 'Main project overview and key highlights.'
  };
  return descriptions[type] || `Images showing ${type} aspects of the project.`;
};

const getTypeDuration = (type: string): string => {
  const durations: Record<string, string> = {
    'before': 'Initial Assessment',
    'after': 'Final Delivery',
    'during': 'Construction Phase',
    'detail': 'Quality Control',
    'process': 'Planning Phase',
    'hero': 'Project Overview'
  };
  return durations[type] || 'Ongoing';
};

// Create gallery config based on project/service type
export const createGalleryConfig = (category: string, title: string): GalleryConfig => {
  const configs: Record<string, Partial<GalleryConfig>> = {
    'Kitchen Innovation': {
      accentColor: 'orange',
      description: 'Kitchen transformation gallery showcasing before, during, and after stages.'
    },
    'Bathroom Innovation': {
      accentColor: 'blue',
      description: 'Bathroom renovation gallery featuring spa-grade finishes and smart technology.'
    },
    'Full Home Remodeling': {
      accentColor: 'green',
      description: 'Complete home transformation gallery documenting the entire renovation process.'
    },
    'Sustainable Expansion': {
      accentColor: 'purple',
      description: 'Sustainable addition gallery highlighting eco-friendly construction methods.'
    },
    'Engineering & Planning': {
      accentColor: 'amber',
      description: 'Engineering process gallery showing technical planning and execution.'
    }
  };

  const baseConfig = configs[category] || {
    accentColor: 'amber',
    description: 'Project gallery showcasing our work and process.'
  };

  return {
    title,
    description: baseConfig.description,
    accentColor: baseConfig.accentColor || 'amber',
    showCaptions: true,
    showTypes: true,
    gridCols: 'auto',
    imageAspectRatio: 'video'
  };
};

// Get all images across all projects and services
export const getAllImages = (): ImageData[] => {
  const projectImages = enhancedPortfolioProjects.flatMap(extractProjectImages);
  const serviceImages = enhancedServices.flatMap(extractServiceImages);
  return [...projectImages, ...serviceImages];
};

// Search images by query
export const searchImages = (query: string): ImageData[] => {
  const allImages = getAllImages();
  const lowercaseQuery = query.toLowerCase();
  
  return allImages.filter(img => 
    img.caption.toLowerCase().includes(lowercaseQuery) ||
    img.alt?.toLowerCase().includes(lowercaseQuery) ||
    img.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    img.category?.toLowerCase().includes(lowercaseQuery)
  );
};

// Get related images (same category, similar tags)
export const getRelatedImages = (imageId: string, limit: number = 6): ImageData[] => {
  const allImages = getAllImages();
  const sourceImage = allImages.find(img => img.id === imageId);
  
  if (!sourceImage) return [];

  const related = allImages
    .filter(img => img.id !== imageId)
    .filter(img => 
      img.category === sourceImage.category ||
      img.tags?.some(tag => sourceImage.tags?.includes(tag))
    )
    .slice(0, limit);

  return related;
};
