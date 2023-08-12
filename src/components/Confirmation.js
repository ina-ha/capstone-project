import React from 'react'
import { Link } from 'react-router-dom'
import dateFormat from '../utilities/dateFormat'

function Confirmation({guests, time, date, firstName, occasion}) {


  return (<section className="confirmation">
  <h1>SUCCESS!</h1>
    <div>Thank you, {firstName}.<br/>Your booking for <span className="bold"> {guests} {guests > 1 ? "people" : "person"} {occasion ? `(${occasion})` : ``} </span> on <span className="bold">{dateFormat(date)} </span>at <span className="bold">{time}</span> is confirmed.</div>
    <Link className='btn-link' to="/"><button className="btn">Home</button> </Link>
    </section>
  )
}

export default Confirmation