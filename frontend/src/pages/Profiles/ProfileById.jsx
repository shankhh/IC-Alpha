import { useUserContext } from "../../store/UserStore";
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
  const { auth } = useUserContext();
  return (
    <>
      <Navbar />
      <main className="container justify-center gap-4 mt-10 grid grid-cols-3  min-h-[70vh]">
        <div>
          <ProfileBio data={data?.influencer} />
        </div>
        <div className="col-span-2">
          <Stats data={data?.influencer?.instagram} />
        </div>
      </main>
    </>
  );
}
