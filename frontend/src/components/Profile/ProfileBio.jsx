import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  Crown,
  DollarSign,
  Calendar,
  RotateCw,
  MapPin,
  Hash,
} from "lucide-react";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "../ui/separator";
export default function ProfileBio({ data }) {
  console.log(data);
  return (
    <div className="flex gap-3 flex-col items-center justify-center border border-[#d9d9d9] rounded-md p-4 shadow">
      <Avatar>
        <AvatarImage src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556777.jpg?t=st=1716825411~exp=1716829011~hmac=1e2b9dbb27dba20aeda0dfa7ab19ce897d474024f36669d728ebe3c96ddf4018&w=1380" />
      </Avatar>
      <h1 className="text-xl font-semibold">{data?.name}</h1>
      <h1 className="flex text-md  gap-4">
        <Crown color="#f59e0b" />
        {data?.instagram.username}
      </h1>
      <p className="text-sm ">{data?.bio}</p>

      <div className="space-x-2 flex justify-evenly w-full">
        <Button variant="outline" className="text-sm">
          Button
        </Button>
        <Button variant="outline">Message</Button>
        <Button variant="outline">Button</Button>
      </div>
      <Separator className="my-7" />
      <div className="flex flex-col gap-5 justify-between w-full ">
        <div className="flex justify-between ">
          <div className="flex gap-1">
            <DollarSign /> Session starting at
          </div>
          <h1 className="font-semibold">$50</h1>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-1">
            <Calendar /> Age
          </div>
          <h1 className="font-semibold">{data?.dob}</h1>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-1">
            <RotateCw /> Gender
          </div>
          <h1 className="font-semibold text-emerald-500">{data?.gender}</h1>
        </div>
        <Separator className="my-3" />
        <div className="flex justify-between ">
          <div className="flex gap-1">
            <MapPin /> Country
          </div>
          <h1 className="font-semibold ">{data?.country}</h1>
        </div>
        <div className=" space-y-2">
          <div className="flex gap-1">
            <Hash /> Niche
          </div>
          <div className="flex gap-2 flex-wrap">
            <Badge>{data?.niche}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
