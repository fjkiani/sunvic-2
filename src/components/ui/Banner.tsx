import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  overlay?: boolean;
  overlayOpacity?: number;
  gradient?: string;
  primaryAction?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
  };
  secondaryAction?: {
    text: string;
    href: string;
    variant?: 'outline' | 'ghost';
  };
  alignment?: 'left' | 'center' | 'right';
  textColor?: 'white' | 'dark';
  children?: ReactNode;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  height = 'lg',
  overlay = true,
  overlayOpacity = 0.6,
  gradient,
  primaryAction,
  secondaryAction,
  alignment = 'center',
  textColor = 'white',
  children,
  className = '',
}) => {
  const heightClasses = {
    sm: 'h-64',
    md: 'h-80',
    lg: 'h-96',
    xl: 'h-[32rem]',
    full: 'h-screen'
  };

  const alignmentClasses = {
    left: 'text-left justify-start',
    center: 'text-center justify-center',
    right: 'text-right justify-end'
  };

  const colorClasses = {
    white: 'text-white',
    dark: 'text-gray-900'
  };

  return (
    <section className={`relative ${heightClasses[height]} overflow-hidden flex items-center ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ 
            opacity: overlayOpacity,
            background: gradient || undefined
          }}
        />
      )}

      {/* Content */}
      <div className={`relative z-10 w-full flex ${alignmentClasses[alignment]}`}>
        <div className="section-container">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={colorClasses[textColor]}
            >
              {subtitle && (
                <motion.p
                  className="text-sm md:text-base font-semibold uppercase tracking-wider mb-4 opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {subtitle}
                </motion.p>
              )}

              <motion.h1
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {title}
              </motion.h1>

              {description && (
                <motion.p
                  className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {description}
                </motion.p>
              )}

              {(primaryAction || secondaryAction) && (
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {primaryAction && (
                    <Link
                      to={primaryAction.href}
                      className={`btn-${primaryAction.variant || 'primary'}`}
                    >
                      {primaryAction.text}
                    </Link>
                  )}

                  {secondaryAction && (
                    <Link
                      to={secondaryAction.href}
                      className={`btn-${secondaryAction.variant || 'outline'} ${
                        textColor === 'white' ? 'border-white text-white hover:bg-white hover:text-gray-900' : ''
                      }`}
                    >
                      {secondaryAction.text}
                    </Link>
                  )}
                </motion.div>
              )}

              {children && (
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  {children}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner; 
