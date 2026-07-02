import { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICE_GROUPS, COMPANY, type ServiceItem } from '../lib/content';
import { SERVICE_PAGES } from '../lib/servicePages';
import { useReveal } from '../hooks/useReveal';

const plumbingPages = SERVICE_PAGES.find((c) => c.id === 'plumbing')!.services;

function slugForServiceTitle(title: string): string | undefined {
  const match = plumbingPages.find((p) => p.title === title);
  return match?.slug;
}

function ServiceRow({ service }: { service: ServiceItem }) {
  const Icon = service.icon;
  const slug = slugForServiceTitle(service.title);
  const to = slug ? `/plumbing-services/${slug}` : '/plumbing-services';

  return (
    <Link
      to={to}
      aria-label={`Learn more about ${service.title}`}
      className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-blue-100 hover:shadow-card focus:outline-none focus:ring-4 focus:ring-blue-100"
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <div className="min-w-0">
        <h3 className="flex items-center gap-1.5 text-[15px] font-bold text-navy-800">
          {service.title}
          <ArrowRight className="h-3.5 w-3.5 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-500" />
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">{service.description}</p>
      </div>
    </Link>
  );
}

export default function Services() {
  const [active, setActive] = useState<'plumbing' | 'remodeling'>('plumbing');
  const { ref, visible } = useReveal();

  const group = SERVICE_GROUPS.find((g) => g.id === active)!;

  return (
    <section id="services" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            What We Do
          </span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">
            Complete Plumbing & Remodeling Services
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            One trusted team for every plumbing need and renovation vision — serving Boca Raton
            and all of South Florida.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex gap-1 rounded-full bg-gray-100 p-1.5">
            {SERVICE_GROUPS.map((g) => (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                  active === g.id
                    ? 'bg-white text-navy-800 shadow-soft'
                    : 'text-gray-500 hover:text-navy-700'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-gray-500 max-w-xl mx-auto">
          {group.blurb}
        </p>

        {/* Service grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {group.services.map((service) => (
            <ServiceRow key={service.title} service={service} />
          ))}
        </div>

        {/* View all services link */}
        <div className="mt-8 text-center">
          {active === 'plumbing' ? (
            <Link
              to="/plumbing-services"
              className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
            >
              View All Plumbing Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ) : (
            <Link
              to="/remodeling"
              className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
            >
              View Remodeling Details
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* CTA strip */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-3xl bg-gradient-navy px-8 py-7 text-center shadow-card sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-bold text-white">Ready to request an estimate?</p>
            <p className="text-sm text-white/70">Tell us about your project and we will be in touch.</p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <Link
              to="/free-estimate"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 hover:shadow-card-hover active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
            >
              Request an Estimate
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Emergency line */}
        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
          <Phone className="h-4 w-4 text-blue-500" />
          Plumbing emergency? Call us at{' '}
          <a href={`tel:${COMPANY.phoneRaw}`} className="font-semibold text-navy-800 hover:text-blue-600">
            {COMPANY.phone}
          </a>{' '}
          — available 24/7.
        </p>
      </div>
    </section>
  );
}
