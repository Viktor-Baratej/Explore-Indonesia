import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
 import '../../styles/section/footer.css';
export default function Footer() {
    return (
      <section id='Footer' className="Footer">
<ScrollToTopButton/>
<div className="container footer-container">
<div className="footer-logo-content">
<svg className='footer-logo-flowers' width="25" height="51">
            <use href="/sprite/symbol-defs.svg#icon-Flowers" />
          </svg>
          <div className='footer-logo'>Explore<span className='footer-logo-wight'>Indonesia</span>
          </div>
</div>
<nav className="footer-nav">
    <ul className="footer-list">
        <li className="footer-item" > <a href="">About</a> </li>
        <li className="footer-item" > <a href="">Pricing</a> </li>
        <li className="footer-item" > <a href="">Company</a> </li>
        <li className="footer-item" > <a href="">Blog</a> </li>
    </ul>
</nav>
<div className="footer-soc">
    <ul className="footer-soc-list">
        <li> <a href="https://www.facebook.com" target="_blank"><svg className="footer-soc-item" >
                <use href="/sprite/symbol-defs.svg#icon-facebook" />
              </svg></a> </li>
        <li> <a href="https://www.linkedin.com" target="_blank"><svg className="footer-soc-item" >
                <use href="/sprite/symbol-defs.svg#icon-linkedin" />
              </svg></a> </li>
        <li> <a href="https://www.google.com" target="_blank"><svg className="footer-soc-item" >
                <use href="/sprite/symbol-defs.svg#icon-google" />
              </svg></a> </li>
    </ul>
</div>

<p className='footer-tab'><small>Copyright © 2025</small></p>
</div>
    </section>
    );
  }

           