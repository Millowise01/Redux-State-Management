import type { UnknownAction } from "redux";
import {
  INCREMENT,
  DECREMENT,
  RESET,
  SET_VALUE,
} from "../actions/counterActions";
// "import type" is required here: CounterAction is only a type,
// and the Vite TS template enforces this (verbatimModuleSyntax).
import type { CounterAction } from "../actions/counterActions";

// Shape of the counter slice of the global state.
// Exported so other files can reuse the type if needed.
export interface CounterState {
  value: number;
}

// The state the counter starts with when the app first loads.
const initialState: CounterState = {
  value: 0,
};

// A reducer is a pure function: (currentState, action) => newState.
// Rules: never mutate `state`, always return a new object,
// and always return `state` unchanged for unknown actions.
export const counterReducer = (
  state: CounterState = initialState, // default value used on first run
  action: CounterAction | UnknownAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    case RESET:
      return { value: 0 };
    case SET_VALUE:
      return "payload" in action && typeof action.payload === "number"
        ? { value: action.payload }
        : state;
    default:
      // Unknown action: return the same state untouched.
      return state;
  }
};