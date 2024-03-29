import axios from "axios";
import { queryConstants } from "../constants";
import { history } from "../providers/appProvider";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

// export function setupInterceptors(logoutMutation) {
//   axiosInstance.interceptors.request.use(
//     (req) => {
//       const accessToken = localStorage.getItem("accessToken");
//       if (accessToken) {
//         req.headers["x-auth-token"] = accessToken;
//       }
//       return req;
//     },
//     (err) => {
//       return Promise.reject(err);
//     }
//   );

//   axiosInstance.interceptors.response.use(
//     (res) => {
//       return res;
//     },
//     async (error) => {
//       const originalRequest = error.config;
//       if (error.response) {
//         if (
//           error.response.status === 403 &&
//           !originalRequest._retry &&
//           originalRequest.url !== "/auth/token"
//         ) {
//           originalRequest._retry = true;
//           const refreshToken = localStorage.getItem("refreshToken");
//           try {
//             const response = await axiosInstance.post("/auth/token", {
//               refreshToken,
//             });
//             console.log("sending to /token endpoint", response);
//             localStorage.setItem("accessToken", response.data.accessToken);
//             return axiosInstance({
//               ...originalRequest,
//               headers: originalRequest.headers.toJSON(),
//             });
//           } catch (err) {
//             console.log(err);
//             logoutMutation.mutate();
//             return Promise.reject(err);
//           }
//         }
//       }
//       console.log("response error", error);
//       return Promise.reject(error);
//     }
//   );
// }
