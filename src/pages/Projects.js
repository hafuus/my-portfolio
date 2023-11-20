import React from 'react';
import { Link } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import projImg1 from "../images/projimg1.jpg";
import projImg2 from "../images/projimg2.jpeg";
import projImg3 from "../images/bug-tracking-tools (2).jpg";

function Projects() {
  const projects = [
    {
      title: "Bug Tracker",
      description: "MERN Stack proj Enables secure authentication, dynamic issue tracking, and efficient project management.also provides Personalized dashboards and real-time updates, enhancing user collaboration.",
      imgUrl: projImg3,
      codeurl: "https://github.com/hafuus/Bug_Tracker_proj/",
      siteurl: "https://me-bug-tracker.netlify.app/"
    },
    {
      title: "me.bakes",
      description: "this is a responsive React JS-based frontend project that serves as an informative website for a cupcake shop. It provides a user-friendly interface and unique design.",
      imgUrl: projImg1,
      codeurl: "https://github.com/hafuus/me.bakes/",
      siteurl: "https://mebakes.netlify.app/"
    },
    {
      title: "me.socialmedia",
      description: "MERN Stack social media project allows registration, post creation, friend management, profile customization with light/dark mode.",
      imgUrl: projImg2,
      codeurl: "https://github.com/hafuus/mmesocialmedia.git",
      siteurl: "https://mesocialmedia.netlify.app/"
    }
  ];

  return (
    <div className='pt-16'>
      <div className='mb-10'>
        {/* Bug Tracker Section */}
        <div className="text-center mb-5">
          <h3 className="text-4xl text-cyan-950 font-bold font-sans">My Latest Projects</h3>
        </div>
        <div className='lg:pl-24 py-4'>
        <a href="https://me-bug-tracker.netlify.app/" className="bg-gray-100 hover:bg-white ">
          <div className="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg">
            <img src={projects[0].imgUrl} className="w-1/1 lg:w-1/2 rounded-l-2xl" alt="Bug Tracker" />
            <div className="p-6 bg-gray-50">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">{projects[0].title}</h2>
              <p className="text-gray-600">{projects[0].description}</p>
            </div>
          </div>
        </a>
        <div className="md:pl-24 md:space-x-24 pt-3 pl-3">
          <a href={projects[0].codeurl} className="focus:outline-none text-white bg-teal-700 hover:bg-green-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-10 py-3 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">code</a>
          <a href={projects[0].siteurl} className="focus:outline-none text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:ring-rose-100 font-medium rounded-lg text-sm px-10 py-3 mr-2 mb-2 dark:bg-rose-400 dark:hover:bg-rose-500 dark:focus:ring-rose-600">visit site</a>
        </div>
      </div>
      </div>

      {/* Other Projects Section */}
      <div className='mb-10'>
        <div className="text-center mb-5">
          <h3 className="text-4xl text-cyan-950 font-bold font-sans pt-7">Other Projects</h3>
        </div>
        <div className='grid lg:grid-cols-2 py-4'>
          {projects.slice(1).map((project, index) => (
            <div key={index}>
              <a href={project.siteurl} className="bg-gray-100 hover:bg-white">
                <div className="m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg">
                  <img src={project.imgUrl} className="w-1/1 lg:w-1/2 rounded-l-2xl" alt={project.title} />
                  <div className="p-6 bg-gray-50">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900">{project.title}</h2>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </a>
              <div className="md:pl-24 md:space-x-24 pt-3 pl-3">
                <a href={project.codeurl} className="focus:outline-none text-white bg-teal-700 hover:bg-green-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-10 py-3 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">code</a>
                <a href={project.siteurl} className="focus:outline-none text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:ring-rose-100 font-medium rounded-lg text-sm px-10 py-3 mr-2 mb-2 dark:bg-rose-400 dark:hover:bg-rose-500 dark:focus:ring-rose-600">visit site</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
