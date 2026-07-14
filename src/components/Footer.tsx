import { Phone, MapPin, Droplets, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Emergency Plumbing', 'Drain Cleaning', 'Leak Detection',
  'Pipe Repair & Replacement', 'Water Heater Services',
  'Sewer Line Repair', 'Bathroom Plumbing', 'Kitchen Plumbing',
  'Commercial Plumbing',
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300" aria-label="Footer">
      {/* Pre-footer CTA */}
      <div className="bg-navy-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Need a Plumber Today?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Reese's Plumbing is ready to help. Call now for fast, reliable plumbing service in Chattanooga, TN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+14238777586"
              className="inline-flex items-center gap-3 bg-brand hover:bg-brand-700 text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all duration-200"
            >
              <Phone className="w-6 h-6" />
              (423) 877-7586
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Request an Estimate
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">Reese's Plumbing</p>
                <p className="text-brand-300 text-xs">Chattanooga, TN</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Locally owned plumbing company serving Chattanooga and surrounding communities with honest pricing, quality workmanship, and friendly service.
            </p>
            <div className="space-y-3">
              <a href="tel:+14238777586" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 text-sm group">
                <div className="w-8 h-8 bg-white/10 group-hover:bg-brand rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                </div>
                (423) 877-7586
              </a>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-gray-400">700 Ashland Terrace<br />Chattanooga, TN 37415</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-brand rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-gray-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 transform"
                  >
                    <span className="text-brand">›</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 transform text-left"
                  >
                    <span className="text-brand">›</span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">Service Area</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Proudly serving homeowners and businesses throughout:
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Chattanooga, TN', 'Hixson', 'Red Bank', 'Signal Mountain', 'Soddy Daisy', 'Ooltewah', 'East Brainerd', 'Lookout Mountain'].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Reese's Plumbing. All rights reserved. Chattanooga, TN.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <button className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</button>
            <span>·</span>
            <button className="hover:text-gray-300 transition-colors duration-200">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
