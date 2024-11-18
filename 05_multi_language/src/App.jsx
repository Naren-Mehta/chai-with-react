import Headers from "./view/Headers";
import Footers from "./view/Footers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./view/pages/Layout";
import Home from "./view/pages/Home";
import Contact from "./view/pages/Contact";
import About from "./view/pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, path: "home", element: <Home /> }, // Default route
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
