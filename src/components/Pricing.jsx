// components/Pricing.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const plans = [
  {
    title: 'Básico',
    price: '$20',
    features: [
      '3 clases mensuales',
      'Acceso a materiales',
      'Soporte por email'
    ],
    color: 'bg-primary-400'
  },
  {
    title: 'Estándar',
    price: '$40',
    features: [
      '8 clases mensuales',
      'Clases personalizadas',
      'Soporte prioritario'
    ],
    color: 'bg-primary-500'
  },
  {
    title: 'Premium',
    price: '$60',
    features: [
      'Clases ilimitadas',
      'Tutorías 1:1',
      'Acceso a comunidad VIP'
    ],
    color: 'bg-primary-600'
  }
];

const Pricing = () => {
  return (
    <motion.section 
      id="pricing"
      className="py-20 bg-primary-50 dark:bg-secondary-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary-800 dark:text-primary-100">
          Planes de Pago
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`p-6 rounded-lg shadow-md hover:scale-105 transition-transform 
              ${plan.color} dark:bg-secondary-700 text-white dark:text-primary-50`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;