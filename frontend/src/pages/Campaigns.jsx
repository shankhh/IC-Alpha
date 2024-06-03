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
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const { SocketClient } = useUserContext();
  const filterTable = (value) => {
    const newSet = new Set();
    const splitResult = value.split(" ");
    const campaigns = data.campaigns;
    console.log(splitResult);
    const selectedNiches = campaigns?.filter((camp) =>
      camp.niche.some((n) =>
        splitResult.some((sr) => n.toLowerCase().includes(sr.toLowerCase()))
      )
    );
    console.log(selectedNiches);
    const selectedCountry = campaigns?.filter((camp) =>
      camp.country.some((n) =>
        splitResult.some((sr) => n.toLowerCase().includes(sr.toLowerCase()))
      )
    );
    selectedNiches.forEach((item) => newSet.add(item?._id));
    selectedCountry.forEach((item) => newSet.add(item?._id));

    const filteredIds = Array.from(newSet);
    setFilteredData(campaigns.filter((camp) => filteredIds.includes(camp._id)));
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

  useEffect(() => {
    if (data) setFilteredData(data?.campaigns);
  }, [data]);
  console.log(data);
  const clearSearch = async () => {};

  return (
    <section className="min-h-screen pb-14">
      <Navbar />
      <CampaignSearch filterTable={filterTable} clearSearch={clearSearch} />
      <div className="container grid grid-cols-5 space-y-3">
        <div className="leftside pt-5"></div>
        <div className="col-span-3 pr-10 space-y-5">
          {filteredData?.map((item) => {
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
