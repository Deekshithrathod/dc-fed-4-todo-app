import "./App.css";
import Tabs from "./components/Tabs/Tabs";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <>
      <div className="container">
        <h1>#todo</h1>
        <Tabs />
        <Todos />
        <footer>
          created by{" "}
          <b>
            <a href="https://github.com/Deekshithrathod">Deekshith</a>
          </b>{" "}
          - devChallenges.io
        </footer>
      </div>
    </>
  );
}

export default App;
