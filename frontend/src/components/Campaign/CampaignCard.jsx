import { useUserContext } from "@/store/UserStore";
import toast from "react-hot-toast";
import { axiosInstance } from "@/lib/axiosInstance";
import { REACT_QUERY_KEYS } from "@/constants/REACT_QUERY";
import { useMutation } from "@tanstack/react-query";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CircleDollarSign, Users, MapPin } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { CubeSpinner } from "react-spinners-kit";
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
  return (
    <div className="border min-h-60 w-full rounded-md">
      <div className="flex justify-between p-4 ">
        <div className="flex items-center gap-5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
        {isPending ? (
          <Button className="px-7 py-6">
            <CubeSpinner />
          </Button>
        ) : interestedBy?.some((item) => item?._id == auth.id) ? (
          <p className=" border pt-1 px-2 rounded-md border-emerald-500 text-emerald-500 font-semibold">
            Applied
          </p>
        ) : (
          <Button
            onClick={() => {
              if (!window.confirm("You are applying this cannot be undone!"))
                return;
              mutate();
            }}
          >
            Interested
          </Button>
        )}
      </div>

      <p className="text-sm line-clamp-3 min-h-20 px-4 pb-4 overflow-hidden text-slate-600">
        {details}
      </p>
      <div className="px-4 pb-4 flex gap-2 ">
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
          <CircleDollarSign size={18} />
          {amount}
        </span>
        <span className="font-semibold flex items-center gap-1 ">
          <Users size={18} />
          {interestedBy?.length} Applications
        </span>
        <span className="font-semibold flex items-center gap-1 ">
          <MapPin size={18} /> Remote
        </span>
      </div>
    </div>
  );
}
