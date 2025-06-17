import React from "react";
import AboutPic from "../assets/AboutPic.png"

const About = () => {
    return (
      <div className="flex flex-col md:flex-row">
        <div className="mt-40 rounded-3xl shadow-xl bg-orange-50 h-[100%] w-[90vw] md:w-2/3 m-5 md:m-10 p-10">
          <span className="text-orange-500 text-4xl">
            <b>About Myself</b>
          </span>
          <br />
          <br />
          <p className="text-lg">
            <span className="font-bold text-xl">Hi! I'm Markala Rohan </span>
            <br />
            <br />
            A passionate MERN-stack developer with a knack for building modern,
            high-performance web applications that are both fast and
            user-friendly. I specialize in developing full-stack solutions using
            MongoDB, Express.js, React, and Node.js. I also have hands-on
            experience with REST APIs, Firebase, and crafting responsive
            interfaces with TailwindCSS.
            <br />
            I love turning ideas into reality through clean code, collaborative
            design, and performance-focused development. I'm always eager to
            explore new technologies and solve real-world problems through
            software.
            <br />
            My project portfolio ranges from a House Rental website to a
            Financial Investment platform. My most recent solo project is a
            “Farmer Support Platform” integrated with a Crop Recommendation
            System.
            <br />
            Currently, I'm actively seeking opportunities to contribute to
            impactful projects, collaborate with creative teams, and grow
            through an internship or full-time role.
            <br />
            <br />
            <span className="text-orange-500 text-2xl">
              <b>Tech Stack & Tools Frontend:</b>
            </span>
            <br />
            <br />
            <ul className="ml-5">
              <li>
                👉 <span className="font-bold">Frontend:</span> React.js,
                Tailwind CSS, Bootstrap, HTML, CSS, JavaScript
              </li>
              <li>
                👉 <span className="font-bold">Backend:</span> Node.js,
                Express.js, MongoDB, Mysql
              </li>
              <li>
                👉 <span className="font-bold">Other Tools:</span> Git, GitHub,
                REST APIs, Netlify/Render
              </li>
            </ul>
          </p>
        </div>
        <div className="w-[100vw] md:w-1/3 flex justify-center items-center mt-20">
          <img src={AboutPic} alt="AboutPic" />
        </div>
      </div>
    );
}

export default About;