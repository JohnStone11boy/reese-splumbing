import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

const reviews = [
  {
    name: 'Sarah T.',
    rating: 5,
    date: 'March 2024',
    text: 'Called Reese\'s Plumbing on a Saturday morning for a burst pipe and they had someone at my house within the hour. The technician was professional, explained exactly what needed to be done, and had everything fixed quickly. Fair price for emergency service. Will absolutely call them again.',
    service: 'Emergency Pipe Repair',
  },
  {
    name: 'David M.',
    rating: 5,
    date: 'January 2024',
    text: 'We\'ve used Reese\'s Plumbing twice now — once for a water heater replacement and once for a stubborn drain clog. Both times the guys showed up on time, knew exactly what they were doing, and gave us honest pricing upfront. It\'s hard to find a plumber you can trust, but these folks are the real deal.',
    service: 'Water Heater Installation',
  },
  {
    name: 'Jennifer H.',
    rating: 5,
    date: 'February 2024',
    text: 'Had a sewer line issue that two other companies couldn\'t properly diagnose. Reese\'s came out, identified the problem right away, and gave me a clear explanation of what repairs were needed and why. The work was done cleanly and the price was very reasonable. Highly recommend for any serious plumbing work.',
    service: 'Sewer Line Repair',
  },
  {
    name: 'Robert K.',
    rating: 4,
    date: 'December 2023',
    text: 'Good honest plumbers. Called them for a leaking faucet and toilet repair. They fixed both in one visit and the price was fair. The technician took the time to walk me through what was causing the issues. Nice to support a local Chattanooga business that genuinely cares about doing good work.',
    service: 'Faucet & Toilet Repair',
  },
  {
    name: 'Michelle R.',
    rating: 5,
    date: 'November 2023',
    text: 'As a property manager, I need a plumber I can call and trust to handle things professionally. Reese\'s Plumbing has become my go-to. They respond fast, communicate well, and the quality of their work holds up. They\'ve handled everything from commercial drain cleaning to full pipe repairs for our properties.',
    service: 'Commercial Plumbing',
  },
  {
    name: 'James W.',
    rating: 5,
    date: 'October 2023',
    text: 'Came home from work to a flooded utility room. Reese\'s Plumbing had a technician there within two hours. He found the source of the leak quickly, made the repair, and stayed to make sure everything was working correctly before leaving. Exactly what you need in an emergency. Outstanding service.',
    service: 'Emergency Plumbing',
  },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const headerRef = useReveal(0.1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused, current]);

  const getVisible = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % reviews.length);
    }
    return indices;
  };

  return (
    <section id="reviews" className="py-24 bg-gray-50 overflow-hidden" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <div className="reveal-fade inline-flex items-center gap-2 text-brand text-sm font-semibold bg-brand-50 px-4 py-2 rounded-full mb-5">
            <Star className="w-4 h-4" />
            Customer Reviews
          </div>
          <h2 id="reviews-heading" className="reveal-up section-title mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="reveal-up delay-100 section-subtitle max-w-xl mx-auto mb-6">
            Hear from homeowners and businesses who trust Reese's Plumbing for dependable service.
          </p>

          {/* Rating summary */}
          <div className="reveal-up delay-200 inline-flex items-center gap-4 bg-white rounded-2xl shadow-md px-6 py-4 border border-gray-100">
            <div className="text-center">
              <p className="text-4xl font-black text-navy-800">4.0</p>
              <div className="flex gap-0.5 justify-center mt-1">
                {[1,2,3,4].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                <Star className="w-4 h-4 text-gray-300" />
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-left">
              <p className="font-bold text-navy-800 text-lg">Google Rating</p>
              <p className="text-gray-500 text-sm">Based on 50+ reviews</p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {getVisible().map((idx, pos) => {
              const review = reviews[idx];
              return (
                <div
                  key={`${idx}-${pos}`}
                  className={`bg-white rounded-2xl shadow-md p-6 border border-gray-100 transition-all duration-500 ${
                    pos === 0 ? 'md:shadow-xl md:scale-[1.02] md:border-brand/20' : 'md:opacity-90'
                  }`}
                >
                  <Quote className="w-8 h-8 text-brand-100 mb-4" />
                  <p className="text-gray-700 leading-relaxed text-sm mb-5 line-clamp-5">{review.text}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-navy-800">{review.name}</p>
                        <p className="text-xs text-brand font-medium">{review.service}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{review.date}</p>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white text-gray-600 transition-all duration-200 shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-brand w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white text-gray-600 transition-all duration-200 shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
