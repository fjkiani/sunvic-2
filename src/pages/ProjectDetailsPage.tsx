import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  SparklesIcon,
  TrophyIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

import ProjectHero from '../components/portfolio/ProjectHero';
import ProjectContent from '../components/portfolio/ProjectContent';
import { enhancedPortfolioProjects } from '../data/portfolioProjects';
import { Link } from 'react-router-dom';

interface ProjectDetailsPageProps {
  openConsultationForm: (serviceType?: string) => void;
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ 
  openConsultationForm 
}) => {
  const { projectId } = useParams<{ projectId: string }>();
  
  const project = enhancedPortfolioProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The requested project could not be found.</p>
          <Link to="/portfolio" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ProjectHero 
        title={project.title}
        category={project.category}
        location={project.location}
        overview={project.overview}
        heroImage={project.heroImage}
        value={project.value}
        timeline={project.timeline}
        completedDate={project.completedDate}
        size={project.size}
        awards={project.awards}
        onConsultationClick={() => openConsultationForm(project.relatedServices[0])}
      />

      {/* Project Content */}
      <ProjectContent project={project} />

      {/* Related Services Section */}
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
              Interested in a Similar Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can create a custom solution for your space with the same 
              level of innovation and attention to detail.
            </p>
          </motion.div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2">
                <TrophyIcon className="h-6 w-6 text-yellow-500" />
                <span className="text-gray-700 font-medium">Award-Winning Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <SparklesIcon className="h-6 w-6 text-purple-500" />
                <span className="text-gray-700 font-medium">2025 Innovation Leader</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the same level of innovation, wellness integration, and engineering 
              excellence showcased in this project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openConsultationForm(project.relatedServices[0])}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Your Consultation
              </button>
              <Link 
                to="/enhanced-services" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                Explore Our Services
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">{project.value}</div>
                <div className="text-sm opacity-80">Project Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{project.timeline}</div>
                <div className="text-sm opacity-80">Completion Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{project.tags.length}</div>
                <div className="text-sm opacity-80">Innovation Features</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsPage; 
