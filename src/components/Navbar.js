import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';


function Navbar() {
  return (<header>
    <Link to='/'><img src={logo} alt='Little Lemon Logo'></img></Link>
    <nav>
      <ul>
        <li><Link className='nav-link' to='/'>Home</Link></li>
        <li><Link className='nav-link' to='/about'>About</Link></li>
        <li><Link className='nav-link' to=''>Menu</Link></li>
        <li><Link className='nav-link' to='/booking'>Reservations</Link></li>
        <li><Link className='nav-link' to=''>Order online</Link></li>
        <li><Link className='nav-link' to=''>Login</Link></li>
      </ul>
    </nav>
    </header>
  )
}

export default Navbar