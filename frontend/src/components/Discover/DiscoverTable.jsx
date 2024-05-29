import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DiscoverTable({ influencers }) {
  return (
    <Table>
      <TableCaption>A list of influencers.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Username</TableHead>
          <TableHead>Followers</TableHead>
          <TableHead>Engagement</TableHead>
          <TableHead className="text-right">Reach</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {influencers.map((influencer) => (
          <TableRow key={influencer._id}>
            <TableCell className="font-medium">{influencer.username}</TableCell>
            <TableCell>{influencer.follower}</TableCell>
            <TableCell>{influencer.engagement}</TableCell>
            <TableCell className="text-right">{influencer.reach}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
