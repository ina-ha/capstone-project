import React from 'react';
import { Link } from 'react-router-dom';
import actionImage from '../assets/restauranfood.jpg';

function CallToAction() {
  return (
    <section className="action">
    <div className='content'>
    <div className='action-text'>
    <h1>Little Lemon</h1> 
    <h2>Chicago</h2>
    <h3>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</h3>
    <button className='btn'>{<Link className='btn-link' to='/booking'>Reserve a Table</Link>}</button>
    </div>
    <div className='action-image'>
<img src={actionImage}></img>
    </div>
    
    </div>
     
    </section>
  )
}

export default CallToAction