import React from 'react';
import logo from '../img/thom-03.png';

export const Header = () => {
  return (
    <div className='header' id='header'>
       
            <ul className='nav'>
                    <li className='nav__item'><a href='#!' className='nav__link'><img src={logo} alt='thom' className='header__logo'/></a></li>
                    <li  className='nav__item'><a href='#!' className='nav__link'>about us</a> </li>
                    <li  className='nav__item'><a href='#!' className='nav__link nav__contact '>contact</a></li>
            </ul>
       
    </div>
  )
}
