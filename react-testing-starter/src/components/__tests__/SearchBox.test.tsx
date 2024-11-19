import { render, screen } from "@testing-library/react";
import SearchBox from "../SearchBox";
import userEvent from "@testing-library/user-event";

describe("Test SearchBox Component", () => {
  const renderSearchBox = () => {
    const onChange = vi.fn();

    render(<SearchBox onChange={onChange} />);

    return {
      input: screen.getByPlaceholderText(/Search/i),
      user: userEvent.setup(),
      onChange,
    };
  };

  it("should render an input field for searching", () => {
    const { input } = renderSearchBox();
    expect(input).toBeInTheDocument();
  });

  it("should call onChange when enter is pressed ", async () => {
    const { input, user, onChange } = renderSearchBox();
    const searchTerm = "Hello World";

    await user.type(input, searchTerm + "{enter}");

    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });

  it("should not call onChange when enter is pressed without text", async () => {
    const { input, user, onChange } = renderSearchBox();

    await user.type(input, "{enter}");

    expect(onChange).not.toHaveBeenCalled();
  });
});
