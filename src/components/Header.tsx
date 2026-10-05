import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY } from '@/data';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md py-2.5'
            : 'bg-white/95 backdrop-blur-sm py-4 border-b border-gray-200'
        }`}
      >
        <div className="max-w-8xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0" aria-label="Mangalore Hydro Testing home">
            <div className="w-11 h-11 bg-brand-black flex items-center justify-center rounded-md border-2 border-brand-red">
              <span className="text-brand-red font-bold text-xl leading-none">M</span>
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-bold text-brand-black text-base tracking-wide">
                MANGALORE HYDRO
              </div>
              <div className="text-brand-red text-xs font-semibold tracking-[0.15em]">
                TESTING
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-brand-black text-[15px] font-medium hover:text-brand-red transition-colors duration-200 py-1"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-brand-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 text-brand-black text-sm font-medium hover:text-brand-red transition-colors"
            >
              <Phone size={16} className="text-brand-red" />
              <span className="hidden xl:inline">{COMPANY.phone}</span>
            </a>
            <a
              href="#contact"
              className="bg-brand-red text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-brand-red-deep transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg uppercase tracking-wide"
            >
              Book a Service
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-brand-black"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm bg-white lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
                <span className="font-bold text-brand-black tracking-wide">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-brand-black"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col px-5 py-4 gap-1 flex-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="text-brand-black text-lg font-medium py-3 border-b border-gray-100 hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="px-5 pb-8 pt-4 space-y-3">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center justify-center gap-2 border border-brand-black text-brand-black font-semibold py-3 rounded-md hover:bg-brand-gray-light transition-colors"
                >
                  <Phone size={18} className="text-brand-red" />
                  Call Now
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-brand-red text-white text-center font-semibold py-3.5 rounded-md uppercase tracking-wide"
                >
                  Book a Service
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
