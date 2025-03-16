// components/HeroSection.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section 
      id="hero"
      className="min-h-[90vh] flex items-center bg-[url('/src/assets/hero_background.webp')] bg-cover bg-center text-secondary-600"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Clases Particulares Personalizadas
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-secondary-600 font-bold">
            Mejora tus habilidades con profesores expertos en diversas materias
          </p>
          <a 
            href="#contact"
            className="bg-primary-100 text-primary-600 px-8 py-4 rounded-full font-semibold 
            hover:bg-primary-200 transition duration-300 text-lg inline-block"
          >
            Comienza ahora
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;