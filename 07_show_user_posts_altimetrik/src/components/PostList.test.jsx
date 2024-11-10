import { render, screen } from "@testing-library/react";
import { usePostContext } from "../context/PostContext"; // Import the hook
import PostList from "./PostList";

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
    expect(screen.getByTestId("post-titles").textContent).toBe(""); // Fixed typo here
  });
});
