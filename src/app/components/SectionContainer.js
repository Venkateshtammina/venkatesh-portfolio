'use client';
import { useInView } from 'react-intersection-observer';

export default function SectionContainer({ children, id, maxWidth = 'max-w-4xl' }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} ref={ref} className="relative py-16 md:py-20 px-4 sm:px-6 bg-amber-50">
      <div className={`relative z-10 ${maxWidth} mx-auto transition-all duration-1000 p-6 md:p-8
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {typeof children === 'function' ? children(inView) : children}
      </div>
    </section>
  );
}
