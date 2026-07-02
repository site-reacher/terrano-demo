import { Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { useReveal } from '../hooks/useReveal';

// DEVELOPER NOTE: Replace placeholder offer content with real promotions
// provided by Terrano Plumbing before launch. Do not publish fabricated
// discounts or guarantees.

const OFFERS = [
  {
    title: 'Free Estimate',
    description: 'Every project starts with a free, no-obligation written estimate. You will know the scope and cost before any work begins.',
    badge: 'Always Available',
  },
  {
    title: 'Water Heater Inspection',
    description: 'Schedule a water heater inspection to check performance, safety, and efficiency. Ask about this when you call.',
    badge: 'Seasonal',
  },
  {
    title: 'Water Audit Consultation',
    description: 'Find out where you can save water and reduce your utility bills with a whole-home water usage assessment.',
    badge: 'By Request',
  },
];

export default function SpecialOffers() {
  const { ref, visible } = useReveal();
  return (
    <>
      <PageHero
        icon={Tag}
        eyebrow="Special Offers"
        title="Current Offers & Promotions"
        intro="Take advantage of our available offers. Contact us to learn more or to schedule your service."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} flex flex-col gap-6`}>
            {OFFERS.map((offer) => (
              <div
                key={offer.title}
                className="flex flex-col gap-4 rounded-3xl border border-gray-100 bg-white p-7 shadow-card sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-navy-800">{offer.title}</h3>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {offer.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{offer.description}</p>
                </div>
                <Link
                  to="/free-estimate"
                  className="group inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Claim Offer
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-blue-50/60 p-6 text-center">
            <p className="text-sm leading-relaxed text-gray-600">
              Offers are subject to availability and may change. Contact us for current details and
              to confirm which promotions apply to your project.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
