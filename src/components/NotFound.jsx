import React from "react";
import ErrorPic from "../assets/ErrorPic.png"

const NotFound = () => {
    return (
      <div className=" h-[100vh] mt-10 flex justify-center items-center">
        <img src={ErrorPic} alt="Page Not Found" width={400} height={400}></img>
      </div>
    );
}

export default NotFound;