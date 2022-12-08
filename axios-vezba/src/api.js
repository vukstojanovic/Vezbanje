import axios from "axios";
import { redirect } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

axiosInstance.interceptors.response.use(
  async (res) => {
    console.log("our response", res);
    console.log(redirect);
    redirect("/contact");
    return res;
  },
  (err) => {
    console.log(err);
    return err;
  }
);

export { axiosInstance };
