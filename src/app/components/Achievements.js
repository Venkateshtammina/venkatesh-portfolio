'use client';
import { motion } from 'framer-motion';
import { FiDatabase, FiUsers, FiAward } from 'react-icons/fi';
import SectionContainer from './SectionContainer';

const achievements = [
  { value: '20K+', label: 'Snowflake tables scanned for data governance', icon: FiDatabase },
  { value: '4', label: 'Data Steward squads supported with dashboard visibility', icon: FiUsers },
  { value: '8.8', label: 'CGPA in B.E. Artificial Intelligence & Machine Learning', icon: FiAward },
];

export default function Achievements() {
  return (
    <SectionContainer id="achievements" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12"><h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent">Highlights</h2><p className="text-lg text-slate-600">A few outcomes that reflect my work and learning journey.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map(({ value, label, icon: Icon }, index) => <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-2xl border border-amber-100 bg-amber-50 p-6 text-center shadow-sm"><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-amber-600"><Icon className="w-6 h-6" /></div><p className="text-3xl font-bold text-slate-800">{value}</p><p className="mt-2 text-sm leading-relaxed text-slate-600">{label}</p></motion.div>)}
        </div>
      </div>
    </SectionContainer>
  );
}
