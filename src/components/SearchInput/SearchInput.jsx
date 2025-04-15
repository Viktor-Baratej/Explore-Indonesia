import { useState, useEffect, useRef} from "react";
import '../../styles/SearchInput/searchinput.css';
export default function SearchInput() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  const handleToggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
// 👇 Слухач кліку поза інпутом/кнопкою
useEffect(() => {
  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  return (
    <div className="search-wrapper" ref={inputRef} style={{ position: 'relative' }}>
      <input
        className={`search-input ${isSearchOpen ? 'visible' : ''}`}
        type="text"
        placeholder="Search..."
      />
      <button className="header-search-btn" type="button" onClick={handleToggleSearch}>
        <svg width="24" height="24">
          <use href="/sprite/symbol-defs.svg#icon-input" />
        </svg>
      </button>
    </div>
  );
}
