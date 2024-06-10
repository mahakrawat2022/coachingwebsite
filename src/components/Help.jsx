import React from 'react';
import '../App.css';

function Help() {
  return (
    <div>
    <div className="mb-5"> {/* Add margin bottom of 100px */}
      <h3 className="my-3 mx-4">Contact</h3>
      <div className="row">
        <div className="col-sm-4 mb-3">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Call for help</h5>
              <p className="card-text">+9147652845</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Mail</h5>
              <p className="card-text">Perfectlearning@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">Our Office Address</h5>
              <p className="card-text">New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" row my-4">
        <div className="col-sm-6">
          <div className="card border-0" style={{ height: '300px' }}>
            <img src="https://static.vecteezy.com/system/resources/previews/001/254/092/original/business-people-in-online-meeting-vector.jpg" className="card-img-top" alt="Placeholder" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card border-0" style={{ height: '200px' }}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <p>Please contact us via the details below and enter your request.</p>
              <form style={{ width: '80%' }}>
                <div className="row mb-3 my-4">
                  <div className="col">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
     
     {/* Your existing content */}
     <div className="full-width-div"></div>
   </div>
  );
}

export default Help;
