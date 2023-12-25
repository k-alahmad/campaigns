import React, { useEffect } from "react";
import Header from "./components/Header";
import { useState } from "react";
import Info from "./components/Info";
import Nearby from "./components/Nearby";
import Video from "./components/Video";
import RegisterForm from "./components/RegisterForm";
import { useSelector } from "react-redux";
import { selectPage, selectProject } from "../../redux/systemSettingsSlice";

const HomePage = () => {
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
            backgroundColor: page?.Colors?.Primary,
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
