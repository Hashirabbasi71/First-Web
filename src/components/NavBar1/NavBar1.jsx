
import close from '../Assests/close.png'
import menu from '../Assests/menu.png'
import "../NavBar1/navbar.css"
import { Link } from 'react-scroll';
import React, { useState , useRef } from 'react';

function NavBar1() {
 const sidebarRef = useRef(null);

  const ShowSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.style.display = 'flex';
    }
  };
    
  const closesidebar = () => {
    if(sidebarRef.current){
      sidebarRef.current.style.display= 'none';
    }
  };
  
  const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
        <nav> 
            <ul className='sidebar' ref={sidebarRef}>
                <li onClick={closesidebar}><a ><img src={close} alt="" /></a></li>
                <li><a><Link to="hero" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Home</Link></a></li>
                <li><a ><Link to="about" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>About us</Link></a></li>
                <li><a ><Link to="contact" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Contact</Link></a></li>

                
            </ul>
            <ul className='navbar' >
                <li>LOGO</li>
                <li className='hideOnMobile'><a ><Link to="hero" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Home</Link></a></li>
                <li className='hideOnMobile'><a ><Link to="about" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>About Us</Link></a></li>
                <li className='hideOnMobile'><a ><Link to="contact" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Contact</Link></a></li>
                
                
                <li  className='menu-button' onClick={ShowSidebar}><a > <img src={menu} alt=""/> </a></li>
            </ul>
        </nav>





    </div>
  );
}


export default NavBar1