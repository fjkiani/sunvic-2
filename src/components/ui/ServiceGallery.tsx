import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  XMarkIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

interface GalleryItem {
  id: string;
  type: 'image' | 'video' | 'before-after';
  title: string;
  description?: string;
  src: string;
  beforeSrc?: string; // For before-after comparisons
  afterSrc?: string;
  category?: string;
}

interface ServiceGalleryProps {
  items: GalleryItem[];
  categories?: string[];
  className?: string;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  items,
  categories = [],
  className = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className={className}>
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-100"
            whileHover={{ y: -4 }}
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-video relative overflow-hidden">
              {item.type === 'before-after' && item.beforeSrc && item.afterSrc ? (
                <BeforeAfterImage 
                  beforeSrc={item.beforeSrc}
                  afterSrc={item.afterSrc}
                  sliderPosition={beforeAfterSlider}
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <PlayIcon className="w-12 h-12 text-white" />
                  ) : (
                    <div className="text-white text-center">
                      <div className="text-sm font-medium">View Details</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Type Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  item.type === 'video' ? 'bg-red-600 text-white' :
                  item.type === 'before-after' ? 'bg-green-600 text-white' :
                  'bg-blue-600 text-white'
                }`}>
                  {item.type === 'before-after' ? 'Before/After' : 
                   item.type === 'video' ? 'Video' : 'Photo'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-4xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                {filteredItems[lightboxIndex]?.type === 'before-after' ? (
                  <div className="relative">
                    <BeforeAfterImage 
                      beforeSrc={filteredItems[lightboxIndex].beforeSrc!}
                      afterSrc={filteredItems[lightboxIndex].afterSrc!}
                      sliderPosition={beforeAfterSlider}
                      onSliderChange={setBeforeAfterSlider}
                      interactive={true}
                    />
                  </div>
                ) : (
                  <img 
                    src={filteredItems[lightboxIndex]?.src} 
                    alt={filteredItems[lightboxIndex]?.title}
                    className="max-w-full max-h-screen object-contain"
                  />
                )}
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                  <h3 className="font-semibold text-lg">{filteredItems[lightboxIndex]?.title}</h3>
                  {filteredItems[lightboxIndex]?.description && (
                    <p className="text-sm text-gray-300">{filteredItems[lightboxIndex].description}</p>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Before/After Image Component
interface BeforeAfterImageProps {
  beforeSrc: string;
  afterSrc: string;
  sliderPosition: number;
  onSliderChange?: (position: number) => void;
  interactive?: boolean;
}

const BeforeAfterImage: React.FC<BeforeAfterImageProps> = ({
  beforeSrc,
  afterSrc,
  sliderPosition,
  onSliderChange,
  interactive = false
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !onSliderChange) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    onSliderChange(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* After Image (Background) */}
      <img 
        src={afterSrc} 
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeSrc} 
          alt="Before"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 text-sm rounded">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 text-sm rounded">
        After
      </div>
    </div>
  );
};

export default ServiceGallery; 
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  XMarkIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

interface GalleryItem {
  id: string;
  type: 'image' | 'video' | 'before-after';
  title: string;
  description?: string;
  src: string;
  beforeSrc?: string; // For before-after comparisons
  afterSrc?: string;
  category?: string;
}

interface ServiceGalleryProps {
  items: GalleryItem[];
  categories?: string[];
  className?: string;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  items,
  categories = [],
  className = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className={className}>
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-100"
            whileHover={{ y: -4 }}
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-video relative overflow-hidden">
              {item.type === 'before-after' && item.beforeSrc && item.afterSrc ? (
                <BeforeAfterImage 
                  beforeSrc={item.beforeSrc}
                  afterSrc={item.afterSrc}
                  sliderPosition={beforeAfterSlider}
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <PlayIcon className="w-12 h-12 text-white" />
                  ) : (
                    <div className="text-white text-center">
                      <div className="text-sm font-medium">View Details</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Type Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  item.type === 'video' ? 'bg-red-600 text-white' :
                  item.type === 'before-after' ? 'bg-green-600 text-white' :
                  'bg-blue-600 text-white'
                }`}>
                  {item.type === 'before-after' ? 'Before/After' : 
                   item.type === 'video' ? 'Video' : 'Photo'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-4xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                {filteredItems[lightboxIndex]?.type === 'before-after' ? (
                  <div className="relative">
                    <BeforeAfterImage 
                      beforeSrc={filteredItems[lightboxIndex].beforeSrc!}
                      afterSrc={filteredItems[lightboxIndex].afterSrc!}
                      sliderPosition={beforeAfterSlider}
                      onSliderChange={setBeforeAfterSlider}
                      interactive={true}
                    />
                  </div>
                ) : (
                  <img 
                    src={filteredItems[lightboxIndex]?.src} 
                    alt={filteredItems[lightboxIndex]?.title}
                    className="max-w-full max-h-screen object-contain"
                  />
                )}
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                  <h3 className="font-semibold text-lg">{filteredItems[lightboxIndex]?.title}</h3>
                  {filteredItems[lightboxIndex]?.description && (
                    <p className="text-sm text-gray-300">{filteredItems[lightboxIndex].description}</p>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Before/After Image Component
interface BeforeAfterImageProps {
  beforeSrc: string;
  afterSrc: string;
  sliderPosition: number;
  onSliderChange?: (position: number) => void;
  interactive?: boolean;
}

const BeforeAfterImage: React.FC<BeforeAfterImageProps> = ({
  beforeSrc,
  afterSrc,
  sliderPosition,
  onSliderChange,
  interactive = false
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !onSliderChange) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    onSliderChange(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* After Image (Background) */}
      <img 
        src={afterSrc} 
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeSrc} 
          alt="Before"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 text-sm rounded">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 text-sm rounded">
        After
      </div>
    </div>
  );
};

export default ServiceGallery; 
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  XMarkIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

interface GalleryItem {
  id: string;
  type: 'image' | 'video' | 'before-after';
  title: string;
  description?: string;
  src: string;
  beforeSrc?: string; // For before-after comparisons
  afterSrc?: string;
  category?: string;
}

interface ServiceGalleryProps {
  items: GalleryItem[];
  categories?: string[];
  className?: string;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  items,
  categories = [],
  className = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className={className}>
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-100"
            whileHover={{ y: -4 }}
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-video relative overflow-hidden">
              {item.type === 'before-after' && item.beforeSrc && item.afterSrc ? (
                <BeforeAfterImage 
                  beforeSrc={item.beforeSrc}
                  afterSrc={item.afterSrc}
                  sliderPosition={beforeAfterSlider}
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <PlayIcon className="w-12 h-12 text-white" />
                  ) : (
                    <div className="text-white text-center">
                      <div className="text-sm font-medium">View Details</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Type Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  item.type === 'video' ? 'bg-red-600 text-white' :
                  item.type === 'before-after' ? 'bg-green-600 text-white' :
                  'bg-blue-600 text-white'
                }`}>
                  {item.type === 'before-after' ? 'Before/After' : 
                   item.type === 'video' ? 'Video' : 'Photo'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-4xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                {filteredItems[lightboxIndex]?.type === 'before-after' ? (
                  <div className="relative">
                    <BeforeAfterImage 
                      beforeSrc={filteredItems[lightboxIndex].beforeSrc!}
                      afterSrc={filteredItems[lightboxIndex].afterSrc!}
                      sliderPosition={beforeAfterSlider}
                      onSliderChange={setBeforeAfterSlider}
                      interactive={true}
                    />
                  </div>
                ) : (
                  <img 
                    src={filteredItems[lightboxIndex]?.src} 
                    alt={filteredItems[lightboxIndex]?.title}
                    className="max-w-full max-h-screen object-contain"
                  />
                )}
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                  <h3 className="font-semibold text-lg">{filteredItems[lightboxIndex]?.title}</h3>
                  {filteredItems[lightboxIndex]?.description && (
                    <p className="text-sm text-gray-300">{filteredItems[lightboxIndex].description}</p>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Before/After Image Component
interface BeforeAfterImageProps {
  beforeSrc: string;
  afterSrc: string;
  sliderPosition: number;
  onSliderChange?: (position: number) => void;
  interactive?: boolean;
}

const BeforeAfterImage: React.FC<BeforeAfterImageProps> = ({
  beforeSrc,
  afterSrc,
  sliderPosition,
  onSliderChange,
  interactive = false
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !onSliderChange) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    onSliderChange(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* After Image (Background) */}
      <img 
        src={afterSrc} 
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeSrc} 
          alt="Before"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 text-sm rounded">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 text-sm rounded">
        After
      </div>
    </div>
  );
};

export default ServiceGallery; 