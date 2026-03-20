import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const ContactInfoBlock = ({ title, lines, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5, delay }} 
    className="mb-8"
  >
    <h3 className="uppercase text-sm text-gray-400 mb-2 tracking-widest">{title}</h3>
    <div className="space-y-1">
      {lines.map((line, index) => <p key={index} className="text-lg text-gray-200">{line}</p>)}
    </div>
  </motion.div>
);

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    const form = e.target;
    const data = new FormData(form);
    

    const response = await fetch("https://formspree.io/f/xkoqpaga", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <Helmet>
        <title>Connect With Us - Innovative Solutions</title>
        <meta name="description" content="Reach out to our team for innovative solutions and project inquiries." />
      </Helmet>
      
      <section className="bg-[#0C0D0D] text-white py-32 sm:py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white uppercase mb-6 leading-tight">
                Connect <span className="text-accent-purple">with us</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-sm mb-16">
                Let's build something extraordinary together!
              </p>
              <div className="flex items-center gap-8">
                       <a 
                           href="https://linkedin.com/company/the-novastack" 
                          target="_blank" 
                        rel="noopener noreferrer" 
                     className="text-lg text-gray-300 hover:text-accent-purple transition-colors duration-300"
                       >
                       LinkedIn
                    </a>
                  <a 
                   href="https://instagram.com/novastack_ltd" 
                   target="_blank" 
                        rel="noopener noreferrer" 
                    className="text-lg text-gray-300 hover:text-accent-purple transition-colors duration-300"
                       >
                      Instagram
              </a>
            </div>
            </motion.div>

            {/* Right Column */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <ContactInfoBlock title="Project Inquiries" lines={["hello@novastackltd.com", "+923393887766"]} delay={0.4} />
                  <ContactInfoBlock title="Partnerships" lines={["project@novastackltd.com", "+923400887766"]} delay={0.6} />
                </div>
                <div>
                  <ContactInfoBlock title="LOCATION" lines={["Everywhere Digital", "High-speed collaboration, no borders."]} delay={0.5} />
                </div>
              </div>
          
              <motion.div 
                className="bg-[#1E1E2A] p-8 rounded-3xl border border-white/10 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {status === "SUCCESS" ? (
                  <div className="text-center py-12 px-4">
                    <div className="bg-accent-purple/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Received</h3>
                    <p className="text-gray-400">Your message has been received. Our team will contact you shortly. Thanks!</p>
                    <button onClick={() => setStatus("")} className="mt-8 text-accent-purple hover:underline font-medium">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                        <input name="name" type="text" required placeholder="Hammad Khalil" className="w-full bg-[#0C0D0D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                        <input name="email" type="email" required placeholder="hello@novastackltd.com" className="w-full bg-[#0C0D0D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Interested In</label>
                      <div className="relative">
                        <select name="service" required className="w-full bg-[#0C0D0D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 transition-all appearance-none cursor-pointer" defaultValue="">
                          <option value="" disabled>Select a Service</option>
                          <option value="ai-calling">AI Calling Agents</option>
                          <option value="web-apps">Custom Web Apps</option>
                          <option value="n8n">AI Automation (n8n)</option>
                          <option value="shopify">Shopify Stores</option>
                          <option value="backend">Backend & Cloud</option>
                          <option value="ai-integration">AI Integration</option>
                          <option value="seo">SEO & Performance</option>
                          <option value="meta-ads">Meta Ads Scaling</option>
                          <option value="wordpress">WordPress & CMS</option>
                          <option value="other">Other Query</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                      <textarea name="message" required rows="4" placeholder="Tell us about your goals..." className="w-full bg-[#0C0D0D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" disabled={status === "SENDING"} className="w-full bg-accent-purple hover:bg-accent-purple/90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-accent-purple/20 disabled:opacity-50">
                      {status === "SENDING" ? "Sending..." : "Send Message"}
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </button>
                      {status === "ERROR" && <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>}
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;