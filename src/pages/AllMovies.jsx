import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomePageShimmer from "../Shimmer/HomePageShimmer";
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
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      options
    );

    const json = await data.json();
    console.log(json.results);
    setMovies(json?.results);
  }

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return movies.length === 0 ? (
    <HomePageShimmer />
  ) : (
    <>
      <h1 className="flex text-3xl md-text-4xl justify-center ">Movies 🔥</h1>
      <div className="flex flex-wrap gap-10 justify-center mx-10 mt-10">
        {movies.slice(0, 14).map((movie, index) => (
          <div className="w-44" key={index}>
            <Link to={"/movie/" + movie.id}>
            {!movie.poster_path  ? (
                <img
                  className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out "
                  src={"https://i.imgur.com/wjVuAGb.png"}
                  alt={movie.title}
                />
              ) : (
                <img
                  className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out "
                  src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
                  alt={movie.title}
                />
              )}
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
  );
};

export default AllMovies;
