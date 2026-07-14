'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && <motion.button initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed right-5 bottom-5 z-40 p-3 rounded-full text-white bg-gradient-to-r from-amber-600 to-rose-600 shadow-lg hover:shadow-xl" aria-label="Back to top"><FiArrowUp className="w-5 h-5" /></motion.button>}
    </AnimatePresence>
  );
}
