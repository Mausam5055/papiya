import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContactForm } from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleLocationClick = () => {
    // Replace with your actual Google Maps location URL
    window.open('https://www.google.com/maps/place/Lala,+Assam+788163/@24.5611357,92.6005197,2930m/data=!3m2!1e3!4b1!4m6!3m5!1s0x374e23200e83c377:0x38fc6fb496503250!8m2!3d24.5555062!4d92.5941239!16s%2Fm%2F02pp0pj?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-yellow-100 text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg opacity-90">Let's get in touch</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="opacity-75">papiyanathmazumdar@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="opacity-75">+91 88768 90538</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="opacity-75">Lala, Hailakandi, Assam</p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLocationClick}
                  className="relative w-full h-48 rounded-lg overflow-hidden cursor-pointer shadow-lg"
                >
                  <img
                    src="/assets/location.jpg"
                    alt="Office Location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium">
                      View on Google Maps
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};