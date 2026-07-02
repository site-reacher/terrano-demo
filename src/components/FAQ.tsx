import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS } from '../lib/content';
import { useReveal } from '../hooks/useReveal';

function FaqRow({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} reveal-delay-${(index % 3) + 1} overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition-shadow duration-300 hover:shadow-card`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
      >
        <span className="text-base font-bold text-navy-800">{q}</span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            open ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
          }`}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-400 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[15px] leading-relaxed text-gray-600">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, visible } = useReveal();
  return (
    <section id="faq" className="relative bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center`}>
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            FAQ
          </span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">
            Questions, answered
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Everything you need to know about pricing, scheduling, warranties, and our process.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((item, i) => (
            <FaqRow key={item.question} q={item.question} a={item.answer} index={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-3xl bg-white p-7 text-center shadow-soft">
          <HelpCircle className="h-8 w-8 text-blue-500" />
          <p className="text-base font-semibold text-navy-800">Still have questions?</p>
          <p className="text-sm text-gray-600">Our team is happy to help — give us a call or request an estimate.</p>
          <Link
            to="/free-estimate"
            className="mt-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-600 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
