// Image Utility Functions
// Handles local images with fallback to external sources

export interface ImageOptions {
  fallback?: string;
  alt?: string;
  category?: string;
}

// Base paths for different image categories
const IMAGE_PATHS = {
  equipment: '/images/equipment/',
  hero: '/images/hero/',
  projects: '/images/projects/',
  general: '/images/'
};

// Category-specific fallback images from Unsplash
const FALLBACK_IMAGES: { [key: string]: string } = {
  'air-compressors': 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'excavators': 'https://images.unsplash.com/photo-1581093458791-9d42c2eb3e17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'generators': 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'skid-steers': 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'backhoes': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'dozers': 'https://images.unsplash.com/photo-1581094271652-1775b92b3558?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'rollers': 'https://images.unsplash.com/photo-1581094271783-62986ff96842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'light-towers': 'https://images.unsplash.com/photo-1621905501751-4b85e5e65b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'pressure-washers': 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'telehandlers': 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'wheel-loaders': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'arrow-boards': 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'default': 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
};

/**
 * Get the correct image path, with fallback handling
 * @param imageName - The image filename (e.g., 'excavator-cat-320.jpg')
 * @param category - The image category ('equipment', 'hero', 'projects', 'general')
 * @returns The full image path or fallback URL
 */
export const getImagePath = (
  imageName: string, 
  category: 'equipment' | 'hero' | 'projects' | 'general' = 'general'
): string => {
  // If it's already a full URL, return as is
  if (imageName.startsWith('http://') || imageName.startsWith('https://')) {
    return imageName;
  }
  
  // If it's an absolute path, return as is
  if (imageName.startsWith('/')) {
    return imageName;
  }
  
  // Build the local path
  const basePath = IMAGE_PATHS[category] || IMAGE_PATHS.general;
  return `${basePath}${imageName}`;
};

/**
 * Get equipment image with automatic fallback
 * @param equipmentId - Equipment ID for naming convention
 * @param customImageName - Custom image filename
 * @returns Image path with fallback handling
 */
export const getEquipmentImage = (
  equipmentId: string,
  customImageName?: string
): string => {
  const imageName = customImageName || `${equipmentId}.jpg`;
  const localPath = getImagePath(imageName, 'equipment');
  
  // Return local path - the component will handle fallback on error
  return localPath;
};

/**
 * Get fallback image for a specific category
 * @param category - Equipment category
 * @returns Fallback image URL
 */
export const getFallbackImage = (category: string): string => {
  return FALLBACK_IMAGES[category] || FALLBACK_IMAGES.default;
};

/**
 * Check if an image URL is broken (contains 404 or is a local broken path)
 * @param imageUrl - The image URL to check
 * @returns True if the image appears to be broken
 */
export const isImageBroken = (imageUrl: string): boolean => {
  return imageUrl.includes('404') || 
         imageUrl.startsWith('/images/rentals/') || // Old broken paths
         imageUrl.includes('<html>'); // HTML error pages
};

/**
 * Convert external image URL to local filename suggestion
 * @param url - External image URL
 * @param equipmentId - Equipment ID for naming
 * @returns Suggested local filename
 */
export const getLocalImageName = (url: string, equipmentId: string): string => {
  // Extract file extension from URL
  const urlObj = new URL(url);
  const extension = urlObj.pathname.split('.').pop() || 'jpg';
  
  // Create a safe filename
  return `${equipmentId}.${extension}`;
};

/**
 * Image component props with enhanced error handling
 */
export interface SmartImageProps {
  src: string;
  alt: string;
  category?: string;
  className?: string;
  fallbackSrc?: string;
  onError?: () => void;
  onLoad?: () => void;
}

/**
 * Instructions for moving local images to the correct location
 */
export const IMAGE_SETUP_INSTRUCTIONS = `
📁 Image Setup Instructions:

1. **Equipment Images**: Place in public/images/equipment/
   Example: public/images/equipment/excavator-cat-320.jpg

2. **Hero Images**: Place in public/images/hero/
   Example: public/images/hero/hero-1.jpg

3. **Project Images**: Place in public/images/projects/
   Example: public/images/projects/kitchen-remodel-1.jpg

4. **Naming Convention**: 
   - Equipment: [equipment-id].jpg (e.g., atlas-copco-185.jpg)
   - Hero: hero-[number].jpg (e.g., hero-1.jpg)
   - Projects: [project-id]-[number].jpg (e.g., luxury-kitchen-1.jpg)

5. **Supported Formats**: .jpg, .jpeg, .png, .webp

6. **To move your image**: 
   From: /Users/fahadkiani/Desktop/development/sunvic/src/Sunvic/4.jpg
   To: /Users/fahadkiani/Desktop/development/sunvic/public/images/equipment/4.jpg
   Then use: getImagePath('4.jpg', 'equipment')
`;

export default {
  getImagePath,
  getEquipmentImage,
  getFallbackImage,
  isImageBroken,
  getLocalImageName,
  IMAGE_SETUP_INSTRUCTIONS
}; 