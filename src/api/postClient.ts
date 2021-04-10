import { baseClient } from "./axiosClient";

const getPostDetail = async (post_id: string | number) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;

    const response = await baseClient.get(`posts/${post_id}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export { getPostDetail };
