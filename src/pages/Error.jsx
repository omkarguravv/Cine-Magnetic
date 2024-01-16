import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);

  return (
    <div className="bg-[#0D1322] text-white  flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-7xl text-[#31B78F]">OOPS!!!</h1>
        <h2 className="text-5xl mt-5">Something went Wrong</h2>
        <h2 className="text-5xl mt-5 ">
          {err.statusText} {err.status}
        </h2>
        <h2 className="text-5xl">{err.data}</h2>
      </div>
    </div>
  );
};

export default Error;
