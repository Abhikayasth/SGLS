// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Calculator from './components/Calculator';
import ContactForm from './components/ContactForm';  // Renamed earlier
import ApplyPage from './components/ApplyPage';    // Create this component

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/apply" element={<ApplyPage />} />  {/* Add this route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const Home = () => (
  <>
    <HeroSection id="home" />
    <AboutUs id="about-us" />
    <Services id="service" />
    <Testimonials id="testimonials" />
    <ContactUs id="contact-us" />
  </>
);

export default App;
