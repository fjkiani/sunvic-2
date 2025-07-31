import React from 'react';
import { ShieldCheckIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const WarrantiesPage: React.FC = () => {
  const warrantyTypes = [
    {
      title: "Workmanship Warranty",
      duration: "1 Year",
      icon: <ShieldCheckIcon className="h-8 w-8 text-blue-600" />,
      coverage: [
        "All construction and installation work",
        "Defects in craftsmanship",
        "Structural integrity issues",
        "Installation errors",
        "Finishing work quality"
      ],
      exclusions: [
        "Normal wear and tear",
        "Damage from misuse or neglect",
        "Acts of nature (storms, floods, etc.)",
        "Third-party damage"
      ]
    },
    {
      title: "Material Warranty",
      duration: "Manufacturer Terms",
      icon: <DocumentTextIcon className="h-8 w-8 text-green-600" />,
      coverage: [
        "Manufacturer defects",
        "Premature failure of materials",
        "Product performance issues",
        "Factory defects in appliances",
        "Flooring material defects"
      ],
      exclusions: [
        "Improper maintenance",
        "Misuse of products",
        "Normal aging and wear",
        "Damage during moving"
      ]
    },
    {
      title: "Structural Warranty",
      duration: "2 Years",
      icon: <ClockIcon className="h-8 w-8 text-purple-600" />,
      coverage: [
        "Foundation work",
        "Load-bearing modifications",
        "Framing and structural elements",
        "Beam and support installations",
        "Major structural changes"
      ],
      exclusions: [
        "Settling of existing structure",
        "Pre-existing conditions",
        "Environmental factors",
        "Code changes after completion"
      ]
    }
  ];

  const equipmentWarranties = [
    {
      category: "Power Tools",
      warranty: "30 Days",
      details: "Mechanical failures not due to misuse"
    },
    {
      category: "Heavy Equipment",
      warranty: "7 Days",
      details: "Major component failures"
    },
    {
      category: "Generators",
      warranty: "14 Days",
      details: "Engine and electrical issues"
    },
    {
      category: "Compressors",
      warranty: "14 Days",
      details: "Pump and motor warranty"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Warranty Coverage</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At SunVic Home Remodeling, we stand behind our work with comprehensive warranty coverage. 
            Your investment is protected with our commitment to quality and craftsmanship.
          </p>
        </div>

        {/* Construction Warranties */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Construction & Remodeling Warranties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {warrantyTypes.map((warranty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {warranty.icon}
                  <div className="ml-3">
                    <h3 className="text-xl font-semibold text-gray-900">{warranty.title}</h3>
                    <p className="text-lg font-medium text-blue-600">{warranty.duration}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Coverage Includes:</h4>
                  <ul className="space-y-1">
                    {warranty.coverage.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Exclusions:</h4>
                  <ul className="space-y-1">
                    {warranty.exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-red-500 mr-2 mt-0.5">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Rental Warranties */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Equipment Rental Warranties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Warranty Coverage by Equipment Type</h3>
              <div className="space-y-4">
                {equipmentWarranties.map((equipment, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{equipment.category}</h4>
                        <p className="text-sm text-gray-600">{equipment.details}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {equipment.warranty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Rental Warranty Terms</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  Equipment is guaranteed to be in working condition at rental start
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  Free replacement for mechanical failures during warranty period
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  No warranty coverage for operator error or misuse
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  Customer responsible for damage beyond normal wear
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  24/7 emergency replacement service available
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warranty Claims Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">How to File a Warranty Claim</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Step-by-Step Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contact Us</h4>
                    <p className="text-gray-600 text-sm">Call 732-824-9203 or email sunvicnj@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Provide Information</h4>
                    <p className="text-gray-600 text-sm">Project details, completion date, and issue description</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Schedule Inspection</h4>
                    <p className="text-gray-600 text-sm">We'll arrange a convenient time to assess the issue</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Resolution</h4>
                    <p className="text-gray-600 text-sm">We'll repair or replace at no cost if covered</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Required Documentation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Original contract or invoice
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Project completion certificate
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Photos of the issue (if applicable)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Description of when issue first occurred
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Any relevant maintenance records
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Maintenance Tips */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Protecting Your Warranty</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Maintenance Best Practices</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  Follow manufacturer care instructions for all materials
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  Schedule regular HVAC system maintenance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  Clean and maintain finishes according to our guidelines
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  Address minor issues promptly to prevent major problems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  Use only recommended cleaning products and methods
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900">SunVic Home Remodeling</p>
                  <p className="text-gray-700">Warranty Department</p>
                  <p className="text-gray-700">Phone: 732-824-9203</p>
                  <p className="text-gray-700">Email: sunvicnj@gmail.com</p>
                  <p className="text-gray-700">Address: Old Bridge, NJ</p>
                </div>
                <div className="text-sm text-gray-600">
                  <p><strong>Business Hours:</strong> Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
                  <p><strong>Emergency Service:</strong> Available 24/7 for warranty issues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrantiesPage; 