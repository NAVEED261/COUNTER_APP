"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [pause, setPause] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("yes");

  useEffect(() => {
    let interval: any;
    if (!pause) {
      interval = setInterval(() => {
        if (count < end) {
          setCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [count, end, pause]);

  const handleStartChange = (e: any) => {
    setStart(parseInt(e.target.value));
  };

  const handleEndChange = (e: any) => {
    setEnd(parseInt(e.target.value));
  };

  const handlePauseChange = () => {
    setPause(!pause);
  };

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 to-purple-400">
      <header className="bg-gray-800 text-white text-2xl font-bold py-4 px-8 mb-4">
        Counter App
      </header>
      <div className="grid grid-cols-3 gap-4">
        <input
          type="number"
          value={start}
          onChange={handleStartChange}
          placeholder="Start"
          className="bg-gray-200 text-gray-800 font-semibold py-4 px-6 rounded focus:outline-none focus:bg-white w-40 text-4xl"
        />
        <input
          type="number"
          value={end}
          onChange={handleEndChange}
          placeholder="End"
          className="bg-gray-200 text-gray-800 font-semibold py-4 px-6 rounded focus:outline-none focus:bg-gray w-40 text-4xl"
        />
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Plz write something"
            className="bg-sky-200 text-gray-800 font-semibold py-4 px-6 rounded focus:outline-none focus:bg-gray w-64 text-4xl"
          />
        </div>
        <button
          onClick={handlePauseChange}
          className="bg-blue-500 hover:bg-blue-600 text-blue-700 font-bold py-4 px-6 rounded text-4xl ml-auto"
        >
          {pause ? "Resume" : "Pause"}
        </button>
        <div className="flex items-center gap-4">
          <label className="text-pink-800 font-semibold text-4xl">
            Radio Option:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="yes"
              value="yes"
              checked={selectedOption === "yes"}
              onChange={handleOptionChange}
              className="form-radio h-8 w-8 text-blue-500"
            />
            <label
              htmlFor="yes"
              className="text-sky-800 font-semibold text-[36px]"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="no"
              value="no"
              checked={selectedOption === "no"}
              onChange={handleOptionChange}
              className="form-radio h-4 w-8 text-blue-500"
            />
            <label
              htmlFor="no"
              className="text-gray-800 font-semibold text-4xl"
            >
              No
            </label>
          </div>
        </div>
      </div>
      <p className="text-6xl font-bold mt-8">{count}</p>
    </div>
  );
}
