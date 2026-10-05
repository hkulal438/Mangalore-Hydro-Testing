import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/data';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-white" size={24} />
      </a>
      <a
        href={COMPANY.phoneHref}
        className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call now"
      >
        <Phone className="text-white" size={22} />
      </a>
    </div>
  );
}
