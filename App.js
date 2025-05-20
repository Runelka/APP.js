import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import SupportChat from './components/SupportChat';

import ServicesPage from './pages/ServicesPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';

function AppWrapper() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={isHome ? 'home-wrapper' : ''}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
      <SupportChat />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}