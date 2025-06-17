import { Link } from "react-router";
import logo1 from "../assets/logo1.png"
import "../index.css";

export default function Logo() {
  return (
    <Link to="/">
      <div className="transition-all duration-500 ease-in-out flex flex-row justify-start gap-2 cursor-pointer items-center">
        <img
          src={logo1}
          alt="LogoImage"
          className="w-20 h-20 mb-2.5 shadow-2xl rounded-full"
        />
        <h1 className="text-4xl [@media(min-width:1300px)]:text-6xl name text-shadow-orange-500 font-bold bg-clip-text text-transparent bg-gradient-to-r from-black from-30% via-orange-300 via-66%  to-orange-400 to-90% tangerine-bold">
          Markala Rohan
        </h1>
      </div>
    </Link>
  );
}