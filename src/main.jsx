import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllMovies from "./pages/AllMovies.jsx";
import LatestContent from "./pages/LatestContent.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import Error from "./pages/Error.jsx";
import './index.css'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement :<Error/>,
    children: [
      {
        path: "/",
        element: <LatestContent />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
      {
        path: "/movies",
        element: <AllMovies />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
