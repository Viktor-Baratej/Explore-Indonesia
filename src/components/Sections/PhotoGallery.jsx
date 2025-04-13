import '../../styles/section/photo-gallery.css';


export default function PhotoGallery() {
    return (
      <section id='gallery'  className="PhotoGallery">
        <div className='container'>
          <h2 className='gallery-title'>Photo Gallery</h2>
          <p className='gallery-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt.</p>
          <div className="gallery-list">
    <div className='gallery-item'>
      <img className='grid-item' src="/foto/ImageGallery1-min.png" alt="Photo 1" />
      <img className='grid-item' src="/foto/ImageGallery2-min.png" alt="Photo 2" />
       <img className='grid-item' src="/foto/ImageGallery5-min.png" alt="Photo 5" />
    </div>
  <div className='gallery-item'>
  <img className='grid-item' src="/foto/ImageGallery3-min.png" alt="Photo 3" />
      <img className='grid-item' src="/foto/ImageGallery4-min.png" alt="Photo 4" />
      <img className='grid-item' src="/foto/ImageGallery6-min.png" alt="Photo 6" />
  </div>
  </div>

        </div>
      </section>
    );
  }

  