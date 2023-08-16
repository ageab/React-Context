import { useAppContext } from "../context/app-context";

export default function Setting() {
  // const context = useAppContext();
  const [state, dispatch] = useAppContext();

  return (
    // <input
    //   type="text"
    //   placeholder="Change Name"
    //   onChange={(e) =>
    //     context.setUser({ ...context.user, name: e.target.value })
    //   }
    //   value={context.user.name ?? ''}
    // />
    <input
      type="text"
      placeholder="Change Name"
      onChange={(e) =>
        dispatch({
          type: "updateUser",
          payload: { ...state.user, name: e.target.value },
        })
      }
      value={state.user.name ?? ""}
    />
  );
}
