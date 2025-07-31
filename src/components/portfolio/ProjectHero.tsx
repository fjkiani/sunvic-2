import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  PhoneIcon,
  ClockIcon,
  CurrencyDollarIcon,
  HomeIcon,
  CalendarDaysIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

interface ProjectHeroProps {
  title: string;
  category: string;
  location: string;
  overview: string;
  heroImage: string;
  value: string;
  timeline: string;
  completedDate: string;
  size: string;
  awards?: string[];
  onConsultationClick: () => void;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  category,
  location,
  overview,
  heroImage,
  value,
  timeline,
  completedDate,
  size,
  awards,
  onConsultationClick
}) => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
      </div>

      {/* Content */}
      <div className="relative section-container section-padding min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-blue-400 mb-6">
              <Link to="/portfolio" className="hover:text-blue-300 transition-colors flex items-center">
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </div>

            {/* Category Badge */}
            <div className="inline-block bg-blue-600/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {category}
            </div>

            {/* Awards Badge */}
            {awards && awards.length > 0 && (
              <div className="inline-block bg-yellow-600/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-4 ml-3">
                <TrophyIcon className="h-4 w-4 inline mr-2" />
                Award Winner
              </div>
            )}

            {/* Title */}
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {title}
            </h1>

            {/* Location */}
            <p className="text-xl lg:text-2xl text-blue-300 font-medium mb-6">
              {location}
            </p>

            {/* Overview */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {overview}
            </p>

            {/* Project Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <CurrencyDollarIcon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Project Value</div>
                  <div className="text-lg font-semibold text-white">{value}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Timeline</div>
                  <div className="text-lg font-semibold text-white">{timeline}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <HomeIcon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Size</div>
                  <div className="text-lg font-semibold text-white">{size}</div>
                </div>
              </div>
            </div>

            {/* Completion Date */}
            <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-4 mb-8">
              <div className="flex items-center space-x-3">
                <CalendarDaysIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                <div>
                  <div className="text-green-300 font-semibold text-sm uppercase tracking-wide mb-1">
                    Project Completed
                  </div>
                  <p className="text-white">{completedDate}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onConsultationClick}
                className="btn-primary inline-flex items-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Schedule Similar Project
              </button>
              <Link
                to="/portfolio"
                className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 inline-flex items-center justify-center"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Awards & Recognition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:justify-self-end"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md">
              <h3 className="text-white font-bold text-xl mb-6">Project Highlights</h3>
              
              {awards && awards.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-yellow-300 font-semibold mb-3 flex items-center">
                    <TrophyIcon className="h-5 w-5 mr-2" />
                    Awards & Recognition
                  </h4>
                  <div className="space-y-2">
                    {awards.map((award, index) => (
                      <div key={index} className="text-sm text-gray-200 bg-yellow-500/10 border border-yellow-400/20 rounded p-2">
                        {award}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Investment</span>
                  <span className="text-white font-semibold">{value}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Completion Time</span>
                  <span className="text-white font-semibold">{timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Square Footage</span>
                  <span className="text-white font-semibold">{size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Completed</span>
                  <span className="text-white font-semibold">{completedDate}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero; 
