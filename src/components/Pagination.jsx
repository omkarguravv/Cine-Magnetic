import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
function Pagination({ page, handlePrevious, handleNext }) {
  return (
    <>
      <div className="pagination flex gap-10 justify-center items-center mt-10 pb-10">
        <button
          aria-label="Previous"
          className="flex bg-white text-black px-5 py-2 rounded-lg justify-center items-center hover:bg-white/50 "
          onClick={handlePrevious}
        >
          <GrFormPrevious />
          <p>Previous</p>
        </button>
        <p>
          {page} of {100}
        </p>
        <button
          aria-label="Next"
          className="flex bg-white text-black px-5 py-2 rounded-lg justify-center items-center hover:bg-white/50"
          onClick={handleNext}
        >
          Next
          <GrFormNext />
        </button>
      </div>
    </>
  );
}

export default Pagination;
