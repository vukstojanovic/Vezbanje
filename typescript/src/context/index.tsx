import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextProps {
  user: boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps>({
  user: true,
  setUser: () => {},
});

export function AppContextProvider({ children }: PropsWithChildren<unknown>) {
  const [user, setUser] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
