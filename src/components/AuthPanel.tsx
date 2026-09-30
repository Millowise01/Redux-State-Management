import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/actions/authActions";
import type { RootState } from "../store/store";
import styles from "./AuthPanel.module.css";

const AuthPanel = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector(
    (state: RootState) => state.auth
  );
  const [usernameInput, setUsernameInput] = useState("");

  return (
    <section className={styles.authPanel}>
      <h2>Authentication</h2>
      {isAuthenticated ? (
        <>
          <p>Signed in as {username}</p>
          <button onClick={() => dispatch(logout())}>Log out</button>
        </>
      ) : (
        <>
          <label>
            Username
            <input
              value={usernameInput}
              onChange={(event) => setUsernameInput(event.target.value)}
              placeholder="Enter a username"
            />
          </label>
          <button
            disabled={!usernameInput.trim()}
            onClick={() => {
              dispatch(login(usernameInput.trim()));
              setUsernameInput("");
            }}
          >
            Log in
          </button>
        </>
      )}
    </section>
  );
};

export default AuthPanel;