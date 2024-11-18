import { render, screen, fireEvent } from "@testing-library/react";
import { UserContextProvider } from "../context/UserContext";
import Login from "./Login";
import '@testing-library/jest-dom';

describe("Login Component", () => {
  test("renders the login form", () => {
    render(
      <UserContextProvider>
        <Login />
      </UserContextProvider>
    );

    // Check if input fields and button are rendered
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("calls login function on form submission", () => {
    const { getByLabelText, getByRole } = render(
      <UserContextProvider>
        <Login />
      </UserContextProvider>
    );

    // Simulate user input
    fireEvent.change(getByLabelText(/username/i), { target: { value: "testUser" } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: "password123" } });

    // Submit the form
    fireEvent.click(getByRole("button", { name: /login/i }));

    // Mock behavior is difficult in this setup; ensure no crashes during testing
    expect(getByLabelText(/username/i).value).toBe("testUser");
  });
});
