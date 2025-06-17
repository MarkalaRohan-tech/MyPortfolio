import React from "react";
import profile from "../assets/profile.jpg"
import download from "../assets/download.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import resume from "../assets/resume.pdf";

const Profile = () => {
    return (
      <div className="mt-40 flex flex-col justify-center mb-20 bg-gray-100 p-5 items-center m-auto w-[80%] lg:w-1/2 shadow-lg rounded-2xl">
        <h1 className="text-orange-500 w-full text-xl text-center font-bold md:text-3xl p-5 border-b-2 border-orange-400">
          Profile
        </h1>
        <br />
        <img
          src={profile}
          alt="ProfilePic"
          className="rounded-full w-50 h-50 shadow-xl border-4 border-orange-500"
        />
        <br />
        <div className="flex flex-row gap-5 justify-center items-center">
          <span className="text-black w-fit text-lg text-center font-bold md:text-3xl p-5">
            Resume :
          </span>
          <a href={resume} download>
            <button className="flex shadow-lg h-fit flex-row gap-2 md:gap-5 bg-orange-500 text-black p-4 rounded-2xl cursor-pointer">
              <img src={download} className="w-4 h-6" alt="donwload" />
              Download
            </button>
          </a>
        </div>
        <h1 className="text-orange-500 w-full text-xl text-center font-bold md:text-3xl p-5 border-b-2 border-orange-400">
          Connect with me
        </h1>
        <br />
        <br />
        <div className="grid  gird-cols-1 [@media(min-width:1500px)]:grid-cols-2 gap-4 p-2 w-fit justify-center items-center">
          <a
            href="https://www.linkedin.com/in/markala-rohan-0914ab346/"
            target="_blank"
            className="cursor-pointer shadow-lg"
          >
            <div className="w-full flex flex-row bg-white p-4 shaodow-xl rounded-2xl gap-4 justify-center items-center">
              <img src={linkedin} width={30} alt="Linkedin" />
              <p className="font-bold text-md md:text-xl">Markala Rohan</p>
            </div>
          </a>
          <a
            href="https://github.com/MarkalaRohan-tech"
            target="_blank"
            className="cursor-pointer shadow-lg"
          >
            <div className="w-full flex flex-row bg-white p-4 shaodow-xl rounded-2xl gap-4 justify-center items-center">
              <img src={github} width={30} alt="Linkedin" />
              <p className="font-bold text-md md:text-xl">MarkalaRohan-tech</p>
            </div>
          </a>
          <a
            href="mailto:markalarohan99@gmail.com"
            className="cursor-pointer shadow-lg"
          >
            <div className="w-full flex flex-row bg-white p-4 shadow-xl rounded-2xl gap-4 justify-center items-center">
              <img src={email} width={30} alt="Email" />
              <p className="font-bold text-md md:text-xl">
                markalarohan99@gmail.com
              </p>
            </div>
          </a>

          <a href="tel:+918179250578" className="cursor-pointer shadow-lg">
            <div className="w-full flex flex-row bg-white p-4 shaodow-xl rounded-2xl gap-4 justify-center items-center">
              <img src={phone} width={30} alt="Phone" />
              <p className="font-bold text-md md:text-xl">+91 8179250578</p>
            </div>
          </a>
        </div>
      </div>
    );
}

export default Profile;