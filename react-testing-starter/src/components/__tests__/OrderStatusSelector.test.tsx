import { render, screen } from "@testing-library/react";
import OrderStatusSelector from "../OrderStatusSelector";
import { Theme } from "@radix-ui/themes";
import userEvent from "@testing-library/user-event";

describe("Order status selector", () => {
  const renderComponent = () => {
    const onChange = vi.fn();
    render(
      <>
        <Theme>
          <OrderStatusSelector onChange={onChange} />
        </Theme>
      </>
    );
    const btnElement = screen.getByRole("combobox");
    expect(btnElement).toBeInTheDocument();

    return {
      user: userEvent.setup(),
      btnElement,
      getOptions: () => screen.findAllByRole("option"),
      getOption: (label: RegExp) =>
        screen.findByRole("option", { name: label }),
      onChange,
    };
  };
  it("should render New as default value", () => {
    const { btnElement } = renderComponent();
    expect(btnElement).toHaveTextContent(/new/i);
  });

  it("should render correct statuses", async () => {
    const { btnElement, user, getOptions } = renderComponent();
    expect(btnElement).toHaveTextContent(/new/i);

    await user.click(btnElement);

    const options = await getOptions();
    expect(options).toHaveLength(3);

    const labels = options.map((option) => option.textContent);
    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });

  it.each([
    { label: /Processed/i, value: "processed" },
    { label: /Fulfilled/i, value: "fulfilled" },
  ])(
    "should call change with $value when the $label option is selected",
    async ({ label, value }) => {
      const { btnElement, user, onChange, getOption } = renderComponent();

      await user.click(btnElement);
      const option = await getOption(label);
      await user.click(option);

      expect(onChange).toHaveBeenCalledWith(value);
    }
  );

  it("should call onChange with 'new' when the New option is selected", async () => {
    const { btnElement, user, onChange, getOption } = renderComponent();
    // await user.click(btnElement);
    // const newOption = await getOption(/New/i);
    // await user.click(newOption);
    // expect(onChange).not.toHaveBeenCalled();

    await user.click(btnElement);
    const processedOption = await getOption(/Processed/i);
    await user.click(processedOption);

    await user.click(btnElement);
    const newOption1 = await getOption(/New/i);
    await user.click(newOption1);

    expect(onChange).toHaveBeenCalledWith("new");
  });
});
