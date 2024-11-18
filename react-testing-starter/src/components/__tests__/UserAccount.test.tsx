import { render, screen } from '@testing-library/react'
import UserAccount from '../UserAccount';

describe("Test User Account", () => {
  it("should have edit button", () => {
    const userObj = {
      id: 1234,
      name: "Narendra",
      isAdmin: true,
    };
    render(<UserAccount user={userObj} />);

    const headerElement = screen.getByRole("heading", {
      name: /User Profile/i,
    });
    expect(headerElement).toBeInTheDocument();

    expect(screen.getByText(userObj.name)).toBeInTheDocument();


    const btnElement = screen.getByRole("button");
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toHaveTextContent(/Edit/i);
  });

  it("should not have edit button", () => {
    const userObj = {
      id: 1234,
      name: "Narendra",
      isAdmin: false,
    };
    render(<UserAccount user={userObj} />);

    const headerElement = screen.getByRole("heading", {
      name: /User Profile/i,
    });
    expect(headerElement).toBeInTheDocument();

    const btnElement = screen.queryByRole("button");
    expect(btnElement).not.toBeInTheDocument();
  });
});
