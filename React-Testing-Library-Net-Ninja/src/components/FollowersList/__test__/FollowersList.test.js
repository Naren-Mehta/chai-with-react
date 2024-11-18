import axios from "axios";
import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("test FollowersList component", () => {
    beforeEach(() => {
        console.log("===RUNNING BEFORE EACH TEST====");
        jest.clearAllMocks();
      });

      beforeAll(() => {
        console.log("===RUNNING once before all TEST====");
        jest.clearAllMocks();
      });


      afterEach(() => {
        
        console.log("===RUNNING After EACH TEST====");
      });

      afterAll(() => {
        console.log("===RUNNING once after all TEST====");
        jest.clearAllMocks();
      });
  it("Should get the follower item with 0th index", async () => {
    renderWithRouter(<FollowersList />);
    const followDivElement = await screen.findByTestId("follower-item-0");
    // screen.debug();
    expect(followDivElement).toBeInTheDocument();
  });

  it("should render multiple follower items", async () => {
    renderWithRouter(<FollowersList />);
    const followDivElements = await screen.findAllByTestId(/follower-item-/i);
    expect(followDivElements.length).toBe(2); // Update the length to match mock response
  });
});
