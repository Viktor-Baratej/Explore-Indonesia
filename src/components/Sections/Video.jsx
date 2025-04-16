import { useState } from 'react';
import '../../styles/section/video.css';

const videoData = [
  {
    id: 0,
    title: 'Main Video',
    src: 'https://www.youtube.com/embed/Kk3-VnyKD8g?autoplay=1',
    img: '/foto/ImageVideo1-min.png',
    subtitle: '',
    text: ''
  },
  {
    id: 1,
    title: 'In The Country',
    src: 'https://www.youtube.com/embed/U-MPyvz9RhE?autoplay=1',
    img: '/foto/ImageVideo2-min.png',
    subtitle: 'In The Country',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus.'
  },
  {
    id: 2,
    title: 'In The City',
    src: 'https://www.youtube.com/embed/xWQoXasnrPY?autoplay=1',
    img: '/foto/ImageVideo3-min.png',
    subtitle: 'In The City',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in.'
  }
];

export default function Video() {
  const [visibleVideos, setVisibleVideos] = useState({});

  const handlePlay = (id) => {
    setVisibleVideos(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="video" className="Video">
      <div className="container video-content">
        <h2 className="video-title">
          Live a life like you wouldn’t imagine, experience a life you wouldn’t expect.
        </h2>

        <div className="hero-video video-video">
          {visibleVideos[0] ? (
            <iframe
              
              src={videoData[0].src}
              title={videoData[0].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="video-preview video-video" onClick={() => handlePlay(0)}>
              <img src={videoData[0].img} alt="Main video preview" className="video-thumbnail" />
              <button className="hero-video-btn" type="button">
                <svg width="20" height="20">
                  <use href="/sprite/symbol-defs.svg#icon-play" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <ul className="video-list">
          {videoData.slice(1).map(({ id, src, img, subtitle, text, title }) => (
            <li className="video-item" key={id}>
              <div className="hero-video">
                {visibleVideos[id] ? (
                  <iframe
                    src={src}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="video-preview" onClick={() => handlePlay(id)}>
                    <img src={img} alt={`${title} preview`} className="video-thumbnail" />
                    <button className="hero-video-btn" type="button">
                      <svg width="20" height="20">
                        <use href="/sprite/symbol-defs.svg#icon-play" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
             <div className='video-item-content'>
                <h3 className="video-item-title">{subtitle}</h3>
                <p className="video-item-text">{text}</p>
             </div>
            </li>
            
            
          ))}
        </ul>
      </div>
    </section>
  );
}
