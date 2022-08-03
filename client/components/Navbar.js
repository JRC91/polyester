import React,  { ReactDOM, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Donation from "./donation";
import { Dropdown, Button } from "react-bootstrap";
import { PayPalButtons } from "@paypal/react-paypal-js";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

export function Navbar() {
  const [opaqueSetting, setOpaque] = useState(["0"]);
  const [toggle, setToggle] = useState(false)
  const [donation, setDonation] = useState(0)
  const [displayValue, setDisplay] = useState({top:'0px'})
  function handleScroll(evt) {

    if (opaqueSetting === "0") {
      setOpaque("50");
    }
  }

  useEffect(() => {
    const handleScroll = event => {
      checkIt(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function checkIt (scroll) {

    if(scroll > 100){
      setDisplay({top:'-140px'})
    }
    else {setDisplay({top:'0px'})}
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
      window.scrollTo(0, 0)
      document.body.style.overflow = "hidden"
      document.body.classList.add("no-scroll")
      setToggle(true)
    }
  }











  return (
    <div>
      <nav>
        <div
          className="navBar" style={displayValue}
        >
          <Link className="navText" to="/">
            <img
              className="border border-primary rounded"
              src="/assets/projectClear.png"
              width="200px"
              height="100px"
            />
          </Link>
          <a onClick={handleScroll}>
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
          {/*below allows for a menu to appear when screen size is below a threshold*/}
          <Dropdown className='dropDown'>
            <DropdownToggle id='dropDown'>☰</DropdownToggle>
            <DropdownMenu>
          <DropdownItem eventKey='1'><Link to='/howtohelp'>
              <button className="menulink">How To Help</button>
            </Link> </DropdownItem>
          <DropdownItem eventKey='2'> <Link to='/resources'>
              <button className="menulink">Resources</button>
            </Link></DropdownItem>
          <DropdownItem eventKey='3'><Link to="/about">
              <button className="menulink">About Us</button>
            </Link></DropdownItem>
            <DropdownItem eventKey='4'> <Link><button  onClick={toggleClick}className="menulink">Donate</button></Link></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>
    {toggle?
   <div className='donatePage'>
    <button className="cancel" onClick={toggleClick}>X</button>
    <Donation />
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
