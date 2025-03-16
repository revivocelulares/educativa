// components/Navbar.jsx
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Inicio', href: 'hero' },
  { label: 'Servicios', href: 'services' },
  { label: 'Profesores', href: 'teachers' },
  { label: 'Precios', href: 'pricing' },
  { label: 'Contacto', href: 'contact' },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(href);
      if (element) {
        const navbarHeight = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100;

      if (scrollPosition < window.innerHeight / 2) {
        setActiveSection('hero');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop - window.innerHeight / 3) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-primary-100/80 dark:bg-secondary-900/80 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => handleMobileNavClick(e, 'hero')}
            className={`text-xl font-bold ${
              activeSection === 'hero' 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-primary-500 dark:text-primary-300'
            }`}
          >
            TutorPro
          </a>

          {/* Navigation Items - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.href}`}
                onClick={(e) => handleMobileNavClick(e, item.href)}
                className={`transition duration-300 ${
                  activeSection === item.href
                    ? 'text-primary-600 dark:text-primary-400 font-semibold border-b-2 border-primary-600 dark:border-primary-400'
                    : 'text-secondary-800 dark:text-secondary-100 hover:text-primary-600 dark:hover:text-primary-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl text-secondary-800 dark:text-secondary-100 
              hover:text-primary-600 dark:hover:text-primary-300 transition duration-300"
            >
              {darkMode ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-secondary-800 dark:text-secondary-100"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.href}`}
                    onClick={(e) => handleMobileNavClick(e, item.href)}
                    className={`block py-2 px-4 transition duration-300 ${
                      activeSection === item.href
                        ? 'text-primary-600 dark:text-primary-400 font-semibold bg-primary-50 dark:bg-secondary-800'
                        : 'text-secondary-800 dark:text-secondary-100 hover:text-primary-600 dark:hover:text-primary-300'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;