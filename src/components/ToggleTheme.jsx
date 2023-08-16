// import { useAppContext } from "../context/app-context";
import { useThemeContext } from "../context/theme-context";

const ToggleTheme = () => {
  //   const context = useAppContext();
//   const [, dispatch] = useAppContext();
  const [, dispatch] = useThemeContext();
  return (
    // <button
    //   onClick={() =>
    //     context.theme ===
    //     context.setTheme(context.theme === "light" ? "dark" : "light")
    //   }
    // >
    //   Toggle Theme
    // </button>
    <button onClick={() => dispatch({ type: "toggleTheme" })}>
      Toggle Theme
    </button>
  );
};

export default ToggleTheme;
