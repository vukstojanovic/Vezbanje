import { initReactQueryAuth } from "react-query-auth";
import { deleteAccessToken } from "../pages/Auth/api/logoutUser";
import { getMyData } from "../pages/Auth/api/getMyData";
import { loginUser } from "../pages/Login/api/loginUser";
import { signupUser } from "../pages/Signup/api/signupUser";

async function loginFn(data) {
  const result = await loginUser(data);
  localStorage.setItem("accessToken", result.data.accessToken);
  localStorage.setItem("refreshToken", result.data.refreshToken);
  const user = await loadUser();
  return user;
}

async function registerFn(data) {
  const result = await signupUser(data);
  localStorage.setItem("accessToken", result.data.accessToken);
  const user = await loadUser();
  return user;
}

async function logoutFn() {
  try {
    await deleteAccessToken();
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
  } catch (error) {
    return error;
  }
}

async function loadUser() {
  try {
    const res = await getMyData();
    return res;
  } catch (error) {
    console.log(error);
  }
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
};

export const { AuthProvider, useAuth } = initReactQueryAuth(authConfig);
