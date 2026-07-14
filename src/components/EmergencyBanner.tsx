import { Phone, AlertTriangle, Clock } from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

export default function EmergencyBanner() {
  const ref = useReveal(0.1);

  return (
    <section
      className="relative py-20 overflow-hidden bg-brand-gradient"
      aria-labelledby="emergency-heading"
      style={{ background: 'linear-gradient(135deg, #1E88E5 0%, #1565c0 100%)' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal-fade inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <AlertTriangle className="w-4 h-4" />
          Available for Emergency Calls
        </div>

        <h2 id="emergency-heading" className="reveal-up text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
          Need Emergency Plumbing Service?
        </h2>

        <p className="reveal-up delay-100 text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Call Reese's Plumbing today for fast, dependable service. We respond quickly to plumbing emergencies throughout Chattanooga and surrounding communities.
        </p>

        <div className="reveal-up delay-200 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="tel:+14238777586"
            className="inline-flex items-center gap-3 bg-white text-brand-700 font-black text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-white/20 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-200 active:translate-y-0"
            aria-label="Call Reese's Plumbing emergency line"
          >
            <Phone className="w-6 h-6" />
            (423) 877-7586
          </a>
        </div>

        <div className="reveal-fade delay-300 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Fast Response Times</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-blue-200" />
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Talk to a Real Person</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-blue-200" />
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Emergency Plumbing Specialists</span>
          </div>
        </div>
      </div>
    </section>
  );
}
