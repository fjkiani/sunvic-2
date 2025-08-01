import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import TabNavigation from '../components/ui/TabNavigation';
import ServiceGallery from '../components/ui/ServiceGallery';
import TechnicalSpecs from '../components/ui/TechnicalSpecs';
import { advancedRenovationServices } from '../data/content';

interface ServiceDetailsPageProps {
  openConsultationForm: (serviceType?: string) => void;
}

interface SpecItem {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  importance?: 'high' | 'medium' | 'low';
  status?: 'compliant' | 'warning' | 'info';
}

interface SpecCategory {
  id: string;
  title: string;
  description?: string;
  items: SpecItem[];
  isExpandedByDefault?: boolean;
}

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ openConsultationForm }) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find the service based on the ID
  const service = advancedRenovationServices.services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  // Define tab content
  const tabs = [
    { id: 'overview', label: 'Overview', icon: CheckCircleIcon },
    { id: 'process', label: 'Our Process', icon: WrenchScrewdriverIcon },
    { id: 'gallery', label: 'Gallery', icon: CheckCircleIcon },
    { id: 'technical', label: 'Technical Specs', icon: WrenchScrewdriverIcon }
  ];

  // Gallery items with title property
  const galleryItems = [
    {
      id: '1',
      type: 'image' as const,
      title: `${service.title} - Before`,
      src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      description: 'Before renovation',
      category: 'before'
    },
    {
      id: '2', 
      type: 'image' as const,
      title: `${service.title} - After`,
      src: service.image, // Use the actual service image as the "after" result
      description: 'After renovation',
      category: 'after'
    },
    {
      id: '3',
      type: 'image' as const,
      title: `${service.title} - Process`,
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      description: 'Construction process',
      category: 'process'
    }
  ];

  // Process steps based on service category
  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation & Assessment',
      description: 'Comprehensive site evaluation and client requirements analysis.',
      duration: '1-2 days'
    },
    {
      step: 2,
      title: 'Engineering Design & Planning', 
      description: 'Detailed technical drawings and structural analysis.',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Permits & Approvals',
      description: 'Securing all necessary permits and regulatory approvals.',
      duration: '2-4 weeks'
    },
    {
      step: 4,
      title: 'Construction & Installation',
      description: 'Systematic execution with quality control checkpoints.',
      duration: '4-12 weeks'
    },
    {
      step: 5,
      title: 'Final Inspection & Handover',
      description: 'Comprehensive quality assessment and client walkthrough.',
      duration: '1 week'
    }
  ];

  // Technical specifications based on service type
  let technicalCategories: SpecCategory[] = [];
  
  if (serviceId?.includes('kitchen')) {
    technicalCategories = [
      {
        id: 'hvac-ventilation',
        title: 'HVAC & Ventilation',
        description: 'Commercial-grade ventilation systems',
        isExpandedByDefault: true,
        items: [
          {
            id: 'kitchen-exhaust',
            title: 'Kitchen Exhaust CFM',
            value: '400-1200',
            unit: 'CFM',
            status: 'compliant',
            importance: 'high',
            description: 'Commercial-grade ventilation system'
          },
          {
            id: 'makeup-air',
            title: 'Make-up Air System',
            value: 'Integrated',
            status: 'compliant', 
            importance: 'medium'
          }
        ]
      },
      {
        id: 'electrical-systems',
        title: 'Electrical Systems',
        description: 'Dedicated electrical infrastructure',
        isExpandedByDefault: false,
        items: [
          {
            id: 'dedicated-circuits',
            title: 'Dedicated Circuits',
            value: '8-12',
            unit: 'circuits',
            status: 'compliant',
            importance: 'high'
          },
          {
            id: 'gfci-protection',
            title: 'GFCI Protection',
            value: 'All outlets',
            status: 'compliant',
            importance: 'high'
          }
        ]
      }
    ];
  }

  if (serviceId?.includes('bathroom')) {
    technicalCategories = [
      {
        id: 'plumbing-systems',
        title: 'Plumbing Systems',
        description: 'High-pressure water systems',
        isExpandedByDefault: true,
        items: [
          {
            id: 'water-pressure',
            title: 'Water Pressure',
            value: '45-60',
            unit: 'PSI',
            status: 'compliant',
            importance: 'high'
          },
          {
            id: 'drainage',
            title: 'Drainage',
            value: '2-4',
            unit: 'inch mains',
            status: 'compliant',
            importance: 'high'
          }
        ]
      },
      {
        id: 'waterproofing',
        title: 'Waterproofing',
        description: 'Professional-grade waterproofing systems',
        isExpandedByDefault: false,
        items: [
          {
            id: 'shower-membrane',
            title: 'Shower Membrane',
            value: 'RedGard/Kerdi',
            status: 'compliant',
            importance: 'high'
          }
        ]
      }
    ];
  }

  if (serviceId?.includes('structural') || serviceId?.includes('addition')) {
    technicalCategories = [
      {
        id: 'structural-engineering',
        title: 'Structural Engineering',
        description: 'Building code compliance specifications',
        isExpandedByDefault: true,
        items: [
          {
            id: 'load-calculations',
            title: 'Load Calculations',
            value: 'Per ASCE 7-16',
            status: 'compliant',
            importance: 'high'
          },
          {
            id: 'foundation-design',
            title: 'Foundation Design',
            value: 'Engineered footings',
            status: 'compliant',
            importance: 'high'
          }
        ]
      }
    ];
  }

  // Render tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.fullDescription}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Timeline: {service.timeline}</span>
                    </div>
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Investment: {service.priceRange}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Competitive Advantage</h4>
              <p className="text-gray-600 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                {service.competitorAdvantage}
              </p>
            </div>
          </div>
        );
        
      case 'process':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Engineering Process</h3>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <span className="text-sm text-blue-600 font-medium">Duration: {step.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
        
      case 'gallery':
        return (
          <ServiceGallery 
            items={galleryItems}
            categories={['before', 'after', 'process']}
          />
        );
        
      case 'technical':
        return technicalCategories.length > 0 ? (
          <TechnicalSpecs 
            categories={technicalCategories}
            title="Technical Specifications"
          />
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">Technical specifications will be provided during consultation.</p>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 flex items-center">
        <div className="absolute inset-0">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative section-container text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {service.category}
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <TabNavigation 
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          
          <div className="mt-8">
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="section-container">
          <div className="text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a consultation to discuss your {service.title.toLowerCase()} project 
              with our engineering team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openConsultationForm(service.title)}
                className="btn-primary"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={() => openConsultationForm(service.title)}
                className="btn-outline border-white text-white hover:bg-white hover:text-gray-900"
              >
                Get Detailed Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsPage; 