'use client';
import { motion } from 'framer-motion';
import SectionContainer from './SectionContainer';
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiMapPin } from 'react-icons/fi';

const contactInfo = [
  {
    id: 1,
    title: 'Email Me',
    
    icon: FiMail,
    content: 'venkatesht1243@gmail.com',
    href: 'mailto:venkatesht1243@gmail.com',
    color: 'bg-rose-100 text-rose-600',
    hover: 'hover:bg-rose-50',
  },
  {
    id: 2,
    title: 'Call Me',
    description: '',
    icon: FiPhone,
    content: '+91 8722014746',
    href: 'tel:+918722014746',
    color: 'bg-amber-100 text-amber-600',
    hover: 'hover:bg-amber-50',
  },
  {
    id: 3,
    title: 'Location',
    description: 'Based in',
    icon: FiMapPin,
    content: 'Bangalore, India',
    color: 'bg-blue-100 text-blue-600',
    hover: 'hover:bg-blue-50',
  },
];

const socialLinks = [
  {
    id: 1,
    name: 'GitHub',
    href: 'https://github.com/Venkateshtammina',
    icon: FiGithub,
    color: 'hover:bg-slate-100',
  },
  {
    id: 2,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/venkatesh-t-310a93297',
    icon: FiLinkedin,
    color: 'hover:bg-blue-50',
  },
  {
    id: 3,
    name: 'Email',
    href: 'mailto:venkatesht1243@gmail.com',
    icon: FiMail,
    color: 'hover:bg-rose-50',
  },
];

const ContactCard = ({ item, index }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className={`p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 ${item.hover || ''}`}
    >
      <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-1">{item.title}</h3>
      <p className="text-sm text-slate-500 mb-3">{item.description}</p>
      {item.href ? (
        <a 
          href={item.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-700 font-medium hover:text-rose-600 transition-colors inline-flex items-center gap-1 group"
        >
          {item.content}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      ) : (
        <p className="text-slate-700 font-medium">{item.content}</p>
      )}
    </motion.div>
  );
};

export default function Contact() {
  return (
    <SectionContainer id="contact" className="bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <ContactCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Connect with me</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-slate-700 ${link.color} hover:text-rose-600 transition-all duration-300`}
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
