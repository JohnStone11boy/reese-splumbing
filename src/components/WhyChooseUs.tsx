import { Shield, Award, Zap, DollarSign, Star, Heart, Wrench, Building2 } from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

const reasons = [
  { icon: Shield, title: 'Trusted Local Company', desc: 'A locally owned business with deep roots in the Chattanooga community.' },
  { icon: Award, title: 'Experienced Professionals', desc: 'Skilled technicians with years of hands-on plumbing experience.' },
  { icon: Zap, title: 'Fast Response', desc: 'Quick response times, especially for plumbing emergencies when minutes matter.' },
  { icon: DollarSign, title: 'Honest Pricing', desc: 'Transparent, fair quotes with no hidden fees or surprise charges.' },
  { icon: Star, title: 'Quality Workmanship', desc: 'Every repair and installation meets high standards for durability and performance.' },
  { icon: Heart, title: 'Friendly Customer Service', desc: 'We treat every customer like a neighbor — because you are one.' },
  { icon: Wrench, title: 'Reliable Repairs', desc: 'We fix it right the first time so you\'re not calling us back for the same issue.' },
  { icon: Building2, title: 'Residential & Commercial', desc: 'Full-service plumbing expertise for homes and businesses throughout the area.' },
];

const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600'];

export default function WhyChooseUs() {
  const headerRef = useReveal(0.1);
  const gridRef = useReveal(0.05);

  return (
    <section className="py-24 bg-navy-800 relative overflow-hidden" aria-labelledby="why-heading">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <div className="reveal-fade inline-flex items-center gap-2 text-brand-300 text-sm font-semibold bg-white/10 px-4 py-2 rounded-full mb-5">
            <Shield className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 id="why-heading" className="reveal-up text-3xl md:text-4xl font-bold text-white mb-4">
            Why Chattanooga Trusts Reese's Plumbing
          </h2>
          <p className="reveal-up delay-100 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We've built our reputation on quality work, honest pricing, and treating every customer with the respect they deserve.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`reveal-up ${delays[i % delays.length]} group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="w-12 h-12 bg-brand/20 group-hover:bg-brand rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-brand-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14238777586" className="btn-primary px-8 py-4 text-base">
              Call (423) 877-7586
            </a>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary px-8 py-4 text-base"
            >
              Request a Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
