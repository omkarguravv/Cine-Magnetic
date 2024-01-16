import { useParams } from "react-router-dom";
import MoviePageShimmer from "../Shimmer/MoviePageShimmer";
function SeriesPlay() {
  const { id, seasonid, epId } = useParams();

  return epId == null ? (
    <MoviePageShimmer />
  ) : (
    <>
      <div className="px-5 md-px-20 md-h-fit mt-12 bg-[#0D1322]">
        <h1 className="text-4xl text-center">
          S{seasonid} E{epId}
        </h1>
        {epId && (
          <div className="flex justify-center mt-10">
            <iframe
              className="w-full md:w-3/4 lg:w-1/2 aspect-video"
              src={`https://vidsrc.to/embed/tv/${id}/${seasonid}/${epId}`}
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
}

export default SeriesPlay;
