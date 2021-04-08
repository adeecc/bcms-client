import { baseClient } from "./axiosClient";

const getAllCourses = async () => {
  try {
    // console.log(baseClient.defaults.headers.common["authorization"])
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;
    const response = await baseClient.get("courses/");

    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const getCoursePosts = async (cid: string | number) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;
    const response = await baseClient.get(`/posts/${cid}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export { getAllCourses, getCoursePosts};
