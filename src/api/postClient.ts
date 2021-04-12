import { Tag } from "../global/interfaces/Post";
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

const createPost = async (
  cid: string | number,
  title: string,
  body: string,
  tags?: Tag[]
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

    console.table(data)

    const response = await baseClient.post(`posts/${cid}`, data);

    return response.data;
  } catch (error) {}
};

export { getPostDetail, createPost };
