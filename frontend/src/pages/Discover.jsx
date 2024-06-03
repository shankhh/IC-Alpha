// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DiscoverTable } from "@/components/Discover/DiscoverTable";
import Navbar from "@/components/Navbar/Navbar";
import DiscoverFilter from "@/components/Discover/DiscoverFilter";
import { DiscoverSelect } from "@/components/Discover/DiscoverSelect";
import DiscoverLeftSidebar from "@/components/Discover/DiscoverLeftSidebar";
import DiscoverSearch from "@/components/Discover/DiscoverSearch";
import { useReducer } from "react";
import { discoverReducer } from "@/components/Discover/DiscoverReducer";
import { axiosInstance } from "@/lib/axiosInstance";
const initialArg = {
  niche: [],
  country: [],
  age: [],
  age: [],
  gender: [],
  influencers: [],
  data: [],
};
export default function Discover() {
  const [influencers, setInfluencers] = useState([]);
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(discoverReducer, initialArg);
  async function fetchData() {
    try {
      const res = await axiosInstance("http://localhost:4269/client/all");
      const data = await res.data;
      dispatch({
        type: "updateState",
        payload: data.influencer,
      });
      setInfluencers([...data.influencer]);
    } catch (error) {}
  }
  console.log(influencers);
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   dispatch({ type: "updateState" });
  // }, [state]);

  const filterTable = (value) => {
    const filtered = influencers.filter((influencer) => {
      return influencer.username.toLowerCase().includes(value);
    });

    setInfluencers(filtered);
  };

  const clearSearch = async () => {
    await fetchData();
  };
  console.log(state.data);
  return (
    <section className="min-h-screen pb-14">
      <Navbar />
      <DiscoverSearch dispatch={dispatch} />
      <div className="container md:flex-row mt-10 flex-col flex gap-2 ">
        <DiscoverLeftSidebar>
          <DiscoverFilter dispatch={dispatch} />
        </DiscoverLeftSidebar>

        <DiscoverTable
          state={state}
          influencers={state.data}
          dispatch={dispatch}
        />
      </div>
    </section>
  );
}
