import { baseClient } from "./axiosClient";

const getNotifications = async () => {
  try {
    baseClient.defaults.headers.common[
      "authorization"
    ] = `$Bearer ${localStorage.getItem("access-token")}`;

    const response = await baseClient.get("notification/");

    return response.data;
  } catch (error) {}
};

const clearAllNotifications = async () => {
    try {
        baseClient.defaults.headers.common[
            "authorization"
          ] = `$Bearer ${localStorage.getItem("access-token")}`;
        
          const response = await baseClient.post("notification/read/all");

          console.log(response);
          return response.data;
    } catch (error) {
        
    }
}

export { getNotifications, clearAllNotifications };