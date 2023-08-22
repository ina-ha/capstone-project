import React, { useState, useReducer } from 'react';
import { fetchAPI } from '../utilities/api';
import BookingForm from './BookingForm';
import Confirmation from './Confirmation';
import restaurant from '../assets/restaurant.jpg';
import chef from "../assets/restaurant chef B.jpg";
import CallToAction from './CallToAction';



function BookingPage() {

  const [confirmed, setConfirmed] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const availableEvents = ['birthday', 'anniversary', 'wedding']
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  const initializeTimes = () => {
    let today = new Date();
    let times = fetchAPI(today);
    return times
  }

  const updateTimes = (availableTimes, action) => {
    if (action.type === 'dateChange') { return fetchAPI(new Date(action.bookedDate)); }
    if (action.type === 'initial') {
      return fetchAPI(new Date())
    }
    return availableTimes
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


  // Handing "Make another reservation button", resetting the form values
  const handleClick = () => {
    setConfirmed(false);
    setDate('');
    setTime('')
    dispatch({ type: "initial" })
    setGuests(1);
    setOccasion('');
  }
  const heading = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ";
  const buttonDisplay = { display: "none" };
  const alt = "A smiling chef cooking a dish"

  return (<>
    <CallToAction actionImage={chef} heading={heading} buttonDisplay={buttonDisplay} alt={alt} />
    <section className='booking'>
      <div className="content">
        {!confirmed ? (<><div className="booking-text"><h1>BOOK A TABLE</h1><BookingForm firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} phone={phone}
          setPhone={setPhone} email={email} setEmail={setEmail} availableTimes={availableTimes}
          dispatch={dispatch} availableEvents={availableEvents} occasion={occasion}
          setOccasion={setOccasion} date={date} setDate={setDate} time={time} setTime={setTime}
          guests={guests} setGuests={setGuests} setConfirmed={setConfirmed} />
        </div>
          <div className="booking-image"><img src={restaurant} alt="A restaurant terrace" /></div></>) :
          (<Confirmation firstName={firstName} time={time} date={date} handleClick={handleClick} guests={guests} occasion={occasion} />)}
      </div>
    </section>
  </>
  )
}

export default BookingPage