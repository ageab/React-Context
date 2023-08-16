import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "toggle theme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error();
  }
}

const initialState = {
  count: 0,
  theme: "light",
};

const Reducer = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        -
      </button>
      <strong>{state.count}</strong>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        +
      </button>
      Theme: {state.theme}
      <button onClick={() => dispatch({ type: "toggle theme" })}>
        Toggle Theme
      </button>
    </>
  );
};

export default Reducer;
