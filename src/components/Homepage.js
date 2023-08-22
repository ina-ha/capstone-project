import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import actionImage from '../assets/restauranfood.jpg';

function Homepage() {
  const heading = 'We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist';
  const buttonText = "Reserve a table";
  const link = '/booking'
  const alt = "Delicious looking dish"
  return (
    <>
      <CallToAction heading={heading} actionImage={actionImage} buttonText={buttonText} link={link} alt={alt} />
      <Specials />
    </>
  )
}

export default Homepage