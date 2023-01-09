import React from "react";

export default function CardGroup(props) {
  return (
    <div className={props.bgColorClass}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-14 lg:max-w-none lg:py-18">
          <h2 className="text-4xl font-bold text-slate-300 font-serif text-center tracking-widest">
            {props.title}
          </h2>
          <div className="container mx-auto mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
