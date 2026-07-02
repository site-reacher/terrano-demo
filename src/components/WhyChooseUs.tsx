import {
  ShieldCheck, ReceiptText, Sparkles, CalendarClock, Brush, Headset, BadgeCheck,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const REASONS = [
  { icon: ShieldCheck, title: 'Licensed Professionals', text: 'Florida licensed and insured plumbing contractor — License # CFC053956.' },
  { icon: ReceiptText, title: 'Transparent Pricing', text: 'Upfront, written estimates with no hidden fees. You approve the price before work begins.' },
  { icon: Sparkles, title: 'Quality Materials', text: 'Premium, code-compliant materials and fixtures built to last for years to come.' },
  { icon: CalendarClock, title: 'Flexible Scheduling', text: 'Appointment times that work around your schedule, with 24/7 emergency availability.' },
  { icon: Brush, title: 'Clean Job Sites', text: 'We protect your floors, clean up daily, and leave your home better than we found it.' },
  { icon: Headset, title: 'Excellent Customer Service', text: 'Responsive communication from first call to final walkthrough — your satisfaction is our mission.' },
  { icon: BadgeCheck, title: 'Stand Behind Our Work', text: 'We take pride in every job and address any concerns after the work is completed.' },
];

function Reason({ item, index }: { item: typeof REASONS[number]; index: number }) {
  const { ref, visible } = useReveal();
  const Icon = item.icon;
  const delay = (index % 4) + 1;
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-${delay} flex items-start gap-4 rounded-2xl p-5 transition-colors duration-300 hover:bg-white`}
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.8} />
      </div>
      <div>
        <h3 className="text-base font-bold text-navy-800">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{item.text}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const { ref, visible } = useReveal();
  return (
    <section className="relative bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-20">
          {/* Left intro */}
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} lg:sticky lg:top-28`}>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">
              The standard for quality in South Florida
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Homeowners across Boca Raton trust us with their most valuable properties because
              we treat every project — big or small — with the same uncompromising craftsmanship.
            </p>

            {/* Decorative image */}
            <div className="mt-9 hidden overflow-hidden rounded-3xl shadow-card lg:block">
              <img
                src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional plumber installing pipe fittings"
                className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right reasons grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {REASONS.map((item, i) => (
              <Reason key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
