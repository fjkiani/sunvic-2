import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Layout from '../components/layout/Layout';

interface ServiceAreaPageProps {
  openConsultationForm: (serviceType?: string) => void;
}

interface ServiceAreaData {
  name: string;
  state: string;
  description: string;
  highlights: string[];
  projectTypes: string[];
  testimonial?: {
    quote: string;
    author: string;
    location: string;
  };
  coverImage: string;
  localInfo: {
    permits: string;
    codes: string;
    specialties: string[];
  };
}

const serviceAreaData: Record<string, ServiceAreaData> = {
  'new-jersey': {
    name: 'New Jersey',
    state: 'NJ',
    description: 'Our home base in New Jersey, where SunVic Construction was founded. We have deep local knowledge of NJ building codes, permits, and regulations.',
    highlights: [
      'Licensed & Insured in New Jersey',
      'Local permit expertise',
      'NJ building code specialists',
      '50+ completed projects statewide'
    ],
    projectTypes: [
      'Ground Up Construction',
      'Full Home Remodeling',
      'Kitchen & Bathroom Renovations',
      'Home Additions',
      'Basement Finishing'
    ],
    testimonial: {
      quote: "SunVic transformed our 1960s ranch into a modern dream home. Their knowledge of local codes made the permit process seamless.",
      author: "Sarah M.",
      location: "Princeton, NJ"
    },
    coverImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
    localInfo: {
      permits: 'We handle all municipal permits and inspections',
      codes: 'Expert knowledge of NJ Uniform Construction Code',
      specialties: ['Historic home renovations', 'Shore house construction', 'Energy-efficient upgrades']
    }
  },
  'new-york': {
    name: 'New York City',
    state: 'NY',
    description: 'Serving the greater New York City area with specialized urban construction and renovation services.',
    highlights: [
      'NYC building code expertise',
      'Co-op & condo renovations',
      'Landmark building experience',
      'Union contractor relationships'
    ],
    projectTypes: [
      'Apartment Renovations',
      'Kitchen & Bathroom Remodels',
      'Loft Conversions',
      'Historic Restorations',
      'Commercial Build-outs'
    ],
    coverImage: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=1200&h=600&fit=crop',
    localInfo: {
      permits: 'DOB permit applications and expediting',
      codes: 'NYC Building Code and Fire Code compliance',
      specialties: ['Pre-war building renovations', 'Landmark approvals', 'Small space optimization']
    }
  },
  'philadelphia': {
    name: 'Philadelphia',
    state: 'PA',
    description: 'Bringing modern construction techniques to Philadelphia\'s rich architectural heritage.',
    highlights: [
      'Historic district expertise',
      'Philadelphia building permits',
      'Rowhouse specialists',
      'Local contractor network'
    ],
    projectTypes: [
      'Historic Renovations',
      'Rowhouse Modernization',
      'Kitchen & Bath Remodels',
      'Basement Conversions',
      'Roof Deck Construction'
    ],
    coverImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=600&fit=crop',
    localInfo: {
      permits: 'L&I permit processing and inspections',
      codes: 'Philadelphia Building Code compliance',
      specialties: ['Historic preservation', 'Narrow lot construction', 'Zoning variances']
    }
  },
  'washington-dc': {
    name: 'Washington DC',
    state: 'DC',
    description: 'Premium construction services in the nation\'s capital, specializing in historic and modern properties.',
    highlights: [
      'DC building permits',
      'Historic preservation',
      'Federal compliance',
      'Security-conscious construction'
    ],
    projectTypes: [
      'Historic Renovations',
      'Modern Home Construction',
      'Kitchen & Bath Remodels',
      'Basement Finishing',
      'Outdoor Living Spaces'
    ],
    coverImage: 'https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=1200&h=600&fit=crop',
    localInfo: {
      permits: 'DCRA permit applications and approvals',
      codes: 'DC Construction Code and Energy Code',
      specialties: ['Historic district approvals', 'Federal building standards', 'Green building certification']
    }
  },
  'maryland': {
    name: 'Maryland',
    state: 'MD',
    description: 'Serving Maryland communities with quality construction and renovation services throughout the state.',
    highlights: [
      'Maryland licensed contractor',
      'County permit expertise',
      'Chesapeake Bay compliance',
      'Suburban & waterfront projects'
    ],
    projectTypes: [
      'Custom Home Construction',
      'Waterfront Properties',
      'Kitchen & Bath Renovations',
      'Home Additions',
      'Deck & Patio Construction'
    ],
    coverImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=600&fit=crop',
    localInfo: {
      permits: 'County and municipal permit processing',
      codes: 'Maryland Building Code compliance',
      specialties: ['Waterfront construction', 'Environmental regulations', 'Historic tax credits']
    }
  },
  'virginia': {
    name: 'Virginia',
    state: 'VA',
    description: 'Quality construction services across Northern Virginia, specializing in both historic and contemporary projects.',
    highlights: [
      'Virginia contractor license',
      'Historic preservation',
      'Energy efficiency focus',
      'Fairfax County expertise'
    ],
    projectTypes: [
      'Historic Home Restoration',
      'Modern Home Construction',
      'Kitchen & Bath Remodels',
      'Home Additions',
      'Outdoor Living Spaces'
    ],
    coverImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=600&fit=crop',
    localInfo: {
      permits: 'County and city permit applications',
      codes: 'Virginia Uniform Statewide Building Code',
      specialties: ['Colonial renovations', 'Historic districts', 'Energy Star certification']
    }
  }
};

const ServiceAreaPage: React.FC<ServiceAreaPageProps> = ({ openConsultationForm }) => {
  const { area } = useParams<{ area: string }>();
  const areaData = area ? serviceAreaData[area] : null;

  if (!areaData) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Area Not Found</h1>
            <p className="text-gray-600">The requested service area could not be found.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${areaData.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <div className="flex items-center mb-4">
              <MapPinIcon className="h-8 w-8 text-orange-400 mr-3" />
              <span className="text-orange-400 font-semibold">Service Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {areaData.name}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {areaData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            
            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose SunVic in {areaData.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {areaData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Types */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Services We Provide in {areaData.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {areaData.projectTypes.map((type, index) => (
                  <div key={index} className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <span className="font-medium text-gray-900">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Expertise */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Local Expertise
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Permits & Approvals</h3>
                    <p className="text-gray-700">{areaData.localInfo.permits}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Building Codes</h3>
                    <p className="text-gray-700">{areaData.localInfo.codes}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {areaData.localInfo.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            {areaData.testimonial && (
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <blockquote className="text-gray-700 italic mb-4">
                  "{areaData.testimonial.quote}"
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">{areaData.testimonial.author}</div>
                  <div className="text-gray-600">{areaData.testimonial.location}</div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Get Started in {areaData.name}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">sunvicnj@gmail.com</div>
                    <div className="text-sm text-gray-600">email for consultation</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">Mon - Fri: 8AM - 6PM</div>
                    <div className="text-sm text-gray-600">Serving {areaData.name}</div>
                  </div>
                </div>
              </div>

              <button 
                className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                onClick={() => openConsultationForm(areaData.name)}
              >
                Request Free Consultation
              </button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                Licensed & Insured • Free Estimates • 24/7 Emergency Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceAreaPage; 