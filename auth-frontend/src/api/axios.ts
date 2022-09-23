import axios from "axios";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers = {
        "x-auth-token": accessToken,
        "Content-Type": "application/json",
      };
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;

    if (err.response) {
      if (err.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem("refreshToken");

        try {
          const response = await axiosInstance.post<
            { refreshToken: string },
            { data: { accessToken: string }; status: number }
          >("/auth/token", { refreshToken });
          console.log(response, "sending to /token endpoint", history);
          localStorage.setItem("accessToken", response.data.accessToken);

          return axiosInstance(originalRequest);
        } catch (_err) {
          console.log(_err);
          Promise.reject(_err);
        }
      }
    }
    return Promise.reject(err);
  }
);
