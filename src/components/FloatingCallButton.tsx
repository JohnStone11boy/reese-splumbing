import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+14238777586"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-brand hover:bg-brand-700 text-white font-bold px-6 py-3.5 rounded-full shadow-2xl transition-all duration-200 hover:shadow-brand/30 hover:scale-105 active:scale-95 lg:hidden"
      aria-label="Call Reese's Plumbing"
    >
      <div className="w-5 h-5 animate-pulse-slow">
        <Phone className="w-5 h-5" />
      </div>
      <span className="text-sm">Call Now: (423) 877-7586</span>
    </a>
  );
}
