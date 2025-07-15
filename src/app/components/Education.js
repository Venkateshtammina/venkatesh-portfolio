'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './SectionContainer';
import { FiBookOpen, FiAward, FiBook } from 'react-icons/fi';

const educationHistory = [
  {
    id: 1,
    institution: 'KS Institute of Technology',
    degree: 'B.E. in Artificial Intelligence & Machine Learning',
    year: '2021 - 2025',
    detail: 'CGPA: 8.8',
    icon: FiBookOpen,
    achievements: [
      'Specialized in AI/ML with hands-on projects',
      'Coursework in Deep Learning, NLP, and Computer Vision',
      'Active participant in tech workshops and hackathons'
    ]
  },
  {
    id: 2,
    institution: 'YJR PU College',
    degree: 'Pre-University (PCMB)',
    year: '2019 - 2021',
    detail: 'Percentage: 97.5%',
    icon: FiBook,
    achievements: [
      'Excelled in Physics, Chemistry, Mathematics, and Biology',
      'Developed strong analytical and problem-solving skills',
      'Participated in science exhibitions and competitions'
    ]
  },
  {
    id: 3,
    institution: 'Tejarsha High School',
    degree: 'Secondary School (SSLC)',
    year: '2018 - 2019',
    detail: 'Percentage: 91.6%',
    icon: FiAward,
    achievements: [
      'Consistent academic excellence',
      'Active in extracurricular activities',
      'Developed strong foundation in core subjects'
    ]
  },
];

const EducationCard = ({ education, index }) => {
  const Icon = education.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row gap-6 group">
        {/* Icon and Line */}
        <div className="hidden md:flex flex-col items-center relative">
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-amber-200 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
          />
          <motion.div 
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-amber-600 border-2 border-amber-100 z-10 group-hover:border-amber-200 transition-colors duration-300 shadow-sm"
            whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(249, 115, 22, 0.2)' }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        </div>
        
        {/* Content */}
        <motion.div 
          className="flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 relative overflow-hidden"
          whileHover={{ y: -3 }}
        >
          {/* Decorative accent */}
          <motion.div 
            className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 to-rose-500"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div className="md:pl-4">
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                {education.institution}
              </h3>
              <p className="text-amber-700 font-medium mt-1">{education.degree}</p>
              <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full my-3"></div>
              <p className="text-slate-600 text-sm bg-amber-50 px-3 py-1.5 rounded-lg inline-block border border-amber-100">
                {education.detail}
              </p>
            </div>
            <motion.div 
              className="text-sm font-medium text-amber-700 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 self-start md:self-center"
              whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(249, 115, 22, 0.15)' }}
            >
              {education.year}
            </motion.div>
          </div>
          
          <div className="mt-5 pt-4 border-t border-slate-100">
            <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
              <motion.span 
                className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-amber-600 border border-amber-100"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <FiAward className="w-3 h-3" />
              </motion.span>
              <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                Key Highlights
              </span>
            </h4>
            <ul className="space-y-3">
              {education.achievements.map((achievement, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-3 group/achievement"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  <motion.span 
                    className="text-amber-500 mt-0.5 flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.span>
                  <span className="text-slate-600 text-sm leading-relaxed group-hover/achievement:text-slate-800 transition-colors">
                    {achievement}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Education() {
  return (
    <SectionContainer id="education" className="bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My academic journey and key qualifications that have shaped my career path.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Mobile timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200 to-transparent md:hidden"></div>
          
          <div className="space-y-8 md:space-y-10">
            {educationHistory.map((education, index) => (
              <EducationCard 
                key={education.id} 
                education={education} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}