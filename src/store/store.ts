// legacy_createStore is identical to createStore. Redux 5 only marks
// createStore as deprecated (a strikethrough in the editor), so this
// alias avoids the warning while still using the manual setup.
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./reducers";

const loadCounterValue = (): number => {
	if (typeof window === "undefined") {
		return 0;
	}

	const savedValue = Number(window.localStorage.getItem("counterValue"));
	return Number.isFinite(savedValue) ? savedValue : 0;
};

const preloadedState = {
	counter: { value: loadCounterValue() },
};

// The single global store. applyMiddleware(logger) makes every
// dispatched action print "prev state / action / next state"
// in the browser console, which is handy for debugging.
export const store = createStore(
	rootReducer,
	preloadedState,
	applyMiddleware(logger)
);

store.subscribe(() => {
	if (typeof window !== "undefined") {
		window.localStorage.setItem(
			"counterValue",
			String(store.getState().counter.value)
		);
	}
});

// RootState: the type of the whole global state, inferred from the store.
// Components use it to get typed access in useSelector.
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch: the type of the store's dispatch function.
export type AppDispatch = typeof store.dispatch;