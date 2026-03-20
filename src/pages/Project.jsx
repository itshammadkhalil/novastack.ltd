import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Stats from '@/components/Stats';
import SectionAnimator from '@/components/SectionAnimator';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Mock data for projects
const projectData = {
  'social-media-app': {
    title: 'Lahori VIP Burger - Online Ordering System',
    category: 'Web Development & E-Commerce',
    description: 'A fast and modern food ordering website for a local restaurant. Customers can easily view the menu, add items to a cart, and order from their phones.',
    challenge: 'The business has two active branches. Taking manual WhatsApp orders for both locations created confusion. Mixing up orders and customer addresses was a big problem during rush hours.',
    solution: 'We built a custom web app with a smart "Branch Selector" feature. Customers choose their location first. The app builds the cart, calculates the total, and routes the order directly to the correct branch WhatsApp.',
    images: {
      hero: {
        alt: 'Lahori VIP Burger Main View',
        src: 'https://i.postimg.cc/02KDP3H3/863shots-so.png'
      },
      gallery: [
        {
          alt: 'Branch Selection',
          src: 'https://i.postimg.cc/63jt3BQr/485shots-so.png'
        },
        {
          alt: 'Mobile view Menu',
          src: 'https://i.postimg.cc/QCJCS2Nh/494shots-so.png'
        }
      ],
    },
    stats: [{
      value: 80,
      suffix: '%',
      label: 'Faster Ordering',
      description: 'Automated WhatsApp routing saves time. No more manual chats.'
    }, {
      value: 2,
      suffix: '',
      label: 'Active Branches',
      description: 'Smart location selector routes orders to the right shop.'
    }, {
      value: 0,
      suffix: '%',
      label: 'Commission Fees',
      description: 'Direct-to-customer model saves money. No middleman app costs.'
    }, {
      value:  1,
      suffix: 's Under',
      label: 'Fast Load Time',
      description: 'Blazing fast performance using Vite and React.'
    }]
  },
  'fintech-dashboard': {
    title: 'Hammad Khalil - Founder Portfolio',
    category: 'Web Development & Branding',
    description: 'A premium, high-performance personal brand platform built for a Web Developer & Automation Specialist.',
    challenge: 'The challenge was to create a digital presence that feels futuristic and fast. It needed to showcase complex projects while maintaining a clean, minimalist aesthetic that works perfectly on all devices.',
    solution: 'Built with React and Tailwind CSS, featuring glassmorphism UI and smooth animations. We optimized every asset for speed and integrated a custom contact flow to convert visitors into clients.',
    images: {
      hero: {
        alt: 'Hammad Khalil Portfolio Main View',
        src: 'https://i.postimg.cc/9M1tw7Gv/571shots-so.png'
      },
      gallery: [
        {
          alt: 'About Portfolio Showcase',
          src: 'https://i.postimg.cc/sDfHm5wV/171shots-so.png' 
        },
        {
          alt: 'Responsive Design View',
          src: 'https://i.postimg.cc/rmCqL5BP/402shots-so.png' 
        }
      ],
    },
    stats: [{
      value: 99,
      suffix: '%',
      label: 'Performance Score',
      description: 'Lightning-fast page load speeds and smooth animations.'
    }, {
      value: 100,
      suffix: '%',
      label: 'Mobile Responsive',
      description: 'Flawless layout and perfect experience on any screen size.'
    }, {
      value: 99.9,
      suffix: '%',
      label: 'Uptime',
      description: 'Securely hosted for 24/7 reliable access for potential clients.'
    }, {
      value: 0,
      suffix: 's',
      label: 'Page Reloads',
      description: 'Built as a Single Page App (SPA) for seamless and fast browsing.'
    }]
  },
  'digital-marketing-agency-site': {
    title: 'Usman Wajid - Portfolio Architecture',
    category: 'Web Systems & Optimization',
    description: 'A high-performance personal brand platform designed for a Full-Stack Engineer and Co-Founder.',
    challenge: 'The goal was to build a minimalist site that handles high-resolution mockups without slowing down on mobile. We also had to fix backend issues like plugin conflicts and security warnings to make the site 100% professional and secure.',
    solution: 'We optimized the layout for all screen sizes and converted images to WebP format for fast loading. We also set up SSL/HTTPS for security and fixed the caching system to ensure the site runs smoothly 24/7.',
    images: {
      hero: {
        alt: 'Usman Wajid Portfolio Main View',
        src: 'https://i.postimg.cc/3R6Nqr7N/782shots-so.png'
      },
      gallery: [
        {
          alt: 'Skill Set Section',
          src: 'https://i.postimg.cc/Gm2NLvyV/254shots-so.png' 
        },
        {
          alt: 'Backend & Performance Optimization mobile view',
          src: 'https://i.postimg.cc/TPN451nt/496shots-so.png' 
        }
      ],
    },
    stats: [{
      value: 85,
      suffix: '%',
      label: 'Asset Compression',
      description: 'Reduced page weight significantly by converting all project mockups to WebP format.'
    }, {
      value: 100,
      suffix: '%',
      label: 'Mobile Responsiveness',
      description: 'Eliminated horizontal scrolling by manually adjusting viewport widths to 100%.'
    }, {
      value: 2,
      suffix: 's Under',
      label: 'Load Time',
      description: 'Achieved sub-2-second loading speed by resolving LiteSpeed and SpeedyCache conflicts.'
    }, {
      value: 1,
      suffix: '+ Grade',
      label: 'Security Rating',
      description: 'Secured the platform with SSL/TLS encryption, removing all "Not Secure" browser warnings.'
    }]
  }
};
const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8
};
const Project = () => {
  const {
    projectId
  } = useParams();
  const project = projectData[projectId] || projectData['fintech-dashboard']; // Fallback

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="bg-[#0C0D0D] text-white">
      <Helmet>
        <title>{project.title} - Project Showcase</title>
        <meta name="description" content={`Details of the ${project.title} project, showcasing our creative solutions and results.`} />
      </Helmet>

      <main>
        {/* Top Section */}
        <SectionAnimator>
          <header className="pt-48 pb-16"> {/* Increased padding-top */}
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">{project.title}</h1>
              <p className="text-lg md:text-xl text-gray-400">{project.description}</p>
            </div>
          </header>
        </SectionAnimator>
        
        {/* Hero Image */}
        <SectionAnimator>
            <div className="container mx-auto px-6 mb-16">
                 <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-accent-purple/10">
            <img className="w-full h-full object-cover" alt={project.images.hero.alt} src={project.images.hero.src || project.images.hero.key}/>
                 </div>
            </div>
        </SectionAnimator>

        {/* Gallery - now starts with two images */}
        <SectionAnimator>
            <div className="container mx-auto px-6 mb-16">
                <div className="grid grid-cols-1 gap-8">
                    {/* Two images */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="aspect-square rounded-2xl overflow-hidden">
                           <img className="w-full h-full object-cover" alt={project.images.gallery[0].alt} src={project.images.gallery[0].src || project.images.gallery[0].key} />
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden">
                            <img className="w-full h-full object-cover" alt={project.images.gallery[1].alt} src={project.images.gallery[1].src || project.images.gallery[1].key} />
                        </div>
                    </div>
                </div>
            </div>
        </SectionAnimator>
        
        {/* Text Section */}
        <SectionAnimator>
            <section className="py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
                        <p className="text-lg text-gray-400">{project.challenge}</p>
                    </div>
                     <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Solution</h2>
                        <p className="text-lg text-gray-400">{project.solution}</p>
                    </div>
                </div>
            </section>
        </SectionAnimator>

        {/* Stats Section */}
        <Stats customStats={project.stats} />

        {/* Work Together CTA */}
        <SectionAnimator>
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
                    <p className="text-lg text-gray-400 mb-8">Let's discuss your next big idea and how we can bring it to life.</p>
                     <Button asChild size="lg" className="bg-accent-purple text-white hover:bg-accent-purple/90 group rounded-full text-lg py-7 px-10">
                        <Link to="/contact">
                            Let's Talk <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </section>
        </SectionAnimator>

      </main>
    </motion.div>;
};
export default Project;