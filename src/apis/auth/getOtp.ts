import apiCaller from "../../services/useFetch";

interface body {
  mobile_number: any;
}
/**
 * The function `getData` makes an asynchronous API call to retrieve data using an access token and
 * returns the data.
 * @returns the data received from the API call.
 */

export async function getOtpRequest({ mobile_number }: body) {
  try {
    const res = await apiCaller().get<body, any>("v1/auth/getOtpAndAddSecret", {
      params: {
        mobile_number,
      },
    });

    if (res.status !== 200) {
      throw new Error(res?.data?.message);
    }
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    return { status: false };
  }
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
}
