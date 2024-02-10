import { Link } from "react-router-dom";

const MovieList = ({ currentMovie }) => {
  return (
    <>
      {currentMovie.slice(0, 14).map((movie, index) => (
        <div className="w-44" key={index}>
          <Link to={"/movie/" + movie.id}>
            {movie.poster_path == null ? (
              <img
                className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out "
                src={"https://i.imgur.com/wjVuAGb.png"}
                alt={movie?.title}
              />
            ) : (
              <img
                className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out h-60"
                src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
                alt={movie?.title}
              />
            )}
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieList;
