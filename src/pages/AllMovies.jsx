import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomePageShimmer from "../Shimmer/HomePageShimmer";
const AllMovies = () => {
  const [movies, setMovies] = useState([]);
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
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      options
    );

    const json = await data.json();
    console.log(json.results);
    setMovies(json?.results);
  }
  return movies.length === 0 ? (
    <HomePageShimmer />
  ) : (
    <>
      <h1 className="flex text-4xl ml-32 ">Movies 🔥</h1>
      <div className="flex flex-wrap gap-10 justify-center mx-10 mt-10">
        {movies.map((movie, index) => (
          <div className="w-44" key={index}>
            <Link to={"/movie/" + movie.id}>
              <img
                className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out "
                src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
                alt={movie.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllMovies;
