import Headers from "../Headers";
import { Outlet } from "react-router-dom";
import Footers from "../Footers";
import { LanguageProvider } from "../../context/LanguageContext";

const Layout = () => {

  return (
    <div>
      <LanguageProvider>
        <Headers />
        <main>
          <Outlet />
        </main>
        <Footers />
      </LanguageProvider>
    </div>
  );
};

export default Layout;
