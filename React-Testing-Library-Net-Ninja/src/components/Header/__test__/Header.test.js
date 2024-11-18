import { render, screen } from "@testing-library/react"
import Header from "../Header"


it('should render same text passed into title prop', function() {
    render(<Header title="Test Header"/>);

    const headingElement = screen.getByText(/Test Header/i);

    expect(headingElement).toBeInTheDocument();
})

// it('should render same text passed into title prop via role', function() {
//     render(<Header title="Test Header"/>);

//     const headingElement = screen.getByRole('heading', {name: "Test Header"});

//     expect(headingElement).toBeInTheDocument();
// })

// it('should render same text passed into title prop via data test id', function() {
//     render(<Header title="Test Header"/>);

//     const headingElement = screen.getByTestId('header-1');

//     expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop via title', function() {
//     render(<Header title="Test Header"/>);

//     const headingElement = screen.getByTitle('Header2');

//     expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop via find by', async function() {
//     render(<Header title="Test Header"/>);

//     const headingElement = await screen.findByText('Test Header');

//     expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop via get by', function() {
//     render(<Header title="Test Header"/>);

//     const headingElement = screen.queryByText(/dog/i);

//     expect(headingElement).not.toBeInTheDocument();
// });

// it('should render same text passed into title prop via get all by role', function() {
//     render(<Header title="Test Header"/>);

//     const headingElements = screen.getAllByRole('heading');

//     expect(headingElements.length).toBe(2);
// });