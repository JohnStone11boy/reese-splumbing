import {
  Zap, Droplets, Search, Wrench, RefreshCw, Thermometer,
  Flame, GitBranch, Circle, Pipette, Scissors, ChefHat, Bath, Building2
} from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

const services = [
  { icon: Zap, name: 'Emergency Plumbing', desc: 'Fast, reliable response to urgent plumbing issues any time. We\'re here when you need us most.', color: 'text-red-500 bg-red-50' },
  { icon: Droplets, name: 'Drain Cleaning', desc: 'Professional drain clearing to eliminate clogs and restore proper flow throughout your home.', color: 'text-blue-500 bg-blue-50' },
  { icon: Search, name: 'Leak Detection', desc: 'Advanced leak detection to locate hidden leaks before they become costly water damage.', color: 'text-green-500 bg-green-50' },
  { icon: Wrench, name: 'Pipe Repair', desc: 'Expert repair of damaged, corroded, or leaking pipes to restore your plumbing system integrity.', color: 'text-orange-500 bg-orange-50' },
  { icon: RefreshCw, name: 'Pipe Replacement', desc: 'Complete pipe replacement using durable, modern materials designed for lasting performance.', color: 'text-purple-500 bg-purple-50' },
  { icon: Thermometer, name: 'Water Heater Repair', desc: 'Diagnose and repair all water heater makes and models — tank and tankless — fast.', color: 'text-yellow-500 bg-yellow-50' },
  { icon: Flame, name: 'Water Heater Installation', desc: 'Professional installation of new water heaters with proper sizing and code-compliant connections.', color: 'text-red-400 bg-red-50' },
  { icon: GitBranch, name: 'Sewer Line Repair', desc: 'Comprehensive sewer line inspection, repair, and replacement for all property types.', color: 'text-amber-600 bg-amber-50' },
  { icon: Circle, name: 'Toilet Repair', desc: 'Running toilets, clogs, leaks, or full replacements — we handle all toilet plumbing issues.', color: 'text-teal-500 bg-teal-50' },
  { icon: Pipette, name: 'Faucet Installation', desc: 'Professional installation of new faucets and fixtures with leak-free connections.', color: 'text-brand bg-brand-50' },
  { icon: Scissors, name: 'Garbage Disposal Repair', desc: 'Fast repair and replacement of garbage disposals to keep your kitchen running smoothly.', color: 'text-gray-600 bg-gray-100' },
  { icon: ChefHat, name: 'Kitchen Plumbing', desc: 'Complete kitchen plumbing including sink installation, dishwasher connections, and more.', color: 'text-indigo-500 bg-indigo-50' },
  { icon: Bath, name: 'Bathroom Plumbing', desc: 'Full bathroom plumbing from tub and shower repairs to complete bathroom remodel plumbing.', color: 'text-pink-500 bg-pink-50' },
  { icon: Building2, name: 'Commercial Plumbing', desc: 'Reliable commercial plumbing for businesses, restaurants, and commercial properties of all sizes.', color: 'text-navy-800 bg-navy-50' },
];

const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600'];

export default function Services() {
  const headerRef = useReveal(0.1);
  const gridRef = useReveal(0.05);

  return (
    <section id="services" className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <div className="reveal-fade inline-flex items-center gap-2 text-brand text-sm font-semibold bg-brand-50 px-4 py-2 rounded-full mb-5">
            <Wrench className="w-4 h-4" />
            Our Services
          </div>
          <h2 id="services-heading" className="reveal-up section-title mb-4">
            Complete Plumbing Services in Chattanooga, TN
          </h2>
          <p className="reveal-up delay-100 section-subtitle max-w-2xl mx-auto">
            From emergency repairs to full installations, Reese's Plumbing handles all your residential and commercial plumbing needs.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <article
              key={service.name}
              className={`reveal-up ${delays[i % delays.length]} card p-6 group cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color} group-hover:scale-110 transition-transform duration-200`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-800 text-base mb-2">{service.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-brand text-sm font-semibold hover:text-brand-700 transition-colors duration-200 inline-flex items-center gap-1 group/link"
              >
                Learn More
                <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-gray-600 mb-5 text-lg">Don't see your service? We likely handle it.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14238777586" className="btn-primary px-8 py-4">Call (423) 877-7586</a>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline px-8 py-4"
            >
              Request an Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
