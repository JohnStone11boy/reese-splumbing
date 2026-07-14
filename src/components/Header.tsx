import { useState, useEffect } from 'react';
import { Phone, Menu, X, Droplets } from 'lucide-react';

const PHONE = '(423) 877-7586';
const PHONE_HREF = 'tel:+14238777586';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-800 shadow-2xl py-2' : 'bg-navy-800/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg group-hover:bg-brand-600 transition-colors duration-200">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="block text-white font-bold text-lg leading-tight">Reese's Plumbing</span>
              <span className="block text-brand-300 text-xs font-medium tracking-wide">Chattanooga, TN</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="text-gray-200 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-white font-semibold text-sm hover:text-brand-300 transition-colors duration-200"
              aria-label={`Call ${PHONE}`}
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Request an Estimate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 bg-brand text-white text-sm font-semibold px-3 py-2 rounded-lg"
              aria-label="Call now"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{PHONE}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-900 border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="block text-gray-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="btn-primary w-full text-sm"
            >
              Request a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
