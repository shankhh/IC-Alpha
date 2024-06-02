import { Button } from "@/components/ui/button";
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
          <h2 className="text-4xl font-semibold">
            Browse Campaigns to be a part of your favourite Brand
          </h2>
          <h3 className="text-xl">Work with our partnered Brands</h3>
        </div>
        {/* end two heading */}
        {/* search bar */}
        <div className="flex justify-center py-4">
          <div className="max-w-[80%] min-w-[80%]">
            <div className="flex">
              <input
                onChange={changeHandler}
                onKeyUp={onEnter}
                className="rounded-md w-full font-medium py-2 px-4 border-2 border-black"
                placeholder="search for campaigns :use keywords"
              />
              <Button
                variant="outline"
                onClick={clearSearch}
                className="p-2  border-black ml-3 px-5 py-5"
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
        {/* end search bar */}
      </div>
    </section>
  );
};

export default CampaignSearch;
