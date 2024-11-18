import { render, screen } from "@testing-library/react";
import TestComponent from "./Test";

test("Test UseEffect", async () => {
    render(<TestComponent />);

    expect(screen.getByTestId("count").textContent).toBe("Count: 0");

    // Wait for the effect to trigger and update the count
    expect(await screen.getByTestId('count').textContent).toBe("Count: 1");

    // // Initial state
    // expect(screen.getByText("Count: 0")).toBeInTheDocument();
    // expect(input.value).toBe("initial search text");
    // // Wait for the effect to trigger and update the count
    // expect(await screen.findByText("Count: 1")).toBeInTheDocument();
});
