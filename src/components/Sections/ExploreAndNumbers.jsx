
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import '../../styles/section/explore-and-numbers.css';

export default function ExploreAndNumbers() {
    return (
      <section id='explore' className="Explore-Numbers">
     <div className='container'>
      <h2 className='explore-title'>Explore Our Secrets</h2>
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={31}  // відстань між слайдами
  slidesPerView={1}  // скільки слайдів видно одночасно
  navigation        // стрілки для навігації
  pagination={{ clickable: true }}  // крапки для пагінації
  loop={true}       // безкінечний слайдер
  autoplay={{
    delay: 1500,       // 3 секунди між слайдами
    disableOnInteraction: false, // не зупиняється після взаємодії
  }}
  speed={1500}
  breakpoints={{
    640: {
      slidesPerView: 1, 
    },
    768: {
      slidesPerView: 2, 
    },
    1024: {
      slidesPerView: 3, 
    },
  }}
>
  <SwiperSlide>
    <img src="/foto/imageExplore1-min.png" alt="Slide 1" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/foto/imageExplore2-min.png" alt="Slide 2" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/foto/imageExplore3-min.png" alt="Slide 3" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="/foto/imageExplore2-min.png" alt="Slide 4" />
  </SwiperSlide>

</Swiper>
</div>



<div className='explore-bottom-full-bg'>
  <div className='container explore-bottom-section'>
    <h2 className='explore-subtitle'>By The Numbers</h2>
    <p className='explore-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <ul className='explore-list'>
      <li className='explore-item'>
        <h4 className='explore-item-title'>100+</h4>
        <p className='explore-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.</p>
      </li>
      <li className='explore-item'><h4 className='explore-item-title'>43,000+</h4>
      <p className='explore-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo.</p></li>
      <li className='explore-item'><h4 className='explore-item-title'>30+</h4>
      <p className='explore-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.</p></li>
    </ul>
  </div>
</div>
    
      </section>
    );
  }
  