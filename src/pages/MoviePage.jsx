import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoviePageShimmer from "../Shimmer/MoviePageShimmer";
const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  // console.log(id);
  useEffect(() => {
    getMovieData();
  }, []);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2I2NTZjNjY5YzNiYzYyMWJlODUzZjg4MTgxMzFiNCIsInN1YiI6IjY1YTIzYzcyODU4Njc4MDEyMjViN2MxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d3KBcObTNHALRyXIM_2m85SrMqh7Gy6eRrfOq-8ZgG8",
    },
  };
  async function getMovieData() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
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
      <div className=" px-20 h-full mt-10">
        <h1 className="text-5xl font-semibold"> {movie?.title}</h1>
        <p className="mt-10 text-xl">{movie?.vote_average?.toFixed(1)} ⭐</p>
        <p className="mt-10">
        {genres.map((genre) => (
            <span className="text-white bg-[#31B78F] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " key={genre.id}>{genre.name}</span>
          ))}
        </p>


        <h2 className="text-lg mt-5"> {movie?.overview}</h2>
        <div className="grid justify-items-center mt-10">
          <iframe
            width="1000px"
            height="600px"
            src={"https://vidsrc.to/embed/movie/" + id}
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default MoviePage;
