function AllMovieShimmer() {
  return (
    <div className="flex shadow flex-wrap gap-5 justify-center mx-10 mt-10">
      {Array(16)
        .fill("")
        .map((index) => (
          <div
            className="animate-pulse bg-slate-700 w-[9rem] h-[13.5rem] rounded-lg "
            key={index}
          ></div>
        ))}
    </div>
  );
}

export default AllMovieShimmer;
