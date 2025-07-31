import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  SparklesIcon,
  TrophyIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

import ServiceHero from '../components/services/ServiceHero';
import ServiceContent from '../components/services/ServiceContent';
import { enhancedServices, marketInsights } from '../data/enhancedServices';

interface EnhancedServiceDetailsPageProps {
  openConsultationForm: (serviceType?: string) => void;
}

const EnhancedServiceDetailsPage: React.FC<EnhancedServiceDetailsPageProps> = ({ 
  openConsultationForm 
}) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const service = enhancedServices.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ServiceHero 
        title={service.title}
        subtitle={service.shortDescription}
        description={service.fullDescription}
        image={service.image}
        priceRange={service.priceRange}
        timeline={service.timeline}
        category={service.category}
        competitorAdvantage={service.competitorAdvantage}
        keyFeatures={service.features}
        onConsultationClick={() => openConsultationForm(service.title)}
      />

      {/* Service Content Tabs */}
      <ServiceContent service={service} />

      {/* Market Differentiation Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why SunVic Leads the Market
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just keeping up with trends—we're setting them. Our engineering-first 
              approach and equipment ownership gives us capabilities competitors simply can't match.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Market Differentiators */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <TrophyIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Market Differentiators</h3>
              </div>
              <div className="space-y-4">
                {service.marketDifferentiators.map((differentiator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{differentiator}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2025 Trends */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <SparklesIcon className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">2025 Trends We're Leading</h3>
              </div>
              <div className="space-y-4">
                {service.trends2025.map((trend, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <ChartBarIcon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{trend}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              The SunVic Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While our competitors play catch-up, we're already delivering the future of luxury home renovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketInsights.sunvicAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-200">{advantage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join Manhattan's most discerning homeowners who choose SunVic for 
              luxury that works, wellness that transforms, and engineering that delivers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openConsultationForm(service.title)}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Your Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View Our Portfolio
              </button>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">{service.priceRange.split('-')[0]}</div>
                <div className="text-sm opacity-80">Starting Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{service.timeline.split('-')[0]}</div>
                <div className="text-sm opacity-80">Completion Timeline</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-80">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedServiceDetailsPage; 
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  SparklesIcon,
  TrophyIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

import ServiceHero from '../components/services/ServiceHero';
import ServiceContent from '../components/services/ServiceContent';
import { enhancedServices, marketInsights } from '../data/enhancedServices';

interface EnhancedServiceDetailsPageProps {
  openConsultationForm: (serviceType?: string) => void;
}

const EnhancedServiceDetailsPage: React.FC<EnhancedServiceDetailsPageProps> = ({ 
  openConsultationForm 
}) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const service = enhancedServices.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ServiceHero 
        title={service.title}
        subtitle={service.shortDescription}
        description={service.fullDescription}
        image={service.image}
        priceRange={service.priceRange}
        timeline={service.timeline}
        category={service.category}
        competitorAdvantage={service.competitorAdvantage}
        keyFeatures={service.features}
        onConsultationClick={() => openConsultationForm(service.title)}
      />

      {/* Service Content Tabs */}
      <ServiceContent service={service} />

      {/* Market Differentiation Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why SunVic Leads the Market
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just keeping up with trends—we're setting them. Our engineering-first 
              approach and equipment ownership gives us capabilities competitors simply can't match.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Market Differentiators */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <TrophyIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Market Differentiators</h3>
              </div>
              <div className="space-y-4">
                {service.marketDifferentiators.map((differentiator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{differentiator}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2025 Trends */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <SparklesIcon className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">2025 Trends We're Leading</h3>
              </div>
              <div className="space-y-4">
                {service.trends2025.map((trend, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <ChartBarIcon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{trend}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              The SunVic Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While our competitors play catch-up, we're already delivering the future of luxury home renovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketInsights.sunvicAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-200">{advantage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join Manhattan's most discerning homeowners who choose SunVic for 
              luxury that works, wellness that transforms, and engineering that delivers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openConsultationForm(service.title)}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Your Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View Our Portfolio
              </button>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">{service.priceRange.split('-')[0]}</div>
                <div className="text-sm opacity-80">Starting Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{service.timeline.split('-')[0]}</div>
                <div className="text-sm opacity-80">Completion Timeline</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-80">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedServiceDetailsPage; 
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  SparklesIcon,
  TrophyIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

import ServiceHero from '../components/services/ServiceHero';
import ServiceContent from '../components/services/ServiceContent';
import { enhancedServices, marketInsights } from '../data/enhancedServices';

interface EnhancedServiceDetailsPageProps {
  openConsultationForm: (serviceType?: string) => void;
}

const EnhancedServiceDetailsPage: React.FC<EnhancedServiceDetailsPageProps> = ({ 
  openConsultationForm 
}) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const service = enhancedServices.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ServiceHero 
        title={service.title}
        subtitle={service.shortDescription}
        description={service.fullDescription}
        image={service.image}
        priceRange={service.priceRange}
        timeline={service.timeline}
        category={service.category}
        competitorAdvantage={service.competitorAdvantage}
        keyFeatures={service.features}
        onConsultationClick={() => openConsultationForm(service.title)}
      />

      {/* Service Content Tabs */}
      <ServiceContent service={service} />

      {/* Market Differentiation Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why SunVic Leads the Market
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just keeping up with trends—we're setting them. Our engineering-first 
              approach and equipment ownership gives us capabilities competitors simply can't match.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Market Differentiators */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <TrophyIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Market Differentiators</h3>
              </div>
              <div className="space-y-4">
                {service.marketDifferentiators.map((differentiator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{differentiator}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2025 Trends */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <SparklesIcon className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">2025 Trends We're Leading</h3>
              </div>
              <div className="space-y-4">
                {service.trends2025.map((trend, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <ChartBarIcon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{trend}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              The SunVic Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While our competitors play catch-up, we're already delivering the future of luxury home renovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketInsights.sunvicAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-200">{advantage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join Manhattan's most discerning homeowners who choose SunVic for 
              luxury that works, wellness that transforms, and engineering that delivers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openConsultationForm(service.title)}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Your Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View Our Portfolio
              </button>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">{service.priceRange.split('-')[0]}</div>
                <div className="text-sm opacity-80">Starting Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{service.timeline.split('-')[0]}</div>
                <div className="text-sm opacity-80">Completion Timeline</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-80">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedServiceDetailsPage; 