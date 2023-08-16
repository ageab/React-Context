// import { useContext } from "react";
// import { useAppContext } from "../context/app-context";
import { useThemeContext } from "../context/theme-context";

const DisplayTheme = () => {
  // const context = useContext(AppContext);
//   const [state] = useAppContext();
  const [state] = useThemeContext();

  return (
    // <div className="">{context.theme}</div>
    <div className="">{state.theme}</div>
  );
};

export default DisplayTheme;
