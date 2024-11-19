import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TermsAndConditions from "../TermsAndConditions";

describe("TermsAndConditions Component", () => {
  const setup = async () => {
    const user = userEvent.setup();
    render(<TermsAndConditions />);

    const headingElement = screen.getByRole("heading", {
      name: /Terms & Conditions/i,
    });
    const checkboxElement = screen.getByRole("checkbox");
    const buttonElement = screen.getByRole("button");

    return { user, headingElement, checkboxElement, buttonElement };
  };

  it("renders the page with a disabled button initially", async () => {
    const { headingElement, checkboxElement, buttonElement } = await setup();

    // Check initial render state
    expect(headingElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
  });

  it("enables the button when the checkbox is checked using userEvent", async () => {
    const { user, checkboxElement, buttonElement } = await setup();

    // Interact with the checkbox
    await user.click(checkboxElement);

    // Verify the button state
    expect(checkboxElement).toBeChecked();
    expect(buttonElement).toBeEnabled();
  });

  it("disables the button when the checkbox is toggled off using userEvent", async () => {
    const { user, checkboxElement, buttonElement } = await setup();

    // Interact with the checkbox (check and then uncheck)
    await user.click(checkboxElement); // Check
    await user.click(checkboxElement); // Uncheck

    // Verify the button state
    expect(checkboxElement).not.toBeChecked();
    expect(buttonElement).toBeDisabled();
  });
});
