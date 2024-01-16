const MoviePageShimmer = () => {
  return (
    <>
      <div className=" px-20  mt-10 w-full">
        <h1 className="animate-pulse bg-slate-700 rounded-lg  w-3/5 h-10"> </h1>
        <br />
        <h2 className="animate-pulse bg-slate-700 rounded-lg w-5/6 h-10"> </h2>
        <div className="grid justify-items-center mt-10">
          <div
            className="animate-pulse bg-slate-700 w-full h-96 rounded-lg"
          ></div>
        </div>
      </div>
    </>
  );
};
export default MoviePageShimmer;
