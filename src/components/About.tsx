import { CheckCircle2, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { GREEN_DISTINCTION, COMPANY } from '../lib/content';

const HIGHLIGHTS = [
  'Family-owned plumbing and remodeling company',
  'Florida licensed and insured contractor',
  GREEN_DISTINCTION,
  'Complete design-build remodeling under one roof',
  'Serving Palm Beach and Broward Counties',
];

export default function About() {
  const { ref, visible } = useReveal();
  return (
    <section id="about" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative`}>
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src="https://images.pexels.com/photos/7013085/pexels-photo-7013085.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Plumbing professional working with pipes"
                className="h-[440px] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* floating accent image */}
            <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-2xl border-4 border-white shadow-card-hover sm:block lg:-right-8 lg:w-60">
              <img
                src="https://images.pexels.com/photos/33529508/pexels-photo-33529508.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Bathroom remodeling inspiration"
                className="h-40 w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* license badge */}
            <div className="absolute -left-4 top-6 flex flex-col items-center rounded-2xl bg-gradient-navy px-5 py-4 text-center shadow-card-hover lg:-left-8">
              <span className="text-base font-extrabold text-white">Florida</span>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-300">
                License
                <br />
                #{COMPANY.license}
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              About Terrano
            </span>
            <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">
              Craftsmanship you can trust with your home
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
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

            {/* Green plumber highlight */}
            <div className="mt-7 flex items-start gap-3 rounded-2xl bg-success-50 p-5">
              <Leaf className="mt-0.5 h-6 w-6 flex-shrink-0 text-success-600" />
              <div>
                <h3 className="text-sm font-bold text-success-700">
                  {GREEN_DISTINCTION}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-success-700/80">
                  Founding members of Green Plumbers USA. We help homeowners and businesses
                  conserve water and energy — "Go Green, Save Some Green."
                </p>
              </div>
            </div>

            {/* highlights */}
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-600" />
                  <span className="text-sm font-medium text-gray-700">{h}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/free-estimate"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 hover:shadow-card-hover active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
            >
              Work With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
