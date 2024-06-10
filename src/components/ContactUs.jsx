import React from 'react';
import './ContactUs.css';


function ContactUs() {
  return (
    <div className="container">
      <div className="content">
        <h2 style={{color:"#0e387a"}}>Simple steps to success </h2>
        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</p>
      </div>
      <div className="contact-form">
        <h1>LogIn</h1>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input className="form-control my-2" type="text"/>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-control my-2" type="email"/>
          </div>
          <div className="form-group">
            <label>Contact number:</label>
            <input className="form-control my-2" type="tel"/>
          </div>
          <div className="form-group">
            <label>Country or Region:</label>
            <input className="form-control my-2" type="text"/>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
