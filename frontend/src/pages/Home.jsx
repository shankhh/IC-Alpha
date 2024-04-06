import React from "react";
import Navbar from "@/components/Navbar/Navbar";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-w-full text-center pt-[10rem]">
      <h1 className="text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-8xl">Hero Section</h1>
      </div>
      <div className="items-center text-center flex-col flex gap-2">
        <Button type="submit" className="w-50rem"> Browse Stuff</Button>
        <Button type="submit" className="w-50rem "> New Button</Button>
      </div>
    </>
  );
}

export default Home