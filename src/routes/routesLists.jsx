import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { LandingPages } from "../data/PagesData.js";
import HomePage from "../pages/home/index.jsx";
const thankYou = lazy(() => import("../pages/thankYou/index.jsx"));

let projectsRoutes = [];
LandingPages.map((item) => {
  return item.projects.map((ps) => {
    projectsRoutes.push({
      path: `/${item.slug}/${ps.slug}`,
      element: HomePage,
    });
  });
});
export const publicRoutes = [
  ...projectsRoutes,
  {
    path: "/thankyou",
    element: thankYou,
  },
  {
    path: "/privacy-policy",
    element: lazy(() => import("../pages/privacy/index.jsx")),
  },
  {
    path: "/404",
    element: lazy(() => import("../components/UI/404NotFound/index.jsx")),
  },
  {
    path: "*",
    element: Navigate,
  },
];

export const protectedRoutes = [];
