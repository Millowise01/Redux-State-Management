import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Provider makes the Redux store available to every component below it.
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Anything inside Provider can use useSelector and useDispatch */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);