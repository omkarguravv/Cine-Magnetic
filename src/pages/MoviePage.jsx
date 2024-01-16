import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoviePageShimmer from "../Shimmer/MoviePageShimmer";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getMovieData();
  }, []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${import.meta.env.VITE_AUTH}`
    },
  };

  async function getMovieData() {
    const data = await fetch(
      `${import.meta.envVITE_API_URL}/movie/${id}?language=en-US`,
      options
    );
    const json = await data.json();
    setGenres(json.genres);
    setMovie(json);
  }

  return movie == null ? (
    <MoviePageShimmer />
  ) : (
    <>
      <div className="px-5 md-px-20 md-h-fit h-screen mt-12 bg-[#0D1322]">
        <h1 className="text-3xl md-text-5xl font-semibold">{movie?.title}</h1>
        <p className="mt-2 md-mt-10 text-xl">
          {movie?.vote_average?.toFixed(1)} ⭐
        </p>
        <p className="mt-4 md-mt-10">
          {genres.map((genre) => (
            <span
              className="text-white bg-[#31B78F] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              key={genre.id}
            >
              {genre.name}
            </span>
          ))}
        </p>

        <h2 className="md-text-lg mt-5">{movie?.overview}</h2>
        {id && (
          <div className="flex justify-center mt-10">
            <iframe
              className="w-full md:w-3/4 lg:w-1/2 aspect-video"
              src={`https://vidsrc.to/embed/movie/${id}`}
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
};

export default MoviePage;
