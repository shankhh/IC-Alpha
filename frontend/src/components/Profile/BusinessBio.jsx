import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function BusinessProfileBio({ data }) {
  console.log(data);
  return (
    <>
      <div className="flex gap-3 items-center justify-center border border-[#d9d9d9] rounded-md p-4">
        <Avatar className="bg-slate-300">
          <AvatarFallback className="bg-slate-300 h-full w-full">
            IC
          </AvatarFallback>
        </Avatar>
        <div className="pt-7 px-4">
          <h1 className="text-xl font-semibold"> {data?.companyName}</h1>
          <b>Find us at : </b>
          <h1 className="text-xl font-extralight pb-5">
            {data?.companyWebsite}
          </h1>
        </div>
      </div>

      <Separator className="my-7" />
    </>
  );
}
