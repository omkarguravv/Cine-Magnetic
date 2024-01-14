const HomePageShimmer =()=>{
    return(
        <>
      <div className="flex shadow flex-wrap gap-10 justify-center mx-10 mt-10">
        {Array(25).fill("").map((index) => (
          <div
          className="animate-pulse bg-slate-700 w-44 h-52 rounded "
          key={index}>
          </div>
        ))}

      </div>
        </>
    )
}
export default HomePageShimmer;