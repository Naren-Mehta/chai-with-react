import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

const addTask = (tasks) => {
  const inputElementViaPlaceholder =
    screen.getByPlaceholderText(/Add a new task here/i);
  expect(inputElementViaPlaceholder).toBeInTheDocument();

  const btnElement = screen.getByRole("button", { name: /Add/i });
  expect(btnElement).toBeInTheDocument();

  tasks.forEach((task) => {
    fireEvent.change(inputElementViaPlaceholder, { target: { value: task } });
    expect(inputElementViaPlaceholder.value).toBe(task);

    fireEvent.click(btnElement);
    expect(inputElementViaPlaceholder.value).toBe("");
  });
};

describe("Test Todo compoennt", () => {
  it("should add one todo", () => {
    renderWithRouter(<Todo />);
    addTask(['Shoppping']);

    const divElement = screen.getByText(/Shoppping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should add multiple todo", () => {
    renderWithRouter(<Todo />);
    addTask(['Shoppping', 'Learning', 'Walking', 'Sleeping', 'Gym']);

    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(5);
  });

  it("task should not have completed class when initially rendered", () => {
    renderWithRouter(<Todo />);
    addTask(['Shoppping', 'Learning', 'Walking', 'Sleeping', 'Gym']);

    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(5);

    divElements.forEach(ele=> {
        expect(ele.className).not.toBe('todo-item-active');

        //or
        // expect(ele).not.toHaveClass('todo-item-active');
    })
  });

  it("task should have completed class when clicked", () => {
    renderWithRouter(<Todo />);
    addTask(['Shoppping', 'Learning', 'Walking', 'Sleeping', 'Gym']);

    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(5);

    divElements.forEach(ele=> {
        expect(ele).not.toHaveClass('todo-item-active');

        fireEvent.click(ele);

        expect(ele).toHaveClass('todo-item-active');
    })
  });
});
