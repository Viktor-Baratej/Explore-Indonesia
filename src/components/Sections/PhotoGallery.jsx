import { useEffect } from 'react';
import '../../styles/section/photo-gallery.css';

export default function PhotoGallery() {
  useEffect(() => {
    const lightbox = new window.SimpleLightbox('.gallery-list a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section id='gallery' className="PhotoGallery">
      <div className='container'>
        <h2 className='gallery-title'>Photo Gallery</h2>
        <p className='gallery-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          dapibus mauris in lectus tempus, eget tincidunt.
        </p>
        <div className="gallery-list">
          <div className='gallery-item'>
            <a href="/foto/ImageGallery1-min.png">
              <img className='grid-item' src="/foto/ImageGallery1-min.png" alt="Photo 1" />
            </a>
            <a href="/foto/ImageGallery2-min.png">
              <img className='grid-item' src="/foto/ImageGallery2-min.png" alt="Photo 2" />
            </a>
          </div>

          <div className='gallery-item'>
            <a href="/foto/ImageGallery3-min.png">
              <img className='grid-item' src="/foto/ImageGallery3-min.png" alt="Photo 3" />
            </a>
            <a href="/foto/ImageGallery4-min.png">
              <img className='grid-item' src="/foto/ImageGallery4-min.png" alt="Photo 4" />
            </a>
          </div>

          <div className='gallery-item third-column'>
            <a href="/foto/ImageGallery5-min.png">
              <img className='grid-item' src="/foto/ImageGallery5-min.png" alt="Photo 5" />
            </a>
            <a href="/foto/ImageGallery6-min.png">
              <img className='grid-item' src="/foto/ImageGallery6-min.png" alt="Photo 6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
