import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

describe("Test add input component", () => {
  it("allows typing and add a todo", () => {
    const setTodosMock = jest.fn();
    const todoList = [];

    render(<AddInput setTodos={setTodosMock} todos={todoList} />);

    const inputElement = screen.getByTestId("add-new-task");
    expect(inputElement).toBeInTheDocument();

    // const inputElementViaPlaceholder = screen.getByPlaceholderText(/Add a new task here/i);
    // expect(inputElementViaPlaceholder).toBeInTheDocument();

    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });

    expect(inputElement.value).toBe("Go Grocery Shopping");

    const btnElement = screen.getByRole("button", { name: /Add/i });
    expect(btnElement).toBeInTheDocument();

    fireEvent.click(btnElement);

    expect(inputElement.value).toBe("");
  });
});
