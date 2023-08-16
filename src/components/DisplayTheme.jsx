// import { useContext } from "react";
import { useAppContext } from "../context/app-context";

const DisplayTheme = () => {
  // const context = useContext(AppContext);
  const [state] = useAppContext();

  return (
    // <div className="">{context.theme}</div>
    <div className="">{state.theme}</div>
  );
};

export default DisplayTheme;
