import { useSelector, useDispatch } from "react-redux";
// Type-only import, so "import type" is required.
import type { RootState } from "../store/store";
import { increment, decrement, reset } from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
  // useSelector READS from global state. The component re-renders
  // automatically whenever state.counter.value changes.
  const count = useSelector((state: RootState) => state.counter.value);

  // useDispatch gives us the function used to UPDATE global state
  // by sending actions to the store.
  const dispatch = useDispatch();

  return (
    <div className={styles.counterContainer}>
      <h2>Counter: {count}</h2>
      {/* Each click dispatches an action, the reducer produces new state,
          and the UI updates. */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;