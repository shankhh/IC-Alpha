import { Link } from "react-router-dom";
import { useUserContext } from "@/store/UserStore";
import toast from "react-hot-toast";
import { axiosInstance } from "@/lib/axiosInstance";
import { REACT_QUERY_KEYS } from "@/constants/REACT_QUERY";
import { useMutation } from "@tanstack/react-query";
import { AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CircleDollarSign, Users, MapPin, IndianRupee } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { CubeSpinner } from "react-spinners-kit";
import { CLIENT_CONSTANTS } from "@/constants/Client";
export default function CampaignCard({
  niche,
  country,
  title,
  age_group,
  gender,
  interestedBy,
  details,
  amount,
  id,
  client,
  selected,
  completed,
}) {
  console.log(interestedBy);
  const queryClient = useQueryClient();
  const { auth } = useUserContext();
  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.post(`/campaigns/apply/${id}`);
      return res.data;
    },
    mutationKey: [REACT_QUERY_KEYS.APPLY_CAMPAIGN],
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.ALL_CAMPAIGNS],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || error?.message);
    },
  });
  console.log(client);
  return (
    <div className="border min-h-60 w-full rounded-md border-gray-600">
      <div className="flex justify-between p-4 ">
        <div className="flex items-center gap-5">
          <Avatar>
            <AvatarFallback className="bg-slate-300 h-full w-full">
              IC
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold">{title}</div>
            by
            <div className="font-semibold">{client?.companyName}</div>
          </div>
        </div>

        {auth.type !== CLIENT_CONSTANTS.BUSINESS && (
          <>
            {isPending ? (
              <Button className="px-7 py-6">
                <CubeSpinner />
              </Button>
            ) : interestedBy?.some((item) => item?._id == auth.id) ? (
              <Button
                variant="primary"
                className=" border  rounded-md border-emerald-500 text-emerald-500 font-semibold"
              >
                Applied
              </Button>
            ) : (
              <Button
                onClick={() => {
                  if (
                    !window.confirm("You are applying this cannot be undone!")
                  )
                    return;
                  mutate();
                }}
              >
                Interested
              </Button>
            )}
          </>
        )}
      </div>

      <p className="text-sm line-clamp-3 min-h-20 px-4 ml-16 pb-4 overflow-hidden">
        {details}
      </p>
      <div className="px-4 pb-4 flex gap-2 ml-16">
        {niche?.map((n) => (
          <span className="px-4 py-2 text-xs font-semibold bg-gray-300  rounded">
            {n}
          </span>
        ))}
        {country?.map((c) => (
          <span className="px-4 py-2 text-xs font-semibold bg-gray-300  rounded">
            {c}
          </span>
        ))}
        {age_group?.map((c) => (
          <span className="px-4 py-2 text-xs font-semibold bg-gray-300  rounded">
            {c}
          </span>
        ))}
      </div>

      <div className="text-sm border-t items-center text-gray-500 flex px-4 py-2 gap-10">
        <span className="font-semibold flex items-center gap-1 ">
          <IndianRupee size={18} />
          {amount}
        </span>
        {completed ? (
          <Button className="border  rounded-md border-emerald-500 text-emerald-500 font-semibold">
            Completed
          </Button>
        ) : (
          <>
            {selected ? (
              <Link to={`/campaignforum/${id}`}>
                <Button>Forum</Button>
              </Link>
            ) : (
              <>
                {auth.type === CLIENT_CONSTANTS.BUSINESS &&
                client?._id == auth.id ? (
                  <Link to={`/applied/influencer/${id}`}>
                    <span className="font-semibold flex items-center gap-1 ">
                      <Users size={18} />
                      {interestedBy?.length} Applications
                    </span>
                  </Link>
                ) : (
                  <span className="font-semibold flex items-center gap-1 ">
                    <Users size={18} />
                    {interestedBy?.length} Applications
                  </span>
                )}
              </>
            )}
          </>
        )}

        <span className="font-semibold flex items-center gap-1 ">
          <MapPin size={18} /> {country}
        </span>
      </div>
    </div>
  );
}
