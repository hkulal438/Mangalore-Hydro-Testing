import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { IMAGES } from '@/data';

const POINTS = [
  'Compliance with RTO regulations',
  'Adherence to industry safety standards',
  'Professional CNG tank and cylinder testing',
  'Thorough cleaning and servicing',
  'Reliable, documented certification',
  'Peace of mind for every vehicle owner',
];

export default function SafetyCompliance() {
  return (
    <section className="bg-brand-black py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img
          src={IMAGES.safety}
          alt="Safety equipment including gloves and helmet for industrial CNG testing"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70" />

      {/* Animated red technical lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-12 left-0 w-32 h-0.5 bg-brand-red origin-left hidden sm:block"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="absolute bottom-12 right-0 w-32 h-0.5 bg-brand-red origin-right hidden sm:block"
      />

      <div className="relative z-10 max-w-8xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 border-2 border-brand-red rounded-md flex items-center justify-center shrink-0">
                <ShieldCheck className="text-brand-red" size={34} />
              </div>
              <span className="text-brand-red text-xs font-semibold tracking-[0.18em] uppercase">
                Safety & Compliance
              </span>
            </div>
            <h2 className="text-white text-3xl sm:text-5xl font-bold leading-[1.1] mb-6 text-balance">
              SAFETY. COMPLIANCE. RELIABILITY.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              At Mangalore Hydro Testing, safety is at the core of everything we
              do. We follow RTO regulations and industry safety standards across
              every CNG tank testing, cylinder testing, cleaning, servicing and
              certification procedure. Our commitment to compliance and
              reliability gives our customers peace of mind — knowing their CNG
              cylinders have been professionally tested and certified to perform
              safely on the road.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {POINTS.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 bg-brand-gray-dark/80 border border-white/10 rounded-lg p-4 hover:border-brand-red transition-colors"
              >
                <CheckCircle className="text-brand-red shrink-0" size={20} />
                <span className="text-white text-sm font-medium leading-snug">
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
