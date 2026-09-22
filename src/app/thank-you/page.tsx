import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Home, Phone, Mail } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100 text-center space-y-6">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner ring-8 ring-emerald-50">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          Submission Confirmed
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Thank You!
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mt-2">
            Your application for <strong>BIRAT EXPO 2026</strong> has been
            successfully received by our secretariat.
          </p>
        </div>

        {/* Steps Box */}
        <div className="p-5 bg-blue-50/70 border border-blue-100 rounded-2xl text-left space-y-2">
          <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">
            What Happens Next:
          </p>
          <ul className="text-xs sm:text-sm text-blue-800 space-y-1.5 list-disc list-inside">
            <li>Our team will review your application within 24–48 hours.</li>
            <li>You will receive formal confirmation and next steps via email.</li>
            <li>For urgent queries, reach out directly to the Expo Helpdesk.</li>
          </ul>
        </div>

        {/* Support contact */}
        <div className="text-xs text-gray-500 pt-2 flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-gray-400" />
            +977-21-524225
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-gray-400" />
            info@baliyoventures.com
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all"
          >
            <Home className="w-4 h-4" />
            Return to Home
          </Link>
          <Link
            href="/sponsorship"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-3.5 rounded-xl text-sm transition-all"
          >
            View Sponsorship Tiers
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
