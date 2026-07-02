import { CheckCircle2, Leaf, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { COMPANY, GREEN_DISTINCTION, TRUST_LINE } from '../lib/content';
import { useReveal } from '../hooks/useReveal';

const HIGHLIGHTS = [
  'Family-owned plumbing and remodeling company',
  'Florida licensed and insured contractor',
  'Complete design-build remodeling under one roof',
  'Serving Palm Beach and Broward Counties',
  '24/7 emergency service availability',
];

export default function About() {
  const { ref, visible } = useReveal();
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Terrano Plumbing & Remodeling"
        intro="A family-owned business located in Boca Raton, offering full-service plumbing and complete remodeling to clients across South Florida."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img
                  src="https://images.pexels.com/photos/7013085/pexels-photo-7013085.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Plumbing professional working with pipes"
                  className="h-[440px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Our Story
              </span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl">
                Craftsmanship you can trust with your home
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600">
                Terrano Plumbing & Remodeling is a family-owned business located in Boca Raton,
                offering full-service plumbing to clients across South Florida. We are a one-stop
                shop for your bathroom and kitchen remodeling needs — from demolition to the final
                painting, we are there every step of the way.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                We are fully licensed and insured, and our professionals bring knowledgeable,
                talented craftsmanship to every project. Our attention to detail and commitment to
                our customers is second to none.
              </p>

              <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                <ShieldCheck className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-sm font-semibold text-navy-800">
                  Florida License #{COMPANY.license}
                </span>
              </div>
            </div>
          </div>

          {/* Green plumber highlight */}
          <div className="mt-14 flex items-start gap-3 rounded-2xl bg-success-50 p-6">
            <Leaf className="mt-0.5 h-6 w-6 flex-shrink-0 text-success-600" />
            <div>
              <h3 className="text-sm font-bold text-success-700">{GREEN_DISTINCTION}</h3>
              <p className="mt-1 text-sm leading-relaxed text-success-700/80">
                Founding members of Green Plumbers USA. We help homeowners and businesses conserve
                water and energy — "Go Green, Save Some Green."
              </p>
            </div>
          </div>

          {/* Highlights */}
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-start gap-2.5 rounded-2xl bg-gray-50 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-600" />
                <span className="text-sm font-medium text-gray-700">{h}</span>
              </li>
            ))}
          </ul>

          {/* Trust line */}
          <div className="mt-10 rounded-2xl bg-gradient-navy p-6 text-center">
            <p className="text-sm font-bold text-white/90">{TRUST_LINE}</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
