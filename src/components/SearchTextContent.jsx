import { Link } from "react-router-dom";

function SearchTextContent({ content, serachText }) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-5 justify-center mx-10 mt-10">
    {content.length === 0 && serachText !== "" ? (
        <h1 className="text-2xl ">No Result found</h1>
      ) : (
        content.map((text, index) => (
          <div className="w-44" key={index}>
            <Link
              to={
                `/${text.media_type === "tv" ? "series" : "movie"}/` + text?.id
              }
            >
              {text?.poster_path == null ? (
                <img
                  className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out "
                  src={"https://i.imgur.com/wjVuAGb.png"}
                  alt={text?.name}
                />
              ) : (
                <img
                  className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out "
                  src={"https://image.tmdb.org/t/p/w342/" + text?.poster_path}
                  alt={text?.name}
                />
              )}
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchTextContent;
