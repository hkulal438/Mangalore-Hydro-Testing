import { motion } from 'framer-motion';
import { Target, Award, ThumbsUp, Wrench } from 'lucide-react';
import { IMAGES } from '@/data';

const POINTS = [
  {
    icon: Target,
    title: 'Precision',
    desc: 'Accurate testing procedures that identify even minor issues before they become safety risks.',
  },
  {
    icon: Award,
    title: 'Professionalism',
    desc: 'Every service is carried out with attention to detail and adherence to industry standards.',
  },
  {
    icon: Wrench,
    title: 'Reliable Maintenance',
    desc: 'Thorough maintenance and servicing that keeps CNG cylinders performing safely over time.',
  },
  {
    icon: ThumbsUp,
    title: 'Long-lasting Performance',
    desc: 'Quality workmanship that contributes to extended cylinder service life and reliable operation.',
  },
];

export default function CertifiedTechnicians() {
  return (
    <section className="bg-brand-gray-light py-20 sm:py-28">
      <div className="max-w-8xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={IMAGES.certifiedTechnicians}
                alt="Certified technician inspecting industrial equipment in safety gear"
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -left-2 sm:left-6 bg-brand-red text-white px-5 py-4 rounded-lg shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-wide">
                Skilled Professionals
              </div>
              <div className="text-xl font-bold mt-1">Quality Assurance</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold tracking-[0.18em] uppercase">
                Our Team
              </span>
            </div>
            <h2 className="text-brand-black text-2xl sm:text-4xl font-bold leading-tight mb-6 text-balance">
              Certified Technicians
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
              Our certified technicians bring precision and professionalism to
              every job. With experience in accurate testing, reliable
              maintenance and quality assurance, they ensure that every CNG
              cylinder entrusted to us is serviced to the highest standard —
              delivering long-lasting performance and dependable safety.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {POINTS.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-brand-red transition-colors"
                >
                  <point.icon className="text-brand-red mb-3" size={24} />
                  <h3 className="text-brand-black font-bold text-base mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
