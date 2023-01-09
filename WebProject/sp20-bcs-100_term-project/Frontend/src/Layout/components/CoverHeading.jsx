import React from "react";

export default function CoverHeading(props) {
  return (
    <div className={props.bgImage}>
      <div className="bg-black bg-opacity-60 w-full h-[70vh] flex  justify-center flex-wrap overflow-hidden flex-col">
        <h1 className="text-white font-serif text-4xl  sm:text-5xl md:text-7xl tracking-widest font-bold px-5">
          {props.firstLine} <br></br> {props.secondLine}
        </h1>
        {props.children}
      </div>
    </div>
  );
}

// https://images.unsplash.com/photo-1598346762291-aee88549193f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
