'use client';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import SectionContainer from './SectionContainer';

const experience = [
  {
    company: 'Fidelity Business Services India (FBSI)',
    role: 'Data Analytics and Engineering Apprentice',
    location: 'Bengaluru, Karnataka',
    period: 'September 2025 – Present',
    projects: [
      {
        title: 'Audit Work on Workspace Database',
        technologies: 'Snowflake SQL, Snowflake Scripting, Python, RegEx, Data Governance',
        highlights: [
          'Built Python scripts with Snowflake connectivity to scan 20,000+ tables for columns containing personally identifiable information and tables created by users with PII access.',
          'Identified tables unused for over 60 days and tables above 10 GB, then automated alerts to owners for deletion or cleanup.',
          'Automated naming-convention validation by checking employee corporate ID prefixes against enterprise standards.'
        ]
      },
      {
        title: 'Data Currency Dashboard Integration',
        technologies: 'Snowflake SQL, Python, Data Lineage, Tableau, Git/GitHub, Jenkins, Control-M',
        highlights: [
          'Expanded a data-currency dashboard used by four Data Steward squads to monitor view-refresh performance and expected data freshness.',
          'Integrated automated metadata logging into Snowflake tracking tables, dynamically feeding Tableau visual metrics and providing end-to-end visibility to stakeholders.'
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <SectionContainer id="experience" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent">Experience</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">Delivering data governance, automation, and analytics solutions at Fidelity.</p>
        </div>
        {experience.map((job) => (
          <motion.article key={job.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-100 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div className="flex gap-4">
                <div className="shrink-0 p-3 h-fit rounded-xl bg-white text-amber-600"><FiBriefcase className="w-6 h-6" /></div>
                <div><h3 className="text-2xl font-bold text-slate-800">{job.role}</h3><p className="text-amber-700 font-semibold mt-1">{job.company}</p><p className="text-slate-600 text-sm mt-1">{job.location}</p></div>
              </div>
              <span className="w-fit rounded-full bg-white border border-amber-100 px-4 py-2 text-sm font-medium text-amber-700">{job.period}</span>
            </div>
            <div className="space-y-6">
              {job.projects.map((project) => (
                <div key={project.title} className="bg-white rounded-xl p-5 border border-slate-100">
                  <h4 className="font-bold text-slate-800 text-lg">{project.title}</h4>
                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-slate-600 leading-relaxed"><FiCheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />{highlight}</li>)}
                  </ul>
                  <p className="mt-4 text-sm text-amber-700 font-medium">Technologies: {project.technologies}</p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionContainer>
  );
}
