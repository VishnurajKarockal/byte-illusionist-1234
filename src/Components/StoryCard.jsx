import PropTypes from "prop-types";

import { useEffect, useState } from "react";

function StoryCard ({name, src, profile}){ 

  const [currentLayout, setCurrentLayout] = useState("fixed");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const newLayout = windowWidth >= 768 ? "fixed" : "fill";
      setCurrentLayout(newLayout);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const renderImage = () => {
    if (currentLayout === "fixed") {
      return (
        <img
          className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
          src={profile}
          width={40}
          height={40}
          style={{ objectFit: "cover" }}
        />
      );
    } else if (currentLayout === "fill") {
      return (
        <img
          className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
          src={src}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      );
    }
  };
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 
    lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition 
    duration-200 transform ease-in hover:scale-105 hover:animate-pulse"
    >
      {/* <img
          className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
          src={profile}
          style={{ width: "40", height: "40", objectFit: 'cover' }}
      />

      <img
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
      /> */}

      {renderImage()}

      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  )
}

StoryCard.propTypes = {
  name : PropTypes.string.isRequired,
  src : PropTypes.string.isRequired,
  profile : PropTypes.string.isRequired,
  layout : PropTypes.string.isRequired
}

export default StoryCard;