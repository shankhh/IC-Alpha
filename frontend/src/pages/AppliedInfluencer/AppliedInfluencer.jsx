import toast from "react-hot-toast";
import { delay } from "@/lib/utils";
import { axiosInstance } from "@/lib/axiosInstance";
import { REACT_QUERY_KEYS } from "@/constants/REACT_QUERY";
import Navbar from "@/components/Navbar/Navbar";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FlapperSpinner } from "react-spinners-kit";
export default function AppliedInfluencer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: [REACT_QUERY_KEYS.INFLUENCER_LIST],
    queryFn: async () => {
      const res = await axiosInstance.get(`/campaigns/${id}`);
      return res.data;
    },
  });

  const { isPending, mutate } = useMutation({
    mutationKey: [REACT_QUERY_KEYS.ACCEPT_INFLUENCER],
    mutationFn: async (user_id) => {
      const res = await axiosInstance.post("/campaigns/accept", {
        user_id,
        id,
      });
      return res.data;
    },
    onSuccess: async (data) => {
      toast.success(data?.message);
      await delay(1000);
      navigate(`/campaignforum/${id}`);
    },
    onError: async (error) => {
      toast.error(error?.response?.data?.message || error?.message);
    },
  });

  return (
    <section>
      <div className="">
        <Navbar />
      </div>

      <div className="flex flex-col gap-3 mt-10 container ">
        {data?.campaign?.interestedBy.map((item) => (
          <div
            key={item._id}
            className="border p-4 flex justify-between rounded-3xl"
          >
            <Link to={`/profile/${item._id}`}>
              <div className="font-semibold">{item?.name}</div>
            </Link>
            <div className="">
              <p>Enagement: {item?.instagram?.engagement}</p>
              <p>Reach : {item?.instagram?.reach}</p>
            </div>
            <div>
              {isPending ? (
                <Button>
                  <FlapperSpinner />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    if (!window.confirm("Cannot be undone!")) return;
                    mutate(item._id);
                  }}
                >
                  Accept
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
