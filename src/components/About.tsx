import { CheckCircle, Users, Wrench, Building2, HeartHandshake, Award } from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

const highlights = [
  { icon: Wrench, text: 'Residential Plumbing' },
  { icon: Building2, text: 'Commercial Plumbing' },
  { icon: Users, text: 'Experienced Technicians' },
  { icon: HeartHandshake, text: 'Friendly Service' },
  { icon: CheckCircle, text: 'Reliable Repairs' },
  { icon: Award, text: 'Quality Workmanship' },
];

export default function About() {
  const ref = useReveal(0.1);

  return (
    <section id="about" className="py-24 bg-gray-50" aria-labelledby="about-heading">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800&q=85"
                alt="Reese's Plumbing technician installing pipe fittings in a Chattanooga TN home"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100">
              <p className="text-3xl font-black text-navy-800 leading-none">20+</p>
              <p className="text-sm text-gray-600 font-medium mt-1">Years Serving<br/>Chattanooga</p>
            </div>
            {/* Star badge */}
            <div className="absolute -top-6 -left-6 bg-brand rounded-2xl shadow-2xl p-4 border border-brand-600">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-300 text-lg">★</span>
                ))}
              </div>
              <p className="text-white text-xs font-semibold">50+ Google Reviews</p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal-right">
            <div className="inline-flex items-center gap-2 text-brand text-sm font-semibold bg-brand-50 px-4 py-2 rounded-full mb-5">
              <CheckCircle className="w-4 h-4" />
              About Reese's Plumbing
            </div>
            <h2 id="about-heading" className="section-title mb-6">
              Chattanooga's Trusted Local Plumbing Company
            </h2>
            <p className="section-subtitle mb-6">
              Reese's Plumbing is a locally owned and operated plumbing company dedicated to providing dependable plumbing services throughout Chattanooga, TN and the surrounding communities. Our team of experienced technicians brings quality workmanship and exceptional customer care to every job.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From routine repairs to full-scale commercial installations, we take pride in delivering honest pricing, fast response times, and repairs done right the first time. We've built our reputation one satisfied customer at a time — and our long-term commitment to this community reflects that.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, i) => (
                <div
                  key={item.text}
                  className={`reveal-up delay-${i * 100} flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200`}
                >
                  <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-sm font-semibold text-navy-800">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+14238777586" className="btn-primary px-7 py-3.5">
                Call Us Today
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-outline px-7 py-3.5"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
