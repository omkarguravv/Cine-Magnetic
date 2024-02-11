import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";
import Pagination from "../components/Pagination";
import HomePageContentList from "./HomePageContentList";
import AllMovieShimmer from "../Shimmer/AllMovieShimmer";
const LatestContent = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("top_rated");

  useEffect(() => {
    getMovieData();
  }, [type, page]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${import.meta.env.VITE_AUTH}`,
    },
  };
  async function getMovieData() {
    const data = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/movie/${type}?language=en-US&page=${page}'`,
      options
    );

    const json = await data.json();
    // console.log(json?.results);
    setMovies((prevData) => [...prevData, ...json?.results]);
  }

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
    movies.length = 0;
  };

  const handleNext = () => {
    if (page < 101) {
      setPage((prevPage) => prevPage + 1);
    }
    movies.length = 0;
  };

  const changeCategory = (val) => {
    console.log(val);
    if (val != type) {
      setType(val);
      setPage(1);
      setMovies([]);
    }
  };
  //early return
  if (!movies) return null;

  return (
    <>
      <h1 className="flex text-sm md:text-2xl md-text-4xl justify-center w-full ">
        <div className="flex  gap-2">
          <button
            className={
              type === "now_playing"
                ? "bg-[#31B78F] flex  text-white  px-3 py-1 rounded-lg justify-center items-center "
                : "bg-white flex  text-black px-3 py-1 rounded-lg justify-center items-center hover:bg-white/50 "
            }
            onClick={() => changeCategory("now_playing")}
          >
            Now Playing
          </button>
          <button
            className={
              type === "top_rated"
                ? "bg-[#31B78F] flex  text-white px-3 py-1 rounded-lg justify-center items-center "
                : "bg-white flex  text-black px-3 py-1 rounded-lg justify-center items-center hover:bg-white/50 "
            }
            onClick={() => changeCategory("top_rated")}
          >
            Top Rated
          </button>
          <button
            className={
              type === "popular"
                ? "bg-[#31B78F] flex  text-white px-3 py-1 rounded-lg justify-center items-center "
                : "bg-white flex  text-black px-3 py-1 rounded-lg justify-center items-center hover:bg-white/50 "
            }
            onClick={() => changeCategory("popular")}
          >
            Popular
          </button>
        </div>
      </h1>
      <div className="flex flex-wrap gap-2 md:gap-5 justify-center mx-10 mt-10">
        {movies.length === 0 ? (
          <AllMovieShimmer />
        ) : (
          <HomePageContentList movies={movies} />
        )}
      </div>
      <Pagination
        page={page}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />

      <BackToTop className="z-10" />
    </>
  );
};

export default LatestContent;
