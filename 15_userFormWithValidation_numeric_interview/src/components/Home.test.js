import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { UserContextProvider } from "../context/UserContext";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Home Component", () => {
  test("renders welcome message for unauthenticated users", () => {
    render(
      <UserContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </UserContextProvider>
    );

    expect(screen.getByText(/you are not logged in/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("renders user info and logout button for authenticated users", () => {
    render(
      <UserContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </UserContextProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText(/logged in as:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /go to dashboard/i })).toBeInTheDocument();
  });

  test("handles logout correctly", () => {
    render(
      <UserContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </UserContextProvider>
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i })); // Simulate login
    fireEvent.click(screen.getByRole("button", { name: /logout/i })); // Simulate logout

    expect(screen.getByText(/you are not logged in/i)).toBeInTheDocument();
  });
});
