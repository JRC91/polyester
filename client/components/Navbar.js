import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Dropdown, Button } from "react-bootstrap";
export function Navbar() {
  const [opaqueSetting, setOpaque] = useState(["0"]);

  function handleScroll(evt) {

    if (opaqueSetting === "0") {
      setOpaque("50");
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
          </a>

          {/* <Dropdown className='top-50px'>
<Dropdown.Toggle  variant="dark" id="dropdown-basic">
    Learn More
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">How To Help</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Resources</Dropdown.Item>
    <Dropdown.Item href="#/action-3">About Us</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
        </div>
      </nav>

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
