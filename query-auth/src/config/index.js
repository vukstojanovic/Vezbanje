import axios from "axios";
import { history } from "../providers/appProvider";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (req) => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(axiosInstance.defaults);
    if (accessToken) {
      req.headers["x-auth-token"] = accessToken;
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response) {
      if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem("refreshToken");
        try {
          const response = await axiosInstance.post("/auth/token", {
            refreshToken,
          });
          console.log("sending to /token endpoint", response);
          localStorage.setItem("accessToken", response.data.accessToken);
          // axiosInstance.defaults.headers.post["Accept"] =
          //   "application/x-www-form-urlencoded";
          return axiosInstance(originalRequest);
        } catch (err) {
          console.log(err);
          Promise.reject(err);
          // history.replace("/login");
        }
      }
    }
    return Promise.reject(error);
  }
);
