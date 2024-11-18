import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { user, isAuthenticated, login, logout } = useUserContext();

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {isAuthenticated ? (
        <div>
          <p>Logged in as: {user.username}</p>
          <button onClick={logout}>Logout</button>
          <br />
          <Link to="/dashboard">
            <button>Go to Dashboard</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={() => login("testUser", "password")}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Home;
