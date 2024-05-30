import ProfileBio from "@/components/Profile/ProfileBio";
import Stats from "@/components/Profile/Stats";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { REACT_QUERY_KEYS } from "@/constants/REACT_QUERY";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axiosInstance";
import { useParams } from "react-router-dom";
export default function ProfileById() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [REACT_QUERY_KEYS.PROFILE_WITH_ID, id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/influencer/profile/${id}`);
      return response.data;
    },
  });
  return (
    <>
      <Navbar />
      <main className="container justify-center gap-4 mt-10 grid grid-cols-3  min-h-[70vh]">
        <div>
          <ProfileBio />
        </div>
        <div className="col-span-2">
          <Stats data={data?.influencer?.instagram} />
        </div>
      </main>

      <Button className="absolute bottom-10 right-10 px-7 py-2"> Edit </Button>
    </>
  );
}