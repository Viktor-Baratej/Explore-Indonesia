import {  useRef, useState } from 'react';
import '../../styles/section/video.css';
export default function Video() {
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef(null); // посилання на відео-блок
  
    const handlePlayClick = () => {
      setShowVideo(true);
    };
    return (
      <section id='video' className="Video">
        <div className='container video-content'>
          <h2 className='video-title'>Live a life like you wouldn’t imagine, experience a life you wouldn’t expect.</h2>
         
          <div className="hero-video" ref={videoRef}>
            {showVideo ? (
              <iframe
                width="560px"
                height="320px"
                src="https://www.youtube.com/embed/ZWls3Zt9C2M?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-preview" onClick={handlePlayClick}>
                <img
                  src="/foto/ImageVideo1-min.png"
                  alt="Video preview"
                  className="video-thumbnail"
                />
                <button className='hero-video-btn' type='button'>
                  <svg width="20" height="20">
                    <use href="/sprite/symbol-defs.svg#icon-play" />
                  </svg>
                </button>
              </div>
            )}
          </div>
<ul className='video-list'>
  <li className='video-item'>

    <div className="hero-video" ref={videoRef}>
            {showVideo ? (
              <iframe
                width="560px"
                height="320px"
                src="https://www.youtube.com/embed/ZWls3Zt9C2M?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-preview" onClick={handlePlayClick}>
                <img
                  src="/foto/ImageVideo2-min.png"
                  alt="Video preview"
                  className="video-thumbnail"
                />
                <button className='hero-video-btn' type='button'>
                  <svg width="20" height="20">
                    <use href="/sprite/symbol-defs.svg#icon-play" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <h3 className='video-item-title'>In The Country</h3>
          <p className='video-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus.</p>

  </li>
  <li className='video-item'>

    <div className="hero-video" ref={videoRef}>
            {showVideo ? (
              <iframe
                width="560px"
                height="320px"
                src="https://www.youtube.com/embed/ZWls3Zt9C2M?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-preview" onClick={handlePlayClick}>
                <img
                  src="/foto/ImageVideo3-min.png"
                  alt="Video preview"
                  className="video-thumbnail"
                />
                <button className='hero-video-btn' type='button'>
                  <svg width="20" height="20">
                    <use href="/sprite/symbol-defs.svg#icon-play" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <h3 className='video-item-title'>In The City</h3>
          <p className='video-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in.</p>

  </li>
</ul>



        </div>
      </section>
    );
  }
  