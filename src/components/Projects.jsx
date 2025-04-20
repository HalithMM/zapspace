import React from "react";
import { useParams } from "react-router-dom";

// Project 1 Images
import ProjectHouseImg1 from "../assets/Imgaes/Bedroom.jpg";
import ProjectHouseImg2 from "../assets/Imgaes/Dining.jpg";
import ProjectHouseImg3 from "../assets/Imgaes/Livinghall.jpg";
import ProjectHouseImg4 from "../assets/Imgaes/TvDecor.jpg"; 

// Project 2 images  
import projectHouse5 from "../assets/Gallery/Home/Hall1.jpg";
import projectHouse6 from "../assets/Gallery/Home/enter2.jpg";
import projectHouse7 from "../assets/Gallery/Home/room8.jpg";
import projectHouse8 from "../assets/Gallery/Home/studyTable.jpg";
import projectHouse9 from "../assets/Gallery/Home/bathroom3.jpg";
import projectHouse10 from "../assets/Gallery/Home/Kitchen2.jpg";


import projectOfficeImg1 from "../assets/Gallery/Office/receptionHall.jpg"
import projectOfficeImg2 from "../assets/Gallery/Office/Waiting Hall.jpg"
import projectOfficeImg3 from "../assets/Gallery/Office/office Cabin.jpg"
import projectOfficeImg4 from "../assets/Gallery/Office/cabin.jpg"
import projectOfficeImg5 from "../assets/Gallery/Office/MeetingRoom.jpg"
import projectOfficeImg6 from "../assets/Gallery/Office/GroupMeeting.jpg"

export const Projects = () => {
  const { projectId } = useParams();

  // Project data
  const projects = {
    project1: {
      title: "Modern Residence",
      images: [
        { img: projectHouse5, description: "Elegant living hall with panoramic views" },
        { img: projectHouse6, description: "Grand entrance with custom lighting" },
        { img: projectHouse7, description: "Luxury bedroom with premium finishes" },
        { img: projectHouse8, description: "Ergonomic study space design" },
        { img: projectHouse9, description: "Spa-inspired bathroom retreat" },
        { img: projectHouse10, description: "Chef's kitchen with premium appliances" },
      ]
    },
    project2: {
      title: "Contemporary Living",
      images: [
        { img: ProjectHouseImg1, description: "Modern Bedroom Design with smart storage" },
        { img: ProjectHouseImg2, description: "Elegant Dining Area for family gatherings" },
        { img: ProjectHouseImg3, description: "Spacious Living Hall with natural lighting" },
        { img: ProjectHouseImg4, description: "Stylish TV Decor with custom shelving" },
      ]
    },
    project3: {
      title: "Office Space",
      images:[
        {img:projectOfficeImg1,description:" Reception - Branded welcome area with visitor management"},
        {img:projectOfficeImg2,description:"Waiting Lounge - Client hospitality zone with charging stations"},
        {img:projectOfficeImg3,description:"Executive Office - Private leadership workspace"},
        {img:projectOfficeImg4,description:"Staff Area - Efficient team workstations"},
        {img:projectOfficeImg5,description:"Board Room - Formal decision-making space"},
        {img:projectOfficeImg6,description:"Brainstorm Room - Creative collaboration environment"},
      ]
    }
  };

  const currentProject = projects[projectId];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Projects</h1>
        <h2 className="text-2xl text-gray-600">{currentProject?.title || 'Project Details'}</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
      </div>

      {currentProject ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProject.images.map((item, id) => (
            <div key={id} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={`${currentProject.title} - ${id + 1}`}
                  className="w-full h-64 object-cover transition duration-300 group-hover:opacity-90"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-gray-700 text-center font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Project not found</p>
        </div>
      )}
    </div>
  );
};