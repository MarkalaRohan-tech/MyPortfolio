import React from "react";
import "../index.css";
import HomePic from "../assets/HomePic.png";
import Typewriter from "./TypeWrtierEffect";

const Home = () => {
    return (
      <div className="h-[100vh] flex flex-col [@media(min-width:950px)]:flex-row items-center justify-center">
        <img
          src={HomePic}
          alt="Cartoon character of Markala Rohan"
          className="w-[250px] mt-30 md:w-[400px] h-auto"
        />
        <div className="card rounded-xl flex flex-col justify-evenly item shadow-2xl p-10">
          <p className="text-3xl font-semibold text-center">Hey there! 👋</p>
          <br />
          <p className="text-3xl text-center">
            I'm <span className="font-bold text-orange-500">Markala Rohan</span>
          </p>
          <br />
          <p className="text-2xl text-gray-600 text-center">
            <b>A passionate MERN-Stack Developer</b>
          </p>
          <br />
          <p>
            <Typewriter></Typewriter>
          </p>
        </div>
      </div>
    );
}


export default Home;