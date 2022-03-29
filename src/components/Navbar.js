import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';


function Navbar({data}) {

  
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Fruity
          <i class='fas fa-apple-alt' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/fruits'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Fruits <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown data={data}/>}
          </li>
         
          {/* <li  className='nav-item color'>   <i class="fa fa-search" aria-hidden="true"></i></li> */}
        
       
         
        </ul>
      </nav>
    </>
  );
}

export default Navbar;