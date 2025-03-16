// components/Testimonials.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ana Pérez',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    comment: '¡Los profesores son increíbles! Aprobé mi examen de cálculo con 95/100'
  },
  {
    name: 'Carlos Gómez',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    comment: 'Las clases de inglés me ayudaron a conseguir mi primer trabajo internacional'
  },
  {
    name: 'Sofía Rodríguez',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    comment: 'Explican conceptos complejos de física de manera muy sencilla'
  }
];

const Testimonials = () => {
  return (
    <motion.section 
      className="py-20 bg-primary-50 dark:bg-secondary-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Lo que dicen nuestros estudiantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;