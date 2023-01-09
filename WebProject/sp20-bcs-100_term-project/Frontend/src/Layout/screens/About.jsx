import React from "react";

export default function About() {
  return (
    <>
      <div id="about" className="container-fluid  ">
        <div className="w-full h-[70vh]  bg-red-400 bg-opacity-20 flex flex-col justify-center px-7 ">
          <h1 className=" text-white font-serif text-8xl tracking-widest font-bold ">
            About Us
          </h1>
        </div>
      </div>
      <div className="container-fluid mx-auto bg-black bg-opacity-80   ">
        <div className="p-5 sm:grid sm:grid-cols-2">
          <p className="text-white font-mono tracking-wider  flex justify-center items-center ">
            Review❤️Food is Pakistan's Largest Platform for Foodies. At
            Review❤️Food, we believe everyone should have unlimited access to
            good food at all times. We offer a platform whereby users can have
            access to the best restaurants in Pakistan. <br></br>
            <br></br>
            We reveal review information on these restaurants so that our users
            can make informed decisions in choosing the best restaurant services
            at all times. We feature the best of the best restaurants in
            Pakistan, these restaurants were carefully selected after
            consideration of a number of factors. These factors include hygiene,
            cuisine type, restaurant options available, popularity, and so on.
            <br></br>
            <br></br>
            We take data from restaurants time to time to ensure we remain
            updated. <br></br>
            <br></br>
            Reviews and photos from our subscribers should also guide you in
            making the best choices. With our services, restaurants are more
            focused on food itself. This, in turn, translates to memorable
            dining experiences for our users. No matter where you are, you can
            count on us when you’re researching for the best restaurant to dine
            in Pakistan.
          </p>
          <div className="px-8 flex justify-around  flex-wrap gap-4  ">
            <img src="assets/images/image-2.jpg" className="h-80 rounded-3xl" />
            <img src="assets/images/image-3.jpg" className="h-80 rounded-3xl" />
            <img src="assets/images/image-1.jpg" className="h-80 rounded-3xl" />
          </div>
        </div>
      </div>
    </>
  );
}
