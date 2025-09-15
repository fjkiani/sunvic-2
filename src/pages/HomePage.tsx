import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  PhoneIcon,
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  BuildingOfficeIcon,
  HeartIcon,
  SparklesIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
import { 
  StarIcon as StarIconSolid 
} from '@heroicons/react/24/solid';

import HeroSlider from '../components/ui/HeroSlider';
import PortfolioShowcase from '../components/ui/PortfolioShowcase';
import { testimonials } from '../data/content';
import { enhancedServices } from '../data/enhancedServices';

interface HomePageProps {
  openConsultationForm: (serviceType?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ openConsultationForm }) => {
  const featuredEnhancedServices = enhancedServices.slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Full Width */}
      <div className="w-full">
        <HeroSlider openConsultationForm={openConsultationForm} />
      </div>

      {/* Core Differentiators Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Sunvic Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While others follow trends, we create standards. Our engineering-first approach 
              delivers results that competitors promise but can't execute.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Engineering Precision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Cog6ToothIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rutgers Engineering Precision</h3>
              <p className="text-gray-600">
                Founded by engineer Sunny Rattu, we apply systematic methodologies to deliver 
                measurable results where others rely on guesswork.
              </p>
            </motion.div>

            {/* Equipment Ownership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <WrenchScrewdriverIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">$200K+ Equipment Fleet</h3>
              <p className="text-gray-600">
                While competitors rent and delay, our owned fleet of specialized equipment 
                keeps projects on schedule and reduces costs by 15-25%.
              </p>
            </motion.div>

            {/* Dual Revenue Model */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <BuildingOfficeIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrated Revenue Model</h3>
              <p className="text-gray-600">
                Our equipment rental division funds continuous technology upgrades, 
                ensuring your project benefits from cutting-edge capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-blue-600/20 border border-blue-400/30 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              2025 Innovation Leader
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Luxury </span>
              Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience wellness-integrated smart homes with beauty-focused design, health monitoring, 
              and sustainable luxury that competitors can't deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enhanced-services" className="btn-primary">
                Our Services
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <button 
                onClick={() => openConsultationForm()}
                className="btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Schedule Wellness Consultation
              </button>
            </div>
          </motion.div>

          {/* Enhanced Service Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredEnhancedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => window.location.href = `/enhanced-service/${service.id}`}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {service.category}
                  </div>

                  {/* Price Range */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-80">Starting at</div>
                    <div className="text-lg font-bold">{service.priceRange.split('-')[0]}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.trends2025.slice(0, 2).map((trend, i) => (
                        <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                          {trend}
                        </span>
                      ))}
                    </div>
                  </div>


                  {/* CTA */}
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    <Link
                      to={`/enhanced-service/${service.id}`}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Explore Features
                    </Link>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openConsultationForm(service.title);
                      }}
                      className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <PhoneIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2025 Trends Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Leading 2025 Design Trends
              </h3>
              <p className="text-gray-600">
                While competitors follow trends, we set them. Discover the innovations we're pioneering.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <HeartIcon className="h-8 w-8 text-green-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Health & Wellness</h4>
                  <p className="text-sm text-gray-600">Air/water purification, circadian lighting</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                <SparklesIcon className="h-8 w-8 text-purple-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Beauty Integration</h4>
                  <p className="text-sm text-gray-600">Professional lighting, makeup stations</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <CpuChipIcon className="h-8 w-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Smart Technology</h4>
                  <p className="text-sm text-gray-600">AI optimization, health monitoring</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Latest Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've transformed luxury homes across the tri-state area. 
              From wellness kitchens to spa bathrooms, every project showcases our commitment to excellence.
            </p>
          </motion.div>
          
          <PortfolioShowcase />
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Luxury Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Engineering precision meets client satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.project}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gray-900">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join New Jersey's and tri-state discerning homeowners who choose engineering certainty over empty promises. 
              Schedule your consultation with SunVic today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openConsultationForm()}
                className="btn-primary inline-flex items-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Schedule Consultation
              </button>
              <Link to="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                View Our Work
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">$45K - $200K</div>
                <div className="text-gray-300">Project Investment Range</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">6-16 Weeks</div>
                <div className="text-gray-300">Typical Timeline</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 