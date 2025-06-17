import React from "react";
import SkillPic from "../assets/SkillPic.png"
import bootstrap from "../assets/bootstrap.png"
import tailwind from "../assets/tailwind.png";
import react from "../assets/reactPic.png";
import mongoDB from "../assets/mongoDB.png";
import express from "../assets/express.png";
import node from "../assets/Node.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import netlify from "../assets/netlify.png";

const Skills = () => {
    return (
      <div className="flex flex-col md:flex-row w-full h-fit min-h-screen bg-gray-50">
        <div className="w-full md:w-1/3 mt-40 md:mt-10 flex justify-center items-center p-4">
          <img
            src={SkillPic}
            alt="Skills pic"
            className="w-[70%] md:w-[80%] max-w-[400px] h-auto object-contain"
          />
        </div>

        <div className="w-[90vw] h-fit md:w-2/3 px-4 mx-5 md:mt-40 pb-6">
          <div className="relative h-[650px] md:h-[650px] overflow-y-auto shadow-2xl rounded-2xl bg-white p-6">
            <h1 className="sticky top-0 bg-white z-10 px-3 text-xl md:text-3xl font-bold text-orange-500 py-3 border-b rounded-xs border-orange-200">
              Skills
            </h1>
            <br />
            <h1 className="text-lg md:text-2xl w-full font-bold text-orange-500 py-3 border-b border-orange-200">
              Programming Languages:
            </h1>
            <div className="mt-4 grid grid-cols-2 gap-10 justify-items-center items-center">
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px]  bg-white p-5 flex flex-col items-center justify-center gap-2 rounded-3xl shadow-xl">
                <img
                  src={java}
                  alt="Java"
                  width={350}
                  height={250}
                  className="w-24 h-24 object-contain"
                />
                <span className="text-xl md:text-2xl font-bold text-orange-500">
                  Java
                </span>
              </div>
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px]  bg-white p-5 flex flex-col items-center justify-center gap-2 rounded-3xl shadow-xl">
                <img
                  src={js}
                  alt="JavaScript"
                  width={350}
                  height={250}
                  className="w-24 h-24 object-contain"
                />
                <span className="text-xl md:text-2xl font-bold text-orange-500">
                  JavaScript
                </span>
              </div>
            </div>

            <br />
            <h1 className="text-lg w-full md:text-2xl font-bold text-orange-500 py-3 border-b rounded-xs border-orange-200">
              Front-end Tools:
            </h1>
            <br />
            <div className="mt-4 grid grid-cols-2 gap-10 justify-items-center items-center">
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={react} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  React.js
                </span>
              </div>
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={tailwind} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  Tailwind
                </span>
              </div>
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={bootstrap} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  BootStrap
                </span>
              </div>
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={js} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  Javascript
                </span>
              </div>
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={html} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  HTML
                </span>
              </div>
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={css} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  CSS
                </span>
              </div>
            </div>
            <br />
            <h1 className="text-lg w-full md:text-2xl font-bold text-orange-500 py-3 border-b rounded-xs border-orange-200">
              Backend Tools:
            </h1>
            <br />
            <div className="mt-4 grid grid-cols-2 gap-10 justify-items-center items-center">
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={node} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  Node.js
                </span>
              </div>
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={express} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  Express.js
                </span>
              </div>
            </div>
            <br />
            <h1 className="text-lg w-full md:text-2xl font-bold text-orange-500 py-3 border-b rounded-xs border-orange-200">
              Database Tools:
            </h1>
            <br />
            <div className="mt-4 grid grid-cols-2 gap-10 justify-items-center items-center">
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={mongoDB} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  MongoDB
                </span>
              </div>
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={mysql} width={250} height={250} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  Mysql
                </span>
              </div>
            </div>
            <br />
            <h1 className="text-lg w-full md:text-2xl font-bold text-orange-500 py-3 border-b rounded-xs border-orange-200">
              Other Tools:
            </h1>
            <br />
            <div className="mt-4 grid grid-cols-2 gap-10 justify-items-center items-center">
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={github} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  Version Control
                </span>
              </div>
              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={git} width={250} height={250} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  Git
                </span>
              </div>

              <div className="w-[100%] h-fit md:w-[80%] md:h-[350px] bg-white p-5 flex flex-col gap-2 rounded-3xl justify-center items-center  shadow-xl">
                <img src={netlify} width={250} height={250} alt="Skills" />
                <span className="text-xl md:text-3xl font-bold text-orange-500">
                  Netlify
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills;