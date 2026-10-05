import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Arvind Kumar',
    location: 'Bengaluru',
    text: 'Very professional service. The hydro testing of my CNG cylinder was done thoroughly and the staff explained everything clearly. I feel much safer now on the road.',
  },
  {
    name: 'Priya Nair',
    location: 'Bengaluru',
    text: 'Excellent service and very knowledgeable technicians. They cleaned and serviced my CNG tank properly and the certification process was smooth. Highly recommend Mangalore Hydro Testing.',
  },
  {
    name: 'Sonam Sharma',
    location: 'Bengaluru',
    text: 'I was impressed by the quality of work and the attention to safety. The team is experienced and the facility is well-equipped. Great experience overall for my CNG cylinder testing.',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

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
              Testimonials
            </span>
            <span className="h-px w-8 bg-brand-red" />
          </div>
          <h2 className="text-brand-black text-2xl sm:text-4xl font-bold leading-tight mb-3 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Trusted by Hundreds of Happy CNG Vehicle Owners
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="relative bg-white border border-gray-200 rounded-lg p-8 sm:p-12 overflow-hidden">
            <Quote className="absolute top-6 right-6 text-brand-red/10" size={80} />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="h-1 w-12 bg-brand-red mb-6" />
                <p className="text-brand-black text-lg sm:text-xl leading-relaxed mb-8 italic">
                  "{TESTIMONIALS[index].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {TESTIMONIALS[index].name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-brand-black font-bold text-base tracking-wide uppercase">
                      {TESTIMONIALS[index].name}
                    </div>
                    <div className="text-brand-red text-sm font-medium">
                      {TESTIMONIALS[index].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-brand-black/20 flex items-center justify-center hover:border-brand-red hover:bg-brand-red hover:text-white transition-all text-brand-black"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-brand-red' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-brand-black/20 flex items-center justify-center hover:border-brand-red hover:bg-brand-red hover:text-white transition-all text-brand-black"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
