import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
// import { setupInterceptors } from "../../config/index";
import useDeleteAccessTokenMutation from "../../pages/Auth/api/logoutUser";
import { axiosInstance } from "../../config/index";

export default function InjectInterceptors() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const deleteAccessTokenMutation = useDeleteAccessTokenMutation();
  const requestInterceptor = useRef(null);
  const responseInterceptor = useRef(null);

  useEffect(() => {
    requestInterceptor.current = axiosInstance.interceptors.request.use(
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

    responseInterceptor.current = axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response) {
          if (
            error.response.status === 403 &&
            !originalRequest._retry &&
            originalRequest.url !== "/auth/token"
          ) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem("refreshToken");
            try {
              const response = await axiosInstance.post("/auth/token", {
                refreshToken,
              });
              console.log("sending to /token endpoint", response);
              localStorage.setItem("accessToken", response.data.accessToken);
              return axiosInstance({
                ...originalRequest,
                headers: originalRequest.headers.toJSON(),
              });
            } catch (err) {
              console.log(err);
              deleteAccessTokenMutation.mutate();
              return Promise.reject(err);
            }
          }
        }
        console.log("response error", error);
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return null;
}
