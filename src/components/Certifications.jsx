import React from "react";
import version from "../assets/version.png";
import mern from "../assets/mern.png";
import postman from "../assets/postman.png";
import react from "../assets/react.png";
import leet from "../assets/LeetCodeAchievement.png";

const Certifications = () => {
  return (
    <div className="mt-40 m-10 px-4">
      <h1 className="text-xl md:text-4xl text-center font-bold text-orange-500 mb-10">
        List of Certifications & Achievements
      </h1>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        <a
          href="https://drive.google.com/file/d/1bcRQW1Ti9PEX-K6EMD3qioUxi2G0NBgo/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer w-full md:w-[90%] h-[400px] shadow-xl rounded-2xl bg-orange-50 flex flex-col items-center justify-start gap-6 px-2 py-10 text-gray-600 text-lg">
            <div className="h-2/3 overflow-hidden rounded-t-2xl border-2 border-orange-400">
              <img
                src={mern}
                alt="Certificate"
                className="w-full h-auto object-contain "
              />
            </div>
            <div>
              <p className="text-orange-500 font-bold text-xl mb-2">
                Mern-stack Development Certificate
              </p>
              <p className="text-black font-bold text-lg">Apna College</p>
              <p>
                <span className="text-black font-bold text-lg">
                  Issued Date:
                </span>{" "}
                May 2025
              </p>
              <p>
                <span className="text-black font-bold text-lg">
                  Credential ID:
                </span>{" "}
                683169d0e07916d49d0bed26
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://drive.google.com/file/d/1umvEop9hP8Qpu8cIFjMJGtfIk7MbideI/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer w-full md:w-[90%] h-[400px] shadow-xl rounded-2xl bg-orange-50 flex flex-col items-center justify-start gap-6 px-2 py-10 text-gray-600 text-lg">
            <div className="h-2/3 overflow-hidden rounded-t-2xl border-2 border-orange-400">
              <img
                src={version}
                alt="Certificate"
                className="w-full h-auto object-contain "
              />
            </div>
            <div>
              <p className="text-orange-500 font-bold text-xl mb-2">
                Git & Github (Version Control) Certificate
              </p>
              <p className="text-black font-bold text-lg">LetsUpgrade</p>
              <p>
                <span className="text-black font-bold text-lg">
                  Issued Date:
                </span>{" "}
                March 2025
              </p>
              <p>
                <span className="text-black font-bold text-lg">
                  Credential ID:
                </span>{" "}
                LUEGGMAR1251009
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://drive.google.com/file/d/1UqbfUGDdmRa6m0hj2fgCDGsiwxIBj2FT/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer w-full md:w-[90%] h-[400px] shadow-xl rounded-2xl bg-orange-50 flex flex-col items-center justify-start gap-6 px-2 py-10 text-gray-600 text-lg">
            <div className="h-2/3 overflow-hidden rounded-t-2xl border-2 border-orange-400">
              <img
                src={postman}
                alt="Certificate"
                className="w-full h-auto object-contain "
              />
            </div>
            <div>
              <p className="text-orange-500 font-bold text-xl mb-2">
                Postman Certificate
              </p>
              <p className="text-black font-bold text-lg">Postman</p>
              <p>
                <span className="text-black font-bold text-lg">
                  Issued Date:
                </span>{" "}
                March 2025
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://drive.google.com/file/d/1oVtA8R42pqPvYmBK9Hl3HegEMlz4aX64/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer w-full md:w-[90%] h-[400px] shadow-xl rounded-2xl bg-orange-50 flex flex-col items-center justify-start gap-6 px-2 py-10 text-gray-600 text-lg">
            <div className="h-2/3 overflow-hidden rounded-4-2xl border-2 border-orange-400">
              <img
                src={react}
                alt="Certificate"
                className="w-full h-auto object-contain "
              />
            </div>
            <div>
              <p className="text-orange-500 font-bold text-xl mb-2">
                React Bootcamp Certificate
              </p>
              <p className="text-black font-bold text-lg">Devtown</p>
              <p>
                <span className="text-black font-bold text-lg">
                  Issued Date:
                </span>{" "}
                May 2025
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://drive.google.com/file/d/1kcFUCdAtDzjgErgzOp2gxiEREg6PY_Ir/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer w-full md:w-[90%] h-[400px] shadow-xl rounded-2xl bg-orange-50 flex flex-col items-center justify-start gap-6 px-2 py-10 text-gray-600 text-lg">
            <div className="h-2/3 overflow-hidden rounded-t-2xl border-2 border-orange-400">
              <img
                src={leet}
                alt="Certificate"
                className="w-full h-auto object-contain "
              />
            </div>
            <div>
              <p className="text-orange-500 font-bold text-xl mb-2">
                LeetCode Achievement Badge
              </p>
              <p className="text-black font-bold text-lg">Leetcode</p>
              <p>
                <span className="text-black font-bold text-lg">
                  Issued Date:
                </span>{" "}
                May 2025
              </p>
            </div>
          </div>
        </a>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Certifications;
