import React from "react";
import Rating from "@mui/material/Rating";

export default function VloggerCard(props) {
  return (
    <div class="flex justify-center transition ease-in-out duration-700 hover:scale-95 hover:shadow-xl">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white font-serif bg-opacity-20 shadow-2xl justify-center items-center">
        <img
          class=" w-full h-52  object-cover md:w-52 rounded-t-lg  md:rounded-full hover:cursor-pointer hover:opacity-70 transition ease-in-out duration-700 hover:scale-110 hover:shadow-xl"
          src={props.image}
          alt=""
        />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-white text-xl font-medium mb-2 font-serif tracking-widest hover:text-yellow-400 hover:cursor-pointer">
            {props.name}
          </h5>
          <p class="text-gray-300 text-base mb-4 font-mono">Age: {props.age}</p>
          <p class="text-gray-100 text-sm mb-4 font-mono">
            {props.description}
          </p>
          <Rating
            name="full-rating-read"
            defaultValue={props.rating}
            precision={0.5}
            readOnly
          />
          <p class="text-gray-100 text-xs font-mono">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
}
