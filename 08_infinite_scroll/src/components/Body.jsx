import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const fetchMeme = async () => {
    setShowShimmer(true);

    try {
      const response = await fetch(`https://meme-api.com/gimme/20`);
      const jsonResponse = await response.json();
      setMemes((prev) => prev.concat(jsonResponse.memes));
    } catch(err) {
      setMemes([]);
      console.log(err);
    } finally {
      setShowShimmer(false);
    }

    
  };

  const handleScroll = () => {
    // scrollY: How much I have scroll
    // innerHeight: hight of the inner window (visible section)
    // document.body.scrollHeight: total height of a web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      console.log("Fectch more data");
      fetchMeme();
    }
  };

  useEffect(() => {
    fetchMeme();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-wrap">
      {showShimmer ? (
        <Shimmer />
      ) : (
        memes.map((meme) => <MemeCard key={meme.ups} data={meme} />)
      )}
    </div>
  );
};

export default Body;
