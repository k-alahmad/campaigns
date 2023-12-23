import React from "react";
const Video = ({ project }) => {
  return (
    <div className="w-[80vw] h-[300px] sm:h-[400px]  md:h-[650px] mt-12">
      <video
        autoPlay
        loop
        muted
        controls
        id="video"
        className="w-full h-full object-fill object-center"
        src={project.Video}
        playsInline
      />
    </div>
  );
};

export default Video;
