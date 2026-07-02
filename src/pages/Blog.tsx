import { Newspaper, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { useReveal } from '../hooks/useReveal';

// DEVELOPER NOTE: Replace placeholder blog posts with real articles written
// by or for Terrano Plumbing. The entries below are original placeholder
// content — do not publish without replacing titles, summaries, and dates.

const POSTS = [
  {
    slug: 'signs-you-need-a-water-heater-replacement',
    title: 'Signs You May Need a Water Heater Replacement',
    excerpt: 'Rust-colored water, strange noises, and inconsistent temperatures can signal that your water heater is nearing the end of its life. Here is what to look for.',
    date: 'Coming Soon',
    category: 'Water Heaters',
  },
  {
    slug: 'how-to-prevent-clogged-drains',
    title: 'Simple Ways to Prevent Clogged Drains',
    excerpt: 'A few small habits can keep your kitchen and bathroom drains flowing freely. Learn which everyday items cause the most blockages.',
    date: 'Coming Soon',
    category: 'Drain Care',
  },
  {
    slug: 'tankless-vs-traditional-water-heaters',
    title: 'Tankless vs. Traditional Water Heaters',
    excerpt: 'Considering an upgrade? Compare the benefits of tankless and standard tank water heaters to decide which fits your home and budget.',
    date: 'Coming Soon',
    category: 'Water Heaters',
  },
  {
    slug: 'benefits-of-a-water-audit',
    title: 'How a Water Audit Can Lower Your Bills',
    excerpt: 'A professional water audit identifies waste and inefficiency in your plumbing system. Find out how it works and what you can save.',
    date: 'Coming Soon',
    category: 'Efficiency',
  },
];

export default function Blog() {
  const { ref, visible } = useReveal();
  return (
    <>
      <PageHero
        icon={Newspaper}
        eyebrow="Blog"
        title="Plumbing Tips & Insights"
        intro="Helpful articles on plumbing maintenance, water heaters, efficiency, and home improvement from the Terrano Plumbing team."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:border-blue-100 hover:shadow-card"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
                  <span className="rounded-full bg-blue-50 px-3 py-1">{post.category}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-navy-800">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-bold text-gray-400 transition-colors group-hover:text-blue-600">
                    Coming Soon
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-blue-50/60 p-6 text-center">
            <p className="text-sm leading-relaxed text-gray-600">
              Articles are being prepared. Check back soon for plumbing tips and insights from our
              team, or contact us with any questions in the meantime.
            </p>
            <Link
              to="/free-estimate"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
