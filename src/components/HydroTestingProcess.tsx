import { motion } from 'framer-motion';
import { ClipboardList, Wrench, ShieldCheck, Award } from 'lucide-react';

const STEPS = [
  {
    icon: ClipboardList,
    title: 'Service Booking & Inspection',
    desc: 'Cylinders are received and visually inspected to assess condition and determine the required testing and maintenance procedures.',
  },
  {
    icon: Wrench,
    title: 'Cleaning & Valve Servicing',
    desc: 'Cylinders undergo professional cleaning — including dust, rust and impurity removal — and valve servicing to prepare for accurate testing.',
  },
  {
    icon: ShieldCheck,
    title: 'Hydro Testing',
    desc: 'High-pressure hydro testing is carried out using specialized equipment including a water jacket system to verify cylinder safety and integrity.',
  },
  {
    icon: Award,
    title: 'Certification',
    desc: 'Cylinders that pass all testing and inspection receive RTO-approved certification, confirming compliance with applicable safety regulations.',
  },
];

export default function HydroTestingProcess() {
  return (
    <section className="bg-brand-gray-light py-20 sm:py-28">
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
              Our Process
            </span>
            <span className="h-px w-8 bg-brand-red" />
          </div>
          <h2 className="text-brand-black text-2xl sm:text-4xl font-bold leading-tight text-balance">
            Step-by-Step Cylinder Hydro Testing
          </h2>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gray-300" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-brand-red origin-left"
          />
          <div className="grid grid-cols-4 gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center px-2"
              >
                <div className="relative z-10 mx-auto w-20 h-20 bg-white border-2 border-brand-red rounded-full flex items-center justify-center shadow-sm">
                  <step.icon className="text-brand-red" size={30} />
                </div>
                <div className="text-brand-red text-sm font-bold mt-4 mb-1">
                  STEP {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-brand-black text-base font-bold leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-300" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-3 top-2 bottom-2 w-0.5 bg-brand-red origin-top"
          />
          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-8 top-0 w-7 h-7 bg-white border-2 border-brand-red rounded-full flex items-center justify-center">
                  <span className="text-brand-red text-xs font-bold">{i + 1}</span>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-brand-black text-base font-bold leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
