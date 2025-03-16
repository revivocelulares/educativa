// components/Contact.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <motion.section 
      id="contact"
      className="py-20 bg-primary-100 dark:bg-secondary-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-secondary-800 dark:text-primary-100">
            Contáctanos
          </h2>
          <p className="text-center text-secondary-600 dark:text-secondary-200 mb-12">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="bg-primary-100 dark:bg-secondary-700 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-800 dark:text-primary-100">Teléfono</h3>
                  <p className="text-secondary-600 dark:text-secondary-300">297 4312856</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="bg-primary-100 dark:bg-secondary-700 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-800 dark:text-primary-100">Email</h3>
                  <p className="text-secondary-600 dark:text-secondary-300">leonorf@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="bg-primary-100 dark:bg-secondary-700 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-800 dark:text-primary-100">Ubicación</h3>
                  <p className="text-secondary-600 dark:text-secondary-300">KM4, Comodoro Rivadavia</p>
                </div>
              </motion.div>
            </div>

            {/* Formulario de contacto */}
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-200 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 dark:border-secondary-600 
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  bg-white dark:bg-secondary-800 text-secondary-900 dark:text-primary-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-200 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 dark:border-secondary-600 
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  bg-white dark:bg-secondary-800 text-secondary-900 dark:text-primary-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-200 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 dark:border-secondary-600 
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  bg-white dark:bg-secondary-800 text-secondary-900 dark:text-primary-100"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg
                transition duration-300 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                Enviar mensaje
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;