import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "../ui/button";

const Footer = ({ textColorHeader = "#000" }) => {
  return (
    <footer className="flex flex-col items-center mx-auto container">
      <div className="flex min-w-full min-h-full justify-start items-start container">
        <div
          className="text-xl flex flex-1 items-center  py-3 "
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
        <div className="flex flex-col gap-2 pr-10">
          <div>About</div>
          <div className="flex flex-col gap-1">
            <p>Brands & Agencies</p>
            <p>How it works</p>
            <p>Success Stories</p>
            <p>Connect With us</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <Link to={"/login"}>
            <Button className="px-6" variant="outline">
              Login
            </Button>
          </Link>
        </div>
      </div>
      <hr className="h-px my-8 min-w-full bg-gray-900 border-1"></hr>
      <div className="flex min-w-full min-h-full justify-start items-start container">
        <div className="flex flex-1 pb-3"> ®️2024</div>
        <div className="pr-5 pb-3"> Follow</div>
        <div className="flex gap-x-2 pb-3">
          <div> 1️⃣</div>
          <div> 2️⃣</div>
          <div> 3️⃣</div>
          <div> 4️⃣</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
