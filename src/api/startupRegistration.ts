import {
  StartupRegistrationPayload,
  StartupRegistrationResponse,
} from "@/types/startupRegistration";

const API_BASE_URL = "https://cim.baliyoventures.com";

export async function createStartupRegistration(
  payload: StartupRegistrationPayload
): Promise<StartupRegistrationResponse> {
  const url = `${API_BASE_URL.replace(/\/+$/, "")}/api/startup/registrations/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    let message = "Failed to submit enquiry.";
    if (errorData?.detail) {
      message = errorData.detail;
    } else if (errorData && typeof errorData === "object") {
      const parts: string[] = [];
      for (const [key, val] of Object.entries(errorData)) {
        const text = Array.isArray(val) ? val.join(", ") : String(val);
        parts.push(`${key}: ${text}`);
      }
      if (parts.length > 0) {
        message = parts.join(" | ");
      }
    }

    throw new Error(message);
  }

  return response.json();
}

