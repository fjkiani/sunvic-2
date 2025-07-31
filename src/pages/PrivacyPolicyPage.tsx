import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-medium text-gray-800">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Project details, preferences, and specifications</li>
                  <li>Payment and billing information</li>
                  <li>Communication records and correspondence</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800">Technical Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>IP address, browser type, and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide construction and remodeling services</li>
                <li>Communicate about projects, schedules, and updates</li>
                <li>Process payments and manage billing</li>
                <li>Improve our services and website experience</li>
                <li>Send newsletters and promotional materials (with consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <div className="space-y-4 text-gray-700">
                <p>We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Service Providers:</strong> Contractors, suppliers, and other business partners</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                </ul>
                <p className="font-medium">We do not sell your personal information to third parties.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>We implement appropriate security measures to protect your information:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Encrypted data transmission and storage</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security assessments</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>File a complaint with regulatory authorities</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>Our website uses cookies to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve user experience and functionality</li>
                </ul>
                <p>You can control cookies through your browser settings.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
              <div className="space-y-2 text-gray-700">
                <p>For privacy-related questions or requests, contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>SunVic Home Remodeling</strong></p>
                  <p>Email: sunvicnj@gmail.com</p>
                  <p>Phone: 732-824-9203</p>
                  <p>Address: Old Bridge, NJ</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Policy Updates</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically. We will notify you of any material changes 
                by posting the new policy on our website and updating the "Last Updated" date above.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 