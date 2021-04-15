import axios, { AxiosRequestConfig } from "axios";

import {
  __apiBaseUrl__,
  __accessTokenKey__,
  __refreshTokenKey__,
} from "../constants";

const baseClient = axios.create({
  baseURL: __apiBaseUrl__,
  headers: {
    "Access-Control-Expose-Headers": "authorization",
    "Content-Type": "application/json",
  },
});

const renewAccessToken = async (): Promise<boolean> => {
  const refreshToken = localStorage.getItem(__refreshTokenKey__); // Switch to cookies?

  if (!refreshToken) {
    return false;
  }

  try {
    const res = await baseClient.post("auth/refresh", { token: refreshToken });
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${res.data.data.token}`;
    localStorage.setItem(__accessTokenKey__, res.data.data.token);
    return true;
  } catch (error) {
    console.error(error.response.data);
    return false;
  }
};

const resolver = async (config: AxiosRequestConfig) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `Bearer ${localStorage.getItem("access-token")}`;

    const response = await baseClient.request(config);
    console.log("Succesful Request", config, response);

    return response.data;
  } catch (error) {
    console.log("Errored Out", error);
    return [];
  }
};

const client = {
  get: (url: string, config?: AxiosRequestConfig) => {
    return resolver({
      ...config,
      url,
      method: "get",
    });
  },
  post: (url: string, data?: any, config?: AxiosRequestConfig) => {
    return resolver({
      ...config,
      url,
      data,
      method: "post",
    });
  },
  put: (url: string, data: any, config?: AxiosRequestConfig) => {
    return resolver({
      ...config,
      url,
      data,
      method: "put",
    });
  },
  delete: (url: string, config?: AxiosRequestConfig) => {
    return resolver({
      ...config,
      url,
      method: "delete",
    });
  },
};

export { baseClient, renewAccessToken, resolver, client };
