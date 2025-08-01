import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  X, 
  Trash2, 
  Download, 
  Mail, 
  Calculator, 
  PlusCircle, 
  Printer 
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailJsConfig } from '../config/emailjs';
import logoImage from '../assets/logo/sunvic.png';
import { generateInvoicePDF } from '../components/invoice/InvoicePDF';

interface InvoiceItem {
  desc: string;
  qty: number;
  rate: number;
  details: string;
}

interface ProjectPhase {
  id: string;
  title: string;
  description: string;
  sqft: number;
  items: InvoiceItem[];
  isOpen: boolean;
  excluded?: boolean; // New field to exclude from invoice
  // Manual overrides for cost analysis
  manualPhaseCost?: number;
  manualCostPerSqft?: number;
}

const InvoicePage: React.FC = () => {
  const [phases, setPhases] = useState<ProjectPhase[]>([]);
  const [phaseCounter, setPhaseCounter] = useState(0);
  const [taxRate, setTaxRate] = useState(6.625);
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  
  // Email fields
  const [senderEmail, setSenderEmail] = useState('sunvicnj@gmail.com');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [includeCostAnalysis, setIncludeCostAnalysis] = useState(true);

  // Initialize dates on component mount
  useEffect(() => {
    const today = new Date();
    setInvoiceDate(today.toISOString().split('T')[0]);
    
    const dueDate = new Date(today);
    dueDate.setDate(dueDate.getDate() + 30);
    setDueDate(dueDate.toISOString().split('T')[0]);

    // Initialize with default project data
    initializeProjectData();
  }, []);

  // Add print styles to document head
  useEffect(() => {
    const printStyles = `
      <style id="invoice-print-styles">
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            background: white !important;
            font-size: 12pt !important;
            line-height: 1.3 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .print-container {
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            max-width: none !important;
            width: 100% !important;
            background: white !important;
          }
          
          .print\\:page-break-before-always {
            page-break-before: always !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          input, textarea, select {
            border: none !important;
            background: transparent !important;
            box-shadow: none !important;
            outline: none !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            appearance: none !important;
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          
          .bg-gray-50,
          .bg-gray-100,
          .bg-gray-800 {
            background-color: #f8f9fa !important;
          }
          
          .text-orange-600,
          .text-orange-500,
          .text-orange-400 {
            color: #ea580c !important;
          }
          
          .border-orange-400,
          .border-orange-500 {
            border-color: #fb923c !important;
          }
          
          table {
            border-collapse: collapse !important;
            width: 100% !important;
          }
          
          th, td {
            border-bottom: 1px solid #e5e7eb !important;
            padding: 8px 4px !important;
          }
          
          .rounded-lg,
          .rounded-xl,
          .rounded-2xl {
            border-radius: 8px !important;
          }
          
          details[open] summary ~ * {
            display: block !important;
          }
          
          details summary {
            list-style: none !important;
          }
          
          details summary::-webkit-details-marker {
            display: none !important;
          }
          
          .shadow-2xl,
          .shadow-xl {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
          }
        }
      </style>
    `;

    // Remove existing print styles
    const existingStyles = document.getElementById('invoice-print-styles');
    if (existingStyles) {
      existingStyles.remove();
    }

    // Add new print styles
    document.head.insertAdjacentHTML('beforeend', printStyles);

    return () => {
      const styles = document.getElementById('invoice-print-styles');
      if (styles) {
        styles.remove();
      }
    };
  }, []);

  const formatCurrency = (num: number): string => {
    if (isNaN(num)) return '$0.00';
    return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const addPhase = (title = 'New Project Phase', description = 'Description of work included in this phase.', items: InvoiceItem[] = [], sqft = 0) => {
    const newPhase: ProjectPhase = {
      id: `phase-${phaseCounter + 1}`,
      title,
      description,
      sqft,
      items: items.length > 0 ? items : [{ desc: '', qty: 1, rate: 0, details: '' }],
      isOpen: true
    };
    
    setPhases(prev => [...prev, newPhase]);
    setPhaseCounter(prev => prev + 1);
  };

  const updatePhase = (phaseId: string, updates: Partial<ProjectPhase>) => {
    setPhases(prev => prev.map(phase => 
      phase.id === phaseId ? { ...phase, ...updates } : phase
    ));
  };

  const removePhase = (phaseId: string) => {
    setPhases(prev => prev.filter(phase => phase.id !== phaseId));
  };

  const togglePhaseExclusion = (phaseId: string) => {
    setPhases(prev => prev.map(phase => 
      phase.id === phaseId ? { ...phase, excluded: !phase.excluded } : phase
    ));
  };

  const addItem = (phaseId: string) => {
    const newItem: InvoiceItem = { desc: '', qty: 1, rate: 0, details: '' };
    updatePhase(phaseId, {
      items: [...(phases.find(p => p.id === phaseId)?.items || []), newItem]
    });
  };

  const updateItem = (phaseId: string, itemIndex: number, updates: Partial<InvoiceItem>) => {
    const phase = phases.find(p => p.id === phaseId);
    if (phase) {
      const updatedItems = phase.items.map((item, index) => 
        index === itemIndex ? { ...item, ...updates } : item
      );
      updatePhase(phaseId, { items: updatedItems });
    }
  };

  const removeItem = (phaseId: string, itemIndex: number) => {
    const phase = phases.find(p => p.id === phaseId);
    if (phase) {
      const updatedItems = phase.items.filter((_, index) => index !== itemIndex);
      updatePhase(phaseId, { items: updatedItems });
    }
  };

  const calculateTotals = () => {
    let subtotal = 0;
    phases.forEach(phase => {
      // Skip excluded phases
      if (!phase.excluded) {
        phase.items.forEach(item => {
          subtotal += item.qty * item.rate;
        });
      }
    });

    const taxAmount = subtotal * (taxRate / 100);
    const total = subtotal + taxAmount;

    return { subtotal, taxAmount, total };
  };

  // Calculate phase costs (either manual override or calculated from items)
  const getPhaseSubtotal = (phase: ProjectPhase): number => {
    if (phase.manualPhaseCost !== undefined) {
      return phase.manualPhaseCost;
    }
    return phase.items.reduce((sum, item) => sum + (item.qty * item.rate), 0);
  };

  // Calculate cost per sqft (either manual override or calculated)
  const getCostPerSqft = (phase: ProjectPhase): number => {
    if (phase.manualCostPerSqft !== undefined) {
      return phase.manualCostPerSqft;
    }
    const phaseSubtotal = getPhaseSubtotal(phase);
    return phase.sqft > 0 ? phaseSubtotal / phase.sqft : 0;
  };

  // Calculate totals for cost analysis
  const calculateAnalysisTotals = () => {
    const totalPhaseCost = phases.reduce((sum, phase) => sum + getPhaseSubtotal(phase), 0);
    const totalSqft = phases.reduce((sum, phase) => sum + phase.sqft, 0);
    const averageCostPerSqft = totalSqft > 0 ? totalPhaseCost / totalSqft : 0;

    return { totalPhaseCost, totalSqft, averageCostPerSqft };
  };

  const { subtotal, taxAmount, total } = calculateTotals();
  const { totalPhaseCost, totalSqft, averageCostPerSqft } = calculateAnalysisTotals();

  // Native PDF generation using React-PDF (much better quality)
  const generatePDF = async () => {
    const button = document.querySelector('.pdf-button') as HTMLButtonElement;
    if (button) {
      button.disabled = true;
      button.innerHTML = '<span class="flex items-center gap-2"><div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>Generating PDF...</span>';
    }

    try {
      // Get form values
      const clientNameInput = document.querySelector('input[placeholder="Client Name"]') as HTMLInputElement;
      const clientAddressInput = document.querySelector('textarea[placeholder="Client Address"]') as HTMLTextAreaElement;
      const invoiceNumberInput = document.querySelector('input[value*="INV-"]') as HTMLInputElement;
      const projectRefInput = document.querySelector('input[value*="Project #"]') as HTMLInputElement;
      const statusSelect = document.querySelector('select') as HTMLSelectElement;
      const notesTextarea = document.querySelector('textarea[placeholder*="notes"]') as HTMLTextAreaElement;

      const pdfProps = {
        clientName: clientNameInput?.value || '',
        clientAddress: clientAddressInput?.value || '',
        invoiceNumber: invoiceNumberInput?.value || 'INV-2025-001',
        invoiceDate: invoiceDate,
        dueDate: dueDate,
        projectRef: projectRefInput?.value || 'Project #202493',
        status: statusSelect?.value || 'Draft',
        phases: phases.filter(phase => !phase.excluded),
        subtotal,
        taxAmount,
        total,
        taxRate,
        notes: notesTextarea?.value || 'Payment is due within 30 days. Please make checks payable to Sunvic Construction. Thank you for your business!',
        includeCostAnalysis
      };

      await generateInvoicePDF(pdfProps);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please check the console for details.');
    } finally {
      if (button) {
        button.disabled = false;
        button.innerHTML = '<span class="flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>Generate PDF</span>';
      }
    }
  };

  // Email functionality using EmailJS
  const generateEmailWithInvoice = async () => {
    // Validation
    if (!recipientEmail) {
      alert('Please enter a recipient email address');
      return;
    }
    
    if (!recipientName) {
      alert('Please enter a recipient name');
      return;
    }

    setIsEmailSending(true);

    try {
             // Get invoice data
       const invoiceNumber = (document.querySelector('input[value*="INV-"]') as HTMLInputElement)?.value || 'INV-2025-001';
       const clientName = (document.querySelector('input[placeholder="Client Name"]') as HTMLInputElement)?.value || 'Client';
       const projectAddress = (document.querySelector('input[placeholder="Client Address"]') as HTMLInputElement)?.value || '';
       
       // Calculate totals for email
       const { total: emailTotal } = calculateTotals();
      
             // Prepare EmailJS template parameters (using consultation template format for now)
       const templateParams = {
         to_email: recipientEmail, // Send to client's email
         from_name: 'SunVic Construction',
         from_email: 'sunvicnj@gmail.com', // Must match your EmailJS service email
         phone: 'N/A',
         project_type: `Invoice ${invoiceNumber}`,
         budget_range: formatCurrency(emailTotal),
         timeline: 'Invoice Payment Due',
         property_address: projectAddress,
         project_description: `Invoice ${invoiceNumber} for ${clientName}\n\nTotal Amount: ${formatCurrency(emailTotal)}\n\nProject Phases:\n${phases.filter(phase => !phase.excluded).map((phase, index) => {
           const phaseCost = getPhaseSubtotal(phase);
           return `${index + 1}. ${phase.title} - ${formatCurrency(phaseCost)}`;
         }).join('\n')}\n\nPayment is due within 30 days. Thank you for your business!`,
         preferred_contact: 'email',
         preferred_time: 'Business Hours',
         submission_time: new Date().toLocaleString(),
         company_name: 'SunVic Construction'
       };

             // Debug logging
       console.log('EmailJS Config:', {
         SERVICE_ID: emailJsConfig.SERVICE_ID,
         TEMPLATE_ID: emailJsConfig.INVOICE_TEMPLATE_ID,
         PUBLIC_KEY: emailJsConfig.PUBLIC_KEY
       });
       console.log('Template Params:', templateParams);

       // Send email using EmailJS
       const response = await emailjs.send(
         emailJsConfig.SERVICE_ID,
         emailJsConfig.INVOICE_TEMPLATE_ID,
         templateParams,
         emailJsConfig.PUBLIC_KEY
       );

      console.log('EmailJS Success:', response);
      
      // Show success message
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
      modal.innerHTML = `
                 <div class="bg-white rounded-lg p-6 max-w-md w-full">
           <h3 class="text-lg font-semibold text-green-600 mb-4">✅ Invoice Sent Successfully!</h3>
           <div class="space-y-3 text-sm text-gray-700">
             <p>Your invoice has been successfully sent to:</p>
             <div class="bg-green-50 p-3 rounded border border-green-200">
               <p class="font-semibold">${recipientName}</p>
               <p class="text-green-700">${recipientEmail}</p>
             </div>
            <p class="text-xs text-gray-500">
              Invoice #${invoiceNumber} • Total: ${formatCurrency(emailTotal)}
            </p>
            <p class="text-xs text-gray-500">
              Reference ID: ${response.text}
            </p>
          </div>
          <button onclick="this.parentElement.parentElement.remove()" 
                  class="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
            Great!
          </button>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      // Auto-remove modal after 8 seconds
      setTimeout(() => {
        if (modal.parentElement) {
          modal.remove();
        }
      }, 8000);
      
    } catch (error) {
      console.error('Error sending invoice email:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      
      // Get more detailed error info
      let errorMessage = 'Unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'object' && error !== null) {
        errorMessage = JSON.stringify(error);
      }
      
      // Show error message
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
      modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-md w-full">
          <h3 class="text-lg font-semibold text-red-600 mb-4">❌ Email Failed</h3>
          <div class="space-y-3 text-sm text-gray-700">
            <p>Sorry, there was an error sending the invoice email.</p>
            <div class="bg-red-50 p-3 rounded border border-red-200">
              <p class="text-red-700 text-xs break-all">${errorMessage}</p>
            </div>
            <p class="text-xs text-gray-500">
              Check browser console for more details. Common issues:
            </p>
            <ul class="text-xs text-gray-500 list-disc list-inside">
              <li>EmailJS template doesn't exist</li>
              <li>Internet connection issue</li>
              <li>Wrong service ID or public key</li>
            </ul>
          </div>
          <button onclick="this.parentElement.parentElement.remove()" 
                  class="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
            Try Again
          </button>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      setTimeout(() => {
        if (modal.parentElement) {
          modal.remove();
        }
      }, 10000);
    } finally {
      setIsEmailSending(false);
    }
  };

  // Generate clean HTML for email (not currently used - using consultation template format)
  // const generateEmailInvoiceHTML = (container: Element | null, invoiceNumber: string, clientName: string, projectRef: string, subtotal: number, taxAmount: number, total: number) => {
  //   // This function is commented out to avoid unused parameter warnings
  //   // Will be re-enabled when creating dedicated invoice email template
  // };

  const initializeProjectData = () => {
    // Start with a completely empty invoice
    // Users can click "Add Phase" to create their own project phases
  };

  return (
    <div className="bg-gray-200 p-4 sm:p-6 lg:p-8 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 print-container">
        {/* Header - Enhanced Design */}
        <header className="relative bg-gradient-to-r from-orange-50 to-orange-100 p-8 sm:p-10 border-b-4 border-orange-400">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-200 to-transparent"></div>
          </div>
          
          <div className="relative flex flex-col sm:flex-row justify-between items-start gap-8">
            {/* Company Info Section */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <img src={logoImage} alt="Sunvic Construction Logo" className="h-20 sm:h-24 w-auto drop-shadow-lg" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <input 
                  type="text" 
                  defaultValue="Sunvic" 
                  className="text-2xl sm:text-3xl font-bold text-gray-900 border-none bg-transparent focus:bg-white focus:shadow-sm p-2 rounded-lg transition-all"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                />
                <textarea 
                  defaultValue="123 Main Street, Aberdeen Township, NJ 07747 " 
                  className="text-sm sm:text-base text-gray-600 border-none bg-transparent w-full focus:bg-white focus:shadow-sm p-2 rounded-lg transition-all leading-relaxed" 
                  rows={2}
                />
                <div className="flex items-center gap-2 text-xs text-orange-600 font-medium">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Licensed & Insured • 13VH12429600 License Number | www.sunvicnj.com | (732) 824-9203</span>
                </div>
              </div>
            </div>
            
            {/* Invoice Title Section */}
            <div className="text-left sm:text-right w-full sm:w-auto">
              <div className="relative">
                <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 tracking-tight drop-shadow-sm">INVOICE</h1>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-300 rounded-full opacity-60"></div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex sm:justify-end items-center bg-white rounded-lg p-3 shadow-sm border border-orange-200">
                  <span className="text-sm font-semibold text-gray-700 mr-3">Invoice #</span>
                  <input 
                    type="text" 
                    defaultValue="INV-2025-001" 
                    className="text-lg font-bold text-orange-600 text-left sm:text-right bg-transparent border-none focus:outline-none w-32"
                  />
                </div>
                <div className="text-xs text-gray-500 sm:text-right">
                  Engineering Excellence in Every Project
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Bill To & Project Info */}
        <section className="p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Bill To</h2>
            <input 
              type="text" 
              defaultValue="" 
              className="w-full text-xl font-semibold text-gray-800 p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent" 
              placeholder="Client Name"
              onChange={(e) => {
                // Auto-sync recipient name with client name
                setRecipientName(e.target.value);
              }}
            />
            <textarea 
              defaultValue="" 
              className="w-full text-base text-gray-600 p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent" 
              rows={3} 
              placeholder="Client Address"
            />
            
            {/* Email Fields */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3">📧 Email Invoice Settings</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1">Recipient Name:</label>
                  <input 
                    type="text" 
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full text-sm text-gray-700 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" 
                    placeholder="Client Full Name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1">Recipient Email:</label>
                  <input 
                    type="email" 
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full text-sm text-gray-700 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" 
                    placeholder="client@example.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1">Send From:</label>
                  <input 
                    type="email" 
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full text-sm text-gray-700 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" 
                    placeholder="your@company.com"
                  />
                </div>
              </div>
              <p className="text-xs text-blue-600 mt-2">💡 Fill in the recipient's email to enable the "Email Invoice" button</p>
            </div>
          </div>
          <div className="text-left">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <span className="text-base font-semibold text-gray-500">Date:</span>
              <input 
                type="date" 
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                className="text-base p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent text-left"
              />
              <span className="text-base font-semibold text-gray-500">Due Date:</span>
              <input 
                type="date" 
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="text-base p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent text-left"
              />
              <span className="text-base font-semibold text-gray-500">Project Ref:</span>
              <input 
                type="text" 
                defaultValue="Project #202493" 
                className="text-base p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent text-left"
              />
              <span className="text-base font-semibold text-gray-500">Status:</span>
              <select className="text-base p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent text-left rounded-md">
                <option>Draft</option>
                <option>Sent</option>
                <option>Paid</option>
                <option>Overdue</option>
              </select>
            </div>
          </div>
        </section>

        {/* Invoice Items - Always Visible Layout */}
        <main className="px-2 sm:px-10">
          {phases.map((phase) => (
            <div 
              key={phase.id}
              className={`border border-gray-200 rounded-lg mb-6 overflow-hidden ${
                phase.excluded 
                  ? 'bg-gray-100 opacity-60' 
                  : 'bg-white'
              }`}
            >
              {/* Phase Header */}
              <div className={`p-4 border-b border-gray-200 ${
                phase.excluded 
                  ? 'bg-gray-200' 
                  : 'bg-gray-50'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex-grow mr-4">
                    <input 
                      type="text" 
                      value={phase.title}
                      onChange={(e) => updatePhase(phase.id, { title: e.target.value })}
                      className={`text-lg sm:text-xl font-bold w-full border-none bg-transparent focus:bg-white p-2 rounded-md ${
                        phase.excluded ? 'text-gray-500 line-through' : 'text-gray-800'
                      }`}
                      placeholder="Enter phase name (e.g., Foundation Work, Framing, etc.)"
                    />
                    {phase.excluded && (
                      <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full mt-2 inline-block">
                        EXCLUDED
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => togglePhaseExclusion(phase.id)}
                      className={`p-2 rounded-md transition-colors ${
                        phase.excluded 
                          ? 'bg-green-100 hover:bg-green-200 text-green-600' 
                          : 'bg-red-100 hover:bg-red-200 text-red-600'
                      }`}
                      title={phase.excluded ? 'Include in invoice' : 'Exclude from invoice'}
                      data-html2canvas-ignore="true"
                    >
                      {phase.excluded ? (
                        <Plus className="w-4 h-4" />
                      ) : (
                        <X className="w-4 h-4" />
                      )}
                    </button>
                    <button 
                      onClick={() => removePhase(phase.id)}
                      className="print:hidden text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100"
                      data-html2canvas-ignore="true"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Phase Content */}
              <div className="p-4 md:p-6">
                <textarea 
                  value={phase.description}
                  onChange={(e) => updatePhase(phase.id, { description: e.target.value })}
                  className="w-full text-base text-gray-600 mb-6 p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent" 
                  rows={2}
                />
                
                {/* Responsive Table for Desktop */}
                <div className="hidden md:block">
                  <table className="w-full text-left text-base">
                    <thead className="text-gray-500">
                      <tr>
                        <th className="py-2 font-medium w-1/2">Item & Protocol</th>
                        <th className="py-2 font-medium text-center">Qty</th>
                        <th className="py-2 font-medium text-right">Rate</th>
                        <th className="py-2 font-medium text-right">Amount</th>
                        <th className="py-2 print:hidden" data-html2canvas-ignore="true"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {phase.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="align-top">
                          <td className="py-2 pr-2">
                            <input 
                              type="text" 
                              value={item.desc}
                              onChange={(e) => updateItem(phase.id, itemIndex, { desc: e.target.value })}
                              className="w-full p-1 bg-transparent focus:bg-gray-50 border-b-2 border-transparent focus:border-gray-200 rounded-md font-medium text-base" 
                              placeholder="Line Item"
                            />
                            <textarea 
                              value={item.details}
                              onChange={(e) => updateItem(phase.id, itemIndex, { details: e.target.value })}
                              className="w-full text-sm text-gray-500 p-1 mt-1 bg-transparent focus:bg-gray-50 border-b-2 border-transparent focus:border-gray-200 rounded-md" 
                              rows={2} 
                              placeholder="Add details about the protocol, materials, or process..."
                            />
                          </td>
                          <td className="py-2 px-2 text-center">
                            <input 
                              type="number" 
                              value={item.qty}
                              onChange={(e) => updateItem(phase.id, itemIndex, { qty: parseFloat(e.target.value) || 0 })}
                              className="w-20 text-center p-1 bg-transparent focus:bg-gray-50 border-b-2 border-transparent focus:border-gray-200 rounded-md text-base" 
                              min="0"
                            />
                          </td>
                          <td className="py-2 px-2 text-right">
                            <input 
                              type="number" 
                              value={item.rate}
                              onChange={(e) => updateItem(phase.id, itemIndex, { rate: parseFloat(e.target.value) || 0 })}
                              className="w-28 text-right p-1 bg-transparent focus:bg-gray-50 border-b-2 border-transparent focus:border-gray-200 rounded-md text-base" 
                              min="0" 
                              step="0.01"
                            />
                          </td>
                          <td className="py-2 pl-2 text-right font-medium text-base">
                            {formatCurrency(item.qty * item.rate)}
                          </td>
                          <td className="py-2 pl-2 text-center print:hidden" data-html2canvas-ignore="true">
                            <button 
                              onClick={() => removeItem(phase.id, itemIndex)}
                              className="text-gray-400 hover:text-red-500 p-1 rounded-full"
                              data-html2canvas-ignore="true"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Card-based layout for Mobile */}
                <div className="md:hidden space-y-4">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg p-4">
                      <input 
                        type="text" 
                        value={item.desc}
                        onChange={(e) => updateItem(phase.id, itemIndex, { desc: e.target.value })}
                        className="w-full p-1 bg-transparent focus:bg-gray-50 border-b-2 border-transparent focus:border-gray-200 rounded-md font-bold text-lg mb-2" 
                        placeholder="Line Item"
                      />
                      <textarea 
                        value={item.details}
                        onChange={(e) => updateItem(phase.id, itemIndex, { details: e.target.value })}
                        className="w-full text-sm text-gray-500 p-1 mb-4 bg-transparent focus:bg-gray-50 border-b-2 border-transparent focus:border-gray-200 rounded-md" 
                        rows={3} 
                        placeholder="Add details about the protocol, materials, or process..."
                      />
                      <div className="grid grid-cols-2 gap-4 items-end">
                        <div>
                          <label className="text-xs text-gray-500">Qty</label>
                          <input 
                            type="number" 
                            value={item.qty}
                            onChange={(e) => updateItem(phase.id, itemIndex, { qty: parseFloat(e.target.value) || 0 })}
                            className="w-full text-left p-1 bg-transparent focus:bg-gray-50 border-b-2 border-transparent focus:border-gray-200 rounded-md text-base" 
                            min="0"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">Rate</label>
                          <input 
                            type="number" 
                            value={item.rate}
                            onChange={(e) => updateItem(phase.id, itemIndex, { rate: parseFloat(e.target.value) || 0 })}
                            className="w-full text-right p-1 bg-transparent focus:bg-gray-50 border-b-2 border-transparent focus:border-gray-200 rounded-md text-base" 
                            min="0" 
                            step="0.01"
                          />
                        </div>
                      </div>
                      <div className="mt-4 pt-2 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-800">
                          {formatCurrency(item.qty * item.rate)}
                        </span>
                        <button 
                          onClick={() => removeItem(phase.id, itemIndex)}
                          className="text-gray-400 hover:text-red-500 p-1 rounded-full"
                          data-html2canvas-ignore="true"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => addItem(phase.id)}
                  className="print:hidden mt-4 flex items-center gap-1 text-sm text-orange-600 font-semibold hover:opacity-80 transition-opacity"
                  data-html2canvas-ignore="true"
                >
                  <Plus className="w-3 h-3" /> Add Line Item
                </button>
              </div>
            </div>
          ))}
        </main>
        
        <div className="px-8 sm:px-10 pb-8 print:hidden flex justify-center">
          <button 
            onClick={() => addPhase()}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-3 text-lg"
            data-html2canvas-ignore="true"
          >
            <PlusCircle className="w-5 h-5" /> 
            <span>Add Project Phase</span>
          </button>
        </div>

        {/* Totals & Notes */}
        <section className="bg-gray-50 p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:order-last">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-600">Subtotal</span>
                  <span className="text-lg font-semibold text-gray-800">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-lg text-gray-600 mr-1">Tax</span>
                    <span className="flex items-center">(
                      <input 
                        type="number" 
                        value={taxRate}
                        onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                        className="w-16 text-lg text-right p-1 bg-transparent focus:bg-white border-b-2 border-transparent focus:border-orange-500 rounded-md"
                      />%
                    )</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">{formatCurrency(taxAmount)}</span>
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-orange-600">{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
            <div className="md:order-first mt-8 md:mt-0">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Notes & Payment Terms</h3>
              <textarea 
                defaultValue="Payment is due within 30 days. Please make checks payable to Sunvic Construction. Thank you for your business!"
                className="w-full text-base text-gray-600 p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent" 
                rows={4} 
                placeholder="Add notes or payment terms here..."
              />
            </div>
          </div>
        </section>

        {/* Cost Analysis Page - Now with Fully Editable Values and Totals */}
        <section 
          className="print:page-break-before-always p-4 sm:p-10 cost-analysis-section"
          data-html2canvas-ignore={!includeCostAnalysis}
        >
          <div className="text-center mb-8">
            <img src={logoImage} alt="Sunvic Construction Logo" className="h-16 sm:h-20 w-auto mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">Project Cost Analysis & Market Comparison</h2>
          </div>
          <p className="text-gray-600 mb-8 text-center text-sm sm:text-base">To provide full transparency, this section breaks down how your project estimate was calculated and how it compares to current market standards in New Jersey.</p>
          
          <div className="bg-white border border-gray-200 rounded-lg p-2 sm:p-6 mb-8 overflow-x-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-orange-600">Phase-by-Phase Estimate Breakdown</h3>
              <div className="hidden sm:flex items-center text-sm text-gray-500 print:hidden mt-2 sm:mt-0">
                <Calculator className="w-4 h-4 mr-1" />
                <span>Click values to edit manually</span>
              </div>
            </div>
            
            <div className="min-w-full">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-2 px-1 sm:px-2 font-semibold text-gray-700 text-xs sm:text-base">Project Phase</th>
                    <th className="py-2 px-1 sm:px-2 font-semibold text-gray-700 text-right text-xs sm:text-base">Phase Cost</th>
                    <th className="py-2 px-1 sm:px-2 font-semibold text-gray-700 text-right text-xs sm:text-base">Approx. Sq. Ft.</th>
                    <th className="py-2 px-1 sm:px-2 font-semibold text-gray-700 text-right text-xs sm:text-base">Cost / Sq. Ft.</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {phases.map((phase) => {
                    const calculatedPhaseCost = phase.items.reduce((sum, item) => sum + (item.qty * item.rate), 0);
                    const displayCostPerSqft = getCostPerSqft(phase);
                    
                    return (
                      <tr key={phase.id} className="border-b border-gray-200">
                        <td className="py-3 px-1 sm:px-2 pr-2">
                          <input 
                            type="text" 
                            value={phase.title}
                            onChange={(e) => updatePhase(phase.id, { title: e.target.value })}
                            className="w-full bg-transparent border-none focus:bg-gray-50 p-1 rounded font-medium text-xs sm:text-base"
                          />
                        </td>
                        <td className="py-3 px-1 sm:px-2 text-right">
                          <div className="relative group">
                            <input 
                              type="number" 
                              value={phase.manualPhaseCost !== undefined ? phase.manualPhaseCost : calculatedPhaseCost}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value) || 0;
                                updatePhase(phase.id, { manualPhaseCost: value });
                              }}
                              className="w-24 sm:w-32 text-right bg-transparent border-none focus:bg-gray-50 p-1 rounded font-semibold print:border-none text-xs sm:text-base"
                              min="0"
                              step="0.01"
                              title="Click to manually override calculated cost"
                            />
                            {phase.manualPhaseCost !== undefined && (
                              <button
                                onClick={() => updatePhase(phase.id, { manualPhaseCost: undefined })}
                                className="absolute -right-1 sm:-right-6 top-1 text-xs text-gray-400 hover:text-red-500 print:hidden"
                                title="Reset to calculated value"
                              >
                                ↺
                              </button>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-1 sm:px-2 text-right">
                          <input 
                            type="number" 
                            value={phase.sqft}
                            onChange={(e) => updatePhase(phase.id, { sqft: parseFloat(e.target.value) || 0 })}
                            className="w-16 sm:w-24 text-right bg-transparent border-none focus:bg-gray-50 p-1 rounded print:border-none text-xs sm:text-base"
                            min="0"
                          />
                        </td>
                        <td className="py-3 px-1 sm:px-2 text-right">
                          <div className="relative group">
                            <input 
                              type="number" 
                              value={phase.manualCostPerSqft !== undefined ? phase.manualCostPerSqft : displayCostPerSqft}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value) || 0;
                                updatePhase(phase.id, { manualCostPerSqft: value });
                              }}
                              className="w-24 sm:w-32 text-right bg-transparent border-none focus:bg-gray-50 p-1 rounded font-bold text-orange-600 print:border-none text-xs sm:text-base"
                              min="0"
                              step="0.01"
                              title="Click to manually override calculated cost per sq ft"
                            />
                            {phase.manualCostPerSqft !== undefined && (
                              <button
                                onClick={() => updatePhase(phase.id, { manualCostPerSqft: undefined })}
                                className="absolute -right-1 sm:-right-6 top-1 text-xs text-gray-400 hover:text-red-500 print:hidden"
                                title="Reset to calculated value"
                              >
                                ↺
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot className="border-t-2 border-gray-400">
                  <tr className="font-bold text-gray-900 text-xs sm:text-base">
                    <td className="py-3 px-1 sm:px-2 pr-2">TOTAL PROJECT</td>
                    <td className="py-3 px-1 sm:px-2 text-right text-lg sm:text-xl text-orange-600">{formatCurrency(totalPhaseCost)}</td>
                    <td className="py-3 px-1 sm:px-2 text-right text-base sm:text-lg">{totalSqft.toLocaleString()}</td>
                    <td className="py-3 px-1 sm:px-2 text-right text-lg sm:text-xl text-orange-600">{formatCurrency(averageCostPerSqft)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">Market Context & Comparison</h3>
            <div>
              <h4 className="font-semibold text-base sm:text-lg text-gray-800">Average Cost Per Square Foot (New Jersey)</h4>
              <p className="text-gray-700 mt-1 text-sm sm:text-base">For a home addition in New Jersey, homeowners can expect to pay between **$176 and $328 per square foot**. Some contractors note that full gut renovations start at $200 per square foot and increase from there. Second-story additions are even more costly, ranging from $200 to $500 per square foot due to the required structural work. Our blended rate for your project falls competitively within this range.</p>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg text-gray-800">Project-Specific Factors</h4>
              <p className="text-gray-700 mt-1 text-sm sm:text-base">Your estimate reflects the specific complexities of the 665 Denver Blvd project, including the significant structural work of adding a second story, the complete replacement of MEP (Mechanical, Electrical, Plumbing) systems, and the high-quality finishes specified in the architectural plans.</p>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg text-gray-800">Our Value Proposition</h4>
              <p className="text-gray-700 mt-1 text-sm sm:text-base">While our estimate is comprehensive, it is also built on efficiency. Our established relationships with suppliers and our experienced in-house team allow us to manage costs effectively without compromising on the quality or integrity of the build. We provide a dedicated project manager to ensure your project stays on schedule and on budget.</p>
            </div>
          </div>
        </section>

        {/* Warranty Page */}
        <section className="print:page-break-before-always p-4 sm:p-10">
          <div className="text-center mb-8">
            <img src={logoImage} alt="Sunvic Construction Logo" className="h-16 sm:h-20 w-auto mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">Our Commitment & Warranty</h2>
          </div>
          <div className="space-y-6 text-sm sm:text-base text-gray-700">
            <p>At Sunvic Construction, we stand behind the quality of our work. This project is more than just a structure; it's your home. We are committed to delivering a final product that is safe, durable, and built to the highest standards of craftsmanship. Your peace of mind is our top priority.</p>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">Licensed & Insured</h3>
              <p>Sunvic Construction is a fully licensed Home Improvement Contractor in the state of New Jersey (License #13VH12429600). We carry comprehensive general liability and workers' compensation insurance. Certificates of insurance are available upon request. You can rest assured that your project is in the hands of qualified and protected professionals.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">Quality of Materials & Workmanship</h3>
              <p>We are committed to using only high-quality, durable materials from reputable suppliers that meet or exceed the specifications outlined in the architectural plans. Our team consists of experienced, skilled craftspeople who take pride in their work. All construction will adhere strictly to the New Jersey Residential Site Improvement Standards and local building codes.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">One-Year Workmanship Warranty</h3>
              <p>Sunvic Construction warrants that all labor and workmanship provided under this agreement will be free from defects for a period of one (1) year from the date of substantial completion. Should any defects in our workmanship arise during this period, we will provide the labor and materials to correct the issue at no cost to you. This warranty does not cover defects or damage caused by abuse, normal wear and tear, lack of maintenance, or issues arising from manufacturer's defects in materials (which are covered by their respective warranties).</p>
            </div>
            <div className="border-t border-gray-300 pt-6 mt-8 text-center text-gray-500 text-sm">
              <p>We appreciate the trust you have placed in us. We look forward to building your vision.</p>
              <p className="font-semibold mt-2">The Sunvic Construction Team</p>
            </div>
          </div>
        </section>
        
        <footer className="text-center p-6 print:hidden">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center">
              <input
                id="include-cost-analysis"
                type="checkbox"
                checked={includeCostAnalysis}
                onChange={(e) => setIncludeCostAnalysis(e.target.checked)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                data-html2canvas-ignore="true"
              />
              <label htmlFor="include-cost-analysis" className="ml-2 block text-sm text-white" data-html2canvas-ignore="true">
                Include Cost Analysis
              </label>
            </div>
            <button 
              onClick={generatePDF}
              className="pdf-button bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
              data-html2canvas-ignore="true"
            >
              <Download className="w-5 h-5" />
              Generate PDF
            </button>
            <button 
              onClick={generateEmailWithInvoice}
              disabled={isEmailSending}
              className={`email-button ${isEmailSending 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2`}
              data-html2canvas-ignore="true"
            >
              {isEmailSending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending Email...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Email Invoice
                </>
              )}
            </button>
            <button 
              onClick={() => window.print()}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
              data-html2canvas-ignore="true"
            >
              <Printer className="w-5 h-5" />
              Print Preview
            </button>
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700 max-w-2xl mx-auto">
            <strong className="font-semibold">Invoice Actions:</strong>
            <p className="mt-1">Use <strong>"Generate PDF"</strong> for optimized PDF output, <strong>"Email Invoice"</strong> to send via email client, or <strong>"Print Preview"</strong> to use your browser's print dialog.</p>
            <p className="mt-2 text-xs">The email function will open your default email client with invoice details pre-filled and instructions for PDF attachment.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default InvoicePage; 
