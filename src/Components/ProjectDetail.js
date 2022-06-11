import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});
  // const { id, name, technology, img, href } = project;

  useEffect(() => {
    const url = `http://localhost:5000/project/${projectId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-slate-900 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        

        <div className="pb-8">
          <p className="text-4xl text-white font-bold inline border-b-4 border-gray-500">
            Project Detail
          </p>
          <div className="text-center mt-10 ">
          <Link to="/home">
            <button className="group text-white w-fit px-6 py-3 my-2  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Home page
            </button>
          </Link>
        </div>
        </div>

        <div className="card card-compact border border-red-400 w-4/5  mx-auto text-stone-900 bg-base-100 shadow-xl m-6">
          <div className="carousel w-full shadow-md shadow-gray-600 rounded-lg">
            <div id="slide1" className="carousel-item relative w-full ">
              <img src={project.img} alt="" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={project.img2} alt="" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={project.img3} alt="" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <h2 className="mt-4 ml-2 ">
            <span className="font-bold">Name:</span> {project.name}
          </h2>

          <h2 className="mt-4 ml-2 ">
            <span className="font-bold">Technology:</span> {project.technology}
          </h2>

          <p className="mt-4 ml-2 ">
            <span className="font-bold">Description:</span>{" "}
            {project.description}
          </p>

          <button className="w-1/3   group text-white  px-6 py-3 my-2  rounded-md bg-gradient-to-r from-red-400 to-red-600 cursor-pointer  m-4 duration-200 hover:scale-105">
            <a href={project.href} target="_blank" rel="noreferrer">
              Live Site
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
