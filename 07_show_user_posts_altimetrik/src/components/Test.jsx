import { useEffect, useState } from "react";

const TestComponent = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => setCount((prev) => prev + 1), 1000);
    }, []);
  
    return <div data-testid="count">Count: {count}</div>;
  };

  export default TestComponent;