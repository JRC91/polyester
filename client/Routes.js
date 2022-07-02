import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home';
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {

  }

  render() {


    return (
      <div>

          <Switch>
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>

      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {

}

const mapDispatch = dispatch => {

}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
