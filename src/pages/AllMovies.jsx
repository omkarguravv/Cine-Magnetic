import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import AllMovieShimmer from "../Shimmer/AllMovieShimmer";
import Pagination from "../components/Pagination";
import { genres } from "../constant";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    getMovieData();
  }, [page, selectedGenre]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${import.meta.env.VITE_AUTH}`,
    },
  };

  async function getMovieData() {
    let apiUrl = `${
      import.meta.env.VITE_API_URL
    }/movie/popular?language=en-US&page=${page}`;

    if (selectedGenre) {
      apiUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenre}&page=${page}`;
    }

    const data = await fetch(apiUrl, options);
    const json = await data.json();
    setMovies(json?.results);
  }

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      movies.length=0;
    }
  };

  const handleNext = () => {
    if (page < 101) {
      setPage((prevPage) => prevPage + 1);
      movies.length=0;

    }
  };

  const handleGenreChange = (event) => {
    setPage(1);
    movies.length = 0;
    setSelectedGenre(event.target.value);
  };

  return (
    <>
      <h1 className="flex text-2xl md-text-4xl justify-center w-full  gap-5">
        <div className="bg-[#31B78F] flex  text-white px-3 py-1 rounded-lg justify-center items-center">
          Movies 🔥
        </div>

        <div className="relative  text-sm text-black rounded-lg py-2">
          <select
            className="bg-white px-5 py-2 rounded-lg "
            defaultValue="All Genres"
            value={selectedGenre}
            onChange={handleGenreChange}
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option
                className="text-black max-h-3"
                key={genre.id}
                value={genre.id}
              >
                {genre.genre}
              </option>
            ))}
          </select>
        </div>
      </h1>
      <div className="flex flex-wrap gap-5 justify-center mx-10 mt-10">
        {movies.length === 0 ? (
          <AllMovieShimmer />
        ) : (
          <MovieList currentMovie={movies} />
        )}
      </div>
      <Pagination
        page={page}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </>
  );
};

export default AllMovies;
