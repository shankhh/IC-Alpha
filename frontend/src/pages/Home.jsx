import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { Button } from "@/components/ui/button";

import HomeStyles from "./styles/Home.module.css";

import LoremCheckbox from "@/components/Home/LoremCheckbox";

const Home = () => {
  const fiveItems = [1, 2, 3, 4, 5];

  const threeItems = [1, 2, 3];

  return (
    <>
      <main className="flex flex-col min-h-screen container">
        <Navbar />
        <section className="flex flex-1 justify-start min-h-[700px]">
          {/* left side */}
          <div className="bg-slate-100 flex flex-col items-center">
            <div className="min-w-full  pt-[10rem] pb-10">
              <h1 className="text-center text-black bg-clip-text text-8xl">
                Hero Section
              </h1>
            </div>
            <div className=" flex-col gap-2  min-h-full flex flex-1 md:items-start items-center ">
              <div className="flex flex-col w-full gap-4 items-center pb-10">
                <Button type="submit" className="w-50">
                  {" "}
                  Browse Stuff
                </Button>
                {/* <Button type="submit" className="w-50rem ">
                  {" "}
                  New Button
                </Button>
                <Button type="submit" className="w-50rem ">
                  <Link to="/temp">Temp</Link>
                </Button> */}
              </div>
            </div>
          </div>
          {/* end left side */}
          {/* right side */}
          <div className="border-2 bg-gray-400 flex-1 relative ">
            {/* right cross */}
            {/* <textarea className={HomeStyles.crossed}></textarea> */}
            {/* left cross */}
          </div>
          {/* end right side */}
        </section>

        <section className="flex flex-1 flex-col py-20 justify-start ">
          <div className="flex flex-col items-center gap-2">
            <div>
              <h2 className="text-4xl">Why our clients like us</h2>
            </div>
            <div>
              <p className="text-2xl text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                ad.
              </p>
            </div>
          </div>
          <div className="flex flex-col pt-8">
            <div className="flex">
              {/* left boxes */}

              <div className="flex-1 flex bg-slate-500 mr-10 rounded-md"></div>
              {/* right list */}
              <div className="flex flex-col gap-4">
                {fiveItems.map((f) => (
                  <LoremCheckbox key={f} />
                ))}
                <button className="p-3  max-w-[7rem] bg-black text-white rounded-md">Button</button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="text-center">
            <h2 className="text-5xl font-bold py-4 px-36">
              Our business strategy has help many companies across the globe.
            </h2>

            <h3 className="text-gray-600 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              sequi porro consectetur voluptate illum error similique, non velit
              nostrum. Molestias.
            </h3>
          </div>
        </section>

        <section className="py-24">
          <div className="flex justify-center">
            <h2 className="text-4xl">Our Partners</h2>
          </div>
          <div className="flex gap-4 justify-between px-40 py-14">
            {fiveItems.map((f) => (
              <div className="min-w-[5rem] min-h-[5rem] bg-gray-400 rounded-full"></div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-center">
            <h2 className="text-4xl">Latest Blogs</h2>
          </div>

          <div className="flex px-40">
            {threeItems.map((t) => {
              return (
                <div className="flex flex-col p-4">
                  <div className="min-w-40 min-h-44 bg-gray-300"></div>
                  <div className="flex flex-col gap-2">
                    <h4>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod explicabo repudiandae mollitia.
                    </h4>

                    <h6 className="text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Hic, eaque porro nam dolorum amet fuga nulla sint
                      doloremque.
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-20">
          <div className="flex justify-center text-4xl">Our happy clients</div>
          <div className="flex md:px-40">
            <div className="flex flex-col p-4  gap-2">
              <div className="flex flex-col gap-2 ">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  explicabo repudiandae mollitia.
                </h4>

                <h6 className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                  eaque porro nam dolorum amet fuga nulla sint doloremque.
                </h6>
              </div>

              <div className="flex items-center">
                <div className="max-w-[6rem] min-w-[5rem] min-h-[5rem] bg-gray-200 rounded-full"></div>
                <div className="px-2">
                  <h2 className="text-2xl font-bold">Lorem, ipsum.</h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-4  gap-2">
              <div className="flex flex-col gap-2">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  explicabo repudiandae mollitia.
                </h4>

                <h6 className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
                  eaque porro nam dolorum amet fuga nulla sint doloremque.
                </h6>
              </div>
              <div className="flex items-center">
                <div className="max-w-[6rem] min-w-[5rem] min-h-[5rem] bg-gray-200 rounded-full"></div>
                <div className="px-2">
                  <h2 className="text-2xl font-bold">Lorem, ipsum.</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex py-24">
          <div className="flex flex-1 justify-center items-center">
            <div className="bg-gray-400 min-w-full min-h-full"></div>
          </div>
          <div className="flex flex-col flex-1 px-20 gap-4">
            <h2 className="text-3xl">Frequently Asked Questions</h2>
            <div className="flex flex-col">
              <div>
                <h2 className="text-2xl font-bold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.?
                </h2>
                <h4 className="text-xl font-medium text-gray-500">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  quos minima deserunt harum!
                </h4>
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.?
                </h2>
                <h4 className="text-xl font-medium text-gray-500">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  quos minima deserunt harum!
                </h4>
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.?
                </h2>
                <h4 className="text-xl font-medium text-gray-500">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  quos minima deserunt harum!
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section className="px-20 rounded-lg pb-20">
          <div className="min-h-[10rem] flex bg-black items-center rounded-lg">
            <div className="flex-1 text-white px-20">
              <h3 className="text-3xl font-bold">Need more information?</h3>
              <h6 className="text-xl">
                Write your concern to us and our specialist will connect back to
                you.
              </h6>
            </div>
            <div className="px-8">
              <button className="px-6 py-2 bg-white text-black rounded-md">Button</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
