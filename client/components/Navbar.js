import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { Dropdown, Button } from 'react-bootstrap'
const Navbar = ({handleClick}) => (
  <div>

    <nav>


        <div className='navBar'>
          {/* The navbar will show these links after you log in */}

<Link className="navText" to="/">
<img src="/assets/projectClear.png"  width='200px' height='100px'/>


              </Link>
<a href="#" onClick={handleClick}>
<Link><button className="nav-link">How To Help</button></Link>
<Link><button className="nav-link">Resources</button></Link>
<Link><button className="nav-link">About Us</button></Link>
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
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = () => {
 return
}

const mapDispatch = (dispatch) => {
  return
}

export default connect()(Navbar)
