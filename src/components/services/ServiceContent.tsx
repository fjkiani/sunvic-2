import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BeakerIcon,
  HeartIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface ServiceContentProps {
  service: {
    id: string;
    title: string;
    fullDescription: string;
    features: string[];
    equipment: string[];
    wellnessFeatures?: string[];
    smartFeatures?: string[];
    sustainabilityFeatures?: string[];
    beautyFeatures?: string[];
    processSteps?: {
      title: string;
      description: string;
      duration: string;
    }[];
  };
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: HomeIcon },
    { id: 'wellness', label: 'Health & Wellness', icon: HeartIcon },
    { id: 'technology', label: 'Smart Features', icon: CpuChipIcon },
    { id: 'sustainability', label: 'Eco-Luxury', icon: SparklesIcon },
    { id: 'process', label: 'Our Process', icon: WrenchScrewdriverIcon }
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
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {service.fullDescription}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Features</h3>
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <ShieldCheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-blue-600 mr-3" />
                  Professional Equipment
                </h3>
                <div className="space-y-3">
                  {service.equipment.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-600 rounded-lg text-white">
                  <p className="font-medium">Equipment Ownership Advantage</p>
                  <p className="text-sm mt-2 opacity-90">
                    Our $200K+ owned equipment fleet ensures immediate availability, 
                    predictable costs, and faster project completion.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wellness' && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Health & Wellness Integration
                </h2>
                <p className="text-lg text-gray-600">
                  Transform your space into a wellness sanctuary with features designed 
                  to improve your physical and mental well-being.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Air Quality */}
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <BeakerIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Air Purification</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• HEPA filtration systems</li>
                    <li>• UV-C air sterilization</li>
                    <li>• Real-time air quality monitoring</li>
                    <li>• Automated ventilation control</li>
                  </ul>
                </div>

                {/* Water Quality */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <HeartIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Water Wellness</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Reverse osmosis filtration</li>
                    <li>• Mineral enhancement systems</li>
                    <li>• pH balance optimization</li>
                    <li>• Toxin and PFAS removal</li>
                  </ul>
                </div>

                {/* Circadian Lighting */}
                <div className="bg-amber-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                    <LightBulbIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">Circadian Lighting</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Dawn/dusk simulation</li>
                    <li>• Blue light management</li>
                    <li>• Mood-based scene control</li>
                    <li>• Health optimization tracking</li>
                  </ul>
                </div>
              </div>

              {service.wellnessFeatures && (
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Additional Wellness Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.wellnessFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <HeartIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'technology' && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Smart Technology Integration
                </h2>
                <p className="text-lg text-gray-600">
                  Experience the future with AI-powered systems that learn your preferences 
                  and optimize your space for comfort, efficiency, and convenience.
                </p>
              </div>

              {service.smartFeatures && (
                <div className="grid md:grid-cols-2 gap-8">
                  {service.smartFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                      <CpuChipIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {feature.split(':')[0]}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.split(':')[1] || feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">AI-Powered Optimization</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Learning Systems</h4>
                    <ul className="space-y-1 text-sm opacity-90">
                      <li>• Behavior pattern recognition</li>
                      <li>• Predictive energy management</li>
                      <li>• Automated schedule adaptation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Health Monitoring</h4>
                    <ul className="space-y-1 text-sm opacity-90">
                      <li>• Sleep quality optimization</li>
                      <li>• Activity-based lighting</li>
                      <li>• Wellness goal tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sustainability' && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Sustainable Luxury Design
                </h2>
                <p className="text-lg text-gray-600">
                  Achieve luxury without compromise through eco-conscious materials 
                  and energy-efficient systems that reduce environmental impact.
                </p>
              </div>

              {service.sustainabilityFeatures && (
                <div className="grid md:grid-cols-3 gap-6">
                  {service.sustainabilityFeatures.map((feature, index) => (
                    <div key={index} className="text-center p-6 bg-green-50 rounded-xl">
                      <SparklesIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Environmental Impact</h3>
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
                    <div className="text-sm opacity-90">Recycled Materials</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && service.processSteps && (
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Engineering-First Process
                </h2>
                <p className="text-lg text-gray-600">
                  Every project follows our systematic approach that ensures precision, 
                  quality, and on-time delivery.
                </p>
              </div>

              <div className="space-y-8">
                {service.processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-blue-600 font-medium">{step.duration}</span>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceContent; 
