import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SeriesSeasonShimmer from "../Shimmer/SeriesSeasonShimmer";

const SeasonDetailPage = () => {
  const { id, seasonid  } = useParams();
  // console.log(id + " " + seasonid);
  const [seasons, setSeasons] = useState([]);
  const [episodeDetails, setepisodeDetails] = useState(null);

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
      `${import.meta.env.VITE_API_URL}/tv/${id}/season/${seasonid}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
      options
    );
    const json = await data.json();
    console.log(json);

    setSeasons(json);
    setepisodeDetails(json.episodes);
  }

  return (episodeDetails == null) ? (
    <SeriesSeasonShimmer />
  ) : (
    
    <div className="px-5 md:px-20 mt-12 w-full bg-[#0D1322]">
      
      <h1 className="text-3xl md:text-5xl font-semibold">{seasons?.name}</h1>
      <h2 className="md:text-lg mt-5">{seasons?.overview}</h2>

      <div className="flex flex-wrap gap-10 justify-center text-center mt-10">
        {episodeDetails.map((episode) => (
          <div className="w-44" key={episode.id}>
            <Link
              to={`/series/${id}/${seasonid}/${episode.episode_number}`}
              key={episode.id}
              className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out w-4"
            >
              <h3 className="text-xl md:text-2xl mb-4">
                S{seasons.season_number} - E{episode?.episode_number}
              </h3>
              {episode?.still_path == null ? (
                <img
                  className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out"
                  src={"https://i.imgur.com/wjVuAGb.png"}
                  alt={episode?.name}
                />
              ) : (
                <img
                  className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out"
                  src={`https://image.tmdb.org/t/p/w342/${episode?.still_path}`}
                  alt={episode?.name}
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonDetailPage;
