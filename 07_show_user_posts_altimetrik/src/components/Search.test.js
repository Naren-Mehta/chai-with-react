import { render } from "@testing-library/react";
import Search from "./Search";
import { usePostContext } from "../context/PostContext";

jest.mock("../context/PostContext", () => ({
  usePostContext: jest.fn(),
}));

describe("test search compoennt", () => {
  test("renders the input with the correct initial value", () => {
    usePostContext.mockReturnValue({
      filter: "initial search text",
      setFilter: jest.fn(),
    });

    render(<Search />);

    // Check that the input field has the initial value from the context
    const input = screen.getByRole("textbox", { name: /search/i });
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("initial search text");
  });
});
