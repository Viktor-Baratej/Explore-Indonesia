import { useState } from 'react';
import '../../styles/section/getting-there.css';
export default function GettingThere() {
  // ремий стан для кожного блоку
  const [expanded, setExpanded] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false
  });

  const toggleText = (stepKey) => {
    setExpanded(prev => ({
      ...prev,
      [stepKey]: !prev[stepKey]
    }));
  };
    return (
      <section id='getting-there' className="GettingThere">
 <div className="container">
        <h2 className="getting-title">Getting there</h2>

        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content step-container">
            <div className='step-content-1'>
              <h3 className="step-title">Bookings your flights</h3>
              <p className={`step-text ${expanded.step1 ? 'expanded' : ''}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.
              </p>
            </div>

           <div className='toggle-wraper'>
              <button className="toggle-button" onClick={() => toggleText('step1')}>
                {expanded.step1 ? 'Show less' : 'Show more'}
              </button>
           </div>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content step-container">
            <div className='step-content-1'>
              <h3 className="step-title">Choosing your hotel</h3>
              <p className={`step-text ${expanded.step2 ? 'expanded' : ''}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.
              </p>
            </div>

           <div className='toggle-wraper'>
              <button className="toggle-button" onClick={() => toggleText('step2')}>
                {expanded.step2 ? 'Show less' : 'Show more'}
              </button>
           </div>

            <div className="step-sub">
              <img src="/foto/ImageBike-min.png" alt="Travelling" />
              <div>
                <h4 className="step-sub-title">Travelling there</h4>
                <p className={`step-text ${expanded.step3 ? 'expanded' : ''}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt.
            </p>

           <div className='toggle-wraper'>
              <button className="toggle-button" onClick={() => toggleText('step3')}>
                {expanded.step3 ? 'Show less' : 'Show more'}
              </button>
           </div>
              </div>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <div className='step-content-1'>
              <h3 className="step-title">Planning your experiences</h3>
              <p className={`step-text ${expanded.step4 ? 'expanded' : ''}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. 
              </p>
            </div>
           <div className='toggle-wraper'>
              <button className="toggle-button" onClick={() => toggleText('step4')}>
                {expanded.step4 ? 'Show less' : 'Show more'}
              </button>
              <button className="step-button">Learn More</button>
           </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
  