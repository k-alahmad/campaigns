import React from "react";
import { useTranslation } from "react-i18next";
const TextCarousel = ({ textArray, sentance }) => {
  const { i18n } = useTranslation();
  return (
    <div className="[text-wrap:balance] text-white absolute left-0 w-full top-1 p-1 text-[30px] font-bold sm:text-big lg:text-[64px] text-center ">
      {sentance}
      {"   "}
      {textArray && (
        <span className="text-primary inline-flex flex-col h-[calc(40px*theme(lineHeight.tight))] sm:h-[calc(45px*theme(lineHeight.tight))] lg:h-[calc(64px*theme(lineHeight.tight))] overflow-hidden rounded-md">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block bg-white rounded-md px-2 py-1">
            {textArray?.map((item, index) => {
              return <li key={index}>{item[i18n.language]}</li>;
            })}
            <li aria-hidden="true">{textArray[0][i18n.language]}</li>
          </ul>
        </span>
      )}
    </div>
  );
};

export default TextCarousel;
