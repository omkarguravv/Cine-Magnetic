import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchPage() {
  const [serachText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  useEffect(() => {
    getMovieData();
  }, [serachText]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${import.meta.env.VITE_AUTH}`,
    },
  };
  async function getMovieData() {
    const data = await fetch(
      `${import.meta.env.VITE_API_URL}/search/multi?${import.meta.env.VITE_API_KEY}&language=en-US&page=1&query=${serachText}`,
      options
    );

    const json = await data.json();
    // console.log(json.results);
    setContent(json?.results);
  }
  return (
    <div className="">
      <div className=" flex justify-center px-20 mt-10 pt-2 relative mx-auto text-gray-600">
        <input
          className="border-2  border-gray-300 bg-white h-16 px-5 pr-16 rounded-lg text-2xl focus:outline-none"
          type="text"
          placeholder="Search ..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="bg-[#0D1322] ">
        <div className="flex flex-wrap gap-10 justify-center mx-10 mt-10 ">
          {content.length === 0 && serachText !== "" ? (
            <h1 className="text-2xl ">No Result found</h1>
          ) : (
            content.map((text, index) => (
              <div className="w-44" key={index}>
                <Link to={"/movie/" + text?.id}>
                  {text?.poster_path == null ? (
                    <img
                      className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out "
                      src={"https://i.imgur.com/wjVuAGb.png"}
                      alt={text?.name}
                    />
                  ) : (
                    <img
                      className="rounded-md hover:brightness-50 hover:scale-[1.05] transition ease-in-out "
                      src={
                        "https://image.tmdb.org/t/p/w342/" + text?.poster_path
                      }
                      alt={text?.name}
                    />
                  )}
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
