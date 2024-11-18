import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import MyUserForm from "./components/MyUserForm";
import Register from "./components/Register";
import UserForm from "./components/UserForm";
import { UserContextProvider } from "./context/UserContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Exclude login and register from UserContext */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
