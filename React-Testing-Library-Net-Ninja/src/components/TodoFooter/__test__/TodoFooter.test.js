/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

// Helper function to wrap with BrowserRouter
const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("TodoFooter Component", () => {
  it("renders '1 task left' when there is one incomplete task", () => {
    renderWithRouter(<TodoFooter numberOfIncompleteTasks={1} />);

    // Check text content
    const taskElement = screen.getByText(/1 task left/i);
    expect(taskElement).toBeInTheDocument();
  });

  it("renders '5 tasks left' when there are multiple incomplete tasks", () => {
    renderWithRouter(<TodoFooter numberOfIncompleteTasks={5} />);

    // Check text content
    const taskElement = screen.getByText(/5 tasks left/i);
    expect(taskElement).toBeInTheDocument();

    // Check if link to followers exists
    const linkElement = screen.getByRole("link", { name: /followers/i });
    expect(linkElement).toBeInTheDocument();
  });

  it("renders paragraph with test ID correctly", () => {
    renderWithRouter(<TodoFooter numberOfIncompleteTasks={5} />);

    // Check paragraph element by test ID
    const paraElement = screen.getByTestId("task-para");
    expect(paraElement).toBeInTheDocument();
  });
});
