// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DiscoverTable } from "@/components/Discover/DiscoverTable";
import Navbar from "@/components/Navbar/Navbar";
import DiscoverFilter from "@/components/Discover/DiscoverFilter";
import { DiscoverSelect } from "@/components/Discover/DiscoverSelect";
import DiscoverLeftSidebar from "@/components/Discover/DiscoverLeftSidebar";
import DiscoverSearch from "@/components/Discover/DiscoverSearch";

export default function Discover() {
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
      <DiscoverSearch
        filterTable={filterTable}
        clearSearch={clearSearch}
      />
      <div className="container md:flex-row mt-10 flex-col flex gap-2 ">
        <DiscoverLeftSidebar>
          <DiscoverFilter />
          {/* <DiscoverSelect /> */}
        </DiscoverLeftSidebar>

        <DiscoverTable influencers={influencers} />
      </div>
    </section>
  );
}
