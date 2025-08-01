import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf, Image } from '@react-pdf/renderer';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#f97316',
  },
  logo: {
    width: 60,
    height: 60,
  },
  companyInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  companyDetails: {
    fontSize: 10,
    color: '#6b7280',
    marginBottom: 2,
  },
  licensed: {
    fontSize: 9,
    color: '#f97316',
    fontWeight: 'bold',
  },
  invoiceTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#f97316',
    textAlign: 'right',
  },
  invoiceNumber: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'right',
    marginTop: 5,
  },
  tagline: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'right',
    marginTop: 5,
  },
  billToSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  billToLeft: {
    flex: 1,
    marginRight: 20,
  },
  billToRight: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  clientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  clientAddress: {
    fontSize: 11,
    color: '#4b5563',
    lineHeight: 1.4,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  detailLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#6b7280',
    width: 80,
  },
  detailValue: {
    fontSize: 11,
    color: '#374151',
  },
  phaseSection: {
    marginBottom: 25,
    border: '1 solid #e5e7eb',
    borderRadius: 8,
  },
  phaseHeader: {
    backgroundColor: '#f9fafb',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  phaseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  phaseDescription: {
    fontSize: 11,
    color: '#6b7280',
    lineHeight: 1.4,
  },
  tableContainer: {
    padding: 15,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
  },
  tableHeaderCell: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#374151',
    textTransform: 'uppercase',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  tableCell: {
    fontSize: 10,
    color: '#1f2937',
  },
  tableCellBold: {
    fontSize: 10,
    color: '#1f2937',
    fontWeight: 'bold',
  },
  itemDesc: {
    width: '50%',
    paddingRight: 10,
  },
  itemQty: {
    width: '15%',
    textAlign: 'center',
  },
  itemRate: {
    width: '20%',
    textAlign: 'right',
  },
  itemAmount: {
    width: '15%',
    textAlign: 'right',
  },
  totalsSection: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notesSection: {
    flex: 1,
    marginRight: 30,
  },
  notesHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6b7280',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  notesText: {
    fontSize: 10,
    color: '#4b5563',
    lineHeight: 1.4,
  },
  totalsContainer: {
    width: 200,
    backgroundColor: '#1f2937',
    padding: 20,
    borderRadius: 8,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 12,
    color: '#d1d5db',
  },
  totalValue: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  totalFinal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#374151',
  },
  totalFinalLabel: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  totalFinalValue: {
    fontSize: 16,
    color: '#f97316',
    fontWeight: 'bold',
  },
  warrantySection: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    border: '1 solid #e2e8f0',
  },
  warrantyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
    textAlign: 'center',
  },
  warrantyText: {
    fontSize: 10,
    color: '#4b5563',
    lineHeight: 1.5,
    marginBottom: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  footerLogo: {
    width: 40,
    height: 40,
  },
  footerInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  footerText: {
    fontSize: 9,
    color: '#6b7280',
    textAlign: 'center',
  },
  footerWebsite: {
    fontSize: 9,
    color: '#f97316',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// Interface definitions
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
  items: InvoiceItem[];
  excluded?: boolean;
  sqft: number; // Made required instead of optional
}

interface InvoicePDFProps {
  clientName: string;
  clientAddress: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  projectRef: string;
  status: string;
  phases: ProjectPhase[];
  subtotal: number;
  taxAmount: number;
  total: number;
  taxRate: number;
  notes: string;
  includeCostAnalysis?: boolean;
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const InvoicePDF: React.FC<InvoicePDFProps> = ({
  clientName,
  clientAddress,
  invoiceNumber,
  invoiceDate,
  dueDate,
  projectRef,
  status,
  phases,
  subtotal,
  taxAmount,
  total,
  taxRate,
  notes,
  includeCostAnalysis = false
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.companyInfo}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Image 
              style={styles.logo}
              src="/logo/sunvic.png"
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.companyName}>Sunvic Contractors</Text>
            </View>
          </View>
          <Text style={styles.companyDetails}>123 Main Street, Aberdeen Township, NJ 07747</Text>
          <Text style={styles.companyDetails}>(732) 824-9203 • sunvicnj@gmail.com</Text>
          <Text style={styles.licensed}>Licensed & Insured • 13VH12429600 License Number | www.sunvicnj.com</Text>
        </View>
        <View>
          <Text style={styles.invoiceTitle}>INVOICE</Text>
          <Text style={styles.invoiceNumber}>Invoice # {invoiceNumber}</Text>
          <Text style={styles.tagline}>Engineering Excellence in Every Project</Text>
        </View>
      </View>

      {/* Bill To Section */}
      <View style={styles.billToSection}>
        <View style={styles.billToLeft}>
          <Text style={styles.sectionHeader}>Bill To</Text>
          <Text style={styles.clientName}>{clientName || 'Client Name'}</Text>
          <Text style={styles.clientAddress}>{clientAddress || 'Client Address'}</Text>
        </View>
        <View style={styles.billToRight}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date:</Text>
            <Text style={styles.detailValue}>{invoiceDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Due Date:</Text>
            <Text style={styles.detailValue}>{dueDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Project Ref:</Text>
            <Text style={styles.detailValue}>{projectRef}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Status:</Text>
            <Text style={styles.detailValue}>{status}</Text>
          </View>
        </View>
      </View>

      {/* Project Phases */}
      {phases.filter(phase => !phase.excluded).map((phase) => (
        <View key={phase.id} style={styles.phaseSection}>
          <View style={styles.phaseHeader}>
            <Text style={styles.phaseTitle}>{phase.title}</Text>
            <Text style={styles.phaseDescription}>{phase.description}</Text>
          </View>
          
          {phase.items.length > 0 && (
            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <Text style={[styles.tableHeaderCell, styles.itemDesc]}>Item & Protocol</Text>
                <Text style={[styles.tableHeaderCell, styles.itemQty]}>Qty</Text>
                <Text style={[styles.tableHeaderCell, styles.itemRate]}>Rate</Text>
                <Text style={[styles.tableHeaderCell, styles.itemAmount]}>Amount</Text>
              </View>
              
              {phase.items.map((item, index) => (
                <View key={index}>
                  <View style={styles.tableRow}>
                    <View style={styles.itemDesc}>
                      <Text style={styles.tableCellBold}>{item.desc}</Text>
                      {item.details && (
                        <Text style={[styles.tableCell, { fontSize: 9, color: '#6b7280', marginTop: 2 }]}>
                          {item.details}
                        </Text>
                      )}
                    </View>
                    <Text style={[styles.tableCell, styles.itemQty]}>{item.qty}</Text>
                    <Text style={[styles.tableCell, styles.itemRate]}>{formatCurrency(item.rate)}</Text>
                    <Text style={[styles.tableCellBold, styles.itemAmount]}>
                      {formatCurrency(item.qty * item.rate)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}

      {/* Totals Section */}
      <View style={styles.totalsSection}>
        <View style={styles.notesSection}>
          <Text style={styles.notesHeader}>Notes & Payment Terms</Text>
          <Text style={styles.notesText}>
            {notes || 'Payment is due within 30 days. Please make checks payable to Sunvic Construction. Thank you for your business!'}
          </Text>
        </View>
        
        <View style={styles.totalsContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalValue}>{formatCurrency(subtotal)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Tax ({taxRate}%)</Text>
            <Text style={styles.totalValue}>{formatCurrency(taxAmount)}</Text>
          </View>
          <View style={styles.totalFinal}>
            <Text style={styles.totalFinalLabel}>Total</Text>
            <Text style={styles.totalFinalValue}>{formatCurrency(total)}</Text>
          </View>
        </View>
      </View>

      {/* Our Commitment & Warranty Section */}
      <View style={styles.warrantySection}>
        <Text style={styles.warrantyTitle}>Our Commitment & Warranty</Text>
        <Text style={styles.warrantyText}>
          We stand behind our work with comprehensive warranties on all materials and craftsmanship. 
          All structural work includes warrant. 
          We use only high-quality materials from trusted suppliers and all work is performed by licensed professionals.
        </Text>
        <Text style={styles.warrantyText}>
          Your project will be managed by our experienced team with regular progress updates and quality inspections. 
          We maintain full liability insurance and are bonded for your protection. Any issues during the warranty period 
          will be addressed promptly at no additional cost to you.
        </Text>
        <Text style={styles.warrantyText}>
          Contact us anytime during your project or warranty period. We're committed to your complete satisfaction 
          and building lasting relationships with our clients through exceptional service and quality workmanship.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Image 
          style={styles.footerLogo}
          src="/logo/sunvic.png"
        />
        <View style={styles.footerInfo}>
          <Text style={styles.footerText}>Licensed & Insured • NJ Certified</Text>
          <Text style={styles.footerWebsite}>www.sunvicnj.com</Text>
        </View>
        <View style={{ width: 40 }} /> {/* Spacer for balance */}
      </View>
    </Page>

    {/* Cost Analysis Page - Conditional */}
    {includeCostAnalysis && (
      <Page size="A4" style={styles.page}>
        <View style={[styles.header, { borderBottomWidth: 0, marginBottom: 20 }]}>
          <View style={styles.companyInfo}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <Image 
                style={styles.logo}
                src="/logo/sunvic.png"
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={styles.companyName}>Sunvic, LLC Contractors</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <Text style={[styles.invoiceTitle, { fontSize: 24, color: '#1f2937' }]}>
            Project Cost Analysis & Market Comparison
          </Text>
          <Text style={[styles.notesText, { textAlign: 'center', marginTop: 10, fontSize: 11 }]}>
            To provide full transparency, this section breaks down how your project estimate was calculated and how it compares to current market standards in New Jersey.
          </Text>
        </View>

        {/* Phase Breakdown Table */}
        <View style={{ marginBottom: 30 }}>
          <Text style={[styles.sectionHeader, { marginBottom: 15 }]}>Phase-by-Phase Estimate Breakdown</Text>
          
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, { width: '40%' }]}>Project Phase</Text>
            <Text style={[styles.tableHeaderCell, { width: '20%', textAlign: 'right' }]}>Phase Cost</Text>
            <Text style={[styles.tableHeaderCell, { width: '20%', textAlign: 'right' }]}>Approx. Sq. Ft.</Text>
            <Text style={[styles.tableHeaderCell, { width: '20%', textAlign: 'right' }]}>Cost / Sq. Ft.</Text>
          </View>
          
          {phases.filter(phase => !phase.excluded).map((phase) => {
            const phaseCost = phase.items.reduce((sum, item) => sum + (item.qty * item.rate), 0);
            const costPerSqft = (phase.sqft || 0) > 0 ? phaseCost / (phase.sqft || 0) : 0;
            
            return (
              <View key={phase.id} style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: '40%' }]}>{phase.title}</Text>
                <Text style={[styles.tableCell, { width: '20%', textAlign: 'right' }]}>{formatCurrency(phaseCost)}</Text>
                <Text style={[styles.tableCell, { width: '20%', textAlign: 'right' }]}>{(phase.sqft || 0).toLocaleString()}</Text>
                <Text style={[styles.tableCell, { width: '20%', textAlign: 'right' }]}>{formatCurrency(costPerSqft)}</Text>
              </View>
            );
          })}
          
          {/* Total Row */}
          <View style={[styles.tableRow, { backgroundColor: '#f3f4f6', fontWeight: 'bold' }]}>
            <Text style={[styles.tableCellBold, { width: '40%' }]}>Total Project</Text>
            <Text style={[styles.tableCellBold, { width: '20%', textAlign: 'right' }]}>{formatCurrency(subtotal)}</Text>
            <Text style={[styles.tableCellBold, { width: '20%', textAlign: 'right' }]}>
              {phases.reduce((sum, phase) => sum + (phase.sqft || 0), 0).toLocaleString()}
            </Text>
            <Text style={[styles.tableCellBold, { width: '20%', textAlign: 'right' }]}>
              {formatCurrency(phases.reduce((sum, phase) => sum + (phase.sqft || 0), 0) > 0 ? 
                subtotal / phases.reduce((sum, phase) => sum + (phase.sqft || 0), 0) : 0)}
            </Text>
          </View>
        </View>

        {/* Market Context */}
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.sectionHeader, { marginBottom: 15 }]}>Market Context & Comparison</Text>
          
          <View style={{ marginBottom: 15 }}>
            <Text style={[styles.tableCellBold, { fontSize: 12, marginBottom: 5 }]}>Average Cost Per Square Foot (New Jersey)</Text>
            <Text style={[styles.notesText, { lineHeight: 1.5 }]}>
              For a home addition in New Jersey, homeowners can expect to pay between $176 and $328 per square foot. 
              Some contractors note that full gut renovations start at $200 per square foot and increase from there. 
              Second-story additions are even more costly, ranging from $200 to $500 per square foot due to the required structural work. 
              Our blended rate for your project falls competitively within this range.
            </Text>
          </View>
          
          <View style={{ marginBottom: 15 }}>
            <Text style={[styles.tableCellBold, { fontSize: 12, marginBottom: 5 }]}>Project-Specific Factors</Text>
            <Text style={[styles.notesText, { lineHeight: 1.5 }]}>
              Your estimate reflects the specific complexities of your project, including significant structural work, 
              complete replacement of MEP (Mechanical, Electrical, Plumbing) systems, and high-quality finishes 
              specified in the architectural plans.
            </Text>
          </View>
          
          <View>
            <Text style={[styles.tableCellBold, { fontSize: 12, marginBottom: 5 }]}>Our Value Proposition</Text>
            <Text style={[styles.notesText, { lineHeight: 1.5 }]}>
              While our estimate is comprehensive, it is also built on efficiency. Our established relationships 
              with suppliers and our experienced in-house team allow us to manage costs effectively without 
              compromising on the quality or integrity of the build. We provide a dedicated project manager 
              to ensure your project stays on schedule and on budget.
            </Text>
          </View>
        </View>

        {/* Footer on Cost Analysis Page */}
        <View style={styles.footer}>
          <Image 
            style={styles.footerLogo}
            src="/logo/sunvic.png"
          />
          <View style={styles.footerInfo}>
            <Text style={styles.footerText}>Licensed & Insured • NJ Certified</Text>
            <Text style={styles.footerWebsite}>www.sunvicnj.com</Text>
          </View>
          <View style={{ width: 40 }} /> {/* Spacer for balance */}
        </View>
      </Page>
    )}
  </Document>
);

// Helper function to generate and download PDF
export const generateInvoicePDF = async (props: InvoicePDFProps) => {
  const blob = await pdf(<InvoicePDF {...props} />).toBlob();
  
  // Create download link
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${props.invoiceNumber} - ${props.clientName || 'Client'}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}; 