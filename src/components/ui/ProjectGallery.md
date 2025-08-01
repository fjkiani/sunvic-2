# ProjectGallery Component

A highly reusable, fully customizable project showcase gallery component that can be used for any type of construction, renovation, or project documentation.

## Features

- **Fully Customizable**: Configure colors, grid layouts, aspect ratios, and display options
- **Phase-based Navigation**: Organize projects into logical phases with smooth transitions
- **Lightbox Support**: Full-screen image viewing with navigation
- **Responsive Design**: Works perfectly on all device sizes
- **Status Tracking**: Show project phase status (completed, in-progress, upcoming)
- **Rich Metadata**: Support for project details, timelines, and additional information

## Basic Usage

```tsx
import ProjectGallery from './components/ui/ProjectGallery';
import { groundUpConstructionShowcase } from './data/projectShowcases';

// Simple usage with predefined data
<ProjectGallery 
  phases={groundUpConstructionShowcase.phases}
  config={groundUpConstructionShowcase.config}
/>
```

## Creating New Project Showcases

### 1. Kitchen Remodel Example

```tsx
import { createKitchenRemodelShowcase } from './data/projectShowcases';

const myKitchenProject = createKitchenRemodelShowcase({
  id: 'kitchen-2024-001',
  title: 'Modern Kitchen Transformation',
  images: {
    before: ['/images/kitchen/before-1.jpg', '/images/kitchen/before-2.jpg'],
    during: ['/images/kitchen/during-1.jpg', '/images/kitchen/during-2.jpg'],
    after: ['/images/kitchen/after-1.jpg', '/images/kitchen/after-2.jpg']
  },
  metadata: {
    location: 'Princeton, NJ',
    client: 'Johnson Family',
    completionDate: 'March 2024',
    projectValue: '$45,000'
  }
});

// Use in component
<ProjectGallery 
  phases={myKitchenProject.phases}
  config={myKitchenProject.config}
/>
```

### 2. Custom Project Example

```tsx
import ProjectGallery from './components/ui/ProjectGallery';

const customProject = {
  phases: [
    {
      id: 'assessment',
      title: 'Initial Assessment',
      description: 'Detailed evaluation of existing conditions.',
      images: ['/images/custom/assess-1.jpg'],
      duration: '1 week',
      status: 'completed' as const
    },
    {
      id: 'renovation',
      title: 'Renovation Work',
      description: 'Complete renovation and upgrades.',
      images: ['/images/custom/work-1.jpg', '/images/custom/work-2.jpg'],
      duration: '3 weeks',
      status: 'in-progress' as const
    }
  ],
  config: {
    title: 'Custom Renovation Project',
    accentColor: 'purple',
    showDuration: true,
    showStatus: true,
    gridCols: '2' as const
  }
};

<ProjectGallery phases={customProject.phases} config={customProject.config} />
```

## Configuration Options

### ProjectGalleryConfig

```tsx
interface ProjectGalleryConfig {
  title?: string;                    // Gallery header title
  description?: string;              // Gallery description
  accentColor?: string;              // 'amber' | 'blue' | 'green' | 'purple' | 'orange'
  showDuration?: boolean;            // Show phase durations
  showStatus?: boolean;              // Show phase status indicators
  gridCols?: 'auto' | '1' | '2' | '3' | '4';  // Grid columns
  imageAspectRatio?: 'square' | 'video' | 'portrait';  // Image aspect ratio
}
```

### ProjectPhase

```tsx
interface ProjectPhase {
  id: string;                        // Unique phase identifier
  title: string;                     // Phase display name
  description: string;               // Phase description
  images: string[];                  // Array of image URLs
  duration?: string;                 // Optional duration text
  details?: string[];                // Optional bullet points
  status?: 'completed' | 'in-progress' | 'upcoming';  // Optional status
}
```

## Color Themes

Available accent colors with their corresponding styling:

- **amber**: Warm construction theme (default for construction projects)
- **blue**: Professional, clean theme (ideal for bathroom renovations)
- **green**: Natural, sustainable theme (perfect for home additions)
- **purple**: Luxury, premium theme
- **orange**: Vibrant, energetic theme (great for kitchen projects)

## Grid Layout Options

- **auto**: Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
- **1**: Single column layout
- **2**: Two column layout
- **3**: Three column layout
- **4**: Four column layout

## Image Aspect Ratios

- **video**: 16:9 aspect ratio (default, great for most construction photos)
- **square**: 1:1 aspect ratio (ideal for Instagram-style galleries)
- **portrait**: 3:4 aspect ratio (perfect for before/after comparisons)

## Helper Functions

### Creating Template-Based Projects

Use the pre-built template functions for common project types:

```tsx
// Kitchen projects
const kitchenProject = createKitchenRemodelShowcase({...});

// Bathroom projects  
const bathroomProject = createBathroomRenovationShowcase({...});

// Home additions
const additionProject = createHomeAdditionShowcase({...});
```

### Finding Projects

```tsx
// Get specific project
const project = getProjectShowcaseById('ground-up-construction-2024');

// Get projects by tag
const constructionProjects = getProjectShowcasesByTag('new-construction');
```

## Real-World Examples

### For Service Detail Pages

```tsx
// In your service detail page component
import { groundUpConstructionShowcase } from './data/projectShowcases';

const ServiceDetailPage = () => (
  <div>
    <ServiceHero />
    <ServiceContent />
    
    {/* Project showcase section */}
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">See Our Work in Action</h2>
        <ProjectGallery 
          phases={groundUpConstructionShowcase.phases}
          config={groundUpConstructionShowcase.config}
        />
      </div>
    </section>
  </div>
);
```

### For Portfolio Pages

```tsx
// Show multiple projects
const PortfolioPage = () => {
  const allProjects = allProjectShowcases;
  
  return (
    <div>
      {allProjects.map(project => (
        <section key={project.id} className="py-16">
          <ProjectGallery 
            phases={project.phases}
            config={{
              ...project.config,
              title: project.title,
              description: project.description
            }}
          />
        </section>
      ))}
    </div>
  );
};
```

## Benefits of This Approach

1. **DRY Principle**: Write once, use everywhere
2. **Consistent UX**: Same interaction patterns across all project showcases  
3. **Easy Content Management**: Just add images and metadata, no component changes needed
4. **Type Safety**: Full TypeScript support with proper interfaces
5. **Scalable**: Add new project types without touching existing code
6. **Customizable**: Each project can have its own unique styling and behavior

## Adding New Project Types

To add a new project type (e.g., "Roofing Projects"):

1. Create a template function in `projectShowcases.ts`:

```tsx
export const createRoofingProjectShowcase = (projectData: {
  id: string;
  title: string;
  images: { inspection: string[]; removal: string[]; installation: string[] };
  metadata?: Partial<ProjectShowcase['metadata']>;
}): ProjectShowcase => ({
  // Define your phases and config
});
```

2. Use it anywhere:

```tsx
const roofingProject = createRoofingProjectShowcase({
  id: 'roof-2024-001',
  title: 'Complete Roof Replacement',
  images: { ... }
});

<ProjectGallery phases={roofingProject.phases} config={roofingProject.config} />
```

This approach ensures you never have to write gallery UI code again - just focus on your content and configuration! 