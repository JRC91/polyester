import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
import { Dropdown, Button } from "react-bootstrap";
export function Navbar() {
  const [opaqueSetting, setOpaque] = useState(["0"]);
  const [toggle, setToggle] = useState(false)
  function handleScroll(evt) {

    if (opaqueSetting === "0") {
      setOpaque("50");
    }
  }

  function toggleClick () {
    if(toggle){
      setToggle(false)
    }
    if(toggle)
    {setToggle(true)}
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
    <div>

  {/* <PayPalButton></PayPalButton> */}
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
