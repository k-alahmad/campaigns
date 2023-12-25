import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
// import useWindowDimensions from "../../../hooks/screenDimentions";
import { MdOutlineWhatsapp } from "react-icons/md";
import Modal from "../../UI/Modal/Modal";
import GalleryModal from "../../UI/GalleryModal";
import MessageBox from "../../UI/Message";
import Logo from "../../../assets/logos/AVA-Logo.svg";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LandingPages } from "../../../data/PagesData";
import {
  selectPage,
  setCurrentPage,
  setCurrentProject,
} from "../../../redux/systemSettingsSlice";
const PageLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  useEffect(() => {
    let fullPath = location.pathname;
    let slashedPageSlug = fullPath.substring(0, fullPath.lastIndexOf("/"));
    let pageSlug = slashedPageSlug.substring(1);
    let page = LandingPages.find((x) => x.slug == pageSlug);
    let slashedProjectSlug = fullPath.substring(fullPath.lastIndexOf("/"));
    let projectSlug = slashedProjectSlug.substring(1);
    let project = page.projects.find((x) => x.slug == projectSlug);
    dispatch(setCurrentPage({ page: page }));
    dispatch(setCurrentProject({ project: project }));
  }, [location.pathname]);
  // const { width } = useWindowDimensions();
  // const [w, setW] = useState(width);
  // useEffect(() => {
  //   if (width !== w) {
  //     window.location.reload();
  //   }
  //   setW(width);
  // }, [width]);
  return (
    <div className="flex flex-col justify-center items-center relative transition-all duration-500">
      <MessageBox />
      <NavBar />
      <div className="min-h-screen w-full max-w-[1920px]">{children}</div>
      <Footer />
      <Modal />
      <GalleryModal />
      <div
        className="fixed bottom-20 md:bottom-24 right-3 md:right-5 backdrop-blur-[21px] text-white p-3 rounded-full cursor-pointer z-40 shadow-2xl drop-shadow-2xl"
        style={{
          backgroundColor: page?.Colors?.Primary,
        }}
        onClick={(e) => {
          e.preventDefault();
          window.open(
            `https://www.avarealestate.ae/`,
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <img
          src={Logo}
          className="w-[30px] h-[30px] md:h-[40px] md:w-[40px]"
          alt=""
        />
      </div>
      <div
        className="fixed bottom-3 md:bottom-5 right-3 md:right-5 bg-[#25D366]/80 text-white p-3 rounded-full cursor-pointer z-40"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            `https://wa.me/+971501108606`,
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <MdOutlineWhatsapp className="text-[30px] md:text-[40px]" />
      </div>
    </div>
  );
};

export default PageLayout;
