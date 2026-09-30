import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Type-only import, so "import type" is required.
import type { RootState } from "../store/store";
import {
  increment,
  decrement,
  reset,
  setValue,
} from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
  // useSelector READS from global state. The component re-renders
  // automatically whenever state.counter.value changes.
  const count = useSelector((state: RootState) => state.counter.value);
  const [customValue, setCustomValue] = useState(String(count));

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
      <label>
        Set counter value
        <input
          type="number"
          value={customValue}
          onChange={(event) => setCustomValue(event.target.value)}
        />
      </label>
      <button
        onClick={() => {
          const value = Number(customValue);
          if (Number.isFinite(value)) {
            dispatch(setValue(value));
          }
        }}
      >
        Set value
      </button>
    </div>
  );
};

export default Counter;