import { client } from "./axiosClient";

const getAllCourses = async () => {
  return await client.get("/courses");
};

const getUserCourses = async (uid: string | number) => {
  return await client.get(`/users/${uid}/courses/student`);
};

const getProfCourses = async (uid: string | number) => {
  return await client.get(`/users/${uid}/courses/prof`);
};

const getCourseDetail = async (cid: string | number) => {
  return await client.get(`courses/${cid}`);
};

const getCoursePosts = async (cid: string | number) => {
  return await client.get(`courses/${cid}/posts`);
};

const enrollToCourse = async (cid: string | number, uid: string | number) => {
  const data = {
    id: uid,
  };

  return await client.post(`courses/${cid}/enroll`, data);
};

const withdrawFromCourse = async (
  cid: string | number,
  uid: string | number
) => {
  const data = {
    id: uid,
  };

  return await client.post(`courses/${cid}/disenroll`, data);
};

const createCourse = async (
  name: string,
  code: string,
  year: string,
  sem: string
) => {
  const data = {
    course: {
      name,
      code,
      year,
      sem,
    },
  };

  return await client.post(`courses/create`, data);
};

const deleteCourse = async (cid: string | number) => {
  return await client.delete(`courses/${cid}`);
};

export {
  getAllCourses,
  getUserCourses,
  getProfCourses,
  getCourseDetail,
  getCoursePosts,
  enrollToCourse,
  withdrawFromCourse,
  createCourse,
  deleteCourse,
};
