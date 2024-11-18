import "./App.css";
import {TodoContextProvider} from "./contexts";
import ManageTodos from "./components/ManageTodos";

function App() {
  return (
    <TodoContextProvider>
      <ManageTodos/>
    </TodoContextProvider>
  );
}

export default App;
