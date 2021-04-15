import { client } from "./axiosClient";

const getAllTags = async () => {
  return await client.get("tags");
};

const getPostDetail = async (post_id: string | number) => {
  return await client.get(`posts/${post_id}`);
};

const createPost = async (
  cid: string | number,
  title: string,
  body: string,
  tags?: string[]
) => {
  const data = {
    title,
    body,
    tags,
  };

  return await client.post(`posts/${cid}`, data);
};

const updatePost = async (
  pid: string | number,
  title: string,
  body: string,
  tags?: string[]
) => {
  const data = {
    updated_title: title,
    updated_body: body,
    updated_tags: tags,
  };

  return await client.put(`posts/${pid}`, data);
};

const deletePost = async (pid: string | number) => {
  return await client.delete(`posts/${pid}`);
};

export { getPostDetail, getAllTags, createPost, updatePost, deletePost };
