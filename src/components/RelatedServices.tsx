import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ServicePage } from '../lib/servicePages';
import { useReveal } from '../hooks/useReveal';

export default function RelatedServices({ services }: { services: ServicePage[] }) {
  const { ref, visible } = useReveal();
  if (services.length === 0) return null;

  return (
    <section className="relative bg-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Related Services
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl">
            Explore other services
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/plumbing-services/${s.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-blue-100 hover:shadow-card focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-1.5 text-[15px] font-bold text-navy-800">
                    {s.title}
                    <ArrowRight className="h-3.5 w-3.5 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-500" />
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-gray-600">
                    {s.intro}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
