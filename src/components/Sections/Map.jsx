import '../../styles/section/map.css';
import { showMessage } from '../iziToast/utils/showMessage';
export default function Map() {
    return (
      <section id='map' className="Map">
        
        <div className='container'>
          <div className="map-content">
            <h3 className="map-title">Our hills and valleys are like nothing you’ve seen.</h3>
            <p className="map-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet magna commodo, tempus dolor sit amet, laoreet elit. Donec mauris tortor.</p>
         <div className='map-btn-content'> <button className="map-btn" type="button" onClick={() => showMessage('Section', 'button is not active')}>Learn More</button></div>
          </div>
        </div>
      </section>
    );
  }
  