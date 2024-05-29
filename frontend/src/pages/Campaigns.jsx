import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import CampaignSearch from "./CampaignPages/CampaignSearch";
import { CampaignTable } from "./CampaignPages/CampaignTable";

export default function Campaigns() {
  const [influencers, setInfluencers] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchData() {
    try {
      const res = await fetch("http://localhost:4269/influencer/all");
      const data = await res.json();

      setInfluencers([...data.influencers]);
    } catch (error) {}
  }
  useEffect(() => {
    fetchData();
  }, []);

  const filterTable = (value) => {
    const filtered = influencers.filter((influencer) => {
      return influencer.username.toLowerCase().includes(value);
    });

    setInfluencers(filtered);
  };

  const clearSearch = async () => {
    await fetchData();
  };

  return (
    <section className="min-h-screen pb-14">
      <Navbar />
      <CampaignSearch filterTable={filterTable} clearSearch={clearSearch} />
      <div className="container md:flex-row mt-10 flex-col flex gap-2 ">
        <CampaignTable influencers={influencers} />
      </div>
    </section>
  );
}
