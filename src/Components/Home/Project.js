import React from 'react';
import { useNavigate } from 'react-router-dom';


const Project = ({project}) => {

    const { _id, name, technology, img, href } = project;
    const navigate = useNavigate();

    const navigateToProjectDetail = id =>{
        navigate(`/project/${id}`);
    }

    return (
        <div  className="shadow-md shadow-gray-600 rounded-lg">
            <img className="rounded-md duration-200 hover:scale-105" src={img} alt="" />
            <h2 className="mt-4 ml-2">{name}</h2>
            <p className="mt-4 ml-2">{technology}</p>

            <div className="flex items-center justify-center">
                <button onClick={() => navigateToProjectDetail(_id)} className="w-1/3 text-yellow-600 px-3 py-3 m-4 duration-200 hover:scale-105">
                  Detail
                </button>

                <button className="w-1/3 text-red-600 px-3 py-3 m-4 duration-200 hover:scale-105">
                  Delete
                </button>

                <button className="w-1/3  text-red-600 px-3 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href} 
                  target="_blank" 
                  rel="noreferrer">
                    Live Site
                  </a>
                </button>
              </div>

        </div>
    );
};

export default Project;