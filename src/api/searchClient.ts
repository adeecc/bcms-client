import {baseClient} from "./axiosClient";

const search = async (searchString: String)  => {
    try {
        // console.log(baseClient.defaults.headers.common["authorization"])
        baseClient.defaults.headers.common[
          "authorization"
        ] = `$Bearer ${localStorage.getItem("access-token")}`;
        const response = await baseClient.get("search?search=" + searchString);
    
        return response.data;
      } catch (error) {
        console.error(error);
        return {};
      }
};

export {
    search
}