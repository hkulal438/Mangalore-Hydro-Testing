import { motion } from 'framer-motion';
import { Car, Bike, Truck, Fuel } from 'lucide-react';

const VEHICLES = [
  { icon: Car, label: 'Cars' },
  { icon: Bike, label: 'Auto-Rickshaws' },
  { icon: Truck, label: 'Commercial Vehicles' },
  { icon: Fuel, label: 'Other CNG-Fitted Vehicles' },
];

export default function Vehicles() {
  return (
    <section className="bg-white py-20 sm:py-28">
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
              Our Clients
            </span>
            <span className="h-px w-8 bg-brand-red" />
          </div>
          <h2 className="text-brand-black text-2xl sm:text-4xl font-bold leading-tight text-balance">
            Vehicles We Service
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {VEHICLES.map((vehicle, i) => (
            <motion.div
              key={vehicle.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group bg-brand-gray-light border border-gray-200 rounded-lg p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red hover:bg-white hover:shadow-lg"
            >
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 border-2 border-brand-red/30 rounded-full flex items-center justify-center mb-4 group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-300">
                <vehicle.icon className="text-brand-red group-hover:text-white transition-colors" size={30} />
              </div>
              <h3 className="text-brand-black font-bold text-base sm:text-lg uppercase tracking-wide">
                {vehicle.label}
              </h3>
              <div className="mx-auto mt-3 h-0.5 w-0 bg-brand-red transition-all duration-500 group-hover:w-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
