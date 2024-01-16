import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import SeriesSeasonShimmer from "../Shimmer/SeriesSeasonShimmer";

const SeriesDetailPage = () => {
  const { id  } = useParams();
  const [seriesDetails, setseriesDetails] = useState(null);
  const [genres, setGenres] = useState([]);
  const [seasons, setSeasons] = useState([]);
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
      `${import.meta.env.VITE_API_URL}/tv/${id}?language=en-US`,
      options
    );
    const json = await data.json();
    setGenres(json.genres);
    console.log(json.seasons)
    setseriesDetails(json);
    setSeasons(json.seasons);
  }

  return seriesDetails == null ? (
    <SeriesSeasonShimmer />
  ) : (
    <>
      <div className="px-5 md-px-20 mt-12 w-full  bg-[#0D1322]">
        <h1 className="text-3xl md-text-5xl font-semibold">
          {seriesDetails?.original_name}
        </h1>
        <h2 className="md-text-lg mt-5">{seriesDetails?.overview}</h2>

        <p className="mt-2 md-mt-10 text-xl">
          {seriesDetails?.vote_average?.toFixed(1)} ⭐
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
        <div className="flex flex-wrap gap-10 justify-center text-center mt-10 ">
          {seasons.map((season) => (
            <Link
              to={"/series/" + id +"/" +season.season_number}
              key={season.id}
              className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out w-44"
            >
              <h3 className="text-xl md-text-2xl mb-4"> {season.name}</h3>
              {season?.poster_path == null ? (
                <img
                  className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out "
                  src={"https://i.imgur.com/wjVuAGb.png"}
                  alt={season?.name}
                />
              ) : (
                <img
                  className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out "
                  src={"https://image.tmdb.org/t/p/w342/" + season?.poster_path}
                  alt={season?.name}
                />
              )}
              
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SeriesDetailPage;
