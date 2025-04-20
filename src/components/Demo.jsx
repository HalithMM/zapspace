import React from 'react';
import { useNavigate } from 'react-router-dom';
import project1Banner from "../assets/Gallery/Home/enter2.jpg";
import project2Banner from "../assets/Imgaes/Livinghall.jpg";
import project3Banner from "../assets/Gallery/Office/Waiting Hall.jpg";

export const Demo = () => {
  const navigate = useNavigate();

  const handleNavigate = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="p-4 mt-15">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
          Our Recent Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Project 1 */}
        <div
          className="w-full h-84 border overflow-hidden rounded-lg cursor-pointer"
          onClick={() => handleNavigate('project1')}
        >
          <img
            src={project1Banner}
            alt="Project 1"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Project 2 */}
        <div
          className="w-full h-84 border overflow-hidden rounded-lg cursor-pointer"
          onClick={() => handleNavigate('project2')}
        >
          <img
            src={project2Banner}
            alt="Project 2"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Project 3 */}
        <div
          className="w-full h-84 border overflow-hidden rounded-lg cursor-pointer"
          onClick={() => handleNavigate('project3')}
        >
          <img
            src={project3Banner}
            alt="Project 3"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};
