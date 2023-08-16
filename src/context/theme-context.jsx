import { useReducer } from "react";
import { useContext } from "react";
// import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  empty: true,
});

export function useThemeContext() {
  return useContext(ThemeContext);
}

function reducer(state, action) {
  switch (action.type) {
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
export function ThemeProvider({ children }) {
  // const [user, setUser] = useState({});
  // const [theme, setTheme] = useState("dark");
  const [state, dispatch] = useReducer(reducer, initialState);

  // const appContextValue = {
  //   user,
  //   setUser,
  //   theme,
  //   setTheme,
  // };

  const themeContextValue = [state, dispatch];

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
