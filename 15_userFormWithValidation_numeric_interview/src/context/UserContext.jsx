import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Null indicates no user is logged in

  const login = (username, password) => {
    // Replace with actual API call
    const mockUser = { username, token: "mockToken123" };
    setUser(mockUser); // Set user on successful login
    console.log("====logged in=====");
  };

  const logout = () => {
    setUser(null);
  };

  // Context value to be shared
  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user, // Boolean flag for authentication
  };

  console.log(value);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
