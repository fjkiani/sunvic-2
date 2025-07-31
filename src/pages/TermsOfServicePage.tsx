import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700">
                By engaging SunVic Home Remodeling's services, you agree to be bound by these Terms of Service. 
                These terms govern all construction, remodeling, and equipment rental services provided by our company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Provided</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-medium text-gray-800">Construction & Remodeling</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Kitchen and bathroom renovations</li>
                  <li>Home additions and extensions</li>
                  <li>Whole home renovations</li>
                  <li>Custom carpentry and millwork</li>
                  <li>Flooring installation</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800">Equipment Rentals</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Construction tools and machinery</li>
                  <li>Air compressors and generators</li>
                  <li>Excavators and earthmoving equipment</li>
                  <li>Specialty construction equipment</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Project Terms</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-medium text-gray-800">Contracts and Estimates</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>All projects require written contracts</li>
                  <li>Estimates are valid for 30 days unless otherwise specified</li>
                  <li>Change orders must be approved in writing</li>
                  <li>Payment schedules are outlined in project contracts</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800">Permits and Inspections</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>We obtain necessary permits for most projects</li>
                  <li>Client is responsible for providing property access</li>
                  <li>Delays due to permit issues may affect project timeline</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <div className="space-y-4 text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Deposits:</strong> Required to secure project scheduling</li>
                  <li><strong>Progress Payments:</strong> Made according to project milestones</li>
                  <li><strong>Final Payment:</strong> Due upon project completion and approval</li>
                  <li><strong>Late Fees:</strong> May apply to overdue payments</li>
                  <li><strong>Equipment Rentals:</strong> Billed daily, weekly, or monthly as agreed</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Warranties</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-medium text-gray-800">Workmanship Warranty</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>1-year warranty on workmanship for most projects</li>
                  <li>Manufacturer warranties apply to materials and fixtures</li>
                  <li>Warranty does not cover normal wear and tear</li>
                  <li>Customer maintenance requirements must be followed</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Liability and Insurance</h2>
              <div className="space-y-4 text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li>We maintain general liability and workers' compensation insurance</li>
                  <li>Licensed and bonded in New Jersey</li>
                  <li>Client responsible for securing valuable items during construction</li>
                  <li>Emergency repairs may be performed to prevent property damage</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Equipment Rental Terms</h2>
              <div className="space-y-4 text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Condition:</strong> Equipment rented in good working order</li>
                  <li><strong>Return:</strong> Must be returned clean and in same condition</li>
                  <li><strong>Damage:</strong> Renter responsible for damage beyond normal wear</li>
                  <li><strong>Safety:</strong> Renter must follow all safety guidelines</li>
                  <li><strong>Training:</strong> Basic operation training provided upon request</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cancellation Policy</h2>
              <div className="space-y-4 text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li>Construction projects: 72-hour written notice required</li>
                  <li>Equipment rentals: 24-hour notice for cancellation</li>
                  <li>Deposits may be non-refundable after work begins</li>
                  <li>Cancellation fees may apply based on project stage</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <div className="space-y-2 text-gray-700">
                <p>For questions about these terms, contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>SunVic Home Remodeling</strong></p>
                  <p>Email: sunvicnj@gmail.com</p>
                  <p>Phone: 732-824-9203</p>
                  <p>Address: Old Bridge, NJ</p>
                  <p>Licensed & Insured • NJ Certified • Tri-State Leader</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Terms Updates</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Updated terms will be posted on our website 
                and take effect for new projects. Existing projects remain governed by the terms in effect at contract signing.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 