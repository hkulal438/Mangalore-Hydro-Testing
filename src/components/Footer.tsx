import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY } from '@/data';

const COMPANY_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  { label: 'CNG Tank Testing', href: '#services' },
  { label: 'Hydro Testing', href: '#services' },
  { label: 'Tank Cleaning', href: '#services' },
  { label: 'Valve Servicing', href: '#services' },
  { label: 'Pressure Testing', href: '#services' },
  { label: 'CNG Certification', href: '#services' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10">
      <div className="max-w-8xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 bg-brand-gray-dark flex items-center justify-center rounded-md border-2 border-brand-red">
                <span className="text-brand-red font-bold text-xl leading-none">M</span>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-base tracking-wide">
                  MANGALORE HYDRO
                </div>
                <div className="text-brand-red text-xs font-semibold tracking-[0.15em]">
                  TESTING
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional CNG cylinder hydro testing, inspection, cleaning,
              maintenance and certification services in Mangaluru, Karnataka.
              Committed to safety, compliance and reliable service.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-[0.15em] uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-[0.15em] uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-[0.15em] uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0 mt-0.5" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {COMPANY.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-red shrink-0" size={18} />
                <a
                  href={COMPANY.phoneHref}
                  className="text-gray-400 text-sm hover:text-brand-red transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-red shrink-0" size={18} />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gray-400 text-sm hover:text-brand-red transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © Mangalore Hydro Testing. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
