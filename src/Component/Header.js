import React from 'react';
// import { Link } from 'react-router-dom'; // If using React Router for navigation
import './Header.css'
import logo from '../Asset/logo.png'
const Header = () => {
  return (
    <header>
      <nav >
      <a  href="/"><img alt="Meraqui"  width="150" height="20" src={logo}></img> </a>
        <ul>
         <li className='li'>Home</li>
         <li className='li'>About Us</li>
         <li className='li'>services</li>
         <li style={{color:"blue"}}>____________</li>
         <li className='li'>Karma.ai</li>
         <li className='li'>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
