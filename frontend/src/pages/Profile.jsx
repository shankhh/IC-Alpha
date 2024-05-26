export default function Profile() {
  return (
    <main className={"container flex flex-1 min-h-screen"}>
      <section className="flex min-w-full flex-1 min-h-full ">
        {/* left side */}
        <div className={"flex flex-col flex-1"}>
          <section className={"px-10 py-10 min-h-full "}>
            <div className={" min-h-full shadow-lg flex flex-col"}>

                {/* avatar  box*/}  
                    <div className={"flex flex-1 border-2 m-4 items-center flex-col pt-10"}>

                        <div className={"w-[10rem] h-[10rem] rounded-[99999px] border-2"}></div>
                        <div className={"pt-2"}>
                            <h2>Kimi no namae wa</h2>
                        </div>
                    </div>
                {/* score box */}
                <div className={"flex flex-1 border-2 m-4 justify-center items-center"}>
                    <h3 className={"text-2xl"}>Score: </h3>
                </div>

                    {/* other box */}
            
                    <div className={"flex flex-1 border-2 m-4 items-center justify-center gap-x-2"}>
                        <div className="w-[5rem] h-[5rem] border-2 "></div>
                        <div className="w-[5rem] h-[5rem] border-2"></div>
                        <div className="w-[5rem] h-[5rem] border-2"></div>
                    </div>
                 </div>
          </section>
        </div>
        <div className={"border-[0.1rem] border-gray-400 my-10"}></div>
        {/* right side */}

        <div className={"flex flex-col flex-1"}>
        <section className={"px-10 py-10 min-h-full"}>
            <div className={" min-h-full shadow-lg flex flex-col"}>
                          {/* avatar  box*/}  
                          <div className={"flex flex-1 border-2 m-4"}>Bio data</div>
                {/* score box */}
                {/* <div className={"flex flex-1 border-2 m-4"}></div> */}

                    {/* other box */}
            
                    <div className={"flex flex-1 border-2 m-4"}>Previous Clients</div>
                </div>
          </section>
        </div>
      </section>
    </main>
  );
}
