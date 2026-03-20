import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const projects = [{
  id: 1,
  slug: 'lahori-vip-burger',
  title: 'Lahori VIP Burger',
  description: 'A high-conversion digital storefront for Multan’s premium burger chain, featuring online ordering and real-time menu updates.',
  imgKey: "lahori-vip-main"
}, {
  id: 2,
  slug: 'Personal-Branding',
  title: 'Hammad Khalil',
  description: 'A modern, super-fast, and fully responsive personal portfolio website built with React and Tailwind CSS.',
  imgKey: "hammadkhalil-portfolio"
}, {
  id: 3,
  slug: 'digital-marketing-agency-site',
  title: 'Digital Marketing Agency Site',
  description: 'A digital marketing agency website homepage, shown on a smartphone with a sleek, modern design.',
  imgKey: "digital marketing agency website on phone"
}];
const Portfolio = () => {
  const navigate = useNavigate();
  const handleProjectClick = slug => {
    navigate(`/project/${slug}`);
  };
  return <section id="portfolio" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm mb-4 uppercase">
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase">
              Explore our portfolio of <span className="text-accent-purple">creative solutions</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/3">
            <p className="text-lg text-gray-400">
              We don’t just build websites; we create digital assets. From high-conversion e-commerce platforms to automated personal brands, our work is designed to scale your business and impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleProjectClick('social-media-app')}>
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="A sleek MacBook Pro resting on a wooden desk, displaying the dark-themed Lahori VIP Burger website homepage. The screen shows a large appetizing burger with bold yellow text saying 'HUNGRY? WE GOT YOU!'. A coffee mug is partially visible in the warmly lit background." src="/Resturantwebapp.webp" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Resturant Web App</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleProjectClick('fintech-dashboard')}>
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Dark theme portfolio website of Hammad Khalil shown on a MacBook Pro screen" src="/personalbranding.webp" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Personal Branding</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleProjectClick('digital-marketing-agency-site')}>
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Modern MacBook Pro mockup displaying Usman Wajid's professional web developer portfolio website with a dark theme and minimalist UI design." src="/usmanwajid.webp" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                <h3 className="text-xl font-bold text-white mb-1">Portfolio Architecture</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Portfolio;