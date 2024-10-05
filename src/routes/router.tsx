import { RouteObject } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notfound";
import About from "../pages/about";
import Blog from "../pages/blog";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
