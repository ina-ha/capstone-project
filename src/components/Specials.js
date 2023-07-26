import React from 'react';
import { Link } from 'react-router-dom';
import salad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import dessert from '../assets/lemon dessert.jpg';
import { LuBike } from  'react-icons/lu';

function Specials() {
    const dishes = [{title: "Greek salad",
image: salad,
price: "$12.99",
description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
},
{title: "Bruchetta",
image: bruchetta,
price: "$5.99",
description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."},
{title: "Lemon Dessert",
image: dessert,
price: "$5.00",
description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}]
  return (
    <section className='specials'>
    <div className='content'>
    <h1>This week's specials!</h1>
    <button className='btn'>{<Link className='btn-link' to='/'>Online Menu</Link>}</button>
    </div>
    <div className='content'>
    {dishes.map(dish => {return (<article className='card'>
       <img src={dish.image}/>
        <div className='specials-text'>
        <div className='specials-title'>
        <h3>{dish.title}</h3>
        <h2 className='price'>{dish.price}</h2>
        </div>
        <div className='specials-description'><p>{dish.description}</p></div>
        <div className='specials-order'>
        <p>Order a delivery</p><LuBike/>
        </div>
        </div>
        </article>)})}
    </div>
    </section>
  )
}

export default Specials