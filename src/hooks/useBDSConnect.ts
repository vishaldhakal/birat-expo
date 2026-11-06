"use client";

import { useState, useCallback } from "react";
import { submitBDSConnect, BDSConnectPayload, BDSConnectResponse } from "@/api/bdsConnect";

export interface UseBDSConnectOptions {
  onSuccess?: (data: BDSConnectResponse) => void;
  onError?: (error: Error) => void;
}

export const useBDSConnect = (options?: UseBDSConnectOptions) => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<BDSConnectResponse | null>(null);

  const mutate = useCallback(
    async (payload: BDSConnectPayload) => {
      setIsPending(true);
      setIsSuccess(false);
      setIsError(false);
      setError(null);
      try {
        const result = await submitBDSConnect(payload);
        setData(result);
        setIsSuccess(true);
        options?.onSuccess?.(result);
        return result;
      } catch (err: any) {
        const errorObj =
          err instanceof Error
            ? err
            : new Error(typeof err === "string" ? err : "Failed to submit BDS registration.");
        setError(errorObj);
        setIsError(true);
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
    setIsSuccess(false);
    setIsError(false);
    setError(null);
    setData(null);
  }, []);

  return {
    mutate,
    mutateAsync: mutate,
    isPending,
    isSuccess,
    isError,
    error,
    data,
    reset,
  };
};

