import { useState } from "react";

const JoinOnboarding = () => {
  const [email, setEmail] = useState("");
  const fetchData = async () => {
    console.log(email);
    const result = await fetch("http://localhost:4269/influencer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await result.json();
    console.log(data);
  };

  return (
    <section className="min-h-screen min-w-full px-40">
      <div className="min-w-full flex justify-center">
        <h3 className="text-4xl">Enter your data</h3>
      </div>
      <div className="min-w-full flex justify-center">
        <form className="min-w-[40rem]">
          <div className="p-4 flex flex-col">
            <label className="text-sm font-medium">Email</label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border-2 rounded-full"
            />
          </div>
        </form>
      </div>
      <div className="flex min-w-full justify-center">
      <div className="flex flex-col gap-4 max-w-[20rem]">
        <div
          className="cursor-pointer px-4 p-2 rounded-md bg-black text-white min-w-full text-center"
          onClick={fetchData}
        >
          Connect your instagram
        </div>
        <div className="px-4 p-2 rounded-md bg-black text-white min-w-full text-center">
          Connect your facebook
        </div>
      </div>
      </div>
    </section>
  );
};

export default JoinOnboarding
