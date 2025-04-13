
import '../../styles/section/header.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchInput from '../SearchInput/SearchInput';

export default function Header (){

    return (
        <header id='Header' className="Header">
            <div className="container header-content">
<div className="header-logo">
<svg width="24.5" height="49">
            <use href="/sprite/symbol-defs.svg#icon-Flowers" />
          </svg>
        <span className='header-logo-title'>Explore <br />Indonesia</span>

<nav className="header-nav">
    <ul className="header-list">
        <li className="header-item" > <a href="">destinations</a> </li>
        <li className="header-item" > <a href="">experiences</a> </li>
        <li className="header-item" > <a href="">about</a> </li>
        <li className="header-item" > <a href="">gallery</a> </li>
    </ul>
</nav>
</div>
<div className='header-right'>
    <SearchInput/>
    <BurgerMenu/>
</div>
            </div>
        </header>
    )
}
