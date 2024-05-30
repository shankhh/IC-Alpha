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

export function CampaignTable({ influencers }) {
  return (
    <Table>
      <TableCaption>A list of influencers.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Username</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Followers</TableHead>
          <TableHead className="text-right">Following</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {influencers.map((influencer) => (
          <TableRow key={influencer._id}>
            <TableCell className="font-medium">{influencer.username}</TableCell>
            <TableCell>{influencer.email}</TableCell>
            <TableCell>{influencer.follower}</TableCell>
            <TableCell className="text-right">{influencer.following}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
