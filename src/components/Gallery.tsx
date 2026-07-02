import { useState } from 'react';
import { Info, Images } from 'lucide-react';
import {
  GALLERY_IMAGES, GALLERY_CATEGORIES, GALLERY_NOTE,
  type GalleryCategory, type GalleryImage,
} from '../lib/content';
import { useReveal } from '../hooks/useReveal';

type Filter = 'All' | GalleryCategory;

function GalleryCard({ image, index }: { image: GalleryImage; index: number }) {
  const { ref, visible } = useReveal();
  return (
    <figure
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-${(index % 3) + 1} group overflow-hidden rounded-2xl bg-gray-100 shadow-soft`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute right-3 top-3 rounded-full bg-navy-800/85 px-3 py-1 text-xs font-bold text-white glass">
          {image.category}
        </span>
      </div>
    </figure>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>('All');
  const { ref, visible } = useReveal();

  const images =
    filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600">
            <Images className="h-4 w-4" />
            Gallery Concept
          </span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">
            Project inspiration
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            A preview of the work we do — from kitchens and bathrooms to plumbing repairs and
            installations. Filter by category to explore.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {GALLERY_CATEGORIES.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                filter === f
                  ? 'bg-blue-500 text-white shadow-glow'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, i) => (
            <GalleryCard key={image.src} image={image} index={i} />
          ))}
        </div>

        {/* Concept note */}
        <div className="mx-auto mt-10 flex max-w-2xl items-start gap-2.5 rounded-2xl bg-blue-50/60 px-5 py-4 text-center sm:text-left">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
          <p className="text-sm leading-relaxed text-gray-600">{GALLERY_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
