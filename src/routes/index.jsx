import React from "react";
import { publicRoutes } from "./routesLists";
import PageLayout from "../components/Layout/PageContainer";
import { Route, Routes, useLocation } from "react-router-dom";
import { LandingPages } from "../data/PagesData";
const withRoute = (routes) => {
  const location = useLocation();
  return routes.map((route) => {
    if (route.path == "*") {
      let firstPath = location.pathname.substring(1);
      let page = LandingPages.find((x) => x.slug == firstPath);
      return (
        <Route
          path={route.path}
          element={
            <route.element
              to={
                page
                  ? `/${page.slug}/${page.projects[0].slug}`
                  : `/${LandingPages[0].slug}/${LandingPages[0].projects[0].slug}`
              }
              replace
            />
          }
          key={route.path}
        />
      );
    } else {
      return (
        <Route path={route.path} element={<route.element />} key={route.path} />
      );
    }
  });
};

function Router() {
  return (
    <PageLayout>
      <Routes>
        <Route>{withRoute(publicRoutes)}</Route>
      </Routes>
    </PageLayout>
  );
}
export default Router;
