import { Quote } from 'lucide-react';
import { TESTIMONIALS, type Testimonial } from '../lib/content';
import { useReveal } from '../hooks/useReveal';

function Avatar({ initials }: { initials: string }) {
  const colors = [
    'from-blue-500 to-navy-600',
    'from-success-500 to-success-700',
    'from-blue-400 to-blue-600',
    'from-navy-500 to-navy-700',
  ];
  const idx = (initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % colors.length;
  return (
    <div
      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${colors[idx]} text-sm font-bold text-white`}
    >
      {initials}
    </div>
  );
}

function ReviewCard({ t, index }: { t: Testimonial; index: number }) {
  const { ref, visible } = useReveal();
  return (
    <article
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-${(index % 3) + 1} flex flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover`}
    >
      <div className="flex items-center justify-between">
        <Quote className="h-8 w-8 text-blue-100" />
        <Quote className="h-8 w-8 rotate-180 text-gray-100" />
      </div>

      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-700">"{t.text}"</p>

      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        <Avatar initials={t.initials} />
        <div>
          <div className="text-sm font-bold text-navy-800">{t.name}</div>
          <div className="text-xs text-gray-500">{t.location}</div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const { ref, visible } = useReveal();
  return (
    <section id="testimonials" className="relative bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Customer Feedback
          </span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">
            What Terrano Customers Say
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Feedback shared by homeowners who have worked with us on plumbing and remodeling
            projects across South Florida.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ReviewCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
