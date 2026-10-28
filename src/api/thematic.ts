import { fetcher } from "@/lib/axios";
import {
  ThematicRegistration,
  ThematicRegistrationResponse,
  ThematicSession,
} from "@/types/thematic";
import { useMemo } from "react";
import useSWR from "swr";

interface RegistrationError {
  error?: string;
  message?: string;
}

export async function registerForThematic(
  formData: ThematicRegistration | FormData
): Promise<any> {
  const FETCH_TIMEOUT = 30000; // 30 seconds timeout for file uploads

  const fetchWithTimeout = async (url: string, options: RequestInit) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  };

  try {
    const isFormData = typeof FormData !== "undefined" && formData instanceof FormData;

    // Main registration request
    const response = await fetchWithTimeout(
      "https://cim.baliyoventures.com/api/thematic-registrations/",
      {
        method: "POST",
        headers: isFormData
          ? {}
          : {
              "Content-Type": "application/json",
            },
        body: isFormData ? formData : JSON.stringify(formData),
      }
    );

    let data: any;
    try {
      data = await response.json();
    } catch (parseError) {
      throw new Error("Failed to parse server response");
    }

    if (!response.ok) {
      let errorMessage =
        (data as RegistrationError).error ||
        (data as RegistrationError).message;

      if (!errorMessage && data && typeof data === "object") {
        const errorEntries = Object.entries(data);
        if (errorEntries.length > 0) {
          const [field, errVal] = errorEntries[0];
          const text = Array.isArray(errVal) ? errVal.join(", ") : String(errVal);
          errorMessage = `${field}: ${text}`;
        }
      }

      throw new Error(errorMessage || "Registration failed. Please try again.");
    }

    // Send confirmation email in the background
    Promise.resolve().then(async () => {
      try {
        const emailResponse = await fetchWithTimeout(
          "/api/thematic-registration",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!emailResponse.ok) {
          console.error(
            "Failed to send confirmation email:",
            await emailResponse.text().catch(() => "Unknown error")
          );
        }
      } catch (emailError) {
        console.error("Error sending confirmation email:", emailError);
      }
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Request timed out. Please try again.");
    }
    throw new Error("An unexpected error occurred. Please try again.");
  }
}

export function useGetThematicSessions() {
  const URL = useMemo(
    () => "https://cim.baliyoventures.com/api/thematic-sessions/",
    []
  );

  const { data, error, isLoading, isValidating } = useSWR<any>(
    URL,
    fetcher
  );

  const memoizedValue = useMemo(() => {
    const sessionsArray = Array.isArray(data) ? data : (data?.results || []);
    return {
      thematicSessions: sessionsArray as ThematicSession[],
      thematicSessionsLoading: isLoading,
      thematicSessionsError: error,
      thematicSessionsValidating: isValidating,
      thematicSessionsEmpty: !isLoading && !sessionsArray.length,
    };
  }, [data, isLoading, isValidating, error]);

  return memoizedValue;
}

export interface PaginatedThematicRegistrationsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ThematicRegistrationResponse[];
}

export function useGetThematicRegistrations(page: number = 1) {
  const URL = `https://cim.baliyoventures.com/api/thematic-registrations/?page=${page}`;

  const { data, error, isLoading, isValidating } = useSWR<any>(URL, fetcher);

  const memoizedValue = useMemo(() => {
    const isPaginated = data && typeof data === "object" && "results" in data;
    const registrationsArray: ThematicRegistrationResponse[] = isPaginated
      ? data.results || []
      : Array.isArray(data)
      ? data
      : [];

    const count: number = isPaginated ? data.count : registrationsArray.length;
    const next: string | null = isPaginated ? data.next : null;
    const previous: string | null = isPaginated ? data.previous : null;

    return {
      thematicRegistrations: registrationsArray,
      count,
      next,
      previous,
      thematicRegistrationsLoading: isLoading,
      thematicRegistrationsError: error,
      thematicRegistrationsValidating: isValidating,
      thematicRegistrationsEmpty: !isLoading && !registrationsArray.length,
    };
  }, [data, isLoading, isValidating, error]);

  return memoizedValue;
}
