import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: '✦ Full-Stack', description: 'React, Next.js, Node.js' },
  { name: '✦ AI & LLMs', description: 'OpenAI, LangChain' },
  { name: '✦ Automation', description: 'n8n, Make, Python' },
  { name: '✦ Voice AI', description: 'Vapi, Retell, ElevenLabs' },
  { name: '✦ Cloud & DB', description: 'AWS, Supabase' },
  { name: '✦ E-comm', description: 'Shopify, Woo' },
  { name: '✦ Dev Ops', description: 'Python, C++, Java' },
];

const marqueeLogos = [...clientLogos, ...clientLogos]; 

const TrustedClients = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -2016], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear'
        }
      }
    }
  };

  return (
    <section className="py-20 bg-[#0C0D0D] border-t border-b border-[#1E1E2A] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-gray-400 mb-12 uppercase">OUR TECHNOLOGY ECOSYSTEM</p>
        <div className="relative w-full">
          <motion.div className="flex" variants={marqueeVariants} animate="animate">
            {marqueeLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-12 flex justify-center items-center">
                <span className="text-white text-2xl md:text-3xl font-semibold opacity-70">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;