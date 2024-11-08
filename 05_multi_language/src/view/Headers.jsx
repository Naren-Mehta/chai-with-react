import { Link } from "react-router-dom";
import { useLanguageContext } from "../context/LanguageContext";

const Headers = () => {
  const {selectedLang, setSelectedLang} = useLanguageContext();

  const updateLang = (e)  => {
    setSelectedLang(e.target.value);
  }

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 p-10">
          <Link to="/home" className="-m-1.5 p-1.5 px-10">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>

          <Link
            to="/home"
            className="text-sm/6 font-semibold text-gray-900 px-10"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm/6 font-semibold text-gray-900 px-10"
          >
            About
          </Link>
          <Link
            to="/home"
            className="text-sm/6 font-semibold text-gray-900 px-10"
          >
            Contact
          </Link>

        <select onChange={updateLang} value={selectedLang}>
          <option value='en'>English</option>
          <option value='hi'>Hindi</option>
          <option value='es'>Spanish</option>
          <option value='ru'>Russian</option>
        </select>
          
        </div>
      </nav>
    </header>
  );
};

export default Headers;
