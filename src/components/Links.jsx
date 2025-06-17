import profile from "../assets/profile.jpg"
import { NavLink } from "react-router";
export default function Links({ checked }) {
  const displayMenu = (e) => {
    checked (e.target.checked);
    };
    return (
      <div className="flex flex-row gap-1">
        <input
          onChange={displayMenu}
          type="checkbox"
          id="toggle"
          className="hidden"
        />
        <label htmlFor="toggle">
          <div className="menu flex flex-col justify-center gap-1 p-3 border-2 mr-2 border-black rounded-lg shadow-lg cursor-pointer [@media(min-width:1300px)]:hidden">
            <div className="bg-black w-8 h-[3px] rounded-lg"></div>
            <div className="bg-black w-8 h-[3px] rounded-lg"></div>
            <div className="bg-black w-8 h-[3px] rounded-lg"></div>
          </div>
        </label>

        <div className="hidden [@media(min-width:1300px)]:flex flex-row justify-center items-center gap-10 font-bold text-2xl fredoka">
          <span className="rounded-lg p-2">
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
          </span>
          <span className="rounded-lg p-2">
            <NavLink
              to="/Skills"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Skills
            </NavLink>
          </span>
          <span className="rounded-lg p-2">
            <NavLink
              to="/Projects"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Projects
            </NavLink>
          </span>
          <span className="rounded-lg p-2">
            <NavLink
              to="/Education"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Education
            </NavLink>
          </span>
          <span className="rounded-lg p-2">
            <NavLink
              to="/Certifications"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Certifications
            </NavLink>
          </span>
          <span className="rounded-lg p-2">
            <NavLink
              to="/Profile"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Profile
            </NavLink>
          </span>
        </div>
      </div>
    );
}