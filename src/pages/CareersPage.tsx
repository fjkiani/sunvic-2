import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: "Project Manager",
      department: "Construction",
      location: "Old Bridge, NJ",
      type: "Full-time",
      description: "Lead residential remodeling projects from planning to completion. Coordinate with clients, subcontractors, and suppliers."
    },
    {
      title: "Skilled Carpenter",
      department: "Construction",
      location: "Tri-State Area",
      type: "Full-time",
      description: "Execute high-quality carpentry work including framing, trim, cabinetry, and custom millwork for luxury renovations."
    },
    {
      title: "Equipment Technician",
      department: "Equipment Rentals",
      location: "Old Bridge, NJ",
      type: "Full-time",
      description: "Maintain, repair, and service our rental equipment fleet. Ensure all machinery is safe and operational."
    },
    {
      title: "Sales Representative",
      department: "Business Development",
      location: "Remote/Field",
      type: "Full-time",
      description: "Generate new business opportunities and maintain client relationships in the tri-state construction market."
    }
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Health, dental, and vision insurance",
    "401(k) retirement plan with company matching",
    "Paid time off and holidays",
    "Professional development opportunities",
    "Tool allowance for qualified positions",
    "Company vehicle for field positions",
    "Overtime opportunities"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with SunVic Home Remodeling. We're looking for skilled professionals 
            who share our commitment to engineering excellence and quality craftsmanship.
          </p>
        </div>

        {/* Company Culture */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Why Work With SunVic?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Our Culture</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Engineering-driven approach to construction
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Commitment to safety and quality
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Collaborative team environment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Continuous learning and improvement
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Work-life balance priority
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Growth Opportunities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Leadership development programs
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Skills training and certifications
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Cross-department experience
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Project management advancement
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Entrepreneurial opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Benefits & Compensation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{job.type}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">How to Apply</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Application Process</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  Submit your resume and cover letter
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  Phone screening with our team
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  In-person interview and skills assessment
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  Reference and background check
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                  Job offer and onboarding
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Contact Our HR Team</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">careers@sunvicnj.com</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">732-824-9203</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  SunVic Home Remodeling is an equal opportunity employer committed to diversity and inclusion. 
                  We welcome applications from all qualified candidates regardless of race, gender, age, religion, 
                  sexual orientation, or disability status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage; 