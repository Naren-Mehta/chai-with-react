import { render, screen } from "@testing-library/react";
import { usePostContext } from "../context/PostContext"; // Import the hook
import PostList from "./PostList";
import '@testing-library/jest-dom'; // Import jest-dom for additional matchers

// Mock the usePostContext hook
jest.mock("../context/PostContext", () => ({
  usePostContext: jest.fn(),
}));

describe("PostList Component", () => {
  test("Render an empty message when postTitles is empty", () => {
    // Mock usePostContext to return an empty postTitles array
    usePostContext.mockReturnValue({ postTitles: [] });

    render(<PostList />);

    // Check that PostList does not render any titles
    expect(screen.getByTestId("post-titles").textContent).toBe("");
  });

  test("renders a list of post titles", () => {
    usePostContext.mockReturnValue({ postTitles: ["Post One", "Post Two", "Post Three"] });

    render(<PostList />);

    // Check that the titles are rendered
    expect(screen.getByTestId("post-titles").textContent).not.toBe("");

    // Check if the correct number of titles are rendered
    const titles = screen.getAllByRole("paragraph");
    expect(titles).toHaveLength(3);

    // Check if each title matches the mock data
    expect(titles[0].textContent).toBe("Post One");
    expect(titles[1].textContent).toBe("Post Two");
    expect(titles[2].textContent).toBe("Post Three");
  });
});
