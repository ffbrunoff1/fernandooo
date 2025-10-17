import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';

export default function App() {
  const HomePage = () => (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/equipe" element={<TeamPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
