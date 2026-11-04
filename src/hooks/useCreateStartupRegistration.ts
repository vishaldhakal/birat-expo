"use client";

import { useState, useCallback } from "react";
import { createStartupRegistration } from "@/api/startupRegistration";
import {
  StartupRegistrationPayload,
  StartupRegistrationResponse,
} from "@/types/startupRegistration";

export interface UseCreateStartupRegistrationOptions {
  onSuccess?: (data: StartupRegistrationResponse) => void;
  onError?: (error: Error) => void;
}

export function useCreateStartupRegistration(
  options?: UseCreateStartupRegistrationOptions
) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<StartupRegistrationResponse | null>(null);

  const mutate = useCallback(
    async (payload: StartupRegistrationPayload) => {
      setIsPending(true);
      setError(null);
      try {
        const result = await createStartupRegistration(payload);
        setData(result);
        options?.onSuccess?.(result);
        return result;
      } catch (err: any) {
        const errorObj =
          err instanceof Error
            ? err
            : new Error(typeof err === "string" ? err : "Failed to submit enquiry.");
        setError(errorObj);
        options?.onError?.(errorObj);
        throw errorObj;
      } finally {
        setIsPending(false);
      }
    },
    [options]
  );

  const reset = useCallback(() => {
    setIsPending(false);
    setError(null);
    setData(null);
  }, []);

  return {
    mutate,
    isPending,
    error,
    data,
    reset,
  };
}

