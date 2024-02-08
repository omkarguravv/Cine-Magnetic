import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllMovies from "./pages/AllMovies.jsx";
import LatestContent from "./pages/LatestContent.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import Error from "./pages/Error.jsx";
import "./index.css";
import AllSeries from "./pages/AllSeries.jsx";
import SeriesDetailPage from "./pages/SeriesDetailPage.jsx";
import SeasonDetailPage from "./pages/SeasonDetailPage.jsx"
import SeriesPlay from "./pages/SeriesPlay.jsx";
import PlayMovie from "./pages/PlayMovie.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LatestContent />,
      },
      {
        path: "/movies",
        element: <AllMovies />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
      {
        path: "/movie/:id/play",
        element: <PlayMovie />,
      },
      {
        path: "/series",
        element: <AllSeries />,
      },
      {
        path: "/series/:id",
        element: <SeriesDetailPage />,
      },
      {
        path: "/series/:id/:seasonid",
        element: <SeasonDetailPage />,
      },
      {
        path: "/series/:id/:seasonid/:epId",
        element: <SeriesPlay />,
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
