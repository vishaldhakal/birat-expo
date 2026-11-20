import React, { Suspense } from "react";
import GuidedTourRegistrationForm from "@/components/guided-tour/guided-tour-registration-form";
import { Loader2 } from "lucide-react";

export default function BdsConnectRegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <p className="text-sm">Loading Registration Form...</p>
          </div>
        </div>
      }
    >
      <GuidedTourRegistrationForm />
    </Suspense>
  );
}
