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

const getUserCourses = async (uid: string | number) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;
    const response = await baseClient.get(`/users/${uid}/courses`);

    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const getCourseDetail = async (cid: string | number) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;

    const response = await baseClient.get(`courses/${cid}`);
    
    return response.data;
  } catch (error) {
    
  }
}

const getCoursePosts = async (cid: string | number) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;
    const response = await baseClient.get(`courses/${cid}/posts`);

    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export { getAllCourses, getUserCourses, getCourseDetail, getCoursePosts };
