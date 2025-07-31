import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

export interface SlideContent {
  id: string | number;
  content?: React.ReactNode;
  background?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

interface SliderProps {
  slides: SlideContent[];
  height?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  loop?: boolean;
  className?: string;
  onSlideChange?: (activeIndex: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  slides,
  height = 'h-96',
  autoplay = false,
  autoplayDelay = 3000,
  showNavigation = true,
  showPagination = true,
  effect = 'slide',
  spaceBetween = 0,
  slidesPerView = 1,
  loop = true,
  className = '',
  onSlideChange,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const modules = [Navigation, Pagination];
  
  if (autoplay) {
    modules.push(Autoplay);
  }
  
  if (effect === 'fade') {
    modules.push(EffectFade);
  }

  const swiperOptions = {
    modules,
    spaceBetween,
    slidesPerView,
    loop: loop && slides.length > 1,
    effect,
    autoplay: autoplay ? {
      delay: autoplayDelay,
      disableOnInteraction: false,
    } : false,
    navigation: showNavigation ? {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    } : false,
    pagination: showPagination ? {
      clickable: true,
      dynamicBullets: true,
    } : false,
    onSlideChange: (swiper: SwiperType) => {
      if (onSlideChange) {
        onSlideChange(swiper.activeIndex);
      }
    },
    onSwiper: (swiper: SwiperType) => {
      swiperRef.current = swiper;
    },
  };

  return (
    <div className={`relative ${height} ${className}`}>
      <Swiper {...swiperOptions} className="h-full w-full">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full">
            {/* Background Image */}
            {slide.background && (
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.background}
                  alt=""
                  className="w-full h-full object-cover"
                />
                {slide.overlay && (
                  <div 
                    className="absolute inset-0 bg-black"
                    style={{ opacity: slide.overlayOpacity || 0.5 }}
                  />
                )}
              </div>
            )}
            
            {/* Slide Content */}
            {slide.content && (
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                {slide.content}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider; 