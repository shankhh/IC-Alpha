import { useState } from "react";

const CampaignSearch = ({ filterTable, clearSearch }) => {
  const [search, setSearch] = useState("");
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onEnter = (e) => {
    if (e.target.value.length < 1) return;

    if (e.code === "Enter") {
      filterTable(search);
    }
  };

  return (
    <section className="container flex justify-center">
      <div className="pt-12">
        {/* two heading */}
        <div className="flex flex-col items-center gap-y-3">
          <h2 className="text-4xl font-semibold">Campaigns</h2>
          <h3 className="text-xl">
            Browse social media influencers by category, followers and price
          </h3>
        </div>
        {/* end two heading */}
        {/* search bar */}
        <div className="flex justify-center py-4">
          <div className="max-w-[80%] min-w-[80%]">
            <div className="flex">
              <input
                onChange={changeHandler}
                onKeyUp={onEnter}
                className="rounded-md w-full text-xl py-2 px-4 border-2"
                placeholder="search influencers by username"
              />
              <button
                onClick={clearSearch}
                className="p-2 rounded-lg border-2 ml-3 px-5 py-1"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        {/* end search bar */}
      </div>
    </section>
  );
};

export default CampaignSearch;
