import { render, screen } from '@testing-library/react'
import Greet from '../Greet';

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Mosh" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/mosh/i);
  });

  it("should render login button when name is not provided", () => {
    render(<Greet />);

    const btnElement = screen.getByRole('button', {name: /Login/i});

    expect(btnElement).toBeInTheDocument();
  });

  it("should render login button when name is not provided: alternative way", () => {
    render(<Greet />);

    const btnElement = screen.getByRole('button');

    expect(btnElement).toHaveTextContent('Login');
  });
});