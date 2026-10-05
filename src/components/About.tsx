import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/data';

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="max-w-8xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={IMAGES.about}
                alt="Industrial valve machinery inside a CNG cylinder testing workshop"
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-brand-black text-white p-5 sm:p-6 rounded-lg shadow-xl max-w-[200px]">
              <div className="text-brand-red text-4xl sm:text-5xl font-bold leading-none">
                10+
              </div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide mt-2 leading-tight">
                Years of Industry Excellence
              </div>
            </div>
            <div className="absolute top-0 left-0 w-1.5 h-16 bg-brand-red" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold tracking-[0.18em] uppercase">
                About Mangalore Hydro Testing
              </span>
            </div>

            <h2 className="text-brand-black text-2xl sm:text-4xl font-bold leading-tight mb-6 text-balance">
              Trusted Experts in CNG Cylinder Testing & Safety
            </h2>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Mangalore Hydro Testing is a professional CNG cylinder hydro
                testing, inspection, cleaning, maintenance and certification
                service provider based in Mangaluru, Karnataka. With over a
                decade of industry experience, we are committed to ensuring the
                safety, reliability and performance of CNG cylinders for vehicle
                owners across the region.
              </p>
              <p>
                Our facility is equipped with modern high-pressure testing
                equipment and operated by skilled professionals who follow
                industry-standard safety practices and regulatory compliance
                procedures. From hydro testing and valve servicing to thorough
                cleaning and RTO-approved certification, we provide complete CNG
                cylinder care under one roof.
              </p>
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 mt-8 bg-brand-red text-white font-semibold px-7 py-3 rounded-md uppercase tracking-wide text-sm hover:bg-brand-red-deep transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Learn More
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
