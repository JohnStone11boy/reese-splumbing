import { Phone, ClipboardList, CheckCircle } from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

const PHONE = '(423) 877-7586';
const PHONE_HREF = 'tel:+14238777586';

export default function Hero() {
  const ref = useReveal(0.05);

  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/32588548/pexels-photo-32588548.jpeg?auto=compress&cs=tinysrgb&w=1920&q=85')`,
        }}
        role="img"
        aria-label="Professional plumber working in a residential home in Chattanooga TN"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-800/95 via-navy-800/85 to-navy-800/60" />

      {/* Content */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="reveal-up inline-flex items-center gap-2 bg-brand/20 border border-brand/30 text-brand-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <CheckCircle className="w-4 h-4" />
            Serving Chattanooga & Surrounding Communities
          </div>

          {/* Headline */}
          <h1 className="reveal-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 text-shadow">
            Reliable Plumbing<br />
            <span className="text-brand-300">Services You Can</span><br />
            Count On
          </h1>

          {/* Subheadline */}
          <p className="reveal-up delay-200 text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
            Serving Chattanooga and surrounding communities with dependable plumbing repairs, installations, and emergency plumbing services. Honest work. Quality craftsmanship. Friendly service.
          </p>

          {/* Phone */}
          <div className="reveal-up delay-300 mb-8">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 text-white group"
              aria-label={`Call Reese's Plumbing at ${PHONE}`}
            >
              <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-200 shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Call Us Today</p>
                <p className="text-2xl font-bold group-hover:text-brand-300 transition-colors duration-200">{PHONE}</p>
              </div>
            </a>
          </div>

          {/* CTAs */}
          <div className="reveal-up delay-400 flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="btn-primary text-base px-8 py-4 text-lg"
              aria-label="Call Reese's Plumbing now"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <button
              onClick={handleContact}
              className="btn-secondary text-base px-8 py-4 text-lg border-2 border-white/30 hover:border-white"
            >
              <ClipboardList className="w-5 h-5" />
              Request a Free Estimate
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
