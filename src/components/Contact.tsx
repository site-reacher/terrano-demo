import { useState, type FormEvent } from 'react';
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck,
} from 'lucide-react';
import { COMPANY, ESTIMATE_SERVICE_OPTIONS } from '../lib/content';
import { useReveal } from '../hooks/useReveal';

type Status = 'idle' | 'loading' | 'success' | 'error';
type ContactMethod = 'Phone' | 'Email' | '';

const CONTACT_INFO = [
  { icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}` },
  { icon: Mail, label: 'Email', value: 'info@terranoplumbing.com', href: 'mailto:info@terranoplumbing.com' },
  { icon: MapPin, label: 'Office', value: COMPANY.address },
  { icon: Clock, label: 'Hours', value: COMPANY.emergencyHours },
];

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-base text-navy-800 placeholder:text-gray-400 transition-colors duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100';

export default function Contact() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [contactMethod, setContactMethod] = useState<ContactMethod>('');

  const validate = (data: FormData): { ok: boolean; errors: Record<string, string>; payload: Record<string, string> } => {
    const errors: Record<string, string> = {};
    const name = (data.get('name') as string)?.trim() ?? '';
    const phone = (data.get('phone') as string)?.trim() ?? '';
    const email = (data.get('email') as string)?.trim() ?? '';
    const preferred = (data.get('preferred_contact_method') as string)?.trim() ?? '';
    const service = (data.get('service') as string)?.trim() ?? '';
    const message = (data.get('message') as string)?.trim() ?? '';

    if (!name) errors.name = 'Please enter your full name.';
    if (!phone) errors.phone = 'Please enter your phone number.';
    if (!preferred) errors.preferred_contact_method = 'Please select how you prefer to be contacted.';
    if (!service) errors.service = 'Please select a service.';
    if (!message) errors.message = 'Please tell us about your project.';
    if (preferred === 'Email' && !email) errors.email = 'Email is required when Email is your preferred contact method.';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address.';

    return { ok: Object.keys(errors).length === 0, errors, payload: { name, phone, email, preferred_contact_method: preferred, service_needed: service, message } };
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;

    setFieldErrors({});
    setErrorMsg('');
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);
    const { ok, errors, payload } = validate(data);

    if (!ok) {
      setFieldErrors(errors);
      setStatus('error');
      return;
    }

    const website = (data.get('website') as string)?.trim() ?? '';
    const body = {
      name: payload.name,
      phone: payload.phone,
      email: payload.email || undefined,
      preferred_contact_method: payload.preferred_contact_method,
      service_needed: payload.service_needed,
      message: payload.message,
      source_page: 'Contact Page',
      website,
    };

    try {
      const functionUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-lead`;
      const res = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Request failed.' }));
        if (res.status === 400 && err.error) {
          setErrorMsg(err.error);
        } else {
          setErrorMsg('We couldn\u2019t submit your request right now. Please call us directly at ' + COMPANY.phone + '.');
        }
        setStatus('error');
        return;
      }

      setStatus('success');
      form.reset();
      setContactMethod('');
    } catch {
      setErrorMsg('We couldn\u2019t submit your request right now. Please call us directly at ' + COMPANY.phone + '.');
      setStatus('error');
    }
  };

  const showError = (field: string) => fieldErrors[field];

  return (
    <section id="contact" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Get In Touch
          </span>
          <h2 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">
            Request your free estimate
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Tell us about your project and we will be in touch. For emergencies, call us
            directly — we are available 24/7.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-card sm:p-9">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-50">
                  <CheckCircle2 className="h-9 w-9 text-success-600" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-800">Your request has been received.</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">
                  Thank you for reaching out to Terrano Plumbing &amp; Remodeling. A member of our
                  team will get back to you soon to discuss your project.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full bg-gray-100 px-5 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Honeypot — hidden from humans, traps bots */}
                <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                  <label htmlFor="website">Website (leave blank)</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" htmlFor="name" required error={showError('name')}>
                    <input id="name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" className={inputClass} />
                  </Field>
                  <Field label="Phone Number" htmlFor="phone" required error={showError('phone')}>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(561) 000-0000" className={inputClass} />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email Address" htmlFor="email" error={showError('email')}>
                    <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@email.com" className={inputClass} />
                  </Field>
                  <Field label="Service Needed" htmlFor="service" required error={showError('service')}>
                    <select id="service" name="service" defaultValue="" className={inputClass}>
                      <option value="" disabled>Select a service…</option>
                      {ESTIMATE_SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Preferred contact method */}
                <fieldset>
                  <legend className="mb-1.5 text-sm font-semibold text-navy-800">
                    Preferred Contact Method<span className="text-blue-500"> *</span>
                  </legend>
                  <div className="flex gap-3">
                    {(['Phone', 'Email'] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setContactMethod(m)}
                        aria-pressed={contactMethod === m}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-base font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 ${
                          contactMethod === m
                            ? 'border-blue-400 bg-blue-50 text-blue-700 ring-2 ring-blue-100'
                            : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {m === 'Phone' ? <Phone className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                        {m}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="preferred_contact_method" value={contactMethod} />
                  {showError('preferred_contact_method') && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{showError('preferred_contact_method')}</p>
                  )}
                </fieldset>

                <Field label="Message" htmlFor="message" required error={showError('message')}>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your project…" className={`${inputClass} resize-none`} />
                </Field>

                {status === 'error' && errorMsg && (
                  <div role="alert" className="flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-base font-bold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 hover:shadow-card-hover active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      Request Free Estimate
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400">
                  We respect your privacy. Your information is never shared.
                </p>
              </form>
            )}
          </div>

          {/* Info + map */}
          <div className="flex flex-col gap-5">
            {/* License badge */}
            <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
              <ShieldCheck className="h-6 w-6 flex-shrink-0 text-blue-600" />
              <div>
                <div className="text-sm font-bold text-navy-800">Florida Licensed &amp; Insured</div>
                <div className="text-sm text-gray-600">License # {COMPANY.license}</div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {CONTACT_INFO.map((info) => {
                const content = (
                  <div className="flex items-start gap-3 rounded-2xl bg-gray-50 p-5 transition-colors duration-300 hover:bg-blue-50">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-soft">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold uppercase tracking-wide text-gray-500">{info.label}</div>
                      <div className="mt-1 text-sm font-semibold text-navy-800 break-words">{info.value}</div>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.label} href={info.href} className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200">{content}</a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>

            {/* Map */}
            <div className="flex-1 overflow-hidden rounded-3xl shadow-card">
              <iframe
                title="Terrano Plumbing & Remodeling location map"
                src="https://www.google.com/maps?q=11444+Clear+Creek+Pl,+Boca+Raton,+FL+33428&output=embed"
                className="h-full min-h-[260px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, htmlFor, required, error, children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-navy-800">
        {label}
        {required && <span className="text-blue-500"> *</span>}
      </span>
      {children}
      {error && <span className="text-xs font-medium text-red-600" role="alert">{error}</span>}
    </label>
  );
}
