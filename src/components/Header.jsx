import { Link } from "react-router-dom";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBars, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked
    if (isSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="bg-[#0D1322] text-white py-2 px-4 md:px-10 sticky top-0 z-10 h-16	">
      <div className="flex justify-between items-center mt-3">
        <Link to="/">
          <h1 className="text-2xl md:text-4xl font-bold md:font-semibold text-[#31B78F]">
            Movie Magnet
          </h1>
        </Link>

        {/* Mobile Sidebar Toggle Button */}

        <button className="md:hidden text-2xl flex gap-10" >
          <Link to="/search">
            <FaSearch />
          </Link>
          <FaBars onClick={toggleSidebar}/>
        </button>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="md:hidden fixed inset-0 bg-[#0D1322] z-20">
            <div className="flex justify-end p-4">
              <button onClick={toggleSidebar} className="text-2xl">
                <ImCross />
              </button>
            </div>
            <div className="flex flex-col items-center text-2xl gap-y-10 mt-20">
              <h2>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </h2>
              <h2>
                <Link to="/movies" onClick={handleLinkClick}>
                  Movies
                </Link>
              </h2>
              <h2>
                <Link to="/webseries" onClick={handleLinkClick}>
                  Web Series
                </Link>
              </h2>
              <h2>
                <Link to="/search" onClick={handleLinkClick}>
                  Search
                </Link>
              </h2>
            </div>
          </div>
        )}

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 text-2xl">
          <h2>
            <Link to="/">Home</Link>
          </h2>
          <h2>
            <Link to="/movies">Movies</Link>
          </h2>
          {/* <h2>
            <Link to="/webseries">Web Series</Link>
          </h2> */}
          <h2>
            <Link to="/search">Search</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
