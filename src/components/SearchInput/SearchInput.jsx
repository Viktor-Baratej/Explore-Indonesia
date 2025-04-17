import { useState, useEffect, useRef } from "react";
import "../../styles/SearchInput/SearchInput.css";

export default function SearchInput() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const handleToggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  // Закриває інпут при кліку поза обгорткою
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Фокус на інпут при відкритті
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <form
      className="search-wrapper"
      ref={wrapperRef}
      role="search"
      onSubmit={(e) => e.preventDefault()}
      style={{ position: "relative" }}
    >
      <input
        ref={inputRef}
        className={`search-input ${isSearchOpen ? "visible" : ""}`}
        type="text"
        placeholder="search ..."
        aria-label="search"
      />
      <button
        className="header-search-btn"
        type="button"
        onClick={handleToggleSearch}
        aria-label="Open and close search"
      >
        <svg width="24" height="24">
          <use href="/sprite/symbol-defs.svg#icon-input" />
        </svg>
      </button>
    </form>
  );
}
