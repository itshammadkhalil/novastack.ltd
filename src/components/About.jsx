import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0C0D0D] overflow-hidden">
      <div className="container mx-auto px-6">
       <div className="mb-16">
           <p className="text-accent-purple font-medium tracking-[0.2em] uppercase mb-3 text-sm">About NovaStack</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                The Force Behind <br />
                <span className="text-gray-500">Your Digital Success</span>
               </h2>
                </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                className="w-full h-full object-cover" 
                alt="Modern office with creative team working on computers" 
                src="https://horizons-cdn.hostinger.com/bed2041a-d640-4ec6-b88f-05220bbe036a/charlesdeluvio-lks7vei-eag-unsplash-7Or6F.jpg" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              WE ARE THE ARCHITECTS OF <span className="text-accent-purple">INNOVATION</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Engineering Excellence</h3>
                <p className="text-lg text-gray-400">
                  We don't just build websites; we engineer scalable digital ecosystems that push the boundaries of what's possible.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">AI-First Approach</h3>
                <p className="text-lg text-gray-400">
                  Our focus is on integrating intelligent automation and AI to ensure your business stays ahead of the curve.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.8, ease: 'easeOut' }} 
            className="lg:order-last"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                className="w-full h-full object-cover" 
                alt="Diverse team collaborating around a table with laptops and notes" 
                src="https://horizons-cdn.hostinger.com/bed2041a-d640-4ec6-b88f-05220bbe036a/michael-t-rxri-ho62y4-unsplash-2-tvxRc.jpg" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              YOUR AMBITION, OUR <span className="text-accent-purple">EXECUTION</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Technical Strategy</h3>
                <p className="text-lg text-gray-400">
                  We dive deep into your business logic to create a technical roadmap that guarantees efficiency and high performance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Rapid Deployment</h3>
                <p className="text-lg text-gray-400">
                  Our team brings your ideas to life with precision-coded solutions, ensuring a seamless launch through rigorous testing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;