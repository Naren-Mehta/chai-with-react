import "./App.css";
import { PostContextProvider } from "./context/PostContext";
import Search from "./components/Search";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <PostContextProvider>
        <Search />
        <PostList />
      </PostContextProvider>
    </div>
  );
}

export default App;
