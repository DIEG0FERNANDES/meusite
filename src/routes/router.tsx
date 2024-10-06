import { RouteObject } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notfound";
import About from "../pages/about";
import Blog from "../pages/blog";

export const routes: RouteObject[] = [
  {
    path: "/meusite/",
    element: <Home />,
  },
  {
    path: "/meusite/sobre",
    element: <About />,
  },
  {
    path: "/meusite/blog",
    element: <Blog />,
  },
  {
    path: "/meusite/*",
    element: <NotFound />,
  },
];
