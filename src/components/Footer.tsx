import { Droplets, Phone, MapPin, Facebook, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../lib/content';
import { SERVICE_PAGES } from '../lib/servicePages';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Plumbing Services', to: '/plumbing-services' },
  { label: 'Remodeling', to: '/remodeling' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'Special Offers', to: '/special-offers' },
  { label: 'Blog', to: '/blog' },
  { label: 'About Us', to: '/about' },
  { label: 'Get a Free Estimate', to: '/free-estimate' },
];

const POPULAR_SERVICES = SERVICE_PAGES.find((c) => c.id === 'plumbing')!.services.slice(0, 8);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-navy pt-20 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-12">
      <div className="absolute inset-0 bg-grid-navy opacity-30" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* CTA banner */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-center glass md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-extrabold text-white">Ready to start your project?</h3>
            <p className="mt-2 text-white/70">Get a free, no-obligation estimate from our trusted team.</p>
          </div>
          <Link
            to="/free-estimate"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Get Free Estimate
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
                <Droplets className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-extrabold text-white">Terrano</span>
                <span className="text-[10px] font-medium tracking-wide text-white/60">
                  PLUMBING & REMODELING
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Family-owned plumbing and remodeling company serving Boca Raton and South Florida
              with quality craftsmanship and honest pricing.
            </p>

            {/* License */}
            <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span className="text-xs font-semibold text-white/80">
                Florida License #{COMPANY.license}
              </span>
            </div>

            {/* Social — verified Facebook only */}
            <div className="mt-6 flex gap-3">
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Terrano Plumbing on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Pages</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link to={n.to} className="text-sm text-white/65 transition-colors hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Services</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {POPULAR_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/plumbing-services/${s.slug}`}
                    className="text-sm text-white/65 transition-colors hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
            <ul className="mt-4 flex flex-col gap-3.5">
              <li>
                <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-blue-300">
                  <Phone className="h-4 w-4 flex-shrink-0 text-blue-400" />
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/65">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                {COMPANY.address}
              </li>
              <li className="text-sm text-white/65">
                <span className="text-white/80 font-medium">{COMPANY.emergencyHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {COMPANY.name}. Florida License #{COMPANY.license}.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-xs text-white/50 transition-colors hover:text-blue-300">Privacy Policy</a>
            <a href="#terms" className="text-xs text-white/50 transition-colors hover:text-blue-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
