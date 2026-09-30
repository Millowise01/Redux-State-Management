import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>React + Redux + TypeScript</h1>
      {/* Counter reads and updates the global Redux state */}
      <Counter />
    </div>
  );
}

export default App;