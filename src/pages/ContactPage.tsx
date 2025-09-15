import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Banner from '../components/ui/Banner';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';
import { companyInfo, faqs } from '../data/content';
import { emailJsConfig } from '../config/emailjs';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectDetails: '',
    timeline: '',
    budget: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // EmailJS template parameters
      const templateParams = {
        to_email: 'sunvicnj@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        project_details: formData.projectDetails,
        timeline: formData.timeline,
        budget_range: formData.budget,
        submission_time: new Date().toLocaleString(),
        company_name: 'SunVic Home Remodeling',
        message_type: 'Contact Form Inquiry'
      };

      const response = await emailjs.send(
        emailJsConfig.SERVICE_ID,
        emailJsConfig.TEMPLATE_ID,
        templateParams,
        emailJsConfig.PUBLIC_KEY
      );

      console.log('EmailJS Success:', response);
      setSubmitStatus('success');
      setSubmitMessage(`✅ Message sent successfully! (Reference: ${response.text})\n\nThank you ${formData.name}! We've received your inquiry about ${formData.projectType || 'your project'}. Our team will contact you within 24 hours to discuss your project requirements.`);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          projectDetails: '',
          timeline: '',
          budget: ''
        });
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);

    } catch (error: any) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      
      // Enhanced error messaging based on EmailJS error types
      if (error.status === 400) {
        setSubmitMessage('❌ Invalid form data. Please check all fields and try again.');
      } else if (error.status === 401) {
        setSubmitMessage('❌ Email service authentication failed. Please contact support.');
      } else if (error.status === 404) {
        setSubmitMessage('❌ Email service not found. Please contact support.');
      } else if (error.status === 429) {
        setSubmitMessage('❌ Too many requests. Please wait a moment and try again.');
      } else if (error.text) {
        setSubmitMessage(`❌ Message failed to send: ${error.text}\n\nPlease try again or contact us directly at sunvicnj@gmail.com`);
      } else {
        setSubmitMessage('❌ Network error. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <Banner
        title="Let's Engineer Your Dream Project"
        subtitle="Contact SunVic"
        description="Ready to experience engineering excellence in home remodeling? Get started with a comprehensive consultation and detailed project assessment."
        height="lg"
        backgroundImage="/images/full-home-remodel/1.jpg"
        gradient="linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(51, 65, 85, 0.6) 100%)"
      />

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="font-display font-bold text-3xl text-secondary-900 mb-6">
                  Schedule Your Free Consultation
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our engineering team will assess your project requirements and provide a detailed, 
                  transparent estimate. Fill out the form below to get started.
                </p>

                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                  {/* Loading State */}
                  {isSubmitting && (
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                        <div className="flex-1">
                          <h3 className="text-blue-800 font-semibold mb-1">Sending Your Message...</h3>
                          <p className="text-blue-700 text-sm">Processing your inquiry through EmailJS. Please wait...</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-green-800 font-semibold mb-2">Message Sent Successfully!</h3>
                          <p className="text-green-700 text-sm whitespace-pre-line">{submitMessage}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
                      <div className="flex items-start space-x-3">
                        <ExclamationCircleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-red-800 font-semibold mb-2">Message Failed to Send</h3>
                          <p className="text-red-700 text-sm whitespace-pre-line">{submitMessage}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Your full name"
                        disabled={isSubmitting || submitStatus === 'success'}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="your.email@example.com"
                        disabled={isSubmitting || submitStatus === 'success'}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="sunvicnj@gmail.com"
                        disabled={isSubmitting || submitStatus === 'success'}
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        disabled={isSubmitting || submitStatus === 'success'}
                      >
                        <option value="">Select project type</option>
                        <option value="Luxury Kitchen Renovation">Luxury Kitchen Renovation</option>
                        <option value="Spa Bathroom Sanctuary">Spa Bathroom Sanctuary</option>
                        <option value="Energy-Smart Home Addition">Energy-Smart Home Addition</option>
                        <option value="Smart Structural Engineering">Smart Structural Engineering</option>
                        <option value="Rapid Demolition & Reconstruction">Rapid Demolition & Reconstruction</option>
                        <option value="Outdoor Living Ecosystem">Outdoor Living Ecosystem</option>
                        <option value="Basement Transformation Suite">Basement Transformation Suite</option>
                        <option value="Whole-Home Automation">Whole-Home Automation</option>
                        <option value="Luxury Aging-in-Place Solutions">Luxury Aging-in-Place Solutions</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        disabled={isSubmitting || submitStatus === 'success'}
                      >
                        <option value="">Select timeline</option>
                        <option value="Immediate (1-2 months)">Immediate (1-2 months)</option>
                        <option value="Soon (3-6 months)">Soon (3-6 months)</option>
                        <option value="Planning (6-12 months)">Planning (6-12 months)</option>
                        <option value="Future (12+ months)">Future (12+ months)</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        disabled={isSubmitting || submitStatus === 'success'}
                      >
                        <option value="">Select budget range</option>
                        <option value="$45,000 - $75,000">$45,000 - $75,000</option>
                        <option value="$75,000 - $125,000">$75,000 - $125,000</option>
                        <option value="$125,000 - $200,000">$125,000 - $200,000</option>
                        <option value="$200,000 - $350,000">$200,000 - $350,000</option>
                        <option value="$350,000+">$350,000+</option>
                        <option value="Need Budget Consultation">Need Budget Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details & Vision
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={5}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your vision, specific requirements, challenges, or any questions you have about your project..."
                      disabled={isSubmitting || submitStatus === 'success'}
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === 'success'}
                      className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                        isSubmitting || submitStatus === 'success'
                          ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                      }`}
                    >
                      {isSubmitting && (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      )}
                      <span>
                        {isSubmitting ? 'Sending Message...' : 
                         submitStatus === 'success' ? 'Message Sent!' : 
                         'Send Message'}
                      </span>
                    </button>

                    {submitStatus === 'error' && (
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitStatus('idle');
                          setSubmitMessage('');
                        }}
                        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        Try Again
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-display font-bold text-2xl text-secondary-900 mb-6">
                  Get In Touch
                </h3>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <PhoneIcon className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-1">Phone</h4>
                        <a 
                          href={`tel:${companyInfo.contact.phone}`}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {companyInfo.contact.phone}
                        </a>
                        <p className="text-sm text-gray-500 mt-1">24/7 Emergency Service</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <EnvelopeIcon className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-1">Email</h4>
                        <a 
                          href={`mailto:${companyInfo.contact.email}`}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {companyInfo.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPinIcon className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-1">Office</h4>
                        <p className="text-gray-600">{companyInfo.contact.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ClockIcon className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-1">Hours</h4>
                        <p className="text-gray-600">{companyInfo.contact.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                  <h4 className="font-semibold text-primary-900 mb-3">
                    What to Expect:
                  </h4>
                  <ul className="space-y-2 text-sm text-primary-800">
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 mr-2 text-primary-600" />
                      Engineering assessment of your space
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 mr-2 text-primary-600" />
                      Detailed project timeline and budget
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 mr-2 text-primary-600" />
                      Transparent pricing with no hidden costs
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 mr-2 text-primary-600" />
                      Portfolio of relevant completed projects
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our engineering approach and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6"
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-semibold text-lg text-secondary-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 