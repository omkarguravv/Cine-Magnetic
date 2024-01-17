import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomePageShimmer from "../Shimmer/HomePageShimmer";

const LatestContent = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMovieData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      `${
        import.meta.env.VITE_API_URL
      }/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    );

    const json = await data.json();
    console.log(json?.results);
    setMovies((prevData) => [...prevData, ...json?.results]);
    setLoading(false);
  }
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      // User has scrolled to the bottom
      setPage((prevPage) => prevPage + 1);
    }
  };
  return !movies || movies.length === 0 ? (
    <HomePageShimmer />
  ) : (
    <>
      <h1 className="flex text-2xl md-text-4xl justify-center mt-5">
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

        {loading ? <HomePageShimmer /> : null}
      </div>
    </>
  );
};

export default LatestContent;
