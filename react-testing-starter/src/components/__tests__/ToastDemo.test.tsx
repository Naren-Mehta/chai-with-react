import { render, screen } from "@testing-library/react";
import ToastDemo from "../ToastDemo";
import userEvent from "@testing-library/user-event";
import { Toaster } from "react-hot-toast";

describe("Test Toast Demo", () => {
  it("should render Show Toast button", () => {
    render(<ToastDemo />);

    const btnElement = screen.getByRole("button", { name: /Show Toast/i });
    expect(btnElement).toBeInTheDocument();
  });

  it("should show toast on click on button", async () => {
    render(
      <>
        <ToastDemo />
        <Toaster />
      </>
    );

    const btnElement = screen.getByRole("button", { name: /Show Toast/i });
    const user = userEvent.setup();

    await user.click(btnElement);

    const toast = await screen.findByText(/success/i);

    expect(toast).toBeInTheDocument();
  });
});
