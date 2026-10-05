import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { IMAGES } from '@/data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="CNG cylinders in an industrial testing facility"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/60" />
      </div>

      {/* Red accent line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-40 bg-brand-red z-10 hidden sm:block" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-brand-red text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              Mangalore Hydro Testing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance"
          >
            ADVANCED CNG CYLINDER SYSTEMS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-brand-red text-lg sm:text-2xl font-semibold mt-4 leading-snug"
          >
            Comprehensive Testing, Cleaning & Safety Services
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed max-w-xl"
          >
            Professional CNG cylinder hydro testing, inspection, cleaning,
            maintenance and certification services in Mangaluru, Karnataka —
            delivered by experienced technicians with modern equipment and a
            strong commitment to safety and regulatory compliance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-8 py-3.5 rounded-md uppercase tracking-wide text-sm hover:bg-brand-red-deep transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a Service
              <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-3.5 rounded-md uppercase tracking-wide text-sm hover:bg-white hover:text-brand-black transition-all duration-200"
            >
              Discover More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-3 mt-10 pt-6 border-t border-white/15 max-w-md"
          >
            <ShieldCheck className="text-brand-red shrink-0" size={28} />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">
              10+ Years of Industry Excellence
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-black to-transparent z-10" />
    </section>
  );
}
