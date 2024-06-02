import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { Button } from "@/components/ui/button";

import HomeStyles from "./styles/Home.module.css";

import LoremCheckbox from "@/components/Home/LoremCheckbox";

const Home = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen container">
        <Navbar />
        <section className="hero flex flex-1 justify-start min-h-[700px] pt-10">
          {/* left side */}
          <div className="bg-slate-100 flex flex-col items-center rounded-3xl">
            <div className="min-w-full  pt-[10rem] pb-10">
              <h1 className="text-center text-black bg-clip-text text-5xl font-semibold">
                Revolutionize Your Social Media Marketing with Authentic
                Influencer Connections
              </h1>
              <p className="text-center text-xl font-medium pt-10">
                Effortless Discovery, Streamlined Collaboration, Measurable
                Results
              </p>
            </div>
            <div className=" flex-col gap-2  min-h-full flex flex-1 md:items-start items-center ">
              <div className="flex  flex-col-1 space-x-8 items-center justify-between">
                <Button
                  type="submit"
                  variant="outline"
                  className="w-50 py-6 text-lg border-black"
                >
                  <Link to="/discover">Discover Influencers </Link>
                </Button>
                <Button
                  type="submit"
                  variant="outline"
                  className="w-50 py-6 text-lg bg-gray-200 border-black"
                >
                  <Link to="/campaigns">Browse Campaigns </Link>
                </Button>
              </div>
            </div>
          </div>
          {/* end left side */}
        </section>

        <section className="flex flex-1 flex-col py-20 justify-start ">
          <div className="flex flex-col items-center gap-2">
            <div>
              <h2 className="text-4xl font-normal">Why our clients like us?</h2>
            </div>
            <div className="items-center text-center pt-6">
              <p className="text-2xl text-gray-500">
                No more endless maunal profile searches.
              </p>
              <p className="text-2xl text-gray-400 pt-2">
                An opportunity for businesses to leverage the trust influencers
                have built with their followers.
              </p>
            </div>
          </div>
        </section>

        <section className="px-15 rounded-lg pb-20">
          <div className="min-h-[10rem] flex bg-gray-800 items-center rounded-3xl">
            <div className="flex-1 text-white px-20">
              <h3 className="text-3xl font-bold">Need more information?</h3>
              <h6 className="text-xl">
                Write your concern to us and our specialist will connect back to
                you.
              </h6>
            </div>
            <div className="px-8">
              <Button className="px-7 py-2 bg-white text-black rounded-md">
                Say Hello
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
