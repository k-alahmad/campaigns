import React from "react";
import { useSelector } from "react-redux";
import { selectProject } from "../../../redux/systemSettingsSlice";
const Video = () => {
  const project = useSelector(selectProject);
  return (
    <div
      id="video"
      className="w-[80vw] h-[300px] sm:h-[400px]  md:h-[650px] mt-12"
    >
      <video
        autoPlay
        loop
        muted
        controls
        id="video"
        className="w-full h-full object-fill object-center"
        src={project?.Video}
        playsInline
      />
    </div>
  );
};

export default Video;
