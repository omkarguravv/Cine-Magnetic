import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoviePageShimmer from "../Shimmer/MoviePageShimmer";
import { FaRegCirclePlay } from "react-icons/fa6";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getMovieData();
  }, []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${import.meta.env.VITE_AUTH}`,
    },
  };

  async function getMovieData() {
    const data = await fetch(
      `${import.meta.env.VITE_API_URL}/movie/${id}?language=en-US`,
      options
    );
    const json = await data.json();
    setGenres(json.genres);
    console.log(json);
    setMovie(json);
  }

  return movie == null ? (
    <MoviePageShimmer />
  ) : (
    <>
      <div className="px-10 md-px-20 md-h-fit mt-12 bg-[#0D1322]">
        <div className="w-full flex-col md:flex md:flex-row ">
          <img
            className=" rounded-lg"
            src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
            alt=""
          />

          <div className=" ml-0 md:ml-10 w-full md:w-2/3">
            <h1 className=" flex text-3xl md:text-5xl font-semibold mt-5 md:mt-0">
              {movie?.title} ( {movie?.vote_average?.toFixed(1)}⭐)
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-400">
              {movie.tagline}
            </p>
            
            {/* mobile play btn  */}
            <Link className="md:hidden" to={"/movie/" + movie.id + "/play"}>
              <button className="mt-5 px-10 py-2 text-xl font-bold rounded-full flex items-center bg-white text-black gap-3 hover:bg-white/50">
                <FaRegCirclePlay size={30} />
                <p>Play</p>
              </button>
            </Link>

            <p className="mt-5 md-mt-10 flex flex-wrap">
              {genres.map((genre) => (
                <span
                  className="text-white bg-[#31B78F] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
            <h2 className="text-2xl mt-4 text-gray-400 overflow-hidden text-wrap">
              {movie?.overview}
            </h2>

            <h2 className="text-2xl mt-4">
              {" "}
              <span className="font-bold">Released Date - </span>{" "}
              {movie?.release_date}
            </h2>
            <h2 className="text-2xl mt-4">
              {" "}
              <span className="font-bold">RunTime - </span> {movie?.runtime} min
            </h2>
  

            {/* desktop play btn */}
            <Link
              className="hidden md:flex"
              to={"/movie/" + movie.id + "/play"}
            >
              <button className="mt-5 px-10 py-2 text-xl font-bold rounded-full flex items-center bg-white text-black gap-3 hover:bg-white/50">
                <FaRegCirclePlay size={30} />
                <p>Play</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
