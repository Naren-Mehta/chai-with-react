import { useState, useEffect } from "react";
import CurrencyList from "./CurrencyList";

const CountryList = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${search}`
      );
      const jsonData = await response.json();

      if (jsonData.status) {
        setResults([]);

        throw new Error("Failed to fetch country data");
      } else {
        setResults(jsonData);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!search) {
      setResults([]);
      return;
    }

    const delayFetch = setTimeout(() => {
        console.log('API calling');
      fetchData();
    }, 500); // Debounce API call by 500ms

    return () => clearTimeout(delayFetch);
  }, [search]);

  const renderResults = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!results.length && search) return <p>No Country details found</p>;
    if (!search) return <p>Please search for a country name</p>;

    return results.map((result, index) => {
      const { official } = result.name;
      const { currencies } = result;

      return (
        <div
          key={`${official}_${index}`}
          style={{ marginBottom: 10, border: "1px solid black" }}
        >
          <p>Name: {official}</p>
          <ul>Currencies:</ul>
          {currencies && <CurrencyList currencies={currencies} />}
        </div>
      );
    });
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <h2>Details:</h2>

        {renderResults()}
      </div>
    </div>
  );
};

export default CountryList;
