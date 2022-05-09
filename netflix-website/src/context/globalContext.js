import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [heroImage, setHeroImage] = useState(null);

  return (
    <GlobalContext.Provider value={{ heroImage, setHeroImage }}>
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalContextProvider, useGlobalContext };
