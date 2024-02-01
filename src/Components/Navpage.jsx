import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navpage() {
  return (
    <nav className="bg-gray-950 text-white flex justify-center items-center h-[10vh] gap-2 ">
      <NavLink className="hover:text-pink-800 active:text-green-800" to="/">
        {" "}
        Home
      </NavLink>
      <NavLink
        className="hover:text-pink-800 active:text-green-800"
        to="/about"
      >
        {" "}
        About
      </NavLink>
      <NavLink
        className="hover:text-pink-800 active:text-green-800"
        to="/contact"
      >
        {" "}
        Contact
      </NavLink>
      <NavLink className="hover:text-pink-800 active:text-green-800" to="/blog">
        {" "}
        Blogs
      </NavLink>

      <NavLink
        className="hover:text-pink-800 active:text-green-800"
        to="/privacy"
      >
        Privacy Policy
      </NavLink>
    </nav>
  );
}

export default Navpage;
