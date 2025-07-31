import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../components/ui/Banner';
import { 
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  TrophyIcon,
  UsersIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { companyInfo, teamMembers, coreDifferentiators } from '../data/content';

const AboutPage: React.FC = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { label: 'Years of Experience', value: '15+', icon: ClockIcon },
    { label: 'Projects Completed', value: '500+', icon: TrophyIcon },
    { label: 'Happy Clients', value: '98%', icon: UsersIcon },
    { label: 'Licensed & Insured', value: '100%', icon: ShieldCheckIcon },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <Banner
        title="Engineering Excellence Since Day One"
        subtitle="About SunVic"
        description="Founded by Rutgers-trained engineer Sunny, SunVic represents the evolution of precision-driven home remodeling in DMV's luxury market."
        height="lg"
        backgroundImage="/src/assets/images/hero.png"
        gradient="linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(51, 65, 85, 0.6) 100%)"
      />

      {/* Founder Story Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden bg-gray-200">
                {/* Placeholder for Sunny's professional photo */}
                <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AcademicCapIcon className="w-12 h-122 text-white" />
                    </div>
                    <p className="text-gray-600">Professional Photo</p>
                    <img src="/src/assets/images/sunny.jpg" alt="Sunny" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl text-secondary-900 mb-6">
                Meet {companyInfo.founder.name}
              </h2>
              <div className="text-primary-600 font-semibold mb-4">
                {teamMembers[0].role}
              </div>
              
              <div className="prose prose-lg prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {teamMembers[0].bio}
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  With an engineering degree from Rutgers University, Sunny brings a systematic, 
                  science-based approach to luxury home remodeling. This isn't just about aesthetics—
                  it's about structural integrity, functional brilliance, and flawless execution.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  The founding of SunVic represents the weaponization of engineering precision 
                  in an industry known for subjective decision-making and project chaos. Every 
                  project is approached with the same methodical rigor that built bridges and 
                  designed systems—ensuring your investment delivers lasting value.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8">
                <h3 className="font-display font-semibold text-xl text-secondary-900 mb-4">
                  Credentials & Certifications
                </h3>
                <ul className="space-y-2">
                  {teamMembers[0].credentials?.map((credential) => (
                    <li key={credential} className="flex items-center text-gray-600">
                      <ShieldCheckIcon className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-secondary-900 mb-6">
              Proven Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to engineering excellence and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="font-display font-bold text-3xl lg:text-4xl text-secondary-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-secondary-900 mb-6">
              The SunVic Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our engineering-led methodology and integrated business model create unmatched 
              competitive advantages in NYC's luxury remodeling market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreDifferentiators.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  {advantage.icon === 'engineering' && (
                    <WrenchScrewdriverIcon className="w-8 h-8 text-primary-600" />
                  )}
                  {advantage.icon === 'equipment' && (
                    <TrophyIcon className="w-8 h-8 text-primary-600" />
                  )}
                  {advantage.icon === 'reliability' && (
                    <ClockIcon className="w-8 h-8 text-primary-600" />
                  )}
                </div>
                
                <h3 className="font-display font-semibold text-2xl text-secondary-900 mb-4">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-secondary-900">
        <div className="section-container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">
              Our Mission
            </h2>
            <blockquote className="text-2xl md:text-3xl text-gray-200 font-medium leading-relaxed mb-8">
              "To revolutionize luxury home remodeling through engineering precision, 
              systematic methodology, and uncompromising quality—delivering results 
              that exceed expectations while eliminating the chaos typical of our industry."
            </blockquote>
            <div className="text-primary-400 font-semibold">
              — {companyInfo.founder.name}, Founder & Lead Engineer
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 