import React from "react";
import EduPic from "../assets/EduPic.png";

const Education = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-fit min-h-screen bg-gray-50">
      <div className="w-full md:w-1/3 mt-40 md:mt-10 flex justify-center items-center p-4">
        <img
          src={EduPic}
          alt="Educational pic"
          className="w-[70%] md:w-[80%] max-w-[400px] h-auto object-contain"
        />
      </div>

      <div className="w-[90vw] h-fit md:w-2/3 px-4 mx-5 md:mt-40 pb-6">
        <div className="relative h-[650px] md:h-[650px] overflow-y-auto shadow-2xl rounded-2xl bg-white p-6">
          <h1 className="sticky top-0 bg-white z-10 px-3 text-xl md:text-3xl font-bold text-orange-500 py-3 border-b rounded-xs border-orange-200">
            Educational History
          </h1>

          <div className="space-y-6 mt-4">
            <div className="w-full bg-orange-50 p-5 rounded-lg shadow-lg">
              <p className="text-2xl font-semibold text-orange-600 mb-2">
                Post-Graduation
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Institution: </b>Aurora's PG College, Ramanthapur
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Course: </b>MCA
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Duration: </b>2023-2025
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>CGPA: </b>8.1
              </p>
            </div>
            <div className="w-full bg-orange-50 p-5 rounded-2xl shadow-lg">
              <p className="text-2xl font-semibold text-orange-600 mb-2">
                Under-Graduation
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Institution: </b>University College of Science, Saifabad
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Course: </b>BCA
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Duration: </b>2020-2023
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>CGPA: </b>8.3
              </p>
            </div>
            <div className="w-full bg-orange-50 p-5 rounded-2xl shadow-lg">
              <p className="text-2xl font-semibold text-orange-600 mb-2">
                Intermediate
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Institution: </b>Narayana Junior College
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Course: </b>MPC
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Duration: </b>2018-2020
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>CGPA: </b>9.1
              </p>
            </div>
            <div className="w-full bg-orange-50 p-5 rounded-2xl shadow-lg">
              <p className="text-2xl font-semibold text-orange-600 mb-2">
                Tenth
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Institution: </b>St.Joseph's High School
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Course: </b>10th
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>Duration: </b>2018
              </p>
              <p className="text-gray-700 text-md ml-4">
                <b>CGPA: </b>9.3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
