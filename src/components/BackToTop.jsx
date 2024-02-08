import { IoArrowUpCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 p-3 rounded-lg  text-white ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <IoArrowUpCircleOutline size={40} />
      </button>
    </>
  );
};
export default BackToTop;
