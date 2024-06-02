import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Join from "@/pages/Join/Join";
import { useUserContext } from "../../store/UserStore";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = ({ textColorHeader = "#000" }) => {
  const location = useLocation();

  const isLogin = useMemo(() => {
    return location.pathname.includes("login");
  }, [location]);

  const { auth } = useUserContext();

  const [activeItem, setActiveItem] = useState("/");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="flex items-center container justify-between   ">
      <Link to="/">
        <div
          className="text-xl flex items-center  py-3 "
          style={{ color: textColorHeader }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={textColorHeader}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
          </svg>
          InfluenceConnect
        </div>
      </Link>
      <div className="flex gap-10">
        <Link
          to="/discover"
          onClick={() => handleItemClick("Discover")}
          className={`text-black ${activeItem === "Discover" && "font-bold"}`}
        >
          <div> Discover </div>
        </Link>
        <Link
          to={"/campaigns"}
          onClick={() => handleItemClick("Campaigns")}
          className={`text-black ${activeItem === "Campaigns" && "font-bold"}`}
        >
          <div> Campaigns </div>
        </Link>
        <Link
          to={"/aboutus"}
          onClick={() => handleItemClick("AboutUs")}
          className={`text-black ${activeItem === "AboutUs" && "font-bold"}`}
        >
          <div> About Us </div>
        </Link>
      </div>

      {auth.is_auth ? (
        <div className="pt-2">
          <ProfileDropdown />
        </div>
      ) : (
        <div className="flex gap-3">
          <Link to={"/login"}>
            <Button variant="outline" className="border-gray-400">
              Sign In
            </Button>
          </Link>
          {/* Join Dialog */}
          <Dialog>
            <DialogTrigger>
              <Button variant="outline" className="bg-gray-200 border-gray-400">
                Sign Up
              </Button>
            </DialogTrigger>
            <Join />
          </Dialog>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
