import { useEffect } from "react";
import { useReducer } from "react";
import { useContext } from "react";
// import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({
  empty: true,
});

export function useAppContext() {
  return useContext(AppContext);
}

function reducer(state, action) {
  switch (action.type) {
    case "updateUser":
      return { ...state, user: action.payload };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error(`Unhandler action type ${action.type}`);
  }
}

const initialState = {
  user: {},
  theme: "dark",
};

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  // const [user, setUser] = useState({});
  // const [theme, setTheme] = useState("dark");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = {
      id: 1,
      name: "Age",
      phoneNumber: "012321312",
      address: "Bandung",
    };

    // setUser(user);
    dispatch({
      type: "updateUser",
      payload: user,
    });
  }, []);

  // const appContextValue = {
  //   user,
  //   setUser,
  //   theme,
  //   setTheme,
  // };

  const appContextValue = [state, dispatch];

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}
