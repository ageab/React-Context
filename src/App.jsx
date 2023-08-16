import Data from "./components/Data";
import { AppProvider } from "./context/app-context";
import Setting from "./components/Setting";
import DisplayTheme from "./components/DisplayTheme";
import ToggleTheme from "./components/ToggleTheme";
// import Reducer from "./components/Reducer";

function App() {
  return (
    <>
      <div className="relative">
        {/* <Reducer /> */}
        <AppProvider>
          <Data />
          <hr />
          <Setting />
          <hr />
          <DisplayTheme />
          <ToggleTheme />
        </AppProvider>
      </div>
    </>
  );
}

export default App;
