'use client';
import SectionContainer from './SectionContainer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <SectionContainer id="about" className="bg-amber-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              I'm a <span className="font-semibold text-amber-700">Data Analytics and Engineering Apprentice</span> at <span className="font-semibold text-rose-600">Fidelity Business Services India</span>. I use SQL, Python, Snowflake, and Tableau to build dependable data solutions that turn complex information into meaningful insights.
            </p>
            
            <p>
              My work spans data governance, automation, and analytics—from identifying PII and storage inefficiencies to improving dashboard visibility for data stewardship teams. I enjoy creating scalable, high-quality solutions that support confident, data-driven decisions.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">What drives me:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Building reliable, governed data solutions',
                  'Automating data-quality and audit workflows',
                  'Transforming metadata into actionable insights',
                  'Exploring modern analytics engineering tools'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-amber-600 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <p className="pt-4">
              Outside of work, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the data and developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
