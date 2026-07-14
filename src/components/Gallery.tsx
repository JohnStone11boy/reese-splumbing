import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useScrollReveal';

const galleryItems = [
  {
    src: 'https://images.pexels.com/photos/32588548/pexels-photo-32588548.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    alt: 'Professional pipe repair service by Reese\'s Plumbing in Chattanooga TN',
    label: 'Pipe Repair',
    category: 'Plumbing Repair',
  },
  {
    src: 'https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    alt: 'Professional plumber installing radiator pipe and water heater connections in Chattanooga Tennessee',
    label: 'Water Heater Installation',
    category: 'Water Heater',
  },
  {
    src: 'https://images.pexels.com/photos/34295406/pexels-photo-34295406.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    alt: 'Close-up of bathroom faucet repair and fixture installation',
    label: 'Bathroom Plumbing',
    category: 'Bathroom',
  },
  {
    src: 'https://images.pexels.com/photos/10961064/pexels-photo-10961064.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    alt: 'Kitchen sink plumbing repair with wrench and faucet fixtures',
    label: 'Kitchen Plumbing',
    category: 'Kitchen',
  },
  {
    src: 'https://images.pexels.com/photos/9808886/pexels-photo-9808886.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    alt: 'Drain pipe cleaning and repair service',
    label: 'Drain Cleaning',
    category: 'Drain Service',
  },
  {
    src: 'https://images.pexels.com/photos/31213992/pexels-photo-31213992.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    alt: 'Faucet and fixture replacement with water flowing into bathroom sink',
    label: 'Fixture Replacement',
    category: 'Fixtures',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const headerRef = useReveal(0.1);
  const gridRef = useReveal(0.05);

  const closeLightbox = () => setLightbox(null);
  const prevImg = () => setLightbox((i) => i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null);
  const nextImg = () => setLightbox((i) => i !== null ? (i + 1) % galleryItems.length : null);

  return (
    <section className="py-24 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <div className="reveal-fade inline-flex items-center gap-2 text-brand text-sm font-semibold bg-brand-50 px-4 py-2 rounded-full mb-5">
            Our Work
          </div>
          <h2 id="gallery-heading" className="reveal-up section-title mb-4">
            Quality Plumbing Work You Can See
          </h2>
          <p className="reveal-up delay-100 section-subtitle max-w-xl mx-auto">
            Browse examples of our plumbing repairs, installations, and upgrades across Chattanooga and surrounding communities.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setLightbox(i)}
              className={`reveal-up ${['delay-100','delay-200','delay-300','delay-400','delay-500','delay-600'][i]} relative group overflow-hidden rounded-2xl aspect-square focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2`}
              aria-label={`View ${item.label}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-navy-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block bg-brand text-white text-xs font-semibold px-2 py-1 rounded-md mb-1">{item.category}</span>
                <p className="text-white font-bold text-sm">{item.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            className="absolute left-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-3xl w-full">
            <img
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].alt}
              className="w-full rounded-2xl shadow-2xl"
            />
            <p className="text-white text-center font-semibold mt-4">{galleryItems[lightbox].label}</p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            className="absolute right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
