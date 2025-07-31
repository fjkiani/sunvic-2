import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/content';

const TermsPage: React.FC = () => {
  const lastUpdated = "January 1, 2025";

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="section-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: {lastUpdated}</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using SunVic Home Remodeling services, you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SunVic provides professional home remodeling services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Engineering-led structural planning and design</li>
                  <li>Kitchen and bathroom renovations</li>
                  <li>Home additions and extensions</li>
                  <li>Smart home technology integration</li>
                  <li>Construction equipment rental services</li>
                  <li>Project management and consultation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Project Agreements</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All renovation projects require a separate signed contract detailing scope, timeline, 
                  costs, and specific terms. These terms of service govern general interactions and 
                  website usage, while project-specific contracts govern actual construction work.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Equipment Rental Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Equipment rental services are subject to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Valid driver's license and insurance verification</li>
                  <li>Security deposit as specified in rental agreement</li>
                  <li>Equipment must be returned in same condition</li>
                  <li>Operator training requirements for specified equipment</li>
                  <li>Liability for damage during rental period</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Liability and Insurance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SunVic maintains comprehensive general liability and workers' compensation insurance. 
                  Clients are advised to notify their homeowner's insurance provider of renovation work. 
                  Equipment rental clients must provide proof of adequate insurance coverage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibent text-gray-900 mb-4">6. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payment schedules are established in individual project contracts. Generally:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Consultations may require initial deposit</li>
                  <li>Project payments follow industry-standard milestone schedule</li>
                  <li>Equipment rentals require advance payment or approved credit</li>
                  <li>Late payments may incur fees as specified in contracts</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Permits and Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SunVic assists with permit applications where required. Clients are responsible for 
                  providing accurate property information and cooperating with inspection processes. 
                  All work complies with local building codes and engineering standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Warranties</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SunVic provides warranties on workmanship as specified in individual project contracts. 
                  Material warranties are provided by manufacturers. Equipment rentals include basic 
                  functionality guarantees but exclude normal wear and user damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Design plans, engineering calculations, and proprietary methodologies remain 
                  SunVic intellectual property. Clients receive usage rights for their specific 
                  project but may not distribute or commercialize designs without written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Privacy and Data</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Client information is protected according to our Privacy Policy. Project photos 
                  may be used for portfolio purposes unless specifically declined in writing. 
                  Personal and financial information is kept confidential.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Disputes are addressed first through direct communication. If resolution cannot 
                  be achieved, binding arbitration in New Jersey will be used. Legal proceedings 
                  are governed by New Jersey state law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Service Area</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SunVic primarily serves the tri-state area including New Jersey, New York, 
                  Pennsylvania, Delaware, Maryland, Virginia, and Washington DC. Service availability 
                  may vary by location and project scope.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Modifications</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SunVic reserves the right to modify these terms at any time. Clients will be 
                  notified of significant changes. Continued use of services after changes 
                  constitutes acceptance of new terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Questions about these terms should be directed to:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">{companyInfo.name}</p>
                  <p>{companyInfo.contact.address}</p>
                  <p>Phone: {companyInfo.contact.phone}</p>
                  <p>Email: {companyInfo.contact.email}</p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage; 