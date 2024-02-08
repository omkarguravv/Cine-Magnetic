const HomePageShimmer = () => {
  return (
    <>
      <div className="flex shadow flex-wrap gap-5 justify-center mx-5 mt-16">
        {Array(20)
          .fill("")
          .map((index) => (
            <div
              className="animate-pulse bg-slate-700 w-56 h-72 rounded-lg pb-10 "
              key={index}
            ></div>
          ))}
      </div>
    </>
  );
};
export default HomePageShimmer;
