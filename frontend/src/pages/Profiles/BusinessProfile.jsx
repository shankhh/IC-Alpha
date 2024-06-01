import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Link } from "react-router-dom";
import BusinessProfileBio from "@/components/Profile/BusinessBio";
import { Button } from "@/components/ui/button";
import CampaignCard from "@/components/Campaign/CampaignCard";
import { Label } from "@/components/ui/label";

export default function BusinessProfile() {
  return (
    <>
      <Navbar />
      <main className="flex container justify-center gap-4 mt-10 min-h-[70vh]">
        <div className="w-[47%]">
          <BusinessProfileBio />
          <div className="border border-[#d9d9d9] rounded-md p-4 shadow">
            Previous Cards
          </div>
        </div>

        <div className="flex gap-3 w-full items-center border border-[#d9d9d9] rounded-md p-4 shadow">
          <div className="w-full h-full border space-y-4 border-[#d9d9d9] rounded-md p-4 shadow">
            <div className="flex justify-between items-center my-2 ">
              <Label className="text-xl font-black">Ongoing Campaigns</Label>
              <Button className="right-10 px-7 py-2">
                <Link to={"/campaignform"}>Create New +</Link>
              </Button>
            </div>
            <CampaignCard />
            <CampaignCard />
          </div>
        </div>
      </main>
    </>
  );
}
