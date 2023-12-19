import React, { useState } from "react";
import mahii from "../src/assets/mahi.mp4";
import no from "../src/assets/no.mp4";

const App = () => {
  const [input, setInput] = useState("");
  const [mahi, setMahi] = useState(null);
  const handleclick = () => {
    if (input.length == 7 || input == 7) {
      console.log("mahi");
      setMahi(true);
    } else {
      console.log("no");
      setMahi(false);
    }
  };
  return (
    <>
      <div className="bg-blue-100 min-h-screen flex  flex-col items-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center mt-3">
          Thala for a reason
        </h1>
        <p className="text-gray-400 font-bold">
          Enter word of length 7 or number 7
        </p>

        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[500px] sm:w-[300px] xs:max-w-[300px]"
            placeholder=" Enter word or number"
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            onClick={handleclick}
          >
            Submit
          </button>
        </div>

        {mahi != null && (
          <div>
            {mahi ? (
              <div>
                <h1 className="text-4xl text-blue-600 font-bold text-center">
                  Thala for a reason 🥳🎉
                </h1>

                <video
                  src={mahii}
                  autoPlay
                  loop
                  className="mt-3 w-[300px] h-[300px] mx-auto"
                ></video>
              </div>
            ) : (
              <div>
                <h1 className="text-4xl text-blue-600 font-bold text-center">
                  No Thala for reason😔
                </h1>
                <video
                  src={no}
                  autoPlay
                  loop
                  className="mt-3 w-[300px] h-[300px] mx-auto"
                ></video>
              </div>
            )}
          </div>
        )}
        <p className="text-green-300  font-bold">Made by Karu ❤️</p>
      </div>
    </>
  );
};

export default App;
