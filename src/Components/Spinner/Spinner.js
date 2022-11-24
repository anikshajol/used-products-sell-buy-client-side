import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center absolute inset-0 h-full">
      <p className="text-8xl font-thin animate-ping text-blue-700 ">L</p>

      <p className="text-8xl font-thin animate-pulse">o</p>
      <p className="text-8xl font-thin animate-ping ">a</p>
      <p className="text-8xl font-thin animate-pulse">d</p>
      <p className="text-8xl font-thin animate-ping">d</p>
      <p className="text-8xl font-thin animate-ping">i</p>
      <p className="text-8xl font-thin animate-pulse">n</p>
      <p className="text-8xl font-thin animate-ping">g</p>
      <p className="text-9xl animate-ping text-red-400">.</p>
      <p className="text-9xl animate-ping  text-blue-700">.</p>
      <p className="text-9xl animate-ping  text-purple-900">.</p>
    </div>
  );
};

export default Spinner;
