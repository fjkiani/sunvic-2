import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon,
  CheckCircleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { enhancedPortfolioProjects } from '../data/portfolioProjects';
import ProjectHero from '../components/portfolio/ProjectHero';
import ProjectContent from '../components/portfolio/ProjectContent';

interface ProjectDetailsPageProps {
  openConsultationForm: (serviceType: string) => void;
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ openConsultationForm }) => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = enhancedPortfolioProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/portfolio" className="btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="section-container py-4">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Project Hero Section */}
      <div className="pt-20">
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
          onConsultationClick={() => openConsultationForm(`${project.title} - Similar Project`)}
        />
        <ProjectContent 
          project={project}
        />
        
        {/* CTA Section */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can bring your vision to life with the same level of excellence.
            </p>
            <button
              onClick={() => openConsultationForm(`${project.title} - Similar Project`)}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              Get Started Today
            </button>
          </div>
        </section>
      </div>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Professional Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheckIcon className="h-6 w-6 text-orange-500" />
                <span className="text-gray-700 font-medium">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Project Content */}
      {/* ProjectContent project={project} /> */}

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring similar innovation and quality to your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Start Your Consultation
              </Link>
              <Link 
                to="/enhanced-services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Similar Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhancedPortfolioProjects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <div key={relatedProject.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={relatedProject.heroImage} 
                    alt={relatedProject.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedProject.overview}
                    </p>
                    <Link 
                      to={`/project/${relatedProject.id}`}
                      className="text-blue-600 font-semibold hover:text-blue-700"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsPage; 
