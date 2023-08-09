import "./App.css";
import Tabs from "./components/Tabs/Tabs";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="container">
      <h1>#todo</h1>
      <Tabs />
      <Todos />
    </div>
  );
}

export default App;
