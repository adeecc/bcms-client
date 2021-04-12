import { AxiosRequestConfig } from "axios";
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
    const response = await baseClient.get(`/users/${uid}/courses/student`);

    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const getProfCourses = async (uid: string | number) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;

    const response = await baseClient.get(`/users/${uid}/courses/prof`);
    console.log(response.data);

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
  } catch (error) {}
};

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

const enrollToCourse = async (cid: string | number, uid: string | number) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;

    const data = {
      id: uid,
    }

    const response = await baseClient.post(`courses/${cid}/enroll`, data);

    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const withdrawFromCourse = async (
  cid: string | number,
  uid: string | number
) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;

    const data = {
      id: uid,
    }

    const response = await baseClient.post(`courses/${cid}/disenroll`, data);

    return response.data;
  } catch (error) {}
};

export {
  getAllCourses,
  getUserCourses,
  getProfCourses,
  getCourseDetail,
  getCoursePosts,
  enrollToCourse,
  withdrawFromCourse,
};
