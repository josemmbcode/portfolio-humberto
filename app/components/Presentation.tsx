import React from "react";
import Marquee from "./Marquee";
function Presentation() {
  return (
    <>
      <div className="flex justify-center items-center font-Montserrat bg-beige text-rojo">
        <img
          className="h-[20vh] sm:h-[35vh] max-sm:ml-20 ml-36 sm:ml-64 -mr-3 z-10 p-0 object-cover object-center"
          src="/images/Humber-transformed2.png"
        />
        <div className="relative sm:text-xl card transition-all duration-700 group w-96">
          <div className="inset-0 font-Montserrat font-black transition-all duration-100 delay-200 z-20 sm:group-hover:opacity-0">
            <p>Editor.</p>
            <p>Writer.</p>
            <p>Director.</p>
            <p>Producer.</p>
          </div>
          <div className="absolute opacity-0 sm:group-hover:opacity-100 inset-0 z-10 card-back transition-all">
            <p className="whitespace-normal text-xs sm:text-base text-justify">
              Hello! My name is Humberto. A writer of scripts, maker of
              nonfiction films, and dreamer of interactive fiction, looking to
              collaborate and keep creating twisted worlds and weird characters.
            </p>
          </div>
        </div>
      </div>
      <Marquee />
    </>
  );
}

export default Presentation;
