import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CounterContainer />
          <TodosContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
