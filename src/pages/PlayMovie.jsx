import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlayMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

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
    console.log(json);
    setMovie(json);
  }
  return (
    <div className="px-10 md-px-20 md-h-fit mt-12 bg-[#0D1322] ">
      <h1 className="text-center text-lg md:text-4xl">Now Playing - <span className="text-[#31B78F] font-bold ">{movie?.title}</span></h1>
      <div className="flex justify-center mt-10">
        <iframe
          className="w-full md:w-3/4 lg:w-1/2 aspect-video"
          src={`https://vidsrc.to/embed/movie/${id}`}
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}

export default PlayMovie;
