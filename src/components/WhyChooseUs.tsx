import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, FileCheck, Users } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Certified Hydro Testing Services',
    description:
      'Professional hydro testing of CNG cylinders using industry-standard procedures and equipment to ensure safe and accurate results.',
  },
  {
    icon: Wrench,
    title: 'Advanced Cleaning & Maintenance Solutions',
    description:
      'Comprehensive cleaning and maintenance services including dust removal, rust removal and impurity removal for improved cylinder performance.',
  },
  {
    icon: FileCheck,
    title: 'Industry-Standard Safety & Compliance',
    description:
      'Strict adherence to RTO regulations and industry safety standards throughout every testing, cleaning and certification procedure.',
  },
  {
    icon: Users,
    title: 'Skilled Professionals & Quality Assurance',
    description:
      'Experienced technicians who deliver precise testing, reliable maintenance and long-lasting performance you can trust.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-brand-black py-20 sm:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent" />
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
              Why Choose Us
            </span>
            <span className="h-px w-8 bg-brand-red" />
          </div>
          <h2 className="text-white text-2xl sm:text-4xl font-bold leading-tight text-balance">
            Why Choose Mangalore Hydro Testing?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-brand-gray-dark border border-white/10 rounded-lg p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red hover:bg-brand-black-2"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 border border-brand-red/40 rounded-md flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                  <feature.icon className="text-brand-red group-hover:text-white transition-colors" size={26} />
                </div>
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-bold leading-snug mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="mt-5 h-px w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
