import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../assets/img/logo_1.png';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'black', padding: '10px 0' }}>
      <Container className="d-flex justify-content-between align-items-center">
        <div style={{ flex: 1 }}></div>

        <div>
          <img src={logo} alt="Logo" style={{ height: '80px' }} />
        </div>

        <div style={{ flex: 1 }} className="d-flex justify-content-end">
          <LanguageToggle />
        </div>
      </Container>
    </div>
  );
};

export default Header;
