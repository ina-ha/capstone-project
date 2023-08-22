import React, { useState, useRef } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import dateFormat from '../utilities/dateFormat';



function BookingForm({ firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail, guests, setGuests, setConfirmed, date, setDate, time, setTime, occasion, setOccasion, availableEvents, availableTimes, dispatch }) {

  const [details, setDetails] = useState(false);
  const [validFirstName, setValidFirstName] = useState("default");
  const [validLastName, setValidLastName] = useState("default");
  const [validPhone, setValidPhone] = useState("default");
  const [validEmail, setValidEmail] = useState("default");

  const myRef = useRef(null);

  const displayDetails = () => {
    setDetails(!details);
    myRef.current.scrollIntoView()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo({ top: "400px", left: 0 })

    setConfirmed(true)
  }

  function handlePlus() {
    setGuests(prev => {
      if (prev < 10) { return prev + 1 }
      else { return prev }
    })
  }

  function handleMinus() {
    setGuests(prev => {
      if (prev > 1) { return prev - 1 }
      else { return prev }
    })
  }

  function validateName(value, action) {
    if (value.length < 2) {
      action("invalid")
    }
    else { action("valid") }
  }

  function clearErrorName(value, action) {
    if (value.length >= 2) { action("valid") }
  }

  function validatePhone(value) {
    if (/^([0-9]{5,})$/.test(value) === false) {
      setValidPhone("invalid")
    }
    else { setValidPhone('valid') }
  }
  function clearErrorPhone(value) {
    if (/^([0-9]{5,})$/.test(value)) {
      setValidPhone("valid")
    }
  }
  function validateEmail(value) {
    if (/.+@.+\.[A-Za-z]+$/.test(value) === false) {
      setValidEmail("invalid")
    }
    else { setValidPhone('valid') }
  }
  function clearErrorEmail(value) {
    if (/.+@.+\.[A-Za-z]+$/.test(value)) {
      setValidEmail("valid")
    }
  }

  return (<>
    <form ref={myRef} autocomplete="off" onSubmit={handleSubmit}>
      <div className="progress">
        <div className={!details ? "selected" : "notSelected"}>1.  Choose options</div><div className={details ? "selected" : "notSelected"}>2.  Enter details</div>
      </div>
      {!details ?
        (<div>
          <label htmlFor="book-date">Date:
            <input value={date} onChange={e => { setDate(e.target.value); dispatch({ type: "dateChange", bookedDate: e.target.value }) }} placeholder="Date" id='book-date' type='date' />
          </label>
          <label htmlFor='book-time'>Time:
            <select className="select-time" value={time} onChange={e => setTime(e.target.value)} id="book-time">
              <option value='' disabled hidden >Select</option>
              {
                availableTimes.map(slot => <option key={slot} value={slot}>{slot}</option>)
              }
            </select>
          </label>
          <div className="guests"><label htmlFor="guests">Number of guests:</label> <AiFillMinusCircle tabindex="0" onkeydown={handleMinus} onClick={handleMinus} className="form-icon" aria-label="remove" /><input value={guests} type="number" id="guests" />
            <AiFillPlusCircle tabindex="0" onkeydown={handlePlus} onClick={handlePlus} className="form-icon" aria-label="add" /></div>
          <select className="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} id="occasion">
            <option value=''><lable htmlFor='occasion'>Occasion (optional)</lable></option>
            {availableEvents.map(event => <option key={event} value={event}>{event}</option>)}
          </select>
          <div className="form-buttons">
            <button className="btn" onClick={displayDetails} type="button" disabled={!date || !time}>Continue</button>
          </div></div>)
        :
        (<div>
          <label htmlFor='firstName'>* First name:
            <input id="firstName" style={validFirstName === 'invalid' ? { border: '1px solid red' } : { border: '1px solid black' }} value={firstName} onBlur={() => validateName(firstName, setValidFirstName)} onChange={e => {
              clearErrorName(e.target.value, setValidFirstName);
              setFirstName(e.target.value);
            }} type="text" minlength='2'></input>
          </label>
          <div className="invalid-input"><p style={validFirstName === "invalid" ? { display: 'block' } : { display: 'none' }}>Please enter at least two characters</p></div>
          <label htmlFor="lastName">* Last name:
            <input id="lastName" style={validLastName === "invalid" ? { border: '1px solid red' } : { border: '1px solid black' }} value={lastName} onBlur={() => validateName(lastName, setValidLastName)} onChange={e => { clearErrorName(e.target.value, setValidLastName); setLastName(e.target.value) }} type="text"></input>
          </label>
          <div className="invalid-input"><p style={validLastName === "invalid" ? { display: 'block' } : { display: 'none' }}>Please enter at least two characters</p></div>
          <label htmlFor='phone'>* Phone number:
            <input id="phone" style={validPhone === "invalid" ? { border: '1px solid red' } : { border: '1px solid black' }} value={phone} onBlur={() => validatePhone(phone)} onChange={e => { clearErrorPhone(e.target.value); setPhone(e.target.value) }} type='tel'></input>
          </label>
          <div className="invalid-input"><p style={validPhone === "invalid" ? { display: 'block' } : { display: 'none' }}>Please enter valid phone number</p></div>
          <label htmlFor='email'>* Email:
            <input id='email' style={validEmail === "invalid" ? { border: '1px solid red' } : { border: '1px solid black' }} value={email} onBlur={() => validateEmail(email)} onChange={e => { clearErrorEmail(email); setEmail(e.target.value) }} type="email"></input>
          </label>
          <div className="invalid-input"><p style={validEmail === "invalid" ? { display: 'block' } : { display: 'none' }}>Please enter valid email</p></div>
          <div className="check-booking"><p>You are about to book a table for <span className="bold"> {guests} {guests > 1 ? "people" : "person"} {occasion ? `(${occasion})` : ``} </span> on <span className="bold">{dateFormat(date)} </span>at <span className="bold">{time}.</span></p></div>
          <div className="form-buttons">
            <button className="btn" onClick={displayDetails} type="button">Back</button>
            <button className="btn" disabled={validFirstName !== 'valid' || validLastName !== 'valid' || validPhone !== "valid" || validEmail !== 'valid'} type="submit" >Book now</button>
          </div>
        </div>)
      }

    </form>

  </>)
}

export default BookingForm