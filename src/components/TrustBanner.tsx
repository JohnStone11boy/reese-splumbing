import { Home, Building2, DollarSign, Zap } from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

const badges = [
  { icon: Home, label: 'Locally Owned', desc: 'Family-owned & operated in Chattanooga' },
  { icon: Building2, label: 'Residential & Commercial', desc: 'Full-service plumbing solutions' },
  { icon: DollarSign, label: 'Honest Pricing', desc: 'Transparent quotes, no surprises' },
  { icon: Zap, label: 'Fast Response Times', desc: 'Available for emergency calls' },
];

export default function TrustBanner() {
  const ref = useReveal(0.1);

  return (
    <section className="bg-white border-b border-gray-100" aria-label="Trust badges">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className={`reveal-up delay-${i * 100} flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200`}
            >
              <div className="flex-shrink-0 w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="font-bold text-navy-800 text-sm sm:text-base leading-tight">{badge.label}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
