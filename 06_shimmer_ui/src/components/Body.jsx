import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);

  const fetchMeme = async () => {
    const response = await fetch("https://meme-api.com/gimme/20");
    const jsonResponse = await response.json();
    setMemes(jsonResponse.memes);
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="flex flex-wrap">
      {!memes.length ? (
        <Shimmer />
      ) : (
        memes.map((meme) => <MemeCard key={meme.ups} data={meme} />)
      )}
    </div>
  );
};

export default Body;
