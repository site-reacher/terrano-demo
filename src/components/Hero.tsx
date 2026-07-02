import { Phone, ArrowRight, ShieldCheck, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY, TRUST_LINE } from '../lib/content';

const TRUST_BADGES = [
  { icon: Users, label: 'Family Owned' },
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: Clock, label: '24/7 Emergency Service' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-navy">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/36511371/pexels-photo-36511371.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern kitchen renovation inspiration"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/85 to-navy-800/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/40" />
      </div>

      {/* Decorative glow */}
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-20 pt-32 lg:px-8">
        <div className="max-w-3xl">
          {/* Trust line */}
          <p className="mb-7 animate-fade-in rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white glass">
            {TRUST_LINE}
          </p>

          <h1 className="animate-fade-up text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Trusted Plumbing & Remodeling Experts in{' '}
            <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
              Boca Raton
            </span>
          </h1>

          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/80 [animation-delay:0.1s]">
            From emergency plumbing repairs to complete kitchen and bathroom renovations,
            we deliver quality workmanship, honest pricing, and exceptional customer service.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row [animation-delay:0.2s]">
            <Link
              to="/free-estimate"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 hover:shadow-card-hover active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
            >
              Get Free Estimate
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white glass transition-all duration-300 hover:bg-white/20 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>

          {/* Phone line */}
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="mt-5 inline-block animate-fade-up text-sm font-medium text-white/60 [animation-delay:0.3s] hover:text-white"
          >
            {COMPANY.phone} • {COMPANY.emergencyHours}
          </a>

          {/* Trust badges */}
          <div className="mt-12 grid max-w-2xl animate-fade-up grid-cols-3 gap-3 [animation-delay:0.4s]">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 glass"
              >
                <badge.icon className="h-5 w-5 flex-shrink-0 text-blue-300" />
                <span className="text-xs font-semibold leading-tight text-white/90">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
