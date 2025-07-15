'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['AI & ML Engineer', 'Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-24 px-4 sm:px-6 bg-amber-50">
      <div className="max-w-7xl w-full mx-auto">
        <div className={`relative w-full max-w-4xl mx-auto
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`transition-all duration-1000 delay-300 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              Open to new opportunities
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">Venkatesh T</span>
            </h1>

            <div className="h-16 mb-8 overflow-hidden">
              <motion.p 
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-3xl font-semibold text-amber-700"
              >
                {roles[currentRole]}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-700 mb-10 max-w-2xl leading-relaxed"
            >
              I build intelligent and beautiful web applications that solve real-world problems. Currently exploring the frontiers of AI and Machine Learning.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-rose-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-100 flex items-center gap-2"
              >
                Get In Touch
                <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 text-base font-medium text-amber-700 bg-white border border-amber-200 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-50 flex items-center gap-2"
              >
                View My Work
              </motion.a>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full mt-12"
            >
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-medium text-slate-600 mb-6">Let's Connect</h3>
                <div className="flex items-center justify-center gap-8">
                  <a
                    href="https://github.com/Venkateshtammina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-amber-50"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-7 h-7 text-slate-700 group-hover:text-amber-600 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/venkatesh-t-310a93297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-amber-50"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="w-7 h-7 text-slate-700 group-hover:text-amber-600 transition-colors" />
                  </a>
                  <a
                    href="mailto:venkatesht1243@gmail.com"
                    className="group p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-amber-50"
                    aria-label="Email"
                  >
                    <FiMail className="w-7 h-7 text-slate-700 group-hover:text-amber-600 transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}