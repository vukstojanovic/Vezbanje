import { useContext, useState, createContext } from "react";

const NextContext = createContext();

export function NextContextProvider({ children }) {
  const [role, setRole] = useState("admin");

  return (
    <NextContext.Provider value={{ role, setRole }}>
      {children}
    </NextContext.Provider>
  );
}

export function useNextContext() {
  return useContext(NextContext);
}
