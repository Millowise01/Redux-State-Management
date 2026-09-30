import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

// combineReducers merges many reducers into one root reducer.
// Each key becomes a slice of the global state, so the counter
// value is read later as state.counter.value.
// To add more features later (e.g. auth), add another key here.
export const rootReducer = combineReducers({
  counter: counterReducer,
});