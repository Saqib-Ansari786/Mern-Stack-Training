import React from "react";

export default function MainComp() {
  return (
    <div id="poster" className="">
      <div className="gradient-effect ">
        <h1 className=" mt-60 text-center font-serif font-bold text-6xl  text-white uppercase">
          Welcome Food Lovers! <br />
          <span className="text-3xl">Find the best food in the world</span>
        </h1>
        <h2 className="text-center mt-4 font-serif  text-xl  text-white">
          A place where you can find the best food in the world and share your
          own experiences with others.
        </h2>
        <button className="bg-green-700 text-white font-bold py-3 px-9 rounded mt-4 hover:bg-green-500 hover:text-white active:bg-green-200 active:text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}
