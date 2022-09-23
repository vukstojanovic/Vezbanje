import { axiosInstance } from "../api/axios";

interface LoginAndSignupData {
  email: string;
  password: string;
}

interface LoginReturnData {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface Post {
  title: string;
  content: string;
}

export async function signup({ email, password }: LoginAndSignupData) {
  try {
    const res = await axiosInstance.post("/auth/signup", { email, password });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function login({ email, password }: LoginAndSignupData) {
  const { data } = await axiosInstance.post<
    LoginAndSignupData,
    LoginReturnData
  >("/auth/login", { email, password });
  console.log(data);
  const { accessToken, refreshToken } = data;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
}

export function getPublicPosts() {
  return axiosInstance.get<Post[]>("/posts/public");
}

export function getPrivatePosts() {
  return axiosInstance.get<Post[]>("/posts/private");
}
