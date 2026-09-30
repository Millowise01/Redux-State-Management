// Action type constants.
// "as const" makes TypeScript treat each one as an exact string
// (e.g. "INCREMENT") instead of a general string. This is what lets
// the reducer's switch statement type-check properly.
export const INCREMENT = "INCREMENT" as const;
export const DECREMENT = "DECREMENT" as const;
export const RESET = "RESET" as const;

// Action creators: plain functions that return action objects.
// Components call these and pass the result to dispatch().
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

// A union type of every action this reducer can receive.
// ReturnType<typeof fn> means "whatever that function returns".
// The reducer uses this instead of `any`.
export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;