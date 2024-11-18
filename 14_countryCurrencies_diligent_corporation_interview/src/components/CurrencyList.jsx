import { useEffect, useState } from "react";

const CurrencyList = ({ currencies }) => {
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    if (Object.keys(currencies).length) {
      const currencyArr = Object.keys(currencies).map((key) => {
        return currencies[key];
      });

      setCurrencyList(currencyArr);
    } else {
      setCurrencyList([]);
    }
  }, [currencies]);

  return (
    <ul>
      {currencyList.map((currency, index) => {
        return <li key={`${currency.name}_${index}`}>{currency.name}</li>;
      })}
    </ul>
  );
};

export default CurrencyList;
