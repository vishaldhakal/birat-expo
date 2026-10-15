import ThematicRegistrationForm from "@/components/thematic/thematic-registration-form";
import { Loader2Icon } from "lucide-react";
import { Suspense } from "react";

export default function ThematicRegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2">
            A Flagship Business Networking Platform · Birat Expo 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Birat Business Summit 2026
          </h1>
          <p className="text-lg font-medium text-indigo-700 mt-1">
            Opportunity Connect
          </p>
          <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
            Connecting Chambers, Industries, Investors, Buyers, Suppliers and Entrepreneurs Across Nepal.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
              📅 22–24 December, 2026
            </span>
            <span className="inline-flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
              📍 Biratnagar, Nepal
            </span>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="text-center text-gray-500 min-h-screen flex items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-2">
                  <Loader2Icon className="w-6 h-6 animate-spin" />
                </div>
              </div>
            </div>
          }
        >
          <ThematicRegistrationForm />
        </Suspense>
      </div>
    </div>
  );
}
