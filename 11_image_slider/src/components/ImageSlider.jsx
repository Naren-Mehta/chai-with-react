import { useState,useEffect } from "react";
const imageData = [
  "https://images.unsplash.com/photo-1713962386741-a7a77f8d4b4a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1613324942930-3f2f94f0856e?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1673349178635-39b654f84401?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554941071-8ec75d5379b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (key) => {
    if (key == "left") {
      setActiveIndex((prev) =>
        prev - 1 < 0 ? imageData.length - 1 : activeIndex - 1
      );
    } else {
      setActiveIndex((prev) => (prev + 1) % imageData.length);
    }
  };

  useEffect(() => {
    setInterval(() => {
        updateActiveIndex();
    }, 4000)
  }, [])

  return (
    <div className="flex">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => updateActiveIndex("left")}
      >
        Left
      </button>

      <div className="m-2 p2 w-100 h-100">
        {imageData.map((image, index) => {
          return (
            activeIndex === index && (
              <div key={index}>
                <img src={image} alt={"image_" + index}></img>
              </div>
            )
          );
        })}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => updateActiveIndex("right")}
      >
        Right
      </button>
    </div>
  );
};

export default ImageSlider;
