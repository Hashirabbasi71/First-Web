import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className='Nav-left'>
        <h3>First Website</h3>
      </div>

      {/* Hamburger icon */}
      <div className='hamburger' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className='Nav-right'>
        <ul className={isOpen ? 'open' : ''}>
          <li><Link to="hero" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>About</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
