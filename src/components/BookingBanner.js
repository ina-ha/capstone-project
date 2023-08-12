import React from 'react';
import restaurant from '../assets/restaurant.jpg';
import chef from "../assets/restaurant chef B.jpg";

function BookingBanner() {
  return (
    <section className="banner">
    <div className="content">
    <div>
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <h3>Find a table for any occasion</h3>
    </div>
    <div>
    <img src={chef} />
    </div>
    </div>
    </section>
  )
}

export default BookingBanner