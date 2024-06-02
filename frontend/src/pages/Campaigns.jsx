import { REACT_QUERY_KEYS } from "@/constants/REACT_QUERY";
import { SOCKET_CONSTANTS } from "@/constants/SOCKET_CONSTANTS";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import CampaignSearch from "./CampaignPages/CampaignSearch";
import CampaignCard from "@/components/Campaign/CampaignCard";
import { useUserContext } from "@/store/UserStore";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axiosInstance";
import DiscoverFilter from "@/components/Discover/DiscoverFilter";
export default function Campaigns() {
  const [influencers, setInfluencers] = useState([]);
  const [search, setSearch] = useState("");
  const { SocketClient } = useUserContext();
  const filterTable = (value) => {
    const filtered = influencers.filter((influencer) => {
      return influencer.username.toLowerCase().includes(value);
    });

    setInfluencers(filtered);
  };
  const { data, refetch } = useQuery({
    queryKey: [REACT_QUERY_KEYS.ALL_CAMPAIGNS],
    queryFn: async () => {
      console.log("ehho");
      const res = await axiosInstance.get("/campaigns/all");
      return res.data;
    },
  });
  console.log(data);
  useEffect(() => {
    if (SocketClient) {
      SocketClient.on(SOCKET_CONSTANTS.NEW_CAMPAIGN, (data) => {
        refetch();
      });
    }
  }, [SocketClient]);

  const clearSearch = async () => {
    await fetchData();
  };

  return (
    <section className="min-h-screen pb-14">
      <Navbar />
      <CampaignSearch filterTable={filterTable} clearSearch={clearSearch} />
      <div className="container grid grid-cols-5 space-y-3">
        <div className="leftside pt-5"></div>
        <div className="col-span-3 pr-10 space-y-5">
          {data?.campaigns?.map((item) => {
            return (
              <CampaignCard
                age_group={item?.age_group}
                country={item?.country}
                gender={item?.gender}
                niche={item?.niche}
                title={item?.title}
                interestedBy={item?.interestedBy}
                details={item?.details}
                amount={item?.amount}
                id={item?._id}
                client={item?.client}
              />
            );
          })}
        </div>
      </div>
      <div className="container md:flex-row mt-10 flex-col flex gap-2 "></div>
    </section>
  );
}
