import { client } from "./axiosClient";

const getNotifications = async () => {
  return await client.get("notification");
};

const clearAllNotifications = async () => {
  return await client.post("notification/read/all");
};

export { getNotifications, clearAllNotifications };
