import { useLanguageContext } from "../../context/LanguageContext";
import { LANG } from "../../utils/langConstant";

const About = () => {
  const { selectedLang } = useLanguageContext();
  const data = LANG[selectedLang];

  return (
    <div>
      <div>
        {selectedLang}==
        <h1 className="font-bold text-2xl my-5">{data.title}</h1>
        <p>{data.desc}</p>
      </div>

      <div>
        <h1 className="font-bold text-2xl my-5">{data.mission}</h1>
        <p>{data.desc2}</p>
      </div>

      <div>
        <h1 className="font-bold text-2xl my-5">{data.places}</h1>
        <p>{data.desc3}</p>
      </div>
    </div>
  );
};

export default About;
