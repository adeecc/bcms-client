import { Tag } from "../global/interfaces/Post";
import { baseClient } from "./axiosClient";

const getAllTags = async () => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;

    const response = await baseClient.get("tags");
    console.log(response);

    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

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

const createPost = async (
  cid: string | number,
  title: string,
  body: string,
  tags?: string[]
) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;

    const data = {
      title,
      body,
      tags,
    };

    console.log(data);
    // console.table(data)

    const response = await baseClient.post(`posts/${cid}`, data);

    return response.data;
  } catch (error) {
    console.error(error);
    return {}
  }
};

const updatePost = async (
  pid: string | number,
  title: string,
  body: string,
  tags?: string[]
) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;

    const data = {
      updated_title: title,
      updated_body: body,
      updated_tags: tags,
    };

    console.log(data);
    // console.table(data)

    const response = await baseClient.put(`posts/${pid}`, data);

    return response.data;
  } catch (error) {
    console.error(error);
    return {}
  }
};

const deletePost = async (pid: string | number) => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;

    const response = await baseClient.delete(`posts/${pid}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return {}
  }
}

export { getPostDetail, getAllTags, createPost, updatePost, deletePost };
