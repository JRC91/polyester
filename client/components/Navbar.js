import React,  { ReactDOM, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Dropdown, Button } from "react-bootstrap";
import { PayPalButtons } from "@paypal/react-paypal-js";

export function Navbar() {
  const [opaqueSetting, setOpaque] = useState(["0"]);
  const [toggle, setToggle] = useState(false)
  function handleScroll(evt) {

    if (opaqueSetting === "0") {
      setOpaque("50");
    }
  }

  function toggleClick () {
    console.log(toggle)
    if(toggle){
      document.body.style.overflow = "visible"
      document.body.classList.remove("no-scroll")
      setToggle(false)
    }
    if(!toggle)
    {
      document.body.style.overflow = "hidden"
      document.body.classList.add("no-scroll")
      setToggle(true)
    }
  }











  return (
    <div>
      <nav>
        <div
          className="navBar"
        >
          <Link className="navText" to="/">
            <img
              className="border border-primary rounded"
              src="/assets/projectClear.png"
              width="200px"
              height="100px"
            />
          </Link>
          <a href="#" onClick={handleScroll}>
            <Link to='/howtohelp'>
              <button className="nav-link">How To Help</button>
            </Link>
            <Link to='/resources'>
              <button className="nav-link">Resources</button>
            </Link>
            <Link to="/about">
              <button className="nav-link">About Us</button>
            </Link>

            <button  onClick={toggleClick}className="donate">Donate</button>
          </a>

        </div>
      </nav>
    {toggle?
    <div className='donatePage'>
      <button className="cancel" onClick={toggleClick}>X</button>
      <div className="centerStage">
        <div>

        </div>
        <div className="donationBox">

    <PayPalButtons

    />
    </div>
    </div>
  </div>
    : <></>}
    </div>
  );
}

/**
 * CONTAINER
 */
const mapState = () => {
  return;
};

const mapDispatch = (dispatch) => {
  return;
};

export default connect()(Navbar);
