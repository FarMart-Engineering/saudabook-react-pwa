import apiCaller from "../../services/useFetch";

interface body {
  mobile_number: any;
  otp: number;
}
interface Response {
  token: string;
  is_profile_completed: boolean;
}

/**
 * The function `getData` makes an asynchronous API call to retrieve data using an access token and
 * returns the data.
 * @returns the data received from the API call.
 */

export async function verifyOtp({ mobile_number, otp }: body) {
  try {
    const res = await apiCaller().post<body, Response>("v1/auth/verifyOtp", {
      mobile_number,
      otp,
    });
    if (res.status !== 200) {
      throw new Error(res?.data?.message);
    }
    return res.data;
  } catch (error: any) {
    return { status: false };
  }
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
}
