import { baseClient } from "./axiosClient";

const login = async (username: string, password: string) => {
  try {
    const response = await baseClient.post("auth/login", {
      username,
      password,
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const register = async (
  username: string,
  name: string,
  email: string,
  phone_no: string,
  password: string
) => {
  try {
    const response = await baseClient.post("auth/register", {
      username,
      password,
      name,
      email,
      phone_no,
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { login, register };
