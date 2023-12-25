import React, { useEffect } from "react";
import Header from "./components/Header";
import { useState } from "react";
import Info from "./components/Info";
import Nearby from "./components/Nearby";
import Video from "./components/Video";
import RegisterForm from "./components/RegisterForm";
import { useLocation } from "react-router-dom";
import { LandingPages } from "../../data/PagesData";
import { useSelector } from "react-redux";
import { selectPage, selectProject } from "../../redux/systemSettingsSlice";

const HomePage = () => {
  const location = useLocation();
  // const [currentPage, setCurrentPage] = useState({});
  // const [currentProject, setCurrentProject] = useState({});
  // useEffect(() => {
  //   let fullPath = location.pathname;
  //   let slashedPageSlug = fullPath.substring(0, fullPath.lastIndexOf("/"));
  //   let pageSlug = slashedPageSlug.substring(1);
  //   let page = LandingPages.find((x) => x.slug == pageSlug);
  //   let slashedProjectSlug = fullPath.substring(fullPath.lastIndexOf("/"));
  //   let projectSlug = slashedProjectSlug.substring(1);
  //   let project = page.projects.find((x) => x.slug == projectSlug);
  //   setCurrentPage(page);
  //   setCurrentProject(project);
  // }, [location.pathname]);
  const page = useSelector(selectPage) ?? {};
  const project = useSelector(selectProject) ?? {};
  return (
    Object.keys(project).length !== 0 && (
      <div>
        <Header />
        <Info />
        <Nearby />
        <div
          className="mt-6 flex flex-col justify-center items-center"
          style={{
            backgroundColor: page.Colors?.Primary,
          }}
        >
          <Video />
          <RegisterForm />
        </div>
      </div>
    )
  );
};

export default HomePage;
