import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-10 sticky top-0 bg-[#0D1322] h-20 items-center z-10">
        <Link to="/"><h1 className="text-4xl font-semibold text-[#31B78F]">Movie Magnet</h1></Link>
        
        <div>
          <ul className="flex gap-10 text-xl">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/movies">
              <li>Movies</li>
            </Link>
            <Link to="/webseries">
              <li>Web Series</li>
            </Link>
            <Link to="/search">
              <li>search</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
