import {useState} from 'react'
import Accordion from "./components/Accordion";

const data = [
  {
    title: "Accordian 1",
    description:
      "If you want to use PropTypes to validate the props, here’s how to set it up for your components.",
  },
  {
    title: "Accordian 2",
    description:
      "If you want to use PropTypes to validate the props, here’s how to set it up for your components.",
  },
  {
    title: "Accordian 3",
    description:
      "If you want to use PropTypes to validate the props, here’s how to set it up for your components.",
  },
  {
    title: "Accordian 4",
    description:
      "If you want to use PropTypes to validate the props, here’s how to set it up for your components.",
  },
];
function App() {
  const [openIndex, setOpenIndex] = useState();

  const setIsOpen = (index) => {
    index !== openIndex ?  setOpenIndex(index) :  setOpenIndex(null);
  }

  return data.map((obj, index) => (
    <Accordion key={index} title={obj.title} description={obj.description} isOpen={index === openIndex} setIsOpen={() => setIsOpen(index)}/>
  ));
}

export default App;
