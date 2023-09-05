import React from "react";
import { Link } from "@remix-run/react";
function Header() {
  return (
    <div className="flex justify-around text-center p-2 items-center font-Montserrat bg-beige text-rojo text-sm z-20">
      <div className="flex flex-1 text-xs sm:text-lg  space-x-2 font-semibold z-50">
        <Link to="/about">
          <p>About</p>
        </Link>
      </div>
      <Link to="/" className="z-50">
        <div className="flex-1 text-xs sm:text-lg font-bold z-50">
          HUMBERTO G. BUSTILLO
        </div>
      </Link>
      <div className="flex-1 flex justify-end z-20 space-x-2 sm:space-x-4">
        <Link className="z-30 h-4 sm:h-10 " to="https://twitter.com/hgbustillo">
          <img src="/images/tw.png" className="h-5/6 sm:p-1 z-30 " />
        </Link>
        <Link
          className="z-30 h-4 sm:h-10"
          to="https://www.linkedin.com/in/bertgonzalezb/"
        >
          <img src="/images/linkedin.png" className="h-5/6 sm:p-1 " />
        </Link>
      </div>
    </div>
  );
}

export default Header;
