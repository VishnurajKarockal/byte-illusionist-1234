import PropTypes from "prop-types";

function StoryCard ({name, src, profile}){ 

  return (
    <div className="relative md:h-20 md:w-20
    lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition 
    duration-200 transform ease-in hover:scale-105 hover:animate-pulse"
    >
      <img
          className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 w-10 h-10 object-cover fixed"
          src={profile}
      />

      <img
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl w-full h-full"
        src={src}
      />

      <p className="absolute opacity-0 lg:opacity-100 bottom-5 w-5/6 text-white text-sm font-bold truncate ml-1">
        {name}
      </p>
    </div>
  )
}

StoryCard.propTypes = {
  name : PropTypes.string.isRequired,
  src : PropTypes.string.isRequired,
  profile : PropTypes.string.isRequired,
}

export default StoryCard;