import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { SERVICE_PAGES } from '../lib/servicePages';
import { useReveal } from '../hooks/useReveal';

export default function PlumbingServices() {
  const { ref, visible } = useReveal();
  const plumbing = SERVICE_PAGES.find((c) => c.id === 'plumbing')!;

  return (
    <>
      <PageHero
        eyebrow="Plumbing Services"
        title="Complete Plumbing Services"
        intro="From emergency repairs to water heaters, leak detection, and green-energy solutions — we handle every plumbing need for homes and businesses across South Florida."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
            {plumbing.services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/plumbing-services/${service.slug}`}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100 hover:shadow-card focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 flex items-center gap-1.5 text-base font-bold text-navy-800">
                    {service.title}
                    <ArrowRight className="h-3.5 w-3.5 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-500" />
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">{service.intro}</p>
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
