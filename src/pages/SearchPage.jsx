import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomePageContentList from "./HomePageContentList";
import SearchTextContent from "../components/SearchTextContent";
import AllMovieShimmer from "../Shimmer/AllMovieShimmer";
function SearchPage() {
  const [serachText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieData();
  }, [serachText]);

  useEffect(() => {
    getMovieDataToList();
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
      `${import.meta.env.VITE_API_URL}/search/multi?${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1&query=${serachText}`,
      options
    );

    const json = await data.json();
    // console.log(json.results);
    setContent(json?.results);
  }

  async function getMovieDataToList() {
    const data = await fetch(
      `${import.meta.env.VITE_API_URL}/movie/popular?language=en-US&page=1'`,
      options
    );

    const json = await data.json();
    // console.log(json?.results);
    setMovies((prevData) => [...prevData, ...json?.results]);
  }
  if (!content || !movies) return null;

  return (
    <div className="text-center ">
      <h2 className="text-2xl mt-10 ">Search Page </h2>
      <div className=" flex justify-center px-20 mt-5 pt-2 relative mx-auto text-gray-600">
        <input
          className="border-2  border-gray-300 bg-white h-12 md-h-16 w-5/6 md-w-2/5 px-5 pr-16 rounded-lg text-2xl focus:outline-none"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="bg-[#0D1322] ">
        {serachText === "" ? (
          <div className="flex flex-wrap gap-2 md:gap-5 justify-center mx-10 mt-10">
            {movies.length === 0 ? (
              <AllMovieShimmer />
            ) : (
              <HomePageContentList movies={movies} />
            )}
          </div>
        ) : (
          <SearchTextContent content={content} serachText={serachText} />
        )}
      </div>
    </div>
  );
}

export default SearchPage;
