import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { COMPANY } from '@/data';

const VEHICLE_TYPES = ['Car', 'Auto-Rickshaw', 'Commercial Vehicle', 'Other CNG-Fitted Vehicle'];
const SERVICE_TYPES = [
  'CNG Tank Testing',
  'CNG Cylinder Hydro Testing',
  'CNG Tank Cleaning',
  'CNG Valve Servicing',
  'CNG Pressure Testing',
  'CNG Tank Inspection',
  'RTO-Approved CNG Certification',
  'CNG Tank Recertification',
];

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    vehicleType: '',
    serviceRequired: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = 'Please enter your full name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[+\d\s-]{8,15}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number';
    if (!form.vehicleType) e.vehicleType = 'Please select a vehicle type';
    if (!form.serviceRequired) e.serviceRequired = 'Please select a service';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  const inputClass = (field: string) =>
    `w-full bg-brand-gray-dark border rounded-md px-4 py-3 text-white text-base placeholder:text-gray-500 transition-colors ${
      errors[field] ? 'border-brand-red' : 'border-white/15 focus:border-brand-red'
    }`;

  return (
    <section id="contact" className="bg-brand-black py-20 sm:py-28">
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
              Contact Us
            </span>
            <span className="h-px w-8 bg-brand-red" />
          </div>
          <h2 className="text-white text-2xl sm:text-4xl font-bold leading-tight text-balance">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4">
            Book a service or get in touch with our team for all your CNG
            cylinder testing and certification needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-brand-gray-dark border border-white/10 rounded-lg p-6 flex items-start gap-5 hover:border-brand-red/50 transition-colors">
              <div className="w-12 h-12 bg-brand-red rounded-md flex items-center justify-center shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                  Address
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {COMPANY.address}
                </p>
              </div>
            </div>

            <div className="bg-brand-gray-dark border border-white/10 rounded-lg p-6 flex items-start gap-5 hover:border-brand-red/50 transition-colors">
              <div className="w-12 h-12 bg-brand-red rounded-md flex items-center justify-center shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div className="min-w-0">
                <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gray-300 text-base hover:text-brand-red transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="bg-brand-gray-dark border border-white/10 rounded-lg p-6 flex items-start gap-5 hover:border-brand-red/50 transition-colors">
              <div className="w-12 h-12 bg-brand-red rounded-md flex items-center justify-center shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                  Phone
                </h3>
                <a
                  href={COMPANY.phoneHref}
                  className="text-gray-300 text-base hover:text-brand-red transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-3 bg-brand-red text-white font-semibold py-4 rounded-md uppercase tracking-wide text-base hover:bg-brand-red-deep transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-brand-gray-dark border border-white/10 rounded-lg p-6 sm:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="text-brand-red mb-4" size={56} />
                <h3 className="text-white text-xl font-bold mb-2">
                  Request Received
                </h3>
                <p className="text-gray-400 text-base max-w-sm">
                  Thank you for your interest. This form is currently for
                  demonstration purposes and does not send a message. Please
                  call us directly at{' '}
                  <a href={COMPANY.phoneHref} className="text-brand-red font-semibold">
                    {COMPANY.phone}
                  </a>{' '}
                  to book your service.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ fullName: '', phone: '', vehicleType: '', serviceRequired: '', message: '' });
                  }}
                  className="mt-6 border border-white/30 text-white font-semibold px-6 py-2.5 rounded-md hover:bg-white hover:text-brand-black transition-colors text-sm uppercase tracking-wide"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    className={inputClass('fullName')}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-brand-red text-sm mt-1.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={inputClass('phone')}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-brand-red text-sm mt-1.5">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="vehicleType" className="block text-gray-300 text-sm font-medium mb-2">
                    Vehicle Type
                  </label>
                  <select
                    id="vehicleType"
                    value={form.vehicleType}
                    onChange={(e) => handleChange('vehicleType', e.target.value)}
                    className={inputClass('vehicleType')}
                  >
                    <option value="">Select vehicle type</option>
                    {VEHICLE_TYPES.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                  {errors.vehicleType && <p className="text-brand-red text-sm mt-1.5">{errors.vehicleType}</p>}
                </div>

                <div>
                  <label htmlFor="serviceRequired" className="block text-gray-300 text-sm font-medium mb-2">
                    Service Required
                  </label>
                  <select
                    id="serviceRequired"
                    value={form.serviceRequired}
                    onChange={(e) => handleChange('serviceRequired', e.target.value)}
                    className={inputClass('serviceRequired')}
                  >
                    <option value="">Select service required</option>
                    {SERVICE_TYPES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.serviceRequired && <p className="text-brand-red text-sm mt-1.5">{errors.serviceRequired}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={inputClass('message')}
                    placeholder="Tell us about your requirements (optional)"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-red text-white font-semibold py-4 rounded-md uppercase tracking-wide text-base hover:bg-brand-red-deep transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <Send size={18} />
                  Request Service
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
