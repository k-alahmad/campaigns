import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectPage, selectProject } from "../../../redux/systemSettingsSlice";
const Nearby = () => {
  const { t, i18n } = useTranslation();
  const page = useSelector(selectPage);
  const project = useSelector(selectProject);
  return (
    <div id="nearby" className="flex justify-center items-center mt-12 ">
      <div className="w-[80vw]">
        <p
          className="text-center text-med md:text-big font-bold"
          style={{
            color: page?.Colors?.Primary,
          }}
        >
          {t("Nearby Places")}
        </p>
        <div className="max-md:hidden grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mt-6">
          {project?.Nearby.map((item, index) => {
            return (
              <div
                key={index}
                className="relative w-[95%] h-[250px] rounded-md text-white shadow-md"
              >
                <img
                  src={item?.Image}
                  alt={item?.Place[i18n.language]}
                  className="w-full h-full object-cover object-center rounded-md"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  style={{
                    backgroundColor: page?.Colors?.Primary,
                    opacity: "40%",
                  }}
                />
                <p className="absolute top-5 left-5 text-smaller md:text-small font-semibold">
                  {item?.Duration + ` ${t("Mins")}`}
                </p>
                <p className="absolute bottom-5 right-5 text-smaller md:text-small font-bold drop-shadow-2xl">
                  {item?.Place[i18n.language]}
                </p>
              </div>
            );
          })}
        </div>
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-6 mt-6">
          {project?.Nearby.map((item, index) => {
            return (
              <div key={index} className="relative text-center">
                <p className="text-[30px] font-semibold ">
                  {item?.Duration}
                  <span className="font-normal text-[14px]">
                    {`   ${t("mins")}`}
                  </span>
                </p>
                <p className="text-tiny tracking-tighter">
                  {item?.Place[i18n.language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nearby;
