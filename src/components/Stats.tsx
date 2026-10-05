import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: 10, suffix: '+', label: 'Years of Trusted Experience' },
  { value: 20, suffix: '+', label: 'Certified Expert Technicians' },
  { value: 35000, suffix: '+', label: 'Happy & Satisfied Customers' },
  { value: 55000, suffix: '+', label: 'Successfully Completed CNG Services' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-brand-black-2 py-16 sm:py-20 border-y border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      <div className="max-w-8xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-brand-red text-3xl sm:text-5xl lg:text-6xl font-bold leading-none mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-300 text-xs sm:text-sm font-medium leading-snug px-2">
                {stat.label}
              </div>
              {i < STATS.length - 1 && (
                <div className="hidden lg:block absolute" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
