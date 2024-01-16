import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomePageShimmer from "../Shimmer/HomePageShimmer";
const LatestContent = () => {
  const [movies, setMovies] = useState([]);
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
      `${import.meta.env.VITE_API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
      options
    );

    const json = await data.json();
    // console.log(json?.results);
    setMovies(json?.results);
  }
  return (!movies || movies.length === 0 )? (
    <HomePageShimmer />
    ) : (
      <>
        <h1 className="flex text-3xl md-text-4xl justify-center ">
          Latest Content 🔥
        </h1>
        <div className="flex flex-wrap gap-10 justify-center mx-10 mt-10">
          {movies.map((movie) => (
            <div className="w-44" key={movie.id}>
              <Link to={"/movie/" + movie.id}>
                {movie.poster_path == null ? (
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
      </>
  );
};

export default LatestContent;
