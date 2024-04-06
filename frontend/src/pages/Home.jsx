import React from "react";
import Navbar from "@/components/Navbar/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-w-full text-center pt-[10rem]">
      <h1 className="text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-8xl">welcome lallu</h1>
      </div>
      <div className="min-w-full text-center">
        <button className="bg-indigo-500  text-white rounded-full p-3 px-8">Browse Influencers</button>
      </div>
    </>
  );
}
