import React from "react";
import { useTranslation } from "react-i18next";
import TextCarousel from "../../../components/UI/TextCarousel";
import { useNavigate } from "react-router-dom";
const Header = ({ project, page }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`pt-16 h-[40vh]`}
        style={{
          backgroundColor: page.Colors.Primary,
        }}
      />
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-[90vw] h-[60vh] -mt-[30vh] rounded-lg shadow-md drop-shadow-md">
          <img
            src={project.HeaderImage}
            alt={project.HeaderTitle.en}
            className="rounded-lg h-full w-full object-cover origin-center"
          />
          <div
            className="absolute w-full h-full rounded-lg top-0 left-0"
            style={{
              backgroundColor: page.Colors.Primary,
              opacity: "30%",
            }}
          />

          <TextCarousel
            sentance={project.HeaderTitle[i18n.language]}
            textArray={project.HeaderTitleHighlight}
          />

          <div
            className="absolute w-full bottom-0 rounded-lg left-0 flex justify-center items-center  text-[18px] font-semibold sm:text-small"
            style={{
              backgroundColor: page.Colors.Primary,
            }}
          >
            {page.projects.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`p-4 rounded-md w-full h-full text-center cursor-pointer tracking-tighter transition-all duration-300`}
                  style={{
                    backgroundColor:
                      project.id == index
                        ? page.Colors.Secondary
                        : page.Colors.Primary,
                    color:
                      project.id == index
                        ? page.Colors.Primary
                        : page.Colors.Secondary,
                  }}
                  onClick={() => {
                    navigate(`/${page.slug}/${item.slug}`);
                  }}
                >
                  {item.ProjectName[i18n.language]}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
