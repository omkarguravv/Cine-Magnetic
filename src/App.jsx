import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <div className="bg-[#0D1322] text-white w-full h-full ">
        <Header />
        <Outlet />
        {/* <Footer/> */}
        <Analytics/>

      </div>
    </>
  );
}

export default App;
