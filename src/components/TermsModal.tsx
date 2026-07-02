import { X, FileText } from 'lucide-react';
import { useEffect } from 'react';

type Props = { open: boolean; onClose: () => void };

export default function TermsModal({ open, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-900/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 shadow-card-hover"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FileText className="h-6 w-6" />
          </span>
          <h2 className="text-2xl font-extrabold text-navy-800">Terms of Service</h2>
        </div>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            These terms outline the basic use of the Terrano Plumbing & Remodeling website.
          </p>
          <h3 className="text-base font-bold text-navy-800">Use of This Website</h3>
          <p>
            This website provides information about our plumbing and remodeling services and
            allows you to submit an estimate request. You agree to provide accurate and truthful
            information when submitting a request.
          </p>
          <h3 className="text-base font-bold text-navy-800">Estimate Requests</h3>
          <p>
            Submitting an estimate request does not constitute a binding contract. Estimates are
            provided as a preliminary assessment and may be adjusted based on an on-site
            inspection. Work begins only after a written agreement is accepted.
          </p>
          <h3 className="text-base font-bold text-navy-800">Service Availability</h3>
          <p>
            Terrano Plumbing & Remodeling serves Palm Beach County and Broward County, Florida.
            We reserve the right to decline service requests outside our service area or scope.
          </p>
          <h3 className="text-base font-bold text-navy-800">Licensing</h3>
          <p>
            Terrano Plumbing & Remodeling operates under Florida License # CFC053956.
          </p>
          <p className="pt-2 text-xs text-gray-400">
            This is a basic terms of service provided for this demo website and is not a
            substitute for legal review.
          </p>
        </div>
      </div>
    </div>
  );
}
