import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import CategoryIcon from "@mui/icons-material/Category";
import React from "react";

export default function RestaurentCard(props) {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-xl bg-white max-w-[15rem] overflow-hidden">
        <img
          className="rounded-t-lg hover:opacity-90 transition ease-in-out duration-700 hover:scale-110 hover:shadow-xl hover:cursor-pointer  "
          src={props.image}
          alt=""
        />
        <div className="p-6 font-sans">
          <h5 className="text-gray-900 text-xl font-medium mb-2 font-sans">
            {props.title}
          </h5>
          <p className="text-gray-700 text-sm mb-4 font-sans">
            <LocationOnIcon fontSize="small" color="warning" className="mr-3" />
            {props.location}
          </p>
          <p className="text-gray-700 text-sm mb-4 font-sans ">
            <CallIcon fontSize="small" color="warning" className="mr-3" />
            {props.phone}
          </p>
          <p className="text-gray-700 text-sm mb-4 font-sans">
            <CategoryIcon fontSize="small" color="warning" className="mr-3" />
            {props.catogrey}
          </p>
          <button
            type="button"
            className=" inline-block px-5 py-2 bg-gradient-to-r from-slate-700 to-blue-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-gradient-to-r hover:from-slate-400 hover:to-blue-800 hover:shadow-lg focus:bg-gradient-to-r focus:from-slate-900 focus:to-cyan-600  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
}
