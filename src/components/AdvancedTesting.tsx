import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { IMAGES } from '@/data';

const POINTS = [
  'Modern high-pressure testing equipment',
  'Advanced cleaning techniques',
  'Dust, rust and impurity removal',
  'Improved safety and performance',
  'Longer cylinder service life',
];

export default function AdvancedTesting() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-8xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={IMAGES.advancedTesting}
                alt="Technician holding a pressure gauge during CNG cylinder testing"
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute top-0 right-0 w-1.5 h-16 bg-brand-red" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold tracking-[0.18em] uppercase">
                Advanced Testing
              </span>
            </div>
            <div className="h-0.5 w-16 bg-brand-red mb-6" />

            <h2 className="text-brand-black text-2xl sm:text-4xl font-bold leading-tight mb-6 text-balance">
              Precision Testing. Reliable Protection.
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Our testing facility uses modern high-pressure testing equipment
              and advanced cleaning techniques to thoroughly assess and maintain
              every CNG cylinder. We remove dust, rust and impurities that can
              affect performance, helping ensure improved safety, better
              performance and a longer service life for your CNG cylinders.
            </p>

            <ul className="space-y-3">
              {POINTS.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-brand-red shrink-0" size={20} />
                  <span className="text-brand-black text-base font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
