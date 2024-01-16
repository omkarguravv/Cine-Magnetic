import HomePageShimmer from "./HomePageShimmer";

function SeriesSeasonShimmer() {
  return (
    <>
      <div className=" px-20  w-full mt-20 rounded-lg">
      <h1 className="animate-pulse bg-slate-700  w-3/5 h-10 rounded-lg"> </h1>
        <br />
        <h2 className="animate-pulse bg-slate-700 w-5/6 h-10 rounded-lg" > </h2>
        <HomePageShimmer/>
      </div>
    </>
  );
}

export default SeriesSeasonShimmer;
