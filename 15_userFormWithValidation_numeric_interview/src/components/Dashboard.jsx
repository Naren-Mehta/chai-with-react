import React from "react";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, isAuthenticated, login, logout } = useUserContext();

  return (
    <div>
      <h1>Welcome to Dashboard Page</h1>
      {isAuthenticated ? (
        <div>
          <p>Logged in as: {user.username}</p>
          <button onClick={logout}>Logout</button>
          <Link to="/">
            <button>Go to Home</button>
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

export default Dashboard;
