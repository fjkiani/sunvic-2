import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ScaleIcon } from '@heroicons/react/24/outline';
import { companyData } from '../data/navigation';

const TermsPage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex items-center justify-center mb-6">
              <ScaleIcon className="h-12 w-12 text-blue-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Legal terms and conditions for {companyData.name} services
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="section-container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By engaging {companyData.name} for construction, remodeling, or equipment rental services, 
              you agree to be bound by these Terms of Service. These terms apply to all services 
              provided within our service area of {companyData.serviceArea}.
            </p>

            <h2>2. Services Provided</h2>
            <p>{companyData.name} provides the following services:</p>
            <ul>
              <li>Luxury home remodeling and renovation</li>
              <li>Engineering planning and structural analysis</li>
              <li>Kitchen and bathroom renovations</li>
              <li>Home additions and extensions</li>
              <li>Professional equipment rental</li>
              <li>Construction consultation services</li>
            </ul>

            <h2>3. Project Agreements</h2>
            <p>
              All construction projects require a signed contract detailing scope, timeline, 
              materials, and costs. Changes to approved plans must be documented and may 
              result in additional charges.
            </p>

            <h2>4. Equipment Rental Terms</h2>
            <h3>4.1 Rental Conditions</h3>
            <ul>
              <li>Equipment must be returned in the same condition as received</li>
              <li>Renter is responsible for damage beyond normal wear and tear</li>
              <li>Late returns subject to additional daily charges</li>
              <li>Operator training required for specified equipment</li>
            </ul>

            <h3>4.2 Safety Requirements</h3>
            <ul>
              <li>All operators must be properly trained and certified</li>
              <li>Safety equipment must be used at all times</li>
              <li>Equipment inspections required before and after use</li>
            </ul>

            <h2>5. Payment Terms</h2>
            <ul>
              <li>Deposit required to secure project start date</li>
              <li>Progress payments due per contract schedule</li>
              <li>Final payment due upon project completion</li>
              <li>Equipment rentals: payment due upon pickup or delivery</li>
            </ul>

            <h2>6. Warranties</h2>
            <p>
              {companyData.name} provides industry-standard warranties on workmanship and 
              materials. Specific warranty terms are outlined in individual contracts.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              {companyData.name} maintains comprehensive liability insurance. Our liability 
              is limited to the scope of work outlined in signed agreements.
            </p>

            <h2>8. Permits and Regulations</h2>
            <p>
              All work performed complies with local building codes and regulations. 
              Permit acquisition and inspection coordination included in project scope 
              unless otherwise specified.
            </p>

            <h2>9. Force Majeure</h2>
            <p>
              Project delays due to weather, material shortages, permit delays, or other 
              circumstances beyond our control will not result in penalties. Timeline 
              adjustments will be communicated promptly.
            </p>

            <h2>10. Dispute Resolution</h2>
            <p>
              Any disputes will first be addressed through direct communication. 
              If necessary, disputes will be resolved through arbitration in New Jersey.
            </p>

            <h2>11. Privacy</h2>
            <p>
              Client information is protected according to our Privacy Policy. 
              Project photos may be used for marketing purposes unless explicitly declined.
            </p>

            <h2>12. Modifications</h2>
            <p>
              These terms may be updated periodically. Clients will be notified of 
              significant changes to terms affecting active projects.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Questions About These Terms?
              </h3>
              <p className="text-blue-800 mb-4">
                Contact us for clarification on any terms or conditions.
              </p>
              <div className="space-y-2 text-sm text-blue-700">
                <p>Email: {companyData.email}</p>
                <p>Phone: {companyData.phone}</p>
                <p>Address: {companyData.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage; 