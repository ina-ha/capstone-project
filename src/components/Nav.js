import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><Link className={props.class} to='/'>Home</Link></li>
        <li><Link className={props.class} to='/about'>About</Link></li>
        <li><Link className={props.class} to=''>Menu</Link></li>
        <li><Link className={props.class} to='/booking'>Reservations</Link></li>
        <li><Link className={props.class} to=''>Order online</Link></li>
        <li><Link className={props.class} to=''>Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav