import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostContextProvider = ({ children }) => {
  const [postTitles, setPostTitles] = useState([]);
  const [allTitles, setAllTitles] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await response.json();

    const titles = jsonData.map((obj) => obj.title);

    setPostTitles(titles);
    setAllTitles(titles);
  };

  const filterTitles = () => {
    if (filter) {
      const filteredTitles = allTitles.filter((title) =>
        title.includes(filter)
      );
      setPostTitles(filteredTitles);
    } else {
      setPostTitles(allTitles);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    filterTitles();
  }, [filter]);

  return (
    <PostContext.Provider value={{ postTitles, filter, setFilter }}>
      {children}
    </PostContext.Provider>
  );
};
