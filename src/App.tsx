import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EnhancedServicesPage from './pages/EnhancedServicesPage';
import ServiceDetailsListingPage from './pages/ServiceDetailsListingPage';
import EnhancedServiceDetailsPage from './pages/EnhancedServiceDetailsPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import RentalsPage from './pages/RentalsPage';
import EquipmentDetailsPage from './pages/EquipmentDetailsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import SitemapPage from './pages/SitemapPage';
import CareersPage from './pages/CareersPage';
import WarrantiesPage from './pages/WarrantiesPage';
import InvoicePage from './pages/InvoicePage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import GalleryPage from './pages/GalleryPage';
import ConsultationForm from './components/forms/ConsultationForm';
import { useConsultationForm } from './hooks/useConsultationForm';
import AdminSeoPage from './pages/AdminSeoPage';
import SeoTestPage from './pages/SeoTestPage';

function App() {
  const { isOpen, serviceType, openForm, closeForm } = useConsultationForm();

  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
          <Route path="/" element={<HomePage openConsultationForm={openForm} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/enhanced-services" element={<EnhancedServicesPage openConsultationForm={openForm} />} />
          <Route path="/enhanced-service/:serviceId" element={<EnhancedServiceDetailsPage openConsultationForm={openForm} />} />
          <Route path="/service-details" element={<ServiceDetailsListingPage openConsultationForm={openForm} />} />
          <Route path="/service-details/:serviceId" element={<EnhancedServiceDetailsPage openConsultationForm={openForm} />} />
          <Route path="/portfolio" element={<PortfolioPage openConsultationForm={openForm} />} />
          <Route path="/project/:projectId" element={<ProjectDetailsPage openConsultationForm={openForm} />} />
          <Route path="/rentals" element={<RentalsPage openConsultationForm={openForm} />} />
          <Route path="/rental/:equipmentId" element={<EquipmentDetailsPage openConsultationForm={openForm} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service-areas/:area" element={<ServiceAreaPage openConsultationForm={openForm} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/warranties" element={<WarrantiesPage />} />
          <Route path="/admin/seo" element={<AdminSeoPage />} />
          <Route path="/admin/seo-test" element={<SeoTestPage />} />
          <Route path="/invoice" element={<InvoicePage />} />
          </Routes>
          
          {/* Global Consultation Form */}
          <ConsultationForm 
            isOpen={isOpen}
            onClose={closeForm}
            serviceType={serviceType}
          />
          

        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
