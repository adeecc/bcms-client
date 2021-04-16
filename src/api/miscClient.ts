import { client } from "./axiosClient";

const search = async (searchString: string) => {
  return await client.get(`search?search=${searchString}`);
};

const getAllUsers = async () => {
  return await client.get(`users/`);
}

export { search, getAllUsers };
