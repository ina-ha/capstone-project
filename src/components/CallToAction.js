import React from 'react';
import { Link } from 'react-router-dom';


function CallToAction({heading, actionImage, buttonText, link, buttonDisplay, alt}) {
  return (
    <section className="action">
    <div className='content'>
    <div>
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    </div>
    </div>
    <div className='content'>
    <div className='action-text'>
    <h3>{heading}</h3>
    <Link className='btn-link' to={link}><button className='btn' style={buttonDisplay}>{buttonText}</button></Link>
    </div>
    <div className='action-image'>
<img src={actionImage} alt={alt}></img>
    </div>
    </div>
    </section>

  )
}

export default CallToAction