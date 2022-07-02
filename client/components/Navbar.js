import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick}) => (
  <div>
    <h1>FS-App-Template</h1>
    <nav>


        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
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
