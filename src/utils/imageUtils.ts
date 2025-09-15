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

// Category-specific fallback images using local equipment images
const FALLBACK_IMAGES: { [key: string]: string } = {
  'air-compressors': '/images/equipment/excavator-example.jpg',
  'excavators': '/images/equipment/excavator-example.jpg',
  'generators': '/images/equipment/excavator-example.jpg',
  'skid-steers': '/images/equipment/excavator-example.jpg',
  'backhoes': '/images/equipment/excavator-example.jpg',
  'dozers': '/images/equipment/excavator-example.jpg',
  'rollers': '/images/equipment/excavator-example.jpg',
  'light-towers': '/images/equipment/excavator-example.jpg',
  'pressure-washers': '/images/equipment/excavator-example.jpg',
  'telehandlers': '/images/equipment/excavator-example.jpg',
  'wheel-loaders': '/images/equipment/excavator-example.jpg',
  'arrow-boards': '/images/equipment/excavator-example.jpg',
  'default': '/images/equipment/excavator-example.jpg'
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