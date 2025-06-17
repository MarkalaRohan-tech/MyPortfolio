import { useState } from "react";
import "../index.css";
import Links from "./Links";
import Logo from "./Logo";
import { NavLink } from "react-router";

export default function Navbar({ className = "" }) {
  let [isChecked, setIsChecked] = useState(false);
  let handleChildData = (data) => {
    setIsChecked(data);
  };
  return (
    <div className="flex flex-col">
      <div
        className={`${className} navbar flex flex-row gap-3 justify-between items-center w-full h-30 shadow-2xl bg-white p-4`}
      >
        <Logo></Logo>
        <Links checked={handleChildData}></Links>
      </div>
      {isChecked == true ? (
        <div className="fixed top-0 left-0 right-0 [@media(min-width:1600px)]:hidden text-xl z-25 fredoka flex flex-col gap-5 displayMenu mt-30 origin-top bg-white w-full h-fit p-4 text-center transition-all ease-in-out duration-300">
          <NavLink className={({isActive})=>isActive?"active-link":""} to="/About">
            <span
              onClick={() => setIsChecked(!isChecked)}
              className="shadow-lg rounded-xl block py-2"
            >
              About
            </span>
          </NavLink>
          <NavLink className={({isActive})=>isActive?"active-link":""} to="/Skills">
            <span
              onClick={() => setIsChecked(!isChecked)}
              className="shadow-lg rounded-xl block  py-2"
            >
              Skills
            </span>
          </NavLink>
          <NavLink className={({isActive})=>isActive?"active-link":""} to="/Projects">
            <span
              onClick={() => setIsChecked(!isChecked)}
              className="shadow-lg rounded-xl block py-2"
            >
              Projects
            </span>
          </NavLink>
          <NavLink className={({isActive})=>isActive?"active-link":""} to="/Education">
            <span
              onClick={() => setIsChecked(!isChecked)}
              className="shadow-lg rounded-xl block py-2"
            >
              Education
            </span>
          </NavLink>
          <NavLink className={({isActive})=>isActive?"active-link":""} to="/Certifications">
            <span
              onClick={() => setIsChecked(!isChecked)}
              className="shadow-lg rounded-xl block py-2"
            >
              Certifications
            </span>
          </NavLink>
          <NavLink className={({isActive})=>isActive?"active-link":""} to="/Profile">
            <span
              onClick={() => setIsChecked(!isChecked)}
              className="shadow-lg rounded-xl block py-2"
            >
              Profile
            </span>
          </NavLink>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
