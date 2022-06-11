import React from "react";
import rakib from "../../assets/rakib.jpg";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";


const Banner = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center lg:h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a <span className="text-amber-400">Full Stack Developer</span>
          </h2>
          <p className="text-gray-200 text-lg py-4  max-w-md">
            I am good at building and designing web application software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, Bootstrap, Node JS, Express JS and MongoDB.
          </p>

          <div>
            <Link
              to="project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer"
            >
              Project
            </Link>
          </div>
        </div>

        <div>
          <img
            src={rakib}
            alt="My profile"
            className="rounded-2xl mx-auto mt-16 md:mt-0 w-full lg:ml-14 "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
