import { Link } from "react-router-dom";
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
export function DiscoverTable({ influencers, state, dispatch }) {
  console.log(influencers);
  const removeFromState = ({ type, value }) => {};
  return (
    <div className="flex flex-col w-full  space-y-2">
      <div className="flex gap-2 gap-y-1 flex-wrap">
        {state.niche.map((item) => {
          return (
            <div className="justify-between inline-flex min-w-32 px-3 gap-2 rounded-md py-2 bg-gray-200 text-gray-500">
              {item}
              <button
                onClick={() => dispatch({ type: "removeNiche", payload: item })}
              >
                <X />
              </button>
            </div>
          );
        })}
        {state.country.map((item) => {
          return (
            <div className="justify-between inline-flex min-w-32 px-3 gap-2 rounded-md py-2 bg-gray-200 text-gray-500">
              {item}
              <button
                onClick={() => {
                  dispatch({ type: "removeCountry", payload: item });
                }}
              >
                <X />
              </button>
            </div>
          );
        })}
        {state.age.map((item) => {
          return (
            <div className=" inline-flex justify-between min-w-32 px-3 gap-2 rounded-md py-2 bg-gray-200 text-gray-500">
              {item}
              <button
                onClick={() => dispatch({ type: "removeAge", payload: item })}
              >
                <X />
              </button>
            </div>
          );
        })}
        {state.gender.map((item) => {
          return (
            <div className=" inline-flex min-w-32 px-3 justify-between gap-2 rounded-md py-2 bg-gray-200 text-gray-500">
              {item}
              <button
                onClick={() =>
                  dispatch({ type: "removeGender", payload: item })
                }
              >
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
            <TableHead className="text-center font-semibold  pl-10">
              Username
            </TableHead>
            <TableHead className="text-center font-semibold  pl-10">
              @Instagram
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
                <Link to={`/profile/${influencer._id}`}>
                  {influencer?.name}
                </Link>
              </TableCell>
              <TableCell className="font-medium border text-left pl-10">
                {influencer?.instagram?.username}
              </TableCell>
              <TableCell className="border text-center">
                {influencer?.instagram?.follower}
              </TableCell>
              <TableCell className="border text-center">
                {influencer?.instagram?.engagement}
              </TableCell>
              <TableCell className="border text-center">
                {influencer?.instagram?.reach}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
