import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { Dropdown } from 'react-bootstrap'
const Navbar = ({handleClick}) => (
  <div>

    <nav>


        <div>
          {/* The navbar will show these links after you log in */}
<span>
<Link to="/home">Home</Link>
<a href="#" onClick={handleClick}>

</a>
</span>
<span>
<Dropdown>
<Dropdown.Toggle  variant="dark" id="dropdown-basic">
    Learn More
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">How To Help</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Resources</Dropdown.Item>
    <Dropdown.Item href="#/action-3">About Us</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</span>
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
