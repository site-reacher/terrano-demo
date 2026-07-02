import { X, Shield } from 'lucide-react';
import { useEffect } from 'react';

type Props = { open: boolean; onClose: () => void };

export default function PrivacyModal({ open, onClose }: Props) {
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
            <Shield className="h-6 w-6" />
          </span>
          <h2 className="text-2xl font-extrabold text-navy-800">Privacy Policy</h2>
        </div>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            This privacy policy describes how Terrano Plumbing & Remodeling collects, uses, and
            protects information you provide through this website.
          </p>
          <h3 className="text-base font-bold text-navy-800">Information We Collect</h3>
          <p>
            When you submit an estimate request, we collect your name, phone number, email
            address, preferred contact method, the service you are interested in, and any message
            you provide. This information is used solely to respond to your request.
          </p>
          <h3 className="text-base font-bold text-navy-800">How We Use Your Information</h3>
          <p>
            We use the information you submit to contact you about your service request and to
            schedule appointments. We do not sell or rent your personal information to third
            parties.
          </p>
          <h3 className="text-base font-bold text-navy-800">Data Storage</h3>
          <p>
            Estimate requests are stored securely and are accessible only to authorized Terrano
 Plumbing & Remodeling personnel. Visitors cannot view, edit, or download other users'
            submissions.
          </p>
          <h3 className="text-base font-bold text-navy-800">Contact</h3>
          <p>
            If you have questions about this policy, please contact us at (561) 477-3197.
          </p>
          <p className="pt-2 text-xs text-gray-400">
            This is a basic privacy policy provided for this demo website and is not a substitute
            for legal review.
          </p>
        </div>
      </div>
    </div>
  );
}
