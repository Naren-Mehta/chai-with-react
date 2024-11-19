import { render, screen, waitFor } from "@testing-library/react";
import TagList from "../TagList";

describe("Test TagList component", () => {
  it("should render tags", async () => {
    render(<TagList />);

    const tagElement = await screen.findAllByRole("listitem");
    screen.debug();
    expect(tagElement.length).toBeGreaterThan(0);

    //alternative way: but not the good way, it will keey calling after few milisection till 1 second to check the assertion
    // await waitFor(() => {
    //   const tags = screen.getAllByRole("listitem");
    //   expect(tags.length).toBeGreaterThan(0);
    // });
  });
});
