import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
export default function Navbar({ textColorHeader = "#000" }) {
  return (
    <nav className="flex items-center justify-between mx-auto container  ">
      <div
        className="text-xl flex items-center  py-3 "
        style={{ color: textColorHeader }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke={textColorHeader}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="mr-2 h-6 w-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
        </svg>{" "}
        InstaConnect
      </div>
      <div className="flex gap-10">
        <Link to={"/discover"}>
          <div> Discover</div>
        </Link>
        <Link to={"/community"}>
          <div> Community </div>
        </Link>
        <Link to={"/pricing"}>
          <div> Pricing </div>
        </Link>
        <Link to={"/aboutus"}>
          <div> About Us </div>
        </Link>
      </div>
      <div className="flex gap-3">
        <Link to={"/login"}>
          <Button variant="outline">Login</Button>
        </Link>
        <Link to={"/register"}>
          <Button>Register</Button>
        </Link>
      </div>
    </nav>
  );
}
