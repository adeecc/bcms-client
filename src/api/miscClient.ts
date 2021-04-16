import { client } from "./axiosClient";

const search = async (searchString: string) => {
  return await client.get(`search?search=${searchString}`);
};

export { search };
