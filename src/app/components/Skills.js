'use client';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiTool, FiCpu, FiDatabase, FiServer } from 'react-icons/fi';
import SectionContainer from './SectionContainer';

const SkillItem = ({ name, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: 0.05 * index }}
      className="group flex items-center gap-2"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
      <span className="text-slate-700 group-hover:text-amber-700 transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

const SkillsSection = ({ category, icon: Icon, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.4 }}
    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 text-amber-600">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-bold text-slate-800">{category}</h3>
    </div>
    <div className="grid grid-cols-1 gap-3">
      {skills.map((skill, index) => (
        <SkillItem 
          key={skill.name}
          name={skill.name}
          index={index}
        />
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: FiCode,
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "C/C++" },
        { name: "JavaScript/TypeScript" },
        { name: "SQL" }
      ]
    },
    {
      category: "Frontend",
      icon: FiLayers,
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
      
        
        { name: "HTML5/CSS3" }
      ]
    },
    {
      category: "Backend",
      icon: FiServer,
      skills: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "RESTful APIs" },
       
        { name: "Django" }
      ]
    },
    {
      category: "AI/ML",
      icon: FiCpu,
      skills: [
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "Scikit-learn" },
        
        { name: "Pandas" },
      { name: "NumPy" }
      ]
    },
    {
      category: "Database",
      icon: FiDatabase,
      skills: [
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "MySQL" }
        
      ]
    },
    {
      category: "DevOps & Tools",
      icon: FiTool,
      skills: [
        { name: "Git & GitHub" },
        
  
        { name: "Linux" }
      ]
    }
  ];

  return (
    <SectionContainer id="skills" className="bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent"
          >
            My Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical expertise across various domains of software development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillsSection
              key={category.category}
              category={category.category}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
