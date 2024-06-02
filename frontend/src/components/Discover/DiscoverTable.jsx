import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";
export function DiscoverTable({ influencers, state }) {
  const removeFromState = ({ type, value }) => {};
  return (
    <div className="flex flex-col w-full  space-y-2">
      <div className="flex gap-2 gap-y-1 flex-wrap">
        {state.country.map((item) => {
          return (
            <div className="justify-between inline-flex min-w-32 px-3 gap-2 rounded-md py-2 bg-gray-200 text-gray-500">
              {item}
              <button>
                <X />
              </button>
            </div>
          );
        })}
        {state.age.map((item) => {
          return (
            <div className=" inline-flex justify-between min-w-32 px-3 gap-2 rounded-md py-2 bg-gray-200 text-gray-500">
              {item}
              <button>
                <X />
              </button>
            </div>
          );
        })}
        {state.gender.map((item) => {
          return (
            <div className=" inline-flex min-w-32 px-3 justify-between gap-2 rounded-md py-2 bg-gray-200 text-gray-500">
              {item}
              <button>
                <X />
              </button>
            </div>
          );
        })}
      </div>
      <Table className="border-black">
        <TableCaption>A list of influencers.</TableCaption>
        <TableHeader className="border rounded-md">
          <TableRow className="border rounded-e-md">
            <TableHead className="text-center font-semibold ">
              Username
            </TableHead>
            <TableHead className="text-center font-semibold">
              Followers
            </TableHead>
            <TableHead className="text-center font-semibold">
              Engagement
            </TableHead>
            <TableHead className="text-center font-semibold">Reach</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {influencers.map((influencer) => (
            <TableRow key={influencer._id}>
              <TableCell className="font-medium border text-left pl-10">
                {influencer.username}
              </TableCell>
              <TableCell className="border text-center">
                {influencer.follower}
              </TableCell>
              <TableCell className="border text-center">
                {influencer.engagement}
              </TableCell>
              <TableCell className="border text-center">
                {influencer.reach}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
