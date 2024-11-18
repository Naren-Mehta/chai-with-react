import { usePostContext } from "../context/PostContext";

const Search = () => {
  const { filter, setFilter } = usePostContext();

  const updateSearchText = (value) => {
    setFilter(value);
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        value={filter}
        onChange={(e) => updateSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
