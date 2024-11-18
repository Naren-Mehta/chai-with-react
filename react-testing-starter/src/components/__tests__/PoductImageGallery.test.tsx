import { render, screen } from "@testing-library/react"
import ProductImageGallery from "../ProductImageGallery"

describe('Test Rroduct Image Gallery', () => {
    it('returns null when imageUrls array is empty', () => {
        const imageUrls: string[] = [];

        // Render the component with an empty array
        const { container } = render(<ProductImageGallery imageUrls={imageUrls} />);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders images when imageUrls array is not empty', () => {
        const imageUrls = ['url1.jpg', 'url2.jpg'];
        render(<ProductImageGallery imageUrls={imageUrls} />);

        const imgElements = screen.getAllByRole('img');
        expect(imgElements).toHaveLength(imageUrls.length);

        imgElements.forEach((imgElement, index)=> {
            expect(imgElement).toBeInTheDocument();
            expect(imgElement).toHaveAttribute('src', imageUrls[index]);
        })

        // or like this
        imageUrls.forEach((url, index)=> {
            expect(imgElements[index]).toBeInTheDocument();
            expect(imgElements[index]).toHaveAttribute('src', url);
        })
    })
})