import Data from "./components/Data";
import { AppProvider } from "./context/app-context";
import Setting from "./components/Setting";
import DisplayTheme from "./components/DisplayTheme";
import ToggleTheme from "./components/ToggleTheme";
import { ThemeProvider } from "./context/theme-context";
// import Reducer from "./components/Reducer";

function App() {
  return (
    <>
      <div className="relative">
        {/* <Reducer /> */}
        <AppProvider>
          <ThemeProvider>
            <Data />
            <hr />
            <Setting />
            <hr />
            <DisplayTheme />
            <ToggleTheme />
          </ThemeProvider>
        </AppProvider>
      </div>
    </>
  );
}

export default App;
