import { motion } from 'framer-motion';
import {
  FlaskConical,
  Droplets,
  Sparkles,
  Settings,
  Gauge,
  ClipboardCheck,
  Award,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';

const SERVICES = [
  {
    icon: FlaskConical,
    title: 'CNG Tank Testing',
    description:
      'Comprehensive testing of CNG tanks to verify structural integrity and ensure safe operation on the road.',
  },
  {
    icon: Droplets,
    title: 'CNG Cylinder Hydro Testing',
    description:
      'High-pressure hydro testing of CNG cylinders using water jacket methodology to confirm pressure tolerance and safety.',
  },
  {
    icon: Sparkles,
    title: 'CNG Tank Cleaning',
    description:
      'Professional cleaning services including dust removal, rust removal and impurity removal for improved performance.',
  },
  {
    icon: Settings,
    title: 'CNG Valve Servicing',
    description:
      'Expert servicing of CNG cylinder valves to maintain proper function, prevent leaks and extend service life.',
  },
  {
    icon: Gauge,
    title: 'CNG Pressure Testing',
    description:
      'Accurate pressure testing using modern equipment to verify that cylinders meet required safety standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'CNG Tank Inspection',
    description:
      'Detailed inspection of CNG tanks to identify wear, damage or potential safety concerns before they become critical.',
  },
  {
    icon: Award,
    title: 'RTO-Approved CNG Certification',
    description:
      'Official certification services in compliance with RTO regulations, providing documented proof of cylinder safety.',
  },
  {
    icon: RefreshCw,
    title: 'CNG Tank Recertification',
    description:
      'Recertification of CNG tanks that require renewed approval, ensuring continued compliance and safe usage.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="max-w-8xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-red" />
            <span className="text-brand-red text-xs font-semibold tracking-[0.18em] uppercase">
              What We Offer
            </span>
            <span className="h-px w-8 bg-brand-red" />
          </div>
          <h2 className="text-brand-black text-2xl sm:text-4xl font-bold leading-tight text-balance">
            Professional CNG Testing, Inspection & Maintenance
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="group bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 border border-brand-red/30 rounded-md flex items-center justify-center group-hover:bg-brand-red transition-all duration-300">
                  <service.icon className="text-brand-red group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="text-brand-red/30 group-hover:text-brand-red text-3xl font-bold transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-brand-black text-lg font-bold leading-snug mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-brand-red text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn More</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
