import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll"; 
import '../../styles/ScrollToTop/ScrollToTop.css';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 6000);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 🌀 Тепер використовуємо react-scroll
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1500, // тривалість у мс
      smooth: "easeInOutCubic", // тип анімації
    });
  };

  return (
    <>
      {visible && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="go-up"
        >
          <svg width="39" height="22">
            <use href="/sprite/symbol-defs.svg#icon-Strilka" />
          </svg>
        </button>
      )}
    </>
  );
}
