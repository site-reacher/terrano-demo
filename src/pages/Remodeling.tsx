import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { SERVICE_PAGES } from '../lib/servicePages';
import { useReveal } from '../hooks/useReveal';

export default function Remodeling() {
  const { ref, visible } = useReveal();
  const remodeling = SERVICE_PAGES.find((c) => c.id === 'remodeling')!;

  return (
    <>
      <PageHero
        eyebrow="Remodeling"
        title="Kitchen & Bathroom Remodeling"
        intro="Complete design-build renovations handled by a single trusted team. From demolition to final painting, we manage every detail of your kitchen or bathroom transformation."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid gap-6 lg:grid-cols-2`}>
            {remodeling.services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/plumbing-services/${service.slug}`}
                  className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-blue-100 hover:shadow-card focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 flex items-center gap-1.5 text-xl font-bold text-navy-800">
                    {service.title}
                    <ArrowRight className="h-4 w-4 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-500" />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.intro}</p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
