import type { LucideIcon } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../lib/content';

type Props = {
  icon?: LucideIcon;
  eyebrow: string;
  title: string;
  intro: string;
};

export default function PageHero({ icon: Icon, eyebrow, title, intro }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy pb-16 pt-32 lg:pb-20 lg:pt-40">
      <div className="absolute inset-0 bg-grid-navy opacity-30" />
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        {Icon && (
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-300 glass">
              <Icon className="h-8 w-8" strokeWidth={1.8} />
            </div>
          </div>
        )}
        <span className="text-sm font-bold uppercase tracking-widest text-blue-300">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
          {intro}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/free-estimate"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-4 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 hover:shadow-card-hover active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
          >
            Request Appointment
          </Link>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white glass transition-all duration-300 hover:bg-white/20 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          >
            <Phone className="h-5 w-5" />
            Call {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
