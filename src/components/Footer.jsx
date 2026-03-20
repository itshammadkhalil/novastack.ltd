import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Footer = () => {
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState(null);
  const handleInfoClick = (type) => {
    const content = {
      careers: "We are always looking for talented developers and automation enthusiasts. Currently, we are not hiring for full-time roles, but we welcome freelancers.Send your portfolio to Hello@novastackltd.com.",
      privacy: "At NovaStack, we value your privacy. We only collect information that you voluntarily provide via our contact form. We never sell your data to third parties.",
      terms: "By using our website, you agree to use our services for lawful purposes only. All custom code and designs provided by NovaStack are the intellectual property of the client upon final payment."
    };
    setModalContent(content[type]);
  };
  const handleNavClick = e => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const [path, id] = href.split('#');
    if (path === '/' || path === '') {
      // Handles both '/#section' and '#section'
      navigate('/');
      setTimeout(() => {
        if (id) {
          const targetElement = document.getElementById(id);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }, 100);
    };
  };
 
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#', type: 'scroll' },
        { name: 'Services', href: '#services', type: 'scroll' },
        { name: 'Portfolio', href: '#portfolio', type: 'scroll' },
        { name: 'About', href: '#about', type: 'scroll' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Contact Us', href: '#contact', type: 'scroll' },
        { name: 'Careers', type: 'modal', id: 'careers' },
        { name: 'Privacy Policy', type: 'modal', id: 'privacy' },
        { name: 'Terms of Service', type: 'modal', id: 'terms' }
      ]
    }
  ];
  const socialLinks = [
    {
      icon: <Mail size={20} />,
      name: 'Mail',
      url: 'mailto:Hello@novastackltd.com'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'Linkedin',
      url: 'https://linkedin.com/company/the-novastack'
    },
    {
      icon: <Instagram size={20} />,
      name: 'Instagram',
      url: 'https://instagram.com/novastack_ltd'
    }
  ];
  return <footer className="bg-[#0C0D0D] border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <p className="text-2xl font-bold text-white tracking-wider glow-effect">NovaStack</p>
                        <p className="text-gray-400">Creative solutions that drive results.</p>
                    </div>

                    {footerSections.map(section => <div key={section.title}>
                            <p className="font-semibold text-white mb-6">{section.title}</p>
                            <ul className="space-y-4">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <button
                              onClick={(e) => {
                                if (link.type === 'modal') {
                                  handleInfoClick(link.id);
                                } else if (link.type === 'scroll') {
                              
                                  e.preventDefault();
                                  const element = document.getElementById('contact');
                                  if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                  }
                                  navigate('/contact');
                                } else {
                                  
                                  handleNavClick(e);
                                }
                              }}
                              className="text-gray-400 hover:text-accent-purple transition-colors duration-300 text-left w-full"
                            >
                              {link.name}
                            </button>
                          </li>
                        ))}
                            </ul>
                        </div>)}

                     <div>
                        <p className="font-semibold text-white mb-6">Connect With Us</p>
                        <div className="flex space-x-4">
            {socialLinks.map(social => (<a
              key={social.name}
              href={social.url}
              target={social.name === 'Mail' ? '_self' : '_blank'}
              rel="noreferrer"
              className="text-gray-400 hover:text-accent-purple transition-colors duration-300"
            >
              {social.icon}
            </a>
            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} NovaStack. All Rights Reserved.</p>
                </div>
    </div>
    {modalContent && (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm">
        <div className="bg-[#0A0A0A] border border-purple-500/40 p-8 rounded-2xl max-w-md w-full relative">
          <button
            onClick={() => setModalContent(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
          </button>
          <div className="text-gray-200 leading-relaxed">
            {modalContent}
          </div>
          <button
            onClick={() => setModalContent(null)}
            className="mt-6 w-full py-2 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 rounded-lg text-sm transition-all text-white"
          >
            Got it
          </button>
        </div>
      </div>
    )}
        </footer>;
};
export default Footer;