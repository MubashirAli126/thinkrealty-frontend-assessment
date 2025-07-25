import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button variant="light" onClick={toggleLanguage}>
      🌐 {i18n.language === 'en' ? 'AR' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;