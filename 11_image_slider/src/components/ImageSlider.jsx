import { useState } from "react";
const imageData = ["image1", "image2", "image3", "image4"];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (key) => {
    if (key === "left") {
      setActiveIndex(
        activeIndex === 0 ? imageData.length - 1 : activeIndex - 1
      );
    } else {
      setActiveIndex(
        activeIndex === imageData.length - 1 ? 0 : activeIndex + 1
      );
    }
  };

  return (
    <div className="flex">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => updateActiveIndex("left")}>
        Left
      </button>

      <div className="m-2 p2">
        {imageData.map((image, index) => {
          return activeIndex === index && <div key={index}>{image}</div>;
        })}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => updateActiveIndex("right")}>
        Right
      </button>
    </div>
  );
};

export default ImageSlider;
