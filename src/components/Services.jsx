// components/Services.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const services = [
  { 
    icon: '📚', 
    title: 'Matemáticas', 
    description: 'Desde álgebra básica hasta cálculo avanzado' 
  },
  { 
    icon: '🔬', 
    title: 'Ciencias', 
    description: 'Física, química y biología explicadas de forma práctica' 
  },
  { 
    icon: '📖', 
    title: 'Humanidades', 
    description: 'Historia, literatura y filosofía para comprender el mundo' 
  },
];

const Services = () => {
  return (
    <motion.section 
      id="services"
      className="py-20 bg-primary-100 dark:bg-secondary-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-800 dark:text-primary-200">
          Nuestras Materias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white dark:bg-secondary-700 rounded-lg shadow-md 
              hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 text-primary-500 dark:text-primary-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary-800 dark:text-primary-100">
                {service.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-200">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;