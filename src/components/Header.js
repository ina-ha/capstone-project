import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Nav from './Nav';


function Header() {
  return (<header className='content'>
    <Link to='/'><img src={logo} alt='Little Lemon Logo'></img></Link>
    <Nav class="nav-link" />
    
    </header>
  )
}

export default Header