import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'Is Your CNG Tank Testing RTO Approved?',
    answer:
      'Yes, our CNG tank testing services are RTO approved. We follow the applicable regulations and industry safety standards required for CNG cylinder testing and certification.',
  },
  {
    question: 'How Often Should a CNG Tank Be Tested?',
    answer:
      'The frequency of CNG tank testing depends on the manufacturer\'s specifications and applicable regulations. We recommend following the testing schedule specified by your cylinder manufacturer and the relevant regulatory requirements. Contact us for guidance based on your specific cylinder.',
  },
  {
    question: 'Which Vehicles Do You Service?',
    answer:
      'We service a wide range of CNG-fitted vehicles, including Cars, Auto-Rickshaws, Commercial Vehicles, and other CNG-fitted vehicles.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
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
              Got Questions?
            </span>
            <span className="h-px w-8 bg-brand-red" />
          </div>
          <h2 className="text-brand-black text-2xl sm:text-4xl font-bold leading-tight text-balance">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`border rounded-lg overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'border-brand-red' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-base sm:text-lg leading-snug ${isOpen ? 'text-brand-red' : 'text-brand-black'}`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-red text-white' : 'bg-brand-gray-light text-brand-black'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
