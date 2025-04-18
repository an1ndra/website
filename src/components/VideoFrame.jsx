import React from "react";

const VideoFrame = () => {
  return (
    <div>
      <div className="flex justify-center m-7 boarder ">
        <video
          autoPlay
          controls
          className="md:w-2/4 md:h-1/4 sm:h-3/4 rounded-xl"
        >
          <source src="./v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoFrame;
