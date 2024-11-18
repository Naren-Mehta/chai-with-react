import { useCallback, useEffect, useState, useRef } from "react";
import "./SearchUI.css";

// Custom debounce hook
const useDebounce = (fn, delay) => {
  const timeoutRef = useRef();

  const debouncedFunction = useCallback(
    (...args) => {
      clearTimeout(timeoutRef.current); // Clear the previous timeout
      timeoutRef.current = setTimeout(() => {
        fn(...args); // Call the function after the specified delay
      }, delay);
    },
    [fn, delay]
  );

  return debouncedFunction;
};

const SearchUI = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const cache = useRef({}); // Ref to store cache across renders

  // API call to fetch search results
  const searchAutomation = useCallback(async (query) => {
    try {
      if (cache.current[query]) {
        return cache.current[query];
      }

      const response = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${query}`
      );
      const data = await response.json();
      setSearchResults(data[1] || []);
      cache.current[query] = data[1] || [];
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  }, []);

  //   Debounced searchAutomation function
  const optimizedSearchAutomation = useDebounce(searchAutomation, 300);

  useEffect(() => {
    if (!search.trim()) {
      setSearchResults([]);
      return;
    }
    optimizedSearchAutomation(search); // Call the debounced function
  }, [search, optimizedSearchAutomation]); // Dependency array for search and debounced function

  // easyWay
  // useEffect(() => {
  //     if (!search.trim()) {
  //       setSearchResults([]);
  //       return;
  //     }

  //     //debouncing
  //     const s = setTimeout(()=> {
  //         searchAutomation(search);
  //     }, 200);

  //     return () => clearTimeout(s);

  //   }, [search]);

  const handleInputChange = useCallback((e) => setSearch(e.target.value), []);
  const handleFocus = useCallback(() => setIsResultVisible(true), []);
  const handleBlur = useCallback(() => setIsResultVisible(false), []);
  const handleResultClick = useCallback((item) => {
    setSearch(item);
    setIsResultVisible(false);
  }, []);

  return (
    <div className="m-10">
      <input
        type="text"
        value={search}
        className="border border-black p-2 w-96 shadow-lg"
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isResultVisible && searchResults.length > 0 && (
        <ul className="p-2 border border-black w-96 shadow-lg">
          {searchResults.map((item, index) => (
            <li
              key={index}
              className="hover:bg-gray-200 p-2 cursor-pointer"
              onMouseDown={() => handleResultClick(item)} // Using onMouseDown to capture clicks before blur
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUI;
