import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import type { ConsultationFormData } from '../../config/emailjs';
import {
  projectTypes,
  budgetRanges,
  timelineOptions,
  emailJsConfig
} from '../../config/emailjs';

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: string;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({
  isOpen,
  onClose,
  serviceType = ''
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: serviceType || '',
    projectBudget: '',
    timeline: '',
    propertyAddress: '',
    projectDescription: '',
    preferredContactMethod: 'either',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [errors, setErrors] = useState<Partial<ConsultationFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ConsultationFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.projectBudget) newErrors.projectBudget = 'Please select a budget range';
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        to_email: 'sunvicnj@gmail.com', // Replace with your email
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        budget_range: formData.projectBudget,
        timeline: formData.timeline,
        property_address: formData.propertyAddress,
        project_description: formData.projectDescription,
        preferred_contact: formData.preferredContactMethod,
        preferred_time: formData.preferredTime,
        submission_time: new Date().toLocaleString(),
        company_name: 'SunVic Home Remodeling'
      };

      const response = await emailjs.send(
        emailJsConfig.SERVICE_ID,
        emailJsConfig.TEMPLATE_ID,
        templateParams,
        emailJsConfig.PUBLIC_KEY
      );

      console.log('EmailJS Success:', response);
      setSubmitStatus('success');
      setSubmitMessage(`✅ Email successfully sent! (Reference: ${response.text})\n\nThank you ${formData.name}! Your consultation request has been sent to our team. We'll contact you within 24 hours to schedule your ${formData.projectType} consultation.`);
      
      // Reset form after 5 seconds (increased time to read confirmation)
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          projectBudget: '',
          timeline: '',
          propertyAddress: '',
          projectDescription: '',
          preferredContactMethod: 'either',
          preferredTime: ''
        });
        setSubmitStatus('idle');
        setSubmitMessage('');
        onClose();
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
        setSubmitMessage(`❌ Email failed to send: ${error.text}\n\nPlease try again or contact us directly at sunvicnj@gmail.com`);
      } else {
        setSubmitMessage('❌ Network error. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ConsultationFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Schedule Your Free Consultation
              </h2>
              <p className="text-gray-600 mt-1">
                Let's discuss your luxury home transformation project
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <XMarkIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address
                </label>
                <input
                  type="text"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Project location (optional)"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.projectType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select project type</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range *
                </label>
                <select
                  name="projectBudget"
                  value={formData.projectBudget}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.projectBudget ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map(budget => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
                {errors.projectBudget && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectBudget}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline *
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.timeline ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map(timeline => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
                {errors.timeline && (
                  <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>
                )}
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.projectDescription ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Please describe your project vision, specific requirements, and any questions you have..."
              />
              {errors.projectDescription && (
                <p className="text-red-500 text-sm mt-1">{errors.projectDescription}</p>
              )}
            </div>

            {/* Contact Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <select
                  name="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="either">Either Email or Phone</option>
                  <option value="email">Email Only</option>
                  <option value="phone">Phone Only</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time to Contact
                </label>
                <input
                  type="text"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Weekdays 9AM-5PM"
                />
              </div>
            </div>

            {/* Loading State */}
            {isSubmitting && (
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <div className="flex-1">
                    <h3 className="text-blue-800 font-semibold mb-1">Sending Your Consultation Request...</h3>
                    <p className="text-blue-700 text-sm">Processing your request through EmailJS. Please wait...</p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-green-800 font-semibold mb-2">Consultation Request Sent Successfully!</h3>
                    <p className="text-green-700 text-sm whitespace-pre-line">{submitMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <ExclamationCircleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-red-800 font-semibold mb-2">Email Submission Failed</h3>
                    <p className="text-red-700 text-sm whitespace-pre-line">{submitMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                {submitStatus === 'success' ? 'Close' : 'Cancel'}
              </button>
              
              {submitStatus === 'error' && (
                <button
                  type="button"
                  onClick={() => {
                    setSubmitStatus('idle');
                    setSubmitMessage('');
                  }}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Try Again
                </button>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                  isSubmitting || submitStatus === 'success'
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                }`}
              >
                {isSubmitting && (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                )}
                <span>
                  {isSubmitting ? 'Sending via EmailJS...' : 
                   submitStatus === 'success' ? 'Request Sent!' : 
                   'Schedule Consultation'}
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultationForm; 