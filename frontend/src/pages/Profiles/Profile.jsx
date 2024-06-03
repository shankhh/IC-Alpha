import CampaignCard from "@/components/Campaign/CampaignCard";
import ProfileBio from "@/components/Profile/ProfileBio";
import Stats from "@/components/Profile/Stats";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { REACT_QUERY_KEYS } from "@/constants/REACT_QUERY";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axiosInstance";
import { Link } from "react-router-dom";
import { useUserContext } from "@/store/UserStore";
export default function Profile() {
  const { data } = useQuery({
    queryKey: [REACT_QUERY_KEYS.PROFILE],
    queryFn: async () => {
      const res = await axiosInstance.get("/client/profile");
      return res.data;
    },
  });
  const businessCamp = useQuery({
    queryKey: [REACT_QUERY_KEYS.BUSINESS_PROFILE_CAMPAIGS],
    queryFn: async () => {
      const res = await axiosInstance.get("/client/profile/campaigns");
      return res.data;
    },
  });
  const { auth } = useUserContext();

  console.log(businessCamp);
  return (
    <>
      <Navbar />
      <main className="container justify-center gap-4 mt-10 grid grid-cols-3  min-h-[70vh]">
        <div>
          <ProfileBio data={data?.profile} />
        </div>
        <div className="col-span-2">
          <Stats data={data?.profile?.instagram} />
          <div className="mt-10">
            {businessCamp.data?.campaigns.map((camp) => (
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
                completed={camp.completed}
                // client_id={camp.client}
              />
            ))}
          </div>
        </div>
        {auth.id == data?.profile?._id && (
          <div className="flex gap-3">
            <Link to="/join/onboarding">
              <Button className="absolute bottom-10 right-10 px-7 py-2">
                Edit
              </Button>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
