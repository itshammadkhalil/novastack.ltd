
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const servicesData = [
  {
    id: '01',
    title: 'AI Calling Agents',
    description: 'Human-like AI voice agents for automated cold calling, lead qualification, and 24/7 customer support.',
    features: ['Natural Voice AI', 'Auto-Scheduling & CRM', 'Multi-lingual Support', 'Outbound/Inbound Logic'],
    stack: 'Vapi, Retell, Bland, ElevenLabs + 10 more',
    category: 'AI & Automation'
  },
  {
    id: '02',
    title: 'Custom Web Apps',
    description: 'From high-conversion business websites to complex enterprise-grade SaaS dashboards.',
    features: ['Next.js / React Systems', 'E-commerce & Portals', 'Custom UI/UX Engineering', 'Scalable Architectures'],
    stack: 'React, Vue, Node, Go, TS + 15 more',
    category: 'Web Development'
  },
  {
    id: '03',
    title: 'AI Automation (n8n)',
    description: 'Connecting your business tools with smart workflows to save hundreds of manual work hours.',
    features: ['Advanced n8n Flows', 'Make.com Orchestration', 'API & Webhook Syncing', 'Custom Scraping Bots'],
    stack: 'n8n, Python, Zapier, Supabase + 12 more',
    category: 'AI & Automation'
  },
  {
    id: '04',
    title: 'Shopify Stores',
    description: 'Futuristic, high-speed e-commerce experiences engineered for maximum global conversions.',
    features: ['Custom Liquid Coding', 'App & Payment Logic', 'Conversion Rate Optimization', 'Automated Sales Funnels'],
    stack: 'Shopify, Liquid, Hydrogen + 8 more',
    category: 'Web Development'
  },
  {
    id: '05',
    title: 'Backend & Cloud',
    description: 'Robust server-side architecture built to handle massive traffic with zero downtime.',
    features: ['Serverless Architecture', 'Database Optimization', 'AWS / Docker / GCP', 'Microservices Design'],
    stack: 'PostgreSQL, MongoDB, AWS, Redis + 10 more',
    category: 'Web Development'
  },
  {
    id: '06',
    title: 'AI Integration',
    description: 'Custom ChatGPT-powered agents and vector databases tailored for your proprietary data.',
    features: ['Custom LLM Training', 'Knowledge Base Chatbots', 'AI Data Analytics', 'Semantic Search Tools'],
    stack: 'OpenAI, LangChain, Pinecone + 9 more',
    category: 'AI & Automation'
  },
  {
    id: '07',
    title: 'SEO & Performance',
    description: 'Technical SEO and speed audits to ensure your business stays on top of search results.',
    features: ['Core Web Vitals Fix', 'Advanced Keyword Strategy', 'Technical Site Audits', 'Authority Building'],
    stack: 'Ahrefs, Semrush, Lighthouse + 5 more',
    category: 'Marketing'
  },
  {
    id: '08',
    title: 'Meta Ads Scaling',
    description: 'Data-driven advertising strategies to maximize your brand\'s digital presence and ROI.',
    features: ['Creative Ad Strategy', 'Pixel / API Tracking', 'Precision Targeting', 'Performance Reports'],
    stack: 'Facebook, Instagram, TikTok Ads',
    category: 'Marketing'
  },
  {
    id: '09',
    title: 'WordPress & CMS',
    description: 'Sleek, professional, and easily manageable web presences for elite brands.',
    features: ['Custom Theme Dev', 'CMS Security & Speed', 'Responsive Design', 'Seamless Migrations'],
    stack: 'WordPress, PHP, Headless CMS',
    category: 'Web Development'
  }
];

const filterCategories = ['All', 'AI & Automation', 'Web Development', 'Marketing'];

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredServices = activeFilter === 'All' 
    ? servicesData 
    : servicesData.filter(service => service.category === activeFilter);

  const handleServiceClick = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white uppercase">
            OUR <span className="text-accent-purple">SERVICES</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mt-4">
            Innovative solutions designed to automate your growth and scale your digital presence with precision.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-10">
            {filterCategories.map(category => (
              <button 
                key={category} 
                onClick={() => {
                  setActiveFilter(category);
                  setActiveIndex(null); // Reset accordion on filter change
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 uppercase tracking-wide ${
                  activeFilter === category 
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                    : 'border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div 
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="border-b border-gray-800"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer py-8 group" 
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className={`text-xl md:text-2xl font-mono transition-colors duration-300 ${
                      activeIndex === service.id ? 'text-accent-purple' : 'text-gray-600 group-hover:text-gray-400'
                    }`}>
                      {service.id}
                    </span>
                    <h3 className={`text-3xl md:text-5xl font-bold transition-colors duration-300 ${
                      activeIndex === service.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <motion.div 
                    animate={{ rotate: activeIndex === service.id ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ml-4 flex-shrink-0"
                  >
                    <Plus size={36} className={`${
                      activeIndex === service.id ? 'text-accent-purple' : 'text-gray-600 group-hover:text-gray-300'
                    } transition-colors duration-300`} />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {activeIndex === service.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-2 pl-12 md:pl-20 pr-4 md:pr-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
                        
                        {/* Description & Stack */}
                        <div className="lg:col-span-7 space-y-8">
                          <p className="text-xl text-gray-300 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Stack Expertise</h4>
                            <div className="inline-block px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg">
                              <p className="text-accent-purple font-medium">{service.stack}</p>
                            </div>
                          </div>
                        </div>

                        {/* Features List */}
                        <div className="lg:col-span-5">
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Key Features</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-300">
                                <span className="text-accent-purple mt-1.5 text-xs">✦</span>
                                <span className="text-lg">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredServices.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500 text-xl">No services found for this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
