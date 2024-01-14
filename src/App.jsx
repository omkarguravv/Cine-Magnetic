import { Outlet } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="bg-[#0D1322] text-white w-full h-full ">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
