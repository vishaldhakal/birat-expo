import { fetcher } from "@/lib/axios";
import { useMemo } from "react";
import useSWR from "swr";

type StallBooking = {
  id: number;
  company: string;
  address: string;
  chief_executive: string;
  phone: string;
  city: string;
  country: string;
  email: string;
  status: "Pending" | "Approved" | "Rejected";
  stall_type: string;
  stall_no: string;
  merge_or_separate: "Merge" | "Separate";
  voucher: string;
  total_amount: string;
  advance_amount: string;
  remaining_amount: string;
  amount_in_words: string;
  terms_and_conditions_accepted: boolean;
  created_at: string;
  updated_at: string;
};

export function useGetStallData(page = 1, search = "") {
  const params = new URLSearchParams();
  params.set("page", String(page));
  if (search.trim()) {
    params.set("search", search.trim());
  }
  const URL = `https://cim.baliyoventures.com/api/stall/?${params.toString()}`;

  const { data, isLoading, error, isValidating, mutate } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(() => {
    const dataArray = Array.isArray(data) ? data : data?.results || [];
    return {
      stallData: (dataArray as StallBooking[]) || [],
      totalCount: (data?.count as number) ?? dataArray.length,
      nextPage: (data?.next as string | null) ?? null,
      previousPage: (data?.previous as string | null) ?? null,
      stallDataLoading: isLoading,
      stallDataError: error,
      stallDataValidating: isValidating,
      stallDataEmpty: !isLoading && !dataArray.length,
      mutateStallData: mutate,
    };
  }, [data, error, isLoading, isValidating, mutate]);

  return memoizedValue;
}
