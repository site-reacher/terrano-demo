import { ClipboardList, CalendarCheck, Hammer, HomeIcon } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const STEPS = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Request Estimate',
    text: 'Call us or fill out the form. We listen to your needs and schedule a free, no-obligation assessment.',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Schedule Visit',
    text: 'We arrive on time, inspect the site, and deliver a clear written quote with transparent pricing.',
  },
  {
    icon: Hammer,
    step: '03',
    title: 'Complete Project',
    text: 'Our licensed pros get to work — protecting your home, keeping you informed, and finishing on schedule.',
  },
  {
    icon: HomeIcon,
    step: '04',
    title: 'Enjoy Your Home',
    text: 'We walk through the finished work together, make sure everything meets your expectations, and leave you smiling.',
  },
];

function StepCard({ step, index }: { step: typeof STEPS[number]; index: number }) {
  const { ref, visible } = useReveal();
  const Icon = step.icon;
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-${index + 1} relative flex flex-col items-center text-center`}
    >
      {/* connector line (desktop) */}
      {index < STEPS.length - 1 && (
        <div className="absolute left-[58%] top-10 hidden h-px w-[84%] bg-gradient-to-r from-blue-200 to-transparent lg:block" />
      )}

      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-white p-5 shadow-card ring-1 ring-gray-100 transition-transform duration-500 hover:scale-105">
        <Icon className="h-8 w-8 text-blue-600" strokeWidth={1.7} />
        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-navy-600 text-[11px] font-extrabold text-white shadow-glow">
          {step.step}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-bold text-navy-800">{step.title}</h3>
      <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-gray-600">{step.text}</p>
    </div>
  );
}

export default function Process() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-24 lg:py-32">
      {/* decorative grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-40" />
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="text-sm font-bold uppercase tracking-widest text-blue-300">
            How It Works
          </span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            A simple, stress-free process
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            From your first call to the final walkthrough, we make every step clear and easy.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
