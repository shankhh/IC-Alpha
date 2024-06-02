import { axiosInstance } from "../../lib/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Link } from "react-router-dom";
import BusinessProfileBio from "@/components/Profile/BusinessBio";
import { Button } from "@/components/ui/button";
import CampaignCard from "@/components/Campaign/CampaignCard";
import { Label } from "@/components/ui/label";
import { REACT_QUERY_KEYS } from "../../constants/REACT_QUERY";
import { useState, useEffect } from "react";
export default function BusinessProfile() {
  const businessCamp = useQuery({
    queryKey: [REACT_QUERY_KEYS.BUSINESS_PROFILE_CAMPAIGS],
    queryFn: async () => {
      const res = await axiosInstance.get("/client/profile/campaigns");
      return res.data;
    },
  });
  const businessProfile = useQuery({
    queryKey: [REACT_QUERY_KEYS.PROFILE],
    queryFn: async () => {
      const res = await axiosInstance.get("/client/profile/");
      return res.data;
    },
  });
  const [completedCampaigns, setCompletedCampaigns] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    console.log(businessCamp.data);
    if (!businessCamp.data) return;
    setCompletedCampaigns(
      businessCamp.data?.campaigns?.filter((d) => d?.completed)
    );
    setCampaigns(businessCamp.data?.campaigns?.filter((d) => !d?.completed));
  }, [businessCamp.data]);
  console.log(businessProfile);
  return (
    <>
      <Navbar />
      <main className="flex container justify-center gap-4 mt-10 min-h-[70vh]">
        <div className="w-[47%] h-auto">
          <BusinessProfileBio
            campaigns={completedCampaigns}
            data={businessProfile.data?.profile}
          />
          <div className="border border-[#d9d9d9] rounded-md p-4 shadow pb-[300px] ">
            <Label className="text-xl font-black">Completed Campaigns</Label>
            <CampaignCard
              title="Done Hiring"
              details="Last round was done using this platform"
            />
          </div>
        </div>

        <div className="flex gap-3 w-full items-center border border-[#d9d9d9] rounded-md p-4 shadow">
          <div
            className="w-full h-full  max-h-[80vh] 
           overflow-y-auto  space-y-4 border-[#d9d9d9] rounded-md p-4 pt-0 "
          >
            <div className="flex sticky inset-0 bg-white h-14 px-4 z-20 justify-between items-center my-2 ">
              <Label className="text-xl font-black">Ongoing Campaigns</Label>
              <Button className="right-10 px-7 py-2">
                <Link to={"/campaignform"}>Create New +</Link>
              </Button>
            </div>
            {campaigns?.map((camp) => (
              <CampaignCard
                key={camp._id}
                age_group={camp.age_group}
                amount={camp.amount}
                country={camp.country}
                details={camp.details}
                gender={camp.gender}
                id={camp._id}
                interestedBy={camp.interestedBy}
                niche={camp.niche}
                title={camp.title}
                client={camp.client}
                selected={camp?.selected}
                // client_id={camp.client}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
