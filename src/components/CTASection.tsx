import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../lib/content';

export default function CTASection() {
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-navy px-8 py-10 text-center shadow-card md:flex-row md:px-12 md:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Ready to start your project?
            </h2>
            <p className="mt-2 text-white/70">
              Get a free, no-obligation estimate from our licensed team.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white glass transition-all duration-300 hover:bg-white/20 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <Link
              to="/free-estimate"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Get Free Estimate
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
