import { useEffect, useRef, useState } from 'react';
import '../../styles/section/hero.css';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null); // посилання на відео-блок

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showVideo && videoRef.current && !videoRef.current.contains(event.target)) {
        setShowVideo(false); // закриваємо відео
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showVideo]);

  return (
    <section id="hero" className="hero-background-image">
      <div className="container hero-content">

        <div className='hero-btn-content'>
          <h1 className='hero-title'>
            Explore <br /> indonesia
          </h1>
            <button className='hero-btn' type='button'>
              Start travelling
            </button>
        </div>
       

        <div className='hero-content-right'>
          <ul className='hero-list'>
            <li className='hero-item'>
              <span className='hero-item-span'>01</span>
              <h3 className='hero-item-title'>Title here</h3>
              <p className='hero-item-text'>Lorem ipsum dolor sit amet et amet ist ame.</p>
            </li>
            <li className='hero-item'>
              <span className='hero-item-span'>02</span>
              <h3 className='hero-item-title'>Title here</h3>
              <p className='hero-item-text'>Lorem ipsum dolor sit amet et amet ist ame.</p>
            </li>
            <li className='hero-item'>
              <span className='hero-item-span'>03</span>
              <h3 className='hero-item-title'>Title here</h3>
              <p className='hero-item-text'>Lorem ipsum dolor sit amet et amet ist ame.</p>
            </li>
          </ul>
  
          {/* 🔽 Відео або превʼю */}
          <div className="hero-video" ref={videoRef}>
            {showVideo ? (
              <iframe
                src="https://www.youtube.com/embed/ZWls3Zt9C2M?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-preview" onClick={handlePlayClick}>
                <img
                  src="/foto/imageHeroVideomin.png"
                  alt="Video preview"
                  className="video-thumbnail"
                />
                <button className='hero-video-btn' type='button'>
                  <svg>
                    <use href="/sprite/symbol-defs.svg#icon-play" />
                  </svg>
                </button>
              </div>
            )}
          </div>
  
        </div>
      </div>
    </section>
  );
}
