import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <main><p>Homepage</p>
    <button>{<Link to='/booking'>Book a table</Link>}</button>
    </main>
  )
}

export default Homepage