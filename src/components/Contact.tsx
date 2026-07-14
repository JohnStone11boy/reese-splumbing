import { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle } from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

const services = [
  'Emergency Plumbing', 'Drain Cleaning', 'Leak Detection', 'Pipe Repair',
  'Pipe Replacement', 'Water Heater Repair', 'Water Heater Installation',
  'Sewer Line Repair', 'Toilet Repair', 'Faucet Installation',
  'Garbage Disposal Repair', 'Kitchen Plumbing', 'Bathroom Plumbing',
  'Commercial Plumbing', 'Other',
];

type FormState = {
  name: string; phone: string; email: string; service: string; message: string;
};

const INITIAL: FormState = { name: '', phone: '', email: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const headerRef = useReveal(0.1);
  const contentRef = useReveal(0.1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(INITIAL);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <div className="reveal-fade inline-flex items-center gap-2 text-brand text-sm font-semibold bg-brand-50 px-4 py-2 rounded-full mb-5">
            <Mail className="w-4 h-4" />
            Contact Us
          </div>
          <h2 id="contact-heading" className="reveal-up section-title mb-4">
            Request a Free Estimate
          </h2>
          <p className="reveal-up delay-100 section-subtitle max-w-xl mx-auto">
            Fill out the form below and a member of our team will get back to you promptly. Prefer to talk? Call us directly.
          </p>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="reveal-left lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-2">Request Received!</h3>
                  <p className="text-gray-600 mb-6 max-w-sm">
                    Thank you for contacting Reese's Plumbing. We'll be in touch with you shortly. For immediate needs, please call us directly.
                  </p>
                  <a href="tel:+14238777586" className="btn-primary px-8 py-3">
                    Call (423) 877-7586
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-2">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-800 mb-2">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(423) 000-0000"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-2">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-sm"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="service" className="block text-sm font-semibold text-navy-800 mb-2">Service Needed *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-sm bg-white appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-7">
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your plumbing issue or question..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </button>
                  <p className="text-gray-400 text-xs text-center mt-3">We'll respond within 24 hours. For emergencies, call directly.</p>
                </form>
              )}
            </div>
          </div>

          {/* Info + Map */}
          <div className="reveal-right lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-navy-800 mb-6">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+14238777586" className="text-lg font-bold text-navy-800 hover:text-brand transition-colors duration-200">
                      (423) 877-7586
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-navy-800 font-semibold leading-snug">
                      700 Ashland Terrace<br />
                      Chattanooga, TN 37415
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a href="tel:+14238777586" className="btn-primary w-full py-3.5">
                  <Phone className="w-5 h-5" />
                  Call Now for Fast Service
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-56">
              <iframe
                title="Reese's Plumbing contact map"
                src="https://maps.google.com/maps?q=700+Ashland+Terrace,+Chattanooga,+TN+37415&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
