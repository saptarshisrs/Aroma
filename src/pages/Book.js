/* eslint-disable */
import React, { useState } from "react";
import "./Book.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Book() {
 
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [location, setLocation] = useState("");
  const [Menu, setMenu] = useState("");
  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setNumGuests("");
    setBookingDate("");
    setLocation("");
    setMenu("");
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    // if (!email) {
    //   errors.email = "Email is required";
    // }
    if (!phone) {
      errors.phone = "Phone number is required";
    }
    // if (!numGuests) {
    //   errors.numGuests = "Number of guests is required";
    // }
    // if (!bookingDate) {
    //   errors.bookingDate = "Booking date is required";
    // }
    // if (!location) {
    //   errors.location = "Location is required";
    // }
    // if (!Menu) {
    //   errors.Menu = "Menu is required or type NA";
    // }
    if (Object.keys(errors).length === 0) 
    {
      console.log("Booking submitted successfully!");
      emailjs.sendForm('service_a58kee8', 'template_6zehdse', form.current, '3TPYMWW4u_J3HsP1k')
        .then((result) => {
          resetForm();
          toast.success('Booking info submitted sucessfully.Please wait we will get back to you!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          
        }, (error) => {
          console.log(error.text);
        });
       
    } else {
      setErrors(errors);
    }
    form.current.reset()
  };
  
  return (
    <>
    <div className="con">
      <div className="left-half">

      </div>
      <div className="right-half">
      <div className="formtot">
        <div className="headform">
          <h1>Enter Details</h1>
        </div>
        <div className="formd">

          <form ref={form} onSubmit={handleSubmit}>
            <div className="formleft">
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* {errors.email && <span className="error">{errors.email}</span>} */}
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
            </div>
            <div className="formright">
              <div>
                <label htmlFor="numGuests">Number of Guests:</label>
                <input
                  type="number"
                  name="numGuests"
                  id="numGuests"
                  value={numGuests}
                  onChange={(e) => setNumGuests(e.target.value)}
                />
                {/* {errors.numGuests && (
                  <span className="error">{errors.numGuests}</span>
                )} */}
              </div>
              <div>
                <label htmlFor="bookingDate">Booking Date:</label>
                <input
                  type="date"
                  name="bookingDate"
                  id="bookingDate"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                />
                {/* {errors.bookingDate && (
                  <span className="error">{errors.bookingDate}</span>
                )} */}
              </div>
              <div>
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                {/* {errors.location && (
                  <span className="error">{errors.location}</span>
                )} */}
              </div>
              <div>
                <label htmlFor="Menu">Menu:</label>
                <input
                  type="text"
                  name="Menu"
                  id="Menu"
                  value={Menu}
                  onChange={(e) => setMenu(e.target.value)}
                />
                {/* {errors.Menu && (
                  <span className="error">{errors.Menu}</span>
                )} */}
              </div>
            </div>
            <button  type="submit" className="confirm-booking-btn">Booking Info</button>
          </form>
          <ToastContainer />
        </div>
      </div>
      </div>
      </div>
    </>
  )
}
