import React, { useState, useEffect } from 'react';
import { 
  PlusCircle, 
  Printer, 
  ChevronRight, 
  Trash2, 
  Plus, 
  X,
  Download 
} from 'lucide-react';
import logoImage from '../assets/logo/sunvic.png';

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
}

const InvoicePage: React.FC = () => {
  const [phases, setPhases] = useState<ProjectPhase[]>([]);
  const [phaseCounter, setPhaseCounter] = useState(0);
  const [taxRate, setTaxRate] = useState(6.625);
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');

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
      phase.items.forEach(item => {
        subtotal += item.qty * item.rate;
      });
    });

    const taxAmount = subtotal * (taxRate / 100);
    const total = subtotal + taxAmount;

    return { subtotal, taxAmount, total };
  };

  const { subtotal, taxAmount, total } = calculateTotals();

  // Improved PDF generation function
  const generatePDF = async () => {
    // Show a loading state or message
    const button = document.querySelector('.pdf-button') as HTMLButtonElement;
    if (button) {
      button.disabled = true;
      button.innerHTML = '<span class="flex items-center gap-2"><div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>Generating PDF...</span>';
    }

    try {
      // Use the browser's print dialog but with optimized settings
      const printWindow = window.open('', '_blank');
      
      if (printWindow) {
        const invoiceHTML = document.querySelector('.print-container')?.outerHTML || '';
        
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>Invoice - ${document.querySelector('[value="INV-2025-001"]')?.getAttribute('value') || 'INV-001'}</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
              body { font-family: 'Inter', system-ui, sans-serif; margin: 0; padding: 20px; background: white; }
              .print-container { max-width: none; margin: 0; box-shadow: none; border: none; }
              input, textarea, select { border: none !important; background: transparent !important; outline: none !important; }
              .print\\:hidden { display: none !important; }
              .print\\:page-break-before-always { page-break-before: always !important; }
              .bg-gray-50 { background-color: #f9fafb !important; }
              .text-orange-600, .text-orange-500 { color: #ea580c !important; }
              .border-orange-400 { border-color: #fb923c !important; }
              table { border-collapse: collapse; }
              th, td { border-bottom: 1px solid #e5e7eb; }
              details[open] summary ~ * { display: block !important; }
              details summary { list-style: none; }
              details summary::-webkit-details-marker { display: none; }
              @page { margin: 0.5in; size: letter; }
            </style>
          </head>
          <body>
            ${invoiceHTML}
            <script>
              // Auto-open all details elements for printing
              document.querySelectorAll('details').forEach(detail => detail.open = true);
              // Auto-print after content loads
              window.onload = () => setTimeout(() => window.print(), 500);
            </script>
          </body>
          </html>
        `);
        
        printWindow.document.close();
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try using the print button and save as PDF manually.');
    } finally {
      // Reset button state
      if (button) {
        button.disabled = false;
        button.innerHTML = '<span class="flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>Generate PDF</span>';
      }
    }
  };

  const initializeProjectData = () => {
    const projectData = [
      {
        title: 'Phase 1: Demolition & Site Prep',
        description: 'Safe and complete removal of existing structures as per plans A-001.00 & A-002.00. Includes site clearing, disposal of debris, and preparation of the area for new construction.',
        sqft: 4257,
        items: [
          { desc: 'Structural Demolition', qty: 1, rate: 8500, details: 'Protocol: Methodical disassembly of load-bearing walls and structures. All work performed under safety protocols to maintain the integrity of the remaining building.' },
          { desc: 'Debris Hauling & Disposal', qty: 1, rate: 4500, details: 'Protocol: All construction debris sorted and removed from the site for legal disposal at a certified facility. Includes dumpster rental and labor.' },
          { desc: 'Site Clearing & Grading', qty: 1, rate: 5500, details: 'Protocol: Clearing of the designated construction area and grading the land to ensure proper drainage and a level base for the new foundation.' }
        ]
      },
      {
        title: 'Phase 2: Foundation & Concrete',
        description: 'Construction of a solid and level foundation. Includes excavation for new footings, pouring of high-strength concrete, and construction of concrete block foundation walls as specified.',
        sqft: 1825,
        items: [
          { desc: 'Excavation Services', qty: 1, rate: 7000, details: 'Protocol: Excavation to depths specified in architectural plans (A-004.00), ensuring stable soil conditions and preparation for footing installation.' },
          { desc: 'Poured Concrete Footings', qty: 1, rate: 15000, details: 'Protocol: Installation of steel rebar reinforcement and pouring of 4000 PSI concrete to form continuous footings, inspected prior to backfilling.' },
          { desc: 'CMU Block Foundation Walls', qty: 1, rate: 20000, details: 'Protocol: Construction of foundation walls using 12" concrete masonry units (CMUs) with vertical reinforcement and mortar, including waterproofing.' }
        ]
      },
      {
        title: 'Phase 3: Structural & Rough Framing',
        description: 'Erecting the skeleton of the new addition. Includes all floor, wall, ceiling, and roof framing using high-quality lumber, as detailed in framing plans A-009.00.',
        sqft: 4257,
        items: [
          { desc: 'First & Second Floor Framing', qty: 1, rate: 35000, details: 'Protocol: Assembly of all floor systems, load-bearing walls, and interior partitions using Douglas Fir No. 2 grade lumber, spaced at 16" on-center.' },
          { desc: 'Roof Trusses & Rafters', qty: 1, rate: 22500, details: 'Protocol: Installation of engineered roof trusses and conventional rafters, including hurricane straps and bracing as per code requirements (A-005.00).' },
          { desc: 'Exterior Wall Sheathing', qty: 1, rate: 18000, details: 'Protocol: Application of 1/2" CDX plywood sheathing to all exterior walls to provide structural rigidity and a nail base for siding.' }
        ]
      }
    ];

    projectData.forEach(phase => {
      setTimeout(() => addPhase(phase.title, phase.description, phase.items, phase.sqft), 100);
    });
  };

  return (
    <div className="bg-gray-200 p-4 sm:p-6 lg:p-8 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 print-container">
        {/* Header */}
        <header className="p-8 sm:p-10 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <img src={logoImage} alt="Sunvic Construction Logo" className="h-20 w-auto" />
              <div>
                <input 
                  type="text" 
                  defaultValue="Sunvic Construction" 
                  className="text-3xl font-bold text-gray-900 border-none bg-transparent focus:bg-gray-100 p-1 rounded-md"
                />
                <textarea 
                  defaultValue="123 Main Street, Aberdeen Township, NJ 07747" 
                  className="text-base text-gray-500 border-none bg-transparent w-full focus:bg-gray-100 p-1 rounded-md" 
                  rows={2}
                />
              </div>
            </div>
            <div className="text-right">
              <h1 className="text-5xl font-bold text-orange-500">INVOICE</h1>
              <div className="mt-2">
                <span className="text-base font-medium text-gray-500">Invoice #</span>
                <input 
                  type="text" 
                  defaultValue="INV-2025-001" 
                  className="w-36 text-lg text-right p-1 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Bill To & Project Info */}
        <section className="p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Bill To</h2>
            <input 
              type="text" 
              defaultValue="Homeowner" 
              className="w-full text-xl font-semibold text-gray-800 p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent" 
              placeholder="Client Name"
            />
            <textarea 
              defaultValue="665 Denver Boulevard&#10;Edison, NJ 08820" 
              className="w-full text-base text-gray-600 p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent" 
              rows={3} 
              placeholder="Client Address"
            />
          </div>
          <div className="text-left md:text-right">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <span className="text-base font-semibold text-gray-500">Date:</span>
              <input 
                type="date" 
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                className="text-base p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent text-right"
              />
              <span className="text-base font-semibold text-gray-500">Due Date:</span>
              <input 
                type="date" 
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="text-base p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent text-right"
              />
              <span className="text-base font-semibold text-gray-500">Project Ref:</span>
              <input 
                type="text" 
                defaultValue="Project #202493" 
                className="text-base p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent text-right"
              />
              <span className="text-base font-semibold text-gray-500">Status:</span>
              <select className="text-base p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent text-right rounded-md">
                <option>Draft</option>
                <option>Sent</option>
                <option>Paid</option>
                <option>Overdue</option>
              </select>
            </div>
          </div>
        </section>

        {/* Invoice Items */}
        <main className="px-8 sm:px-10">
          {phases.map((phase) => (
            <details 
              key={phase.id}
              className="bg-white border border-gray-200 rounded-lg mb-4 overflow-hidden"
              open={phase.isOpen}
            >
              <summary className="p-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                <div className="flex-grow flex items-center gap-3 mr-4">
                  <ChevronRight className="w-5 h-5 text-gray-400 transition-transform" />
                  <input 
                    type="text" 
                    value={phase.title}
                    onChange={(e) => updatePhase(phase.id, { title: e.target.value })}
                    className="text-xl font-bold text-gray-800 w-full border-none bg-transparent focus:bg-white p-1 rounded-md"
                  />
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    removePhase(phase.id);
                  }}
                  className="print:hidden text-red-500 hover:text-red-700 p-1 rounded-full"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </summary>
              
              <div className="p-4 md:p-6">
                <textarea 
                  value={phase.description}
                  onChange={(e) => updatePhase(phase.id, { description: e.target.value })}
                  className="w-full text-base text-gray-600 mb-4 p-1 border-b-2 border-transparent focus:border-orange-500 bg-transparent" 
                  rows={2}
                />
                
                <table className="w-full text-left text-base">
                  <thead className="text-gray-500">
                    <tr>
                      <th className="py-2 font-medium w-1/2">Item & Protocol</th>
                      <th className="py-2 font-medium text-center">Qty</th>
                      <th className="py-2 font-medium text-right">Rate</th>
                      <th className="py-2 font-medium text-right">Amount</th>
                      <th className="py-2 print:hidden"></th>
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
                        <td className="py-2 pl-2 text-center print:hidden">
                          <button 
                            onClick={() => removeItem(phase.id, itemIndex)}
                            className="text-gray-400 hover:text-red-500 p-1 rounded-full"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <button 
                  onClick={() => addItem(phase.id)}
                  className="print:hidden mt-4 flex items-center gap-1 text-sm text-orange-600 font-semibold hover:opacity-80 transition-opacity"
                >
                  <Plus className="w-3 h-3" /> Add Line Item
                </button>
              </div>
            </details>
          ))}
        </main>
        
        <div className="px-8 sm:px-10 pb-4 print:hidden">
          <button 
            onClick={() => addPhase()}
            className="flex items-center gap-2 text-base text-orange-600 font-semibold hover:opacity-80 transition-opacity"
          >
            <PlusCircle className="w-5 h-5" /> Add Project Phase
          </button>
        </div>

        {/* Totals & Notes */}
        <section className="bg-gray-50 p-8 sm:p-10">
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
                    <span>(
                      <input 
                        type="number" 
                        value={taxRate}
                        onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                        className="w-20 text-lg text-right p-1 bg-transparent focus:bg-white border-b-2 border-transparent focus:border-orange-500 rounded-md"
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
            <div className="md:order-first">
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

        {/* Cost Analysis Page - Now with Editable Square Footage */}
        <section className="print:page-break-before-always p-8 sm:p-10">
          <div className="text-center mb-8">
            <img src={logoImage} alt="Sunvic Construction Logo" className="h-20 w-auto mx-auto" />
            <h2 className="text-3xl font-bold text-gray-900 mt-4">Project Cost Analysis & Market Comparison</h2>
          </div>
          <p className="text-gray-600 mb-8 text-center">To provide full transparency, this section breaks down how your project estimate was calculated and how it compares to current market standards in New Jersey.</p>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Phase-by-Phase Estimate Breakdown</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="py-2 font-semibold text-gray-700">Project Phase</th>
                  <th className="py-2 font-semibold text-gray-700 text-right">Phase Cost</th>
                  <th className="py-2 font-semibold text-gray-700 text-right">Approx. Sq. Ft.</th>
                  <th className="py-2 font-semibold text-gray-700 text-right">Cost / Sq. Ft.</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {phases.map((phase) => {
                  const phaseSubtotal = phase.items.reduce((sum, item) => sum + (item.qty * item.rate), 0);
                  const costPerSqft = phase.sqft > 0 ? phaseSubtotal / phase.sqft : 0;
                  
                  return (
                    <tr key={phase.id} className="border-b border-gray-200">
                      <td className="py-3 pr-2">
                        <input 
                          type="text" 
                          value={phase.title}
                          onChange={(e) => updatePhase(phase.id, { title: e.target.value })}
                          className="w-full bg-transparent border-none focus:bg-gray-50 p-1 rounded font-medium"
                        />
                      </td>
                      <td className="py-3 text-right font-semibold">{formatCurrency(phaseSubtotal)}</td>
                      <td className="py-3 text-right">
                        <input 
                          type="number" 
                          value={phase.sqft}
                          onChange={(e) => updatePhase(phase.id, { sqft: parseFloat(e.target.value) || 0 })}
                          className="w-24 text-right bg-transparent border-none focus:bg-gray-50 p-1 rounded print:border-none"
                          min="0"
                        />
                      </td>
                      <td className="py-3 text-right font-bold text-orange-600">{formatCurrency(costPerSqft)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">Market Context & Comparison</h3>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Average Cost Per Square Foot (New Jersey)</h4>
              <p className="text-gray-700 mt-1">For a home addition in New Jersey, homeowners can expect to pay between **$176 and $328 per square foot**. Some contractors note that full gut renovations start at $200 per square foot and increase from there. Second-story additions are even more costly, ranging from $200 to $500 per square foot due to the required structural work. Our blended rate for your project falls competitively within this range.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Project-Specific Factors</h4>
              <p className="text-gray-700 mt-1">Your estimate reflects the specific complexities of the 665 Denver Blvd project, including the significant structural work of adding a second story, the complete replacement of MEP (Mechanical, Electrical, Plumbing) systems, and the high-quality finishes specified in the architectural plans.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Our Value Proposition</h4>
              <p className="text-gray-700 mt-1">While our estimate is comprehensive, it is also built on efficiency. Our established relationships with suppliers and our experienced in-house team allow us to manage costs effectively without compromising on the quality or integrity of the build. We provide a dedicated project manager to ensure your project stays on schedule and on budget.</p>
            </div>
          </div>
        </section>

        {/* Warranty Page */}
        <section className="print:page-break-before-always p-8 sm:p-10">
          <div className="text-center mb-8">
            <img src={logoImage} alt="Sunvic Construction Logo" className="h-20 w-auto mx-auto" />
            <h2 className="text-3xl font-bold text-gray-900 mt-4">Our Commitment & Warranty</h2>
          </div>
          <div className="space-y-6 text-base text-gray-700">
            <p>At Sunvic Construction, we stand behind the quality of our work. This project is more than just a structure; it's your home. We are committed to delivering a final product that is safe, durable, and built to the highest standards of craftsmanship. Your peace of mind is our top priority.</p>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Licensed & Insured</h3>
              <p>Sunvic Construction is a fully licensed Home Improvement Contractor in the state of New Jersey (License #13VH00000000). We carry comprehensive general liability and workers' compensation insurance. Certificates of insurance are available upon request. You can rest assured that your project is in the hands of qualified and protected professionals.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Quality of Materials & Workmanship</h3>
              <p>We are committed to using only high-quality, durable materials from reputable suppliers that meet or exceed the specifications outlined in the architectural plans. Our team consists of experienced, skilled craftspeople who take pride in their work. All construction will adhere strictly to the New Jersey Residential Site Improvement Standards and local building codes.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">One-Year Workmanship Warranty</h3>
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
            <button 
              onClick={generatePDF}
              className="pdf-button bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Generate PDF
            </button>
            <button 
              onClick={() => window.print()}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
            >
              <Printer className="w-5 h-5" />
              Print Preview
            </button>
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700 max-w-2xl mx-auto">
            <strong className="font-semibold">PDF Generation:</strong>
            <p className="mt-1">Use the <strong>"Generate PDF"</strong> button for optimized PDF output, or <strong>"Print Preview"</strong> to use your browser's print dialog.</p>
            <p className="mt-2 text-xs">The PDF will open in a new window with proper formatting for professional printing.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default InvoicePage; 