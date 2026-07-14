import { MapPin, CheckCircle } from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

const areas = [
  'Chattanooga', 'Hixson', 'Red Bank', 'Signal Mountain',
  'Soddy Daisy', 'Ooltewah', 'East Brainerd', 'Lookout Mountain',
];

export default function ServiceArea() {
  const headerRef = useReveal(0.1);
  const contentRef = useReveal(0.1);

  return (
    <section className="py-24 bg-gray-50" aria-labelledby="service-area-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <div className="reveal-fade inline-flex items-center gap-2 text-brand text-sm font-semibold bg-brand-50 px-4 py-2 rounded-full mb-5">
            <MapPin className="w-4 h-4" />
            Service Area
          </div>
          <h2 id="service-area-heading" className="reveal-up section-title mb-4">
            Proudly Serving Chattanooga & Surrounding Communities
          </h2>
          <p className="reveal-up delay-100 section-subtitle max-w-2xl mx-auto">
            Reese's Plumbing provides reliable plumbing services to homeowners and businesses throughout the greater Chattanooga, Tennessee area.
          </p>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Areas list */}
          <div className="reveal-left">
            <h3 className="text-xl font-bold text-navy-800 mb-6">We Serve These Communities:</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand/20 transition-all duration-200">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-brand" />
                  </div>
                  <span className="font-semibold text-navy-800 text-sm">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h4 className="font-bold text-navy-800 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand" />
                Reese's Plumbing
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-1">700 Ashland Terrace</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Chattanooga, TN 37415</p>
              <a href="tel:+14238777586" className="btn-primary text-sm px-5 py-2.5 w-full sm:w-auto">
                Call (423) 877-7586
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="reveal-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[450px]">
              <iframe
                title="Reese's Plumbing location map - 700 Ashland Terrace, Chattanooga, TN 37415"
                src="https://maps.google.com/maps?q=700+Ashland+Terrace,+Chattanooga,+TN+37415&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
