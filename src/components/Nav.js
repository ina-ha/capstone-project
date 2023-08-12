import React from 'react'
import { Link } from 'react-router-dom'

function Nav (props) {

 
  return (
    <nav className={props.nav} onClick={props.handleLink}>

        <Link className={props.classNav} to='/'>Home</Link>
        <Link className={props.classNav} to=''>About</Link>
        <Link className={props.classNav} to=''>Menu</Link>
        <Link className={props.classNav} to='/booking'>Reservations</Link>
        <Link className={props.classNav} to=''>Order online</Link>
        <Link className={props.classNav} to=''>Login</Link>

    </nav>
  )
}


export default Nav