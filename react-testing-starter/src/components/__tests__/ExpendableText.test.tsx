import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpandableText from "../ExpandableText";

describe("ExpandableText Component", () => {
  const shortText = "hello world";
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus iure porro laborum aliquid in cupiditate, tempore aperiam, officiis corrupti temporibus fugiat consequuntur dignissimos fuga minima maxime commodi alias? Aut!";
  const truncatedText = `${longText.substring(0, 150)}...`;

  it("renders text without a button if the text length is less than 30", () => {
    render(<ExpandableText text={shortText} />);

    // Verify the short text is rendered
    expect(screen.getByText(shortText)).toBeInTheDocument();

    // Button should not be rendered
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders expandable text with a button if the text length is greater than 30", async () => {
    render(<ExpandableText text={longText} />);
    const user = userEvent.setup();

    // Verify the truncated text is displayed
    expect(screen.getByText(truncatedText)).toBeInTheDocument();

    // Verify the button exists with "Show More" initially
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Show More");

    // Expand the text by clicking the button
    await user.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/Show Less/i);
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  it("renders expandable and collapse text with a button if the text length is greater than 30", async () => {
    render(<ExpandableText text={longText} />);
    const user = userEvent.setup();

    // Verify the truncated text is displayed
    expect(screen.getByText(truncatedText)).toBeInTheDocument();

    // Verify the button exists with "Show More" initially
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent(/Show More/i);

    // Expand the text by clicking the button
    await user.click(buttonElement);
    // Collapse the text by clicking the button again
    await user.click(buttonElement);

    expect(buttonElement).toHaveTextContent(/show more/i);
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
  });
});
