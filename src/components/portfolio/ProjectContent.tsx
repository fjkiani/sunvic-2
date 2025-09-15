import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  HeartIcon,
  CpuChipIcon,
  PhotoIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import type { EnhancedProject } from '../../data/portfolioProjects';
import DynamicGallery from '../ui/DynamicGallery';

interface ProjectContentProps {
  project: EnhancedProject;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Project Overview', icon: HomeIcon },
    { id: 'features', label: 'Features & Technology', icon: WrenchScrewdriverIcon },
    { id: 'wellness', label: 'Wellness Integration', icon: HeartIcon },
    { id: 'sustainability', label: 'Sustainability', icon: SparklesIcon },
    { id: 'gallery', label: 'Project Gallery', icon: PhotoIcon }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 font-medium text-sm transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Challenge & Solution */}
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {project.challenge}
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Results</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.results}
                  </p>

                  {project.clientTestimonial && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                      <blockquote className="text-gray-700 mb-4 leading-relaxed">
                        "{project.clientTestimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3">
                          <span className="text-white font-semibold text-sm">
                            {project.clientTestimonial.author.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <cite className="font-semibold text-gray-900 not-italic">
                            {project.clientTestimonial.author}
                          </cite>
                          <p className="text-gray-600 text-sm">
                            {project.clientTestimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Tags */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Highlights</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Features & Technology Integration
                </h2>
                <p className="text-lg text-gray-600">
                  Discover the innovative features and technology that make this project exceptional.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Core Features */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Features</h3>
                  <div className="space-y-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Smart Features */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <CpuChipIcon className="h-6 w-6 text-blue-600 mr-3" />
                    Smart Technology
                  </h3>
                  <div className="space-y-4">
                    {project.smartFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Equipment Used */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-blue-600 mr-3" />
                  Professional Equipment Utilized
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.equipmentUsed.map((equipment, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{equipment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wellness' && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Wellness & Health Integration
                </h2>
                <p className="text-lg text-gray-600">
                  See how we integrated wellness features to improve daily life and health outcomes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.wellnessFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-green-50 rounded-xl p-6 text-center"
                  >
                    <HeartIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-green-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Wellness Impact Results</h3>
                <p className="text-lg opacity-90 max-w-3xl mx-auto">
                  This project demonstrates our commitment to creating spaces that actively improve health and well-being. 
                  The integrated wellness features have measurably improved the occupants' quality of life.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'sustainability' && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Sustainable Design & Environmental Impact
                </h2>
                <p className="text-lg text-gray-600">
                  Explore the eco-friendly materials and energy-efficient systems that reduce environmental impact.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {project.sustainabilityFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-6 bg-green-50 rounded-xl">
                    <SparklesIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Environmental Impact</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">40%</div>
                    <div className="text-sm opacity-90">Energy Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">65%</div>
                    <div className="text-sm opacity-90">Water Conservation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">80%</div>
                    <div className="text-sm opacity-90">Sustainable Materials</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <DynamicGallery 
              projectId={project.id}
              title={`${project.title} Gallery`}
              description="See the transformation from concept to completion through our detailed project photography."
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectContent; 