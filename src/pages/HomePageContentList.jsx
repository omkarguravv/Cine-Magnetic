import { Link } from "react-router-dom";

function HomePageContentList({ movies }) {
  return (
    <>
      {movies.slice(0, 14).map((movie) => (
        <div className="w-44 " key={movie.id}>
          <Link
            to={`/${movie.media_type === "tv" ? "series" : "movie"}/${movie?.id}`}
          >
            {movie.poster_path == null ? (
              <img
                className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out "
                src={"https://i.imgur.com/wjVuAGb.png"}
                alt={movie?.title}
              />
            ) : (
              <img
                className=" rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out h-60"
                src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
                alt={movie?.title}
              />
            )}
          </Link>
        </div>
      ))}
    </>
  );
}

export default HomePageContentList;
