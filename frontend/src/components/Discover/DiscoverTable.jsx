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
          <TableHead>Username</TableHead>
          <TableHead>Followers</TableHead>
          <TableHead>Engagement</TableHead>
          <TableHead>Reach</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {influencers.map((influencer) => (
          <TableRow key={influencer._id}>
            <TableCell className="font-medium">{influencer.username}</TableCell>
            <TableCell>{influencer.follower}</TableCell>
            <TableCell>{influencer.engagement}</TableCell>
            <TableCell>{influencer.reach}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
