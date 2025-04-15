


import { useEffect, useState } from "react";
import '../../styles/ScrollToTop/ScrollToTop.css';

// Компонент кнопки для повернення вгору
export default function ScrollToTopButton() {
  // Стейт, який зберігає, чи кнопка має бути видимою
  const [visible, setVisible] = useState(false);

  // Коли компонент монтується — додаємо обробник скролу
  useEffect(() => {
    const toggleVisibility = () => {
      // Якщо сторінка прокручена більше ніж на 300px вниз — показати кнопку
      setVisible(window.scrollY > 6000);
    };

    window.addEventListener("scroll", toggleVisibility);

    // При демонтажі компонента — видаляємо слухача
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Функція для плавного скролу вгору при натисканні кнопки
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Рендеримо кнопку тільки якщо visible === true */}
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
