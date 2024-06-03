import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  Calendar,
  RotateCw,
  MapPin,
  Hash,
  Instagram,
  AtSign,
} from "lucide-react";
import { Separator } from "../ui/separator";
import moment from "moment";
export default function ProfileBio({ data }) {
  console.log("-->", data?.dob);
  console.log(moment().format());

  return (
    <div className="flex gap-3 flex-col items-center justify-center border border-[#d9d9d9] rounded-lg p-4 shadow">
      <Avatar>
        <AvatarFallback>IC</AvatarFallback>
      </Avatar>
      <div className="">
        <h1 className="text-xl font-semibold">{data?.name}</h1>
        <h1 className="flex text-md gap-1">
          <AtSign />
          {data?.instagram.username}
        </h1>
      </div>
      <p className="text-sm ">{data?.bio}</p>

      <div className="space-x-2 flex justify-evenly w-full pt-5">
        <Button
          variant="outline"
          className="gap-2 text-md py-5 border-gray-400"
        >
          <Instagram />
          Follow Me
        </Button>
        <Button variant="secondary" className="gap-2 text-md py-5 border-black">
          Invite to Campaign
        </Button>
      </div>
      <Separator className="my-7" />
      <div className="flex flex-col gap-5 justify-between w-full ">
        {/* <div className="flex justify-between ">
          <div className="flex gap-1">
            <DollarSign /> Session starting at
          </div>
          <h1 className="font-semibold">$50</h1>
        </div> */}
        <div className="flex justify-between px-10">
          <div className="flex gap-1">
            <Calendar /> Age
          </div>
          <h1 className="font-md">{moment().diff(data?.dob, "years")} YO</h1>
        </div>
        <div className="flex justify-between px-10">
          <div className="flex gap-1">
            <RotateCw /> Gender
          </div>
          <h1 className="font-md">{data?.gender}</h1>
        </div>
        <Separator className="my-3" />
        <div className="flex justify-between px-10">
          <div className="flex gap-1">
            <MapPin /> Country
          </div>
          <h1 className="font-md">{data?.country}</h1>
        </div>
        <div className=" space-y-2 px-10">
          <div className="flex gap-1">
            <Hash /> Niche
          </div>
          <div className="flex gap-2 flex-wrap pt-2">
            <Badge className="bg-gray-200 text-black text-md font-medium px-7 py-1">
              {data?.niche}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
