import { render, screen } from "@testing-library/react";
import UserList from "../UserList";
import { User } from "../../entities";

describe("Test UserList", () => {
  it("should render No users available.", () => {
    render(<UserList users={[]} />);

    const paraElement = screen.getByRole("paragraph");
    expect(paraElement).toBeInTheDocument();
    expect(paraElement).toHaveTextContent("No users available");
  });

  it("should render list of users", () => {
    const users: User[] = [
      { id: 1, name: "Narendra", isAdmin: false },
      { id: 3, name: "Singh", isAdmin: false },
    ];
    render(<UserList users={users} />);

    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();

    expect(screen.getAllByRole("link").length).toBe(2);
  });

  it("should render list of users: better way", () => {
    const users: User[] = [
      { id: 1, name: "Narendra", isAdmin: false },
      { id: 3, name: "Singh", isAdmin: false },
    ];
    render(<UserList users={users} />);

    users.forEach(user=> {
        const linkElement = screen.getByRole('link', {name: user.name});
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', `/users/${user.id}`)
    })
  });
});
