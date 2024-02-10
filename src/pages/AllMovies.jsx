import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import AllMovieShimmer from "../Shimmer/AllMovieShimmer";
import Pagination from "../components/Pagination";
// import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
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
      `${
        import.meta.env.VITE_API_URL
      }/movie/popular?language=en-US&page=${page}`,
      options
    );

    const json = await data.json();
    // console.log(json.results);
    setMovies(json?.results);
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

  return (
    <>
      <h1 className="flex text-2xl md-text-4xl justify-center w-full ">
        <div className="bg-[#31B78F] flex  text-white px-5 py-2 rounded-lg justify-center items-center ">Movies 🔥</div>
        
      </h1>
      <div className="flex flex-wrap gap-5 justify-center mx-10 mt-10">
        {movies.length === 0 ? (
          <AllMovieShimmer />
        ) : (
          <MovieList currentMovie={movies} />
        )}
      </div>
     <Pagination page={page} handleNext={handleNext} handlePrevious={handlePrevious}/>
    </>
  );
};

export default AllMovies;
