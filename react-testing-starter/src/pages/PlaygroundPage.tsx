import ExpandableText from "../components/ExpandableText";
import Onboarding from "../components/Onboarding";
import SearchBox from "../components/SearchBox";
import TermsAndConditions from "../components/TermsAndConditions";

const PlaygroundPage = () => {
  // return (
  //   <ExpandableText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam non vel veritatis deleniti, ducimus ipsum. Cupiditate blanditiis ullam dolore enim consequuntur vero dolorem sapiente debitis beatae soluta, accusantium et!" />
  // );
  // return <TermsAndConditions />;
  // return <Onboarding />;
  return <SearchBox onChange={(text) => console.log(text)} />;
};

export default PlaygroundPage;
