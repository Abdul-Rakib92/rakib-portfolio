import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/project')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
                projects.map(project => <Project
                key={project._id}
                project={project}
                >
                </Project>)
            }

        </div>


      </div>
    </div>
  );
};

export default Projects;
