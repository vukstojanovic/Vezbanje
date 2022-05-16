import { createContext, useContext, useReducer } from "react";
import reducer from "../context/reducer";
import { displayAlert, clearAlert } from "../context/actions";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleDisplayAlert() {
    dispatch(displayAlert());
    handleClearAlert();
  }

  function handleClearAlert() {
    setTimeout(() => dispatch(clearAlert()), 3000);
  }

  return (
    <AppContext.Provider
      value={{ ...state, handleDisplayAlert, handleClearAlert }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext, initialState };
