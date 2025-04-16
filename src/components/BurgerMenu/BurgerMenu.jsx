import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../../styles/Burger/BurgerMenu.css';

export default function BurgerMenu () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  
   // 🔒 Заборона скролу при відкритому меню
   useEffect(() => {
    const body = document.body;
  
    if (isOpen) {
      const scrollY = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.dataset.scrollY = scrollY.toString(); // збереження позиції
    } else {
      const scrollY = body.dataset.scrollY || '0';
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      window.scrollTo(0, parseInt(scrollY));
    }
  
    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';
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
        <li>
          <Link to="hero" smooth="easeInOutQuad" duration={700} onClick={closeMenu}>
            Hero
          </Link>
        </li>
        <li>
          <Link to="article" smooth="easeInOutQuad" duration={700} onClick={closeMenu}>
            Article
          </Link>
        </li>
        <li>
          <Link to="explore" smooth="easeInOutQuad" duration={700} onClick={closeMenu}>
            Explore
          </Link>
        </li>
        <li>
          <Link to="map" smooth="easeInOutQuad" duration={700} onClick={closeMenu}>
            Map
          </Link>
        </li>
        <li>
          <Link to="video" smooth="easeInOutQuad" duration={700} onClick={closeMenu}>
            Video
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth="easeInOutQuad" duration={700} onClick={closeMenu}>
            PhotoGallery
          </Link>
        </li>
        <li>
          <Link to="getting-there" smooth="easeInOutQuad" duration={700} onClick={closeMenu}>
            Getting There
          </Link>
        </li>
        <li>
          <Link to="Footer" smooth="easeInOutQuad" duration={700} onClick={closeMenu}>
            Footer
          </Link>
        </li>
      </ul>
    </nav>

    <div
      className={`burger-overlay ${isOpen ? 'open' : ''}`}
      onClick={toggleMenu}
    ></div>
  </>
);

}
