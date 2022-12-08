import { createContext, useContext } from "react";
import useMyDataQuery from "../pages/Auth/api/getMyData";

const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
  const { data, isError, isLoading } = useMyDataQuery();
  const isAuth = !isError && !isLoading;

  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
