import { useState } from 'react';

interface UseConsultationFormReturn {
  isOpen: boolean;
  serviceType: string;
  openForm: (serviceType?: string) => void;
  closeForm: () => void;
}

export const useConsultationForm = (): UseConsultationFormReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceType, setServiceType] = useState('');

  const openForm = (serviceType: string = '') => {
    setServiceType(serviceType);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
    setServiceType('');
  };

  return {
    isOpen,
    serviceType,
    openForm,
    closeForm
  };
}; 
