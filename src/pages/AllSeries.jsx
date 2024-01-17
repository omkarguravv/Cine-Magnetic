import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomePageShimmer from "../Shimmer/HomePageShimmer";
function AllSeries() {
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      getMovieData();
    }, [page]);
  
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${import.meta.env.VITE_AUTH}`,
      },
    };
  
    async function getMovieData() {
      const data = await fetch(
        `${import.meta.env.VITE_API_URL}/tv/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`,
        options
      );
  
      const json = await data.json();
      console.log(json.results);
      setSeries(json?.results);
    }
  
    const handlePrevious = () => {
      if (page > 1) {
        setPage((prevPage) => prevPage - 1);
      }
    };
  
    const handleNext = () => {
      setPage((prevPage) => prevPage + 1);
    };
  
    return series.length === 0 ? (
      <HomePageShimmer />
    ) : (
      <>
        <h1 className="flex text-2xl md-text-4xl justify-center ">series 🔥</h1>
        <div className="flex flex-wrap gap-10 justify-center mx-10 mt-10">
        {series.slice(0, 14).map((serie, index) => (
  <div className="w-44" key={index}>
    <Link to={`/series/${serie.id}`}>
      <img
        className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out"
        src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
        alt={serie.title}
      />
    </Link>
  </div>
))}
        </div>
        <div className="pagination flex gap-10 justify-center mt-10 pb-10">
          <button
            className="flex bg-white text-black px-5 py-2 rounded-lg justify-center  "
            onClick={handlePrevious}
          >
            {/* <GrLinkPrevious /> */}
            <p>Previous</p>
            
          </button>
          <button
            className="flex bg-white text-black px-5 py-2 rounded-lg justify-center "
            onClick={handleNext}
          >
            Next 
            {/* <GrLinkNext /> */}
          </button>
        </div>
      </>
  )
}

export default AllSeries
