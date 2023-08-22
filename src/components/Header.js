import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Nav from './Nav';
import { RiMenuFill } from 'react-icons/ri';




function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked)
  }



  useEffect(() => {
    if (clicked) {
      const handler = (e) => setClicked(false);
      document.getElementById('main').addEventListener('click', handler);
      return () => { document.getElementById('main').removeEventListener('click', handler) }
    }
  });


  const handleLink = () => {
    setClicked(false)
  }

  return (
    <header>
      <div className='content'>
        <div className='header-logo'><Link to='/'><img src={logo} alt='Little Lemon Logo'></img></Link></div>
        <div><RiMenuFill onClick={handleClick} className="header-icon" size={52} /></div>
        <Nav handleLink={handleLink} nav={clicked ? "active" : "inactive"} classNav="nav-link" />
      </div>
    </header>
  )
}

export default Header