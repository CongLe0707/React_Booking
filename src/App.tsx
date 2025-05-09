// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Homepage from './pages/Homepage';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ContactPage from './pages/ContactForm';
 import LoginPage from './components/AuthForm';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Homepage/>} />
           <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/dich-vu" element={<ServicesPage />} />
          <Route path="/lien-he" element={<ContactPage />} /> 
          <Route path="/dang-nhap" element={<LoginPage />} /> 
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
