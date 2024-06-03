import { useState } from "react";
import { Button } from "../ui/button";

const DiscoverSearch = ({ filterTable, clearSearch, dispatch }) => {
  const [search, setSearch] = useState("");
  const changeHandler = (e) => {
    setSearch(e.target.value);
    dispatch({
      type: "search",
      payload: e.target.value,
    });
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
            Ready to unlock the true potential of influencer marketing?
          </h2>
          <h3 className="text-xl">Browse our partnered influencers</h3>
        </div>
        {/* end two heading */}
        {/* search bar */}
        <div className="flex justify-center py-4">
          <div className="max-w-[80%] min-w-[80%]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch({
                  type: "search",
                  payload: search,
                });
              }}
              className="flex"
            >
              <input
                onChange={changeHandler}
                className="rounded-md w-full font-medium py-2 px-4 border-2 border-black"
                placeholder="search by username"
              />
              <Button
                variant="outline"
                className="p-2  border-black ml-3 px-5 py-5"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
        {/* end search bar */}
      </div>
    </section>
  );
};

export default DiscoverSearch;
