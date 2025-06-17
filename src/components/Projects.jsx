import React from "react";
import ProjectPic from "../assets/ProjectNew.png"
import Project1 from "../assets/Project1.png"
import Project2 from "../assets/Project2.png";

const Projects = () => {
    return (
      <div className="flex flex-col lg:flex-row w-full h-fit min-h-screen bg-gray-50 justify-center items-center">
        <div className="w-full lg:w-1/3 mt-40 lg:mt-20 flex justify-center items-center p-4">
          <img
            src={ProjectPic}
            alt="Project pic"
            className="w-[70%] lg:w-[80%] max-w-[400px] h-auto object-contain"
          />
        </div>
        <div className="w-[90vw] h-[700px] overflow-y-scroll overflow-x-hidden mb-5  shadow-2xl bg-white rounded-2xl  lg:w-2/3 flex flex-col gap-8 px-4 py-5 mx-8 lg:mt-40 pb-6">
          <h1 className="text-xl text-center bg-white w-full md:text-3xl font-bold text-orange-500">
            List of Projects
          </h1>
          <div className="w-fit h-fit rounded-2xl shadow-2xl bg-orange-50 flex flex-col lg:flex-row  justify-center items-center">
            <img
              src={Project1}
              alt="ProjectPic"
              className="h-auto max-h-[250px] md:h-full w-1/3"
            />
            <p className="text-md md:text-lg font-semibold w-2/3 text-black p-3">
              <span className="text-lg md:text-2xl font-bold text-orange-500">
                SkyCast - (Front-end : API based weather app)
              </span>
              <br />
              <br />
              SkyCast is a modern, API-integrated weather website that provides
              real-time weather information. Users can search for any city to
              view current conditions, temperature, and forecasts.
              <br />
              <br />
              <span className="text-lg md:text-xl font-bold text-black">
                Tech-Stack used:
              </span>
              <p className="ml-5">
                👉 HTML <br /> 👉 CSS <br /> 👉Javascript
              </p>
              <br />
              <p>
                <span className="text-lg md:text-xl font-bold text-black">
                  Github Link: &nbsp;
                </span>
                <a
                  href="https://github.com/MarkalaRohan-tech/SkyCast.git"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Click here
                </a>
              </p>
              <p>
                <span className="text-lg md:text-xl font-bold text-black">
                  Live Demo: &nbsp;
                </span>
                <a
                  target="_blank"
                  href="https://skycastweb.netlify.app/"
                  className="text-blue-500 underline"
                >
                  Click here
                </a>
              </p>
            </p>
          </div>
          <div className="w-fit h-fit rounded-2xl shadow-2xl bg-orange-50 flex flex-col lg:flex-row  justify-center items-center">
            <img
              src={Project2}
              alt="ProjectPic"
              className="h-auto max-h-[250px] md:h-full w-1/3"
            />
            <p className="text-md md:text-lg font-semibold w-2/3 text-black p-3">
              <span className="text-lg md:text-2xl font-bold text-orange-500">
                StayEase - (Full-stack : House rental booking)
              </span>
              <br />
              <br />
              StayEase is a full-stack house rental booking platform that
              connects property owners with tenants. It features user
              authentication, property listings, booking management. Built with
              a responsive UI and real-time updates for a seamless rental
              experience.
              <br />
              <br />
              <span className="text-lg md:text-xl font-bold text-black">
                Tech-Stack used:
              </span>
              <p className="ml-5">
                <span className="text-md font-bold text-black">Frontend:</span>
                <br />
                <p className="ml-5">
                  👉 HTML <br /> 👉 CSS <br /> 👉Javascript <br /> 👉Bootstrap
                </p>
                <span className="text-md font-bold text-black">Backend:</span>{" "}
                <br />
                <p className="ml-5">
                  👉 Node.js <br /> 👉 Express.js <br />
                </p>
                <span className="text-md font-bold text-black">Backend:</span>{" "}
                <br />
                <p className="ml-5">
                  👉 MongoDB & Atlas <br />
                </p>
                <span className="text-md font-bold text-black">
                  Other tools:
                </span>
                <br />
                <p className="ml-5">
                  👉 Google Maps API <br />
                </p>
              </p>
              <br />
              <p>
                <span className="text-lg md:text-xl font-bold text-black">
                  Github Link: &nbsp;
                </span>
                <a
                  target="_blank"
                  href="https://github.com/MarkalaRohan-tech/StayEase.git"
                  className="text-blue-500 underline"
                >
                  Click here
                </a>
              </p>
              <p>
                <span className="text-lg md:text-xl font-bold text-black">
                  Live Demo: &nbsp;
                </span>
                <a
                  target="_blank"
                  href="https://stayease-lq4w.onrender.com"
                  className="text-blue-500 underline"
                >
                  Click here
                </a>
              </p>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Projects;