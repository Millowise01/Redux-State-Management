# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # React Guided Learning Activity: Redux State Management

  This project demonstrates manual Redux state management in a React + Vite +
  TypeScript application. It uses Redux, React-Redux, and Redux Logger without
  Redux Toolkit.

  ## Learning objectives

  - Create a Redux store with logger middleware.
  - Define action constants, action creators, and a typed reducer.
  - Combine reducers into a root reducer.
  - Provide the store to React with `Provider`.
  - Read global state with `useSelector` and update it with `useDispatch`.

  ## Getting started

  ```bash
  npm install
  npm run dev
  ```

  Open `http://localhost:5173/` in a browser. The counter starts at `0` and
  supports increment, decrement, and reset actions. Redux Logger prints each
  dispatch in the browser console.

  ## Project structure

  ```text
  src/
    components/
      Counter.tsx
      Counter.module.css
    store/
      actions/counterActions.ts
      reducers/counterReducer.ts
      reducers/index.ts
      store.ts
    App.tsx
    main.tsx
  ```

  The store is created manually with `createStore` (through Redux 5's
  `legacy_createStore` alias) and `applyMiddleware(logger)`. The `counter` slice
  is combined by `rootReducer`, then made available to the application in
  `main.tsx` through React-Redux `Provider`.

  ## Verification

  ```bash
  npm run lint
  npm run build
  ```

  Do not commit `node_modules` or build output. Make meaningful commits as the
  activity progresses and push the completed repository before submission.

  ## Optional challenges

  - **Persist state:** The counter value is loaded from and saved to local
    storage under `counterValue`.
  - **Set a custom value:** Enter a number in the counter panel and dispatch the
    typed `SET_VALUE` action.
  - **Multiple reducers:** The `auth` reducer handles typed `LOGIN` and `LOGOUT`
    actions and is combined with the counter reducer.
