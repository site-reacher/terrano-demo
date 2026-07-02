import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import RelatedServices from '../components/RelatedServices';
import CTASection from '../components/CTASection';
import { getServiceBySlug, getRelatedServices, SERVICE_PAGES } from '../lib/servicePages';
import { COMPANY } from '../lib/content';
import { useReveal } from '../hooks/useReveal';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { ref, visible } = useReveal();

  const service = slug ? getServiceBySlug(slug) : undefined;
  if (!service) return <Navigate to="/plumbing-services" replace />;

  const related = getRelatedServices(service.relatedSlugs);
  const allPlumbing = SERVICE_PAGES.find((c) => c.id === 'plumbing')!.services;

  return (
    <>
      <PageHero
        icon={service.icon}
        eyebrow={service.title}
        title={service.heroTitle}
        intro={service.intro}
      />

      {/* Benefits */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Why Choose This Service
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl">
              Key benefits
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-soft"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-600" />
                  <span className="text-sm font-medium leading-relaxed text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold text-navy-800 sm:text-3xl">
            Request an appointment
          </h2>
          <p className="mt-3 text-gray-600">
            Tell us what you need and we will get back to you to schedule a visit.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/free-estimate"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-base font-bold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
            >
              Request Appointment
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-4 text-base font-semibold text-navy-800 transition-all duration-300 hover:bg-gray-50 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
            >
              <Phone className="h-5 w-5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      <RelatedServices services={related} />

      {/* All services dropdown list */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-navy-800">
            All plumbing services
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {allPlumbing.map((s) => (
              <Link
                key={s.slug}
                to={`/plumbing-services/${s.slug}`}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
