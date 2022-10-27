import axios from "axios";
import { history } from "../index";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (req) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      req.headers["x-auth-token"] = accessToken;
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// axiosInstance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     if (error.response.status === 403) {
//       history.replace("/login");
//     }
//     return Promise.reject(error);
//   }
// );
