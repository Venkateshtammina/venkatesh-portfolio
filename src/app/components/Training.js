'use client';
import { motion } from 'framer-motion';
import { FiCpu, FiCheckCircle } from 'react-icons/fi';
import SectionContainer from './SectionContainer';

export default function Training() {
  return (
    <SectionContainer id="training" className="bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent">Training</h2>
          <p className="text-lg text-slate-600">Hands-on learning that complements my data and engineering work.</p>
        </div>
        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-amber-50 border border-amber-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-5">
            <div className="flex gap-4"><div className="shrink-0 h-fit p-3 rounded-xl bg-white text-amber-600"><FiCpu className="w-6 h-6" /></div><div><h3 className="text-xl font-bold text-slate-800">IoT Intern</h3><p className="text-amber-700 font-medium">Cranes Varsity · Bengaluru, Karnataka</p></div></div>
            <span className="w-fit h-fit rounded-full bg-white border border-amber-100 px-4 py-2 text-sm font-medium text-amber-700">Oct 2023 – Nov 2023</span>
          </div>
          <ul className="space-y-3 text-slate-600">
            <li className="flex gap-3"><FiCheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />Built a real-time ESP32 project with sensor integration using Python and MicroPython.</li>
            <li className="flex gap-3"><FiCheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />Implemented MQTT for device-cloud-user communication.</li>
          </ul>
        </motion.article>
      </div>
    </SectionContainer>
  );
}
