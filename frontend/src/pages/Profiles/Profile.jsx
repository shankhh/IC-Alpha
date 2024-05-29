import ProfileBio from "@/components/Profile/ProfileBio";
import Stats from "@/components/Profile/Stats";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { REACT_QUERY_KEYS } from "@/constants/REACT_QUERY";
import { useQuery } from "@tanstack/react-query";

export default function Profile() {
  const {} = useQuery({
    queryKey: [REACT_QUERY_KEYS.PROFILE_WITH_ID],
    queryFn: () => {},
  });
  return (
    <>
      <Navbar />
      <main className="container justify-center gap-4 mt-10 grid grid-cols-3  min-h-[70vh]">
        <div>
          <ProfileBio />
        </div>
        <div className="col-span-2">
          <Stats />
        </div>
      </main>
      <Button className="absolute bottom-10 right-10 px-7 py-2"> Edit </Button>
    </>
  );
}
