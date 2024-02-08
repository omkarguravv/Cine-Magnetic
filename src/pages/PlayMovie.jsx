import { useParams } from "react-router-dom";

function PlayMovie() {
    const { id } = useParams();

  return (
    <div>
     
        <div className="flex justify-center mt-10">
          <iframe
            className="w-full md:w-3/4 lg:w-1/2 aspect-video"
            src={`https://vidsrc.to/embed/movie/${id}`}
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
    </div>
  );
}

export default PlayMovie;
