// App.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Teachers from './components/Teachers';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={darkMode ? 'dark' : ''}
    >
      <div className="min-h-screen bg-primary-50 dark:bg-secondary-900">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-16">
          <section id="hero">
            <HeroSection />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="teachers">
            <Teachers />
          </section>
          <section id="pricing">
            <Pricing />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </main>
      </div>
    </motion.div>
  );
}

export default App;