import axios from "axios";
import useSWR from "swr";
import { useMemo } from "react";
import {
  LearnAndWorkBookingPayload,
  LearnAndWorkBookingResponse,
  LearnAndWorkBooking,
} from "@/types/learnAndWork";

export const LEARN_AND_WORK_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://cim.baliyoventures.com";

const getHeaders = () => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // If token is stored in localStorage, include Authorization header
  if (typeof window !== "undefined") {
    const token =
      localStorage.getItem("adminToken") || localStorage.getItem("jwtToken");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return headers;
};

export const createBooking = async (
  data: LearnAndWorkBookingPayload,
): Promise<LearnAndWorkBookingResponse> => {
  const url = `${LEARN_AND_WORK_API_BASE_URL}/api/learn-and-work/bookings/`;

  try {
    const res = await axios.post<LearnAndWorkBookingResponse>(url, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const errData = error.response.data as Record<string, any>;
      const fieldErrors: string[] = [];

      for (const [key, val] of Object.entries(errData)) {
        const msg = Array.isArray(val) ? val.join(", ") : String(val);
        fieldErrors.push(`${key}: ${msg}`);
      }

      const customError = new Error(
        fieldErrors.length > 0
          ? fieldErrors.join(" | ")
          : "Booking submission failed.",
      );
      (customError as any).response = error.response;
      (customError as any).fieldErrors = errData;
      throw customError;
    }
    throw error;
  }
};

export const fetchBookings = async (params?: {
  zone?: string;
  date?: string;
  search?: string;
}): Promise<LearnAndWorkBooking[]> => {
  const url = `${LEARN_AND_WORK_API_BASE_URL}/api/learn-and-work/bookings/`;
  const res = await axios.get(url, {
    params,
    headers: getHeaders(),
  });

  // Handle both array responses and paginated { results: [] }
  if (Array.isArray(res.data)) {
    return res.data;
  } else if (res.data && Array.isArray(res.data.results)) {
    return res.data.results;
  }
  return [];
};

export const fetchBooking = async (
  id: number,
): Promise<LearnAndWorkBooking> => {
  const url = `${LEARN_AND_WORK_API_BASE_URL}/api/learn-and-work/bookings/${id}/`;
  const res = await axios.get<LearnAndWorkBooking>(url, {
    headers: getHeaders(),
  });
  return res.data;
};

export const deleteBooking = async (id: number): Promise<void> => {
  const url = `${LEARN_AND_WORK_API_BASE_URL}/api/learn-and-work/bookings/${id}/`;
  await axios.delete(url, {
    headers: getHeaders(),
  });
};

// SWR fetcher
const fetcher = async (url: string) => {
  const res = await axios.get(url, {
    headers: getHeaders(),
  });
  return res.data;
};

export function useGetLearnAndWorkBookings(filters?: {
  zone?: string;
  date?: string;
}) {
  const queryParams = new URLSearchParams();
  if (filters?.zone) queryParams.set("zone", filters.zone);
  if (filters?.date) queryParams.set("date", filters.date);

  const queryString = queryParams.toString();
  const url = `${LEARN_AND_WORK_API_BASE_URL}/api/learn-and-work/bookings/${
    queryString ? `?${queryString}` : ""
  }`;

  const { data, error, isLoading, isValidating, mutate } = useSWR<any>(
    url,
    fetcher,
    {
      revalidateOnFocus: true,
      dedupingInterval: 5000,
    },
  );

  const memoizedValue = useMemo(() => {
    let bookingsArray: LearnAndWorkBooking[] = [];
    let count = 0;

    if (Array.isArray(data)) {
      bookingsArray = data;
      count = data.length;
    } else if (data && typeof data === "object" && "results" in data) {
      bookingsArray = data.results || [];
      count = data.count || bookingsArray.length;
    }

    return {
      bookings: bookingsArray,
      count,
      isLoading,
      isValidating,
      error,
      isEmpty: !isLoading && bookingsArray.length === 0,
      mutate,
    };
  }, [data, isLoading, isValidating, error, mutate]);

  return memoizedValue;
}
