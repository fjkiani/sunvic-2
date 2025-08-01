import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EnhancedServicesPage from './pages/EnhancedServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
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
import ConsultationForm from './components/forms/ConsultationForm';
import { useConsultationForm } from './hooks/useConsultationForm';

function App() {
  const { isOpen, serviceType, openForm, closeForm } = useConsultationForm();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage openConsultationForm={openForm} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/enhanced-services" element={<EnhancedServicesPage openConsultationForm={openForm} />} />
          <Route path="/enhanced-service/:serviceId" element={<EnhancedServiceDetailsPage openConsultationForm={openForm} />} />
          <Route path="/service-details/:serviceId" element={<ServiceDetailsPage openConsultationForm={openForm} />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/project/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/rentals" element={<RentalsPage />} />
          <Route path="/rental/:equipmentId" element={<EquipmentDetailsPage openConsultationForm={openForm} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/warranties" element={<WarrantiesPage />} />
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
  );
}

export default App;
