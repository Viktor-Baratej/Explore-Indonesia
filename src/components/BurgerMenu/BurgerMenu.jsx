import { useState, useEffect } from 'react';
import '../../styles/Burger/BurgerMenu.css';

export default function BurgerMenu () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  
   // 🔒 Заборона скролу при відкритому меню
   useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // При розмонтуванні або змінах — повертаємо все назад
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button className="header-burger-btn" type="button" onClick={toggleMenu}>
        <svg width="24" height="24">
          <use href="/sprite/symbol-defs.svg#icon-burger" />
        </svg>
      </button>

      <nav className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#hero" onClick={closeMenu}>Hero</a></li>
          <li><a href="#article" onClick={closeMenu}>Article</a></li>
          <li><a href="#explore" onClick={closeMenu}>Explore</a></li>
          <li><a href="#map" onClick={closeMenu}>Map</a></li>
          <li><a href="#video" onClick={closeMenu}>Video</a></li>
          <li><a href="#gallery" onClick={closeMenu}>PhotoGallery</a></li>
          <li><a href="#getting-there" onClick={closeMenu}>Getting There</a></li>
          <li><a href="#Footer" onClick={closeMenu}>Footer</a></li>
        </ul>
      </nav>
      <div
        className={`burger-overlay ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
}
