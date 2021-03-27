import axios from "axios";

import { API_BASE_URL } from "../../constants";

const baseClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Access-Control-Expose-Headers": "x-access-token",
    "Content-Type": "application/json",
  },
});

const renewAccessToken = async (): Promise<boolean> => {
  const refreshToken = localStorage.getItem("refresh-token"); // Switch to cookies?

  if (!refreshToken) {
    return false;
  }

  try {
    const res = await baseClient.post("auth/refresh", { token: refreshToken });
    baseClient.defaults.headers.common["x-access-token"] = res.data.data.token;
    localStorage.setItem("access-token", res.data.data.token);
    return true;
  } catch (error) {
    console.error(error.response.data);
    return false;
  }
};

export default {
  baseClient,
  renewAccessToken,
};
