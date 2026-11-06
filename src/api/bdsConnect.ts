import axios from "axios";

export const BDS_API_BASE_URL = "https://cim.baliyoventures.com";

export interface BDSConnectPayload {
  track: "business" | "provider";
  name: string;
  phone: string;
  email?: string;
  gender?: string;
  business_name?: string;
  district?: string;
  web?: string;
  // Business track only
  want?: string;
  sector?: string;
  registered?: string;
  years?: string;
  staff?: string;
  ledby?: string;
  needs?: string;
  problem?: string;
  day?: string;
  time?: string;
  // Provider track only
  services?: string;
  description?: string;
  participation?: string;
}

export interface BDSConnectResponse {
  detail: string;
  id: number;
  track: string;
  name: string;
}

export const submitBDSConnect = async (
  payload: BDSConnectPayload
): Promise<BDSConnectResponse> => {
  const url = `${BDS_API_BASE_URL}/api/bds/connect/register/`;

  try {
    const { data } = await axios.post<BDSConnectResponse>(url, payload, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const errData = error.response.data;
      if (typeof errData === "object" && errData !== null) {
        const fieldErrors: string[] = [];
        for (const [key, val] of Object.entries(errData)) {
          const msg = Array.isArray(val) ? val.join(", ") : String(val);
          fieldErrors.push(`${key}: ${msg}`);
        }
        if (fieldErrors.length > 0) {
          const customError = new Error(fieldErrors.join(" | "));
          (customError as any).response = error.response;
          (customError as any).fieldErrors = errData;
          throw customError;
        }
      }
    }
    throw error;
  }
};
