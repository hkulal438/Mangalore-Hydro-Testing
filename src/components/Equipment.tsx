import { motion } from 'framer-motion';
import { IMAGES } from '@/data';

const EQUIPMENT = [
  {
    num: '01',
    name: 'Cylinder Rotating Vise',
    desc: 'Securely holds and rotates cylinders during testing and maintenance procedures for thorough and safe handling.',
    image: IMAGES.equipmentVise,
  },
  {
    num: '02',
    name: 'Degassing Unit',
    desc: 'Safely removes residual gas from cylinders before testing and cleaning, ensuring a safe working environment.',
    image: IMAGES.equipmentDegassing,
  },
  {
    num: '03',
    name: 'Dryers',
    desc: 'Removes moisture from cylinders after hydro testing, preventing internal corrosion and extending service life.',
    image: IMAGES.equipmentDryer,
  },
  {
    num: '04',
    name: 'UT Machine',
    desc: 'Ultrasonic testing equipment for non-destructive cylinder wall thickness measurement and defect detection.',
    image: IMAGES.equipmentUT,
  },
  {
    num: '05',
    name: 'Water Jacket',
    desc: 'Water jacket test system for precise measurement of cylinder expansion under high-pressure hydro testing.',
    image: IMAGES.equipmentJacket,
  },
];

export default function Equipment() {
  return (
    <section className="bg-brand-black py-20 sm:py-28 relative">
      <div className="max-w-8xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-red" />
            <span className="text-brand-red text-xs font-semibold tracking-[0.18em] uppercase">
              Specialized Equipment
            </span>
          </div>
          <h2 className="text-white text-2xl sm:text-4xl font-bold leading-tight text-balance">
            Advanced Testing & Safety Equipment
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {EQUIPMENT.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-brand-red transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={`${item.name} used at Mangalore Hydro Testing facility`}
                    className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-center bg-brand-gray-dark group-hover:bg-brand-black-2 transition-colors duration-300">
                  <span className="text-brand-red text-xs font-semibold tracking-[0.18em] uppercase mb-2">
                    Equipment {item.num}
                  </span>
                  <h3 className="text-white text-lg sm:text-xl font-bold leading-snug mb-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 h-px w-10 bg-brand-red transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA card to fill the grid evenly (5 items → even grid) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brand-red rounded-lg p-7 sm:p-9 flex flex-col justify-center"
          >
            <h3 className="text-white text-xl sm:text-2xl font-bold leading-snug mb-3">
              Equipped for Safe, Accurate Testing
            </h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-5">
              Our facility is equipped with the specialized equipment needed to
              carry out every stage of CNG cylinder hydro testing, cleaning and
              certification to industry standards.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-black text-white font-semibold px-6 py-3 rounded-md uppercase tracking-wide text-sm hover:bg-brand-gray-dark transition-colors self-start"
            >
              Book a Service
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
