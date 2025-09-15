import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  TruckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

import ServiceCard from '../components/ui/ServiceCard';
import { advancedRenovationServices, companyInfo } from '../data/content';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const filteredServices = selectedCategory === 'all' 
    ? advancedRenovationServices.services 
    : advancedRenovationServices.services.filter(service => {
        switch (selectedCategory) {
          case 'engineering':
            return service.category === 'Engineering & Planning';
          case 'kitchen':
            return service.category === 'Kitchen Innovation';
          case 'bathroom':
            return service.category === 'Bathroom Innovation';
          case 'outdoor':
            return service.category === 'Outdoor Innovation';
          case 'expansion':
            return service.category === 'Space Expansion' || service.category === 'Sustainable Expansion';
          case 'technology':
            return service.category === 'Smart Home Technology';
          case 'accessibility':
            return service.category === 'Accessibility & Wellness';
          case 'demolition':
            return service.category === 'Demolition & Reconstruction';
          default:
            return true;
        }
      });

  // Featured service (first one)
  const featuredService = advancedRenovationServices.services[0];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/full-home-remodel/1.jpg"
            alt="Luxury home renovation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
        </div>
        
        <div className="relative section-container">
          <motion.div
            className="max-w-4xl"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-blue-400 font-semibold mb-4 tracking-wide uppercase">
              {advancedRenovationServices.sectionTitle.preTitle}
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-7xl text-white mb-6">
              {advancedRenovationServices.sectionTitle.title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              {advancedRenovationServices.sectionTitle.description}
            </p>
            
            {/* Key Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center space-x-3">
                <TruckIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Own Our Equipment</div>
                  <div className="text-gray-400 text-sm">No rental delays</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <WrenchScrewdriverIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Engineering-Led</div>
                  <div className="text-gray-400 text-sm">Rutgers precision</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CurrencyDollarIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Fixed Pricing</div>
                  <div className="text-gray-400 text-sm">No surprise costs</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule Luxury Consultation
              </Link>
              {/* <Link to="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                View Million-Dollar Projects
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Service Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Featured Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the industry with services that competitors simply cannot match
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ServiceCard 
              service={featuredService}
              variant="featured"
              showCompetitorAdvantage={true}
              showPricing={true}
              showEquipment={true}
            />
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <motion.div
            className="text-center mb-12"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Luxury Home Transformation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              From $25,000 smart bathroom sanctuaries to $200,000 energy-smart additions. 
              Every service designed for discerning homeowners who demand engineering excellence.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {advancedRenovationServices.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard 
                key={service.id}
                service={service}
                variant="standard"
                index={index}
                showCompetitorAdvantage={true}
                showPricing={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SunVic for Luxury Projects */}
      <section className="section-padding bg-gray-900">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                Why Choose SunVic?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                While other contractors wait weeks for equipment rentals and coordinate multiple subcontractors, 
                SunVic delivers luxury renovations with precision-engineered efficiency.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Own $2M+ Equipment Fleet',
                    description: 'Our excavators, concrete mixers, and specialty tools eliminate the 2-3 week delays that plague competitors like Bellari and Laslo Kitchens.',
                    icon: TruckIcon
                  },
                  {
                    title: 'Engineering-Grade Planning',
                    description: 'Founder Sunny Rattu\'s Rutgers engineering degree ensures structural modifications others won\'t attempt—load-bearing walls, multi-story additions, foundation work.',
                    icon: WrenchScrewdriverIcon
                  },
                  {
                    title: 'Fixed-Price Luxury Guarantee',
                    description: 'The price we quote is the price you pay. No change orders, no surprise costs, no budget overruns—even on $150,000+ kitchen transformations.',
                    icon: CurrencyDollarIcon
                  },
                  {
                    title: 'White-Glove Client Experience',
                    description: 'Hospital-grade dust containment, daily progress updates, and respectful work hours so your family lives comfortably during construction.',
                    icon: UserGroupIcon
                  }
                ].map((advantage) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div key={advantage.title} className="flex items-start">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2 text-lg">
                          {advantage.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <BuildingOfficeIcon className="w-16 h-16 text-blue-200 mx-auto mb-6" />
              <h3 className="font-display font-bold text-3xl text-white mb-6">
                Ready for Your Luxury Transformation?
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                Get a comprehensive engineering assessment and transparent project estimate. 
                Our consultation includes 3D structural analysis and luxury design planning.
              </p>
              
              {/* Project Value Tiers */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-left">
                  <div className="font-semibold text-white text-lg">Premium Projects</div>
                  <div className="text-blue-200">$25,000 - $75,000</div>
                  <div className="text-blue-100 text-sm">Luxury bathrooms, smart kitchens, outdoor living</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-left">
                  <div className="font-semibold text-white text-lg">Estate-Level Projects</div>
                  <div className="text-blue-200">$75,000 - $200,000+</div>
                  <div className="text-blue-100 text-sm">Home additions, whole-home automation, basement suites</div>
                </div>
              </div>

              <div className="space-y-4">
                <Link to="/contact" className="btn-secondary w-full">
                  Schedule Private Consultation
                </Link>
                <a 
                  href={`tel:${companyInfo.contact.phone}`}
                  className="btn-outline border-white text-white hover:bg-white hover:text-blue-600 w-full"
                >
                  Call Now: {companyInfo.contact.phone}
                </a>
                <Link to="/portfolio" className="text-blue-200 hover:text-white font-medium block">
                  View $5M+ Portfolio →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process for Luxury Clients */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Our Luxury Client Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every high-end project follows our proven methodology, ensuring precision from concept to completion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Private Consultation & 3D Scanning',
                description: 'Comprehensive engineering evaluation of your luxury property, including structural analysis and design feasibility assessment.',
                duration: '2-3 hours'
              },
              {
                step: '02',
                title: 'Luxury Design & Engineering',
                description: 'Detailed architectural planning with structural calculations, smart systems integration, and premium material selection.',
                duration: '1-2 weeks'
              },
              {
                step: '03',
                title: 'White-Glove Execution',
                description: 'Systematic construction using our owned equipment and master craftsmen, with daily progress updates and dust containment.',
                duration: '2-12 weeks'
              },
              {
                step: '04',
                title: 'Final Inspection & 25-Year Warranty',
                description: 'Multi-point quality inspections and comprehensive warranty coverage that protects your luxury investment.',
                duration: 'Lifetime support'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center group"
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">{process.step}</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {process.description}
                </p>
                <div className="text-blue-600 font-medium text-sm">
                  Timeline: {process.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 