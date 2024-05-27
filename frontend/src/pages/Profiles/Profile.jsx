import ProfileBio from "@/components/Profile/ProfileBio";
import Stats from "@/components/Profile/Stats";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    // <main className={"container flex flex-1 min-h-screen "}>
    //   <section className="flex min-w-full flex-1 min-h-full ">
    //     {/* left side */}
    //     <div className={"flex flex-col flex-4"}>
    //       <section className={"px-10 py-10 min-h-full "}>
    //         <div className={" min-h-full  flex flex-col"}>
    //           {/* avatar  box*/}
    //           <div
    //             className={"flex  m-4 items-center flex-col pt-10 border-2 "}
    //           >
    //             <div
    //               className={"w-[10rem] h-[10rem] rounded-[99999px] border-2"}
    //             ></div>
    //             <div className={"pt-2"}>
    //               <h2>Kimi no namae wa</h2>
    //             </div>
    //           </div>
    //           {/* score box */}
    //           <div className={"flex  m-4 justify-center items-center "}>
    //             <h3 className={"text-2xl"}>Score: </h3>
    //           </div>

    //           {/* other box */}

    //           {/* Three boxes Container */}
    //           <div
    //             className={
    //               "flex p-4 border-2  m-4 items-center justify-center gap-x-2 rounded-md shadow-md"
    //             }
    //           >
    //             <div className="w-[5rem] h-[5rem] border-2 "></div>
    //             <div className="w-[5rem] h-[5rem] border-2"></div>
    //             <div className="w-[5rem] h-[5rem] border-2"></div>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //     {/* <div className={"border-[0.1rem] border-gray-400 my-10 "}></div> */}
    //     {/* right side */}

    //     <div className={"flex flex-col flex-1 min-h-1 overflow-y-auto"}>
    //       <section className={"px-10 py-10 min-h-full "}>
    //         {/* Container with scrollbar */}
    //         <div
    //           className={" min-h-full  flex flex-col flex-1 h-1 overflow-auto"}
    //         >
    //           {/* main container with content */}
    //           <div className={"flex flex-1  m-4 rounded-md shadow-md flex-col"}>
    //             {/* First row with two sqaure boxes */}
    //             <div className="h-[25rem] border-2 rounded-md border-blue-400 min-w-full flex p-4 gap-x-2">
    //               <div className="flex flex-1 border-2 rounded-md border-green-500"></div>
    //               <div className="flex flex-1 border-2 rounded-md border-green-500"></div>
    //               <div className="flex flex-1 border-2 rounded-md border-green-500"></div>
    //             </div>

    //             {/* Second row with other two boxes */}
    //             <div className="pt-10  border-2 border-blue-400 min-w-full flex flex-col flex-1">
    //               <div>Hello Universe</div>
    //               <div></div>
    //               <div>
    //                 <div className="h-[20rem] border-2 border-blue-400 min-w-full">
    //                   <div className="h-full border-2 border-blue-400 min-w-full flex p-4 gap-x-2">
    //                     <div className="flex flex-1 border-2 border-green-500"></div>
    //                     <div className="flex flex-1 border-2 border-green-500"></div>
    //                   </div>
    //                 </div>
    //                 {/* <div className="h-[20rem] border-2 border-blue-400 min-w-full"></div> */}
    //               </div>
    //             </div>
    //           </div>
    //           {/* score box */}
    //           {/* <div className={"flex flex-1 border-2 m-4"}></div> */}

    //           {/* other box */}
    //         </div>
    //       </section>
    //     </div>
    //   </section>
    // </main>
    <>
      <Navbar />
      <main className="container justify-center gap-4 mt-10 grid grid-cols-3  min-h-[70vh]">
        <div>
          <ProfileBio />
        </div>
        <div className="col-span-2">
          <Stats />
        </div>
      </main>
      <Button className="absolute bottom-10 right-10 px-7 py-2"> Edit </Button>
    </>
  );
}
