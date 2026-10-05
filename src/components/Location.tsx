import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Phone } from 'lucide-react';
import { COMPANY } from '@/data';

export default function Location() {
  const mapQuery = encodeURIComponent(COMPANY.address);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

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
              Find Us
            </span>
            <span className="h-px w-8 bg-brand-red" />
          </div>
          <h2 className="text-brand-black text-2xl sm:text-4xl font-bold leading-tight text-balance">
            Visit Our Facility
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {/* Info card */}
          <div className="bg-brand-black text-white rounded-lg p-7 sm:p-8 flex flex-col justify-center">
            <div className="w-12 h-12 bg-brand-red rounded-md flex items-center justify-center mb-5">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Our Address
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {COMPANY.address}
            </p>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 text-gray-300 hover:text-brand-red transition-colors mb-2"
            >
              <Phone size={18} className="text-brand-red" />
              <span>{COMPANY.phone}</span>
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded-md uppercase tracking-wide text-sm hover:bg-brand-red-deep transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg self-start"
            >
              Get Directions
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Map placeholder */}
          <div className="lg:col-span-2 relative bg-brand-gray-light border border-gray-200 rounded-lg overflow-hidden min-h-[300px] lg:min-h-full">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(200,16,46,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mb-4 animate-pulse">
                <MapPin className="text-white" size={30} />
              </div>
              <h3 className="text-brand-black text-lg font-bold mb-2">
                Mangalore Hydro Testing
              </h3>
              <p className="text-gray-600 text-sm max-w-md leading-relaxed mb-4">
                {COMPANY.shortAddress}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-red font-semibold text-sm hover:underline"
              >
                View on Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
