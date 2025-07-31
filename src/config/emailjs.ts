// EmailJS Configuration for SunVic
export const emailJsConfig = {
  // You'll need to replace these with your actual EmailJS credentials
  SERVICE_ID: 'sunvic', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_z6sgxw4', // Replace with your EmailJS template ID  
  PUBLIC_KEY: '8VIjhzoC82-RP4juK', // Replace with your EmailJS public key
};

// Form field interfaces
export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  projectBudget: string;
  timeline: string;
  propertyAddress: string;
  projectDescription: string;
  preferredContactMethod: 'email' | 'phone' | 'either';
  preferredTime: string;
}

export const projectTypes = [
  'Luxury Kitchen Renovation',
  'Spa Bathroom Sanctuary', 
  'Energy-Smart Home Addition',
  'Smart Structural Engineering',
  'Whole Home Transformation',
  'Equipment Rental Only',
  'Other/Custom Project'
];

export const budgetRanges = [
  '$45,000 - $75,000',
  '$75,000 - $125,000', 
  '$125,000 - $200,000',
  '$200,000 - $350,000',
  '$350,000+',
  'Need Budget Consultation'
];

export const timelineOptions = [
  'Immediate (1-2 months)',
  'Soon (3-6 months)',
  'Planning (6-12 months)', 
  'Future (12+ months)',
  'Flexible'
]; 