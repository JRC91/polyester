import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home';
import SlideOne from './components/SlideOne';
import SlideTwo from './components/SlideTwo'
import SlideThree from './components/SlideThree'
import About from './components/About';
import Help from './components/HowToHelp';
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
            <Route exact path="/" component={Home} />
            {/* <Redirect from='/' to='/home' /> */}
            <Route exact path='/plasticworld' component={SlideOne}/>
            <Route path='/recyclefolly'  component={SlideTwo}/>
            <Route path='/blamegame' component={SlideThree}/>
            <Route path='/about' component={About} />
            <Route path='/howtohelp' component={Help} />

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
