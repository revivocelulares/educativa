// components/Teachers.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const teachers = [
  {
    name: 'Prof. Martín López',
    subject: 'Matemáticas',
    image: '/images/profesor1.jpg',
    description: 'Especialista en preparación para exámenes universitarios'
  },
  {
    name: 'Dra. Ana Torres',
    subject: 'Humanidades',
    image: '/images/profesor2.jpg',
    description: 'Profesora certificada de inglés con 10 años de experiencia'
  },
  {
    name: 'Ing. Carlos Méndez',
    subject: 'Ciencias',
    image: '/images/profesor3.jpg',
    description: 'Experto en física aplicada y metodologías innovadoras'
  }
];

const Teachers = () => {
  return (
    <motion.section 
      id="teachers"
      className="py-20 bg-primary-100 dark:bg-secondary-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Nuestros Profesores Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md 
              hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={teacher.image} 
                alt={teacher.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {teacher.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                {teacher.subject}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {teacher.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Teachers;