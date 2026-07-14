import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'Do you offer emergency plumbing services?',
    a: 'Yes! Reese\'s Plumbing provides emergency plumbing services for urgent situations such as burst pipes, severe leaks, backed-up sewers, and no hot water. Call us at (423) 877-7586 and we\'ll respond as quickly as possible to address your plumbing emergency.',
  },
  {
    q: 'How quickly can you respond to a plumbing call?',
    a: 'We prioritize fast response times for all our customers. For emergency situations, we work to get a technician to your location as soon as possible. For standard service calls, we schedule appointments at your convenience and always aim to arrive on time.',
  },
  {
    q: 'Do you provide free estimates?',
    a: 'Yes, we offer free estimates for plumbing projects. Contact us through our website or call (423) 877-7586 to schedule a time for us to assess your plumbing needs and provide an honest, transparent quote with no hidden fees.',
  },
  {
    q: 'Do you service commercial properties?',
    a: 'Absolutely. Reese\'s Plumbing provides full commercial plumbing services for businesses, restaurants, retail spaces, office buildings, and other commercial properties throughout Chattanooga and the surrounding area.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept multiple payment methods for your convenience including cash, check, and major credit cards. Our pricing is always transparent — we provide a clear quote before any work begins so you know exactly what to expect.',
  },
  {
    q: 'Can you replace water heaters?',
    a: 'Yes, water heater replacement is one of our most common services. We install and replace both traditional tank water heaters and modern tankless water heaters from all major brands. We\'ll help you select the right unit for your household size and budget.',
  },
  {
    q: 'Do you repair sewer lines?',
    a: 'Yes, we provide comprehensive sewer line services including inspection, repair, and replacement. If you\'re experiencing slow drains throughout your home, sewage odors, or recurring backups, contact us for a sewer line evaluation.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Reese\'s Plumbing serves Chattanooga, Hixson, Red Bank, Signal Mountain, Soddy Daisy, Ooltewah, East Brainerd, Lookout Mountain, and many other surrounding communities in the greater Chattanooga, Tennessee area.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen ? 'border-brand/30 bg-brand-50/30 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand focus:ring-inset rounded-2xl"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base leading-snug transition-colors duration-200 ${isOpen ? 'text-brand-700' : 'text-navy-800'}`}>
          {q}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useReveal(0.1);
  const listRef = useReveal(0.05);

  return (
    <section id="faq" className="py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <div className="reveal-fade inline-flex items-center gap-2 text-brand text-sm font-semibold bg-brand-50 px-4 py-2 rounded-full mb-5">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 id="faq-heading" className="reveal-up section-title mb-4">
            Common Questions About Our Plumbing Services
          </h2>
          <p className="reveal-up delay-100 section-subtitle max-w-xl mx-auto">
            Have a question? We've got you covered. Call us directly if you don't see your answer here.
          </p>
        </div>

        <div ref={listRef} className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`reveal-up delay-${Math.min(i * 50, 500) === 0 ? '100' : Math.min(i * 100, 600)}`}>
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions? We're happy to help.</p>
          <a href="tel:+14238777586" className="btn-primary px-8 py-4">
            Call (423) 877-7586
          </a>
        </div>
      </div>
    </section>
  );
}
