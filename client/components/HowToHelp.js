// https://www.volunteerforever.com/article_post/stop-plastic-pollution-environment-beach-and-ocean-cleanup-volunteering/


// https://www.plasticpollutioncoalition.org/




import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import {Link} from 'react-router-dom'


export default function Help () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='helping'>
    <h1 className="latest">How to Help</h1>


    <div className='leftBox'>
      <img src="/assets/cleanBeach.jpg"className="leftPic"></img>
    <div className="textBoxLeft">
    <h3 className="boxTop">Volunteering</h3>
    <p className="boxText">There's no shortage of opportunities to volunteer for waste clean-up! You can take the intiative and comb a local beach or park land. There's also several organizations that you can volunteer with:</p>
    <ul>
    <li> <a className="boxLink" href='https://www.breakfreefromplastic.org/'>Break Free From Plastic</a></li>
    <li> <a className="boxLink"href='https://4ocean.formstack.com/forms/volunteer_database'>4 Ocean</a></li>
    <li> <a className="boxLink"href='https://nyc.surfrider.org/beach-cleanup-experience-days/'>SurfRider Foundation NYC</a></li>
    <li> <a className="boxLink"href='https://www.volunteerforever.com/article_post/best-volunteer-abroad-programs-organizations-projects/'>Volunteer Forever</a></li>
    <li><a className="boxLink"href='https://www1.nyc.gov/assets/dsny/site/contact/get-involved/volunteer-cleanup-program'>DSNY Clean Up</a></li>
    </ul>
    <p className="boxText">You can also check in with your local parks deparment. Or maybe even make a website to boost awareness. </p>
    </div>
    </div>

    <div className='rightBox'>
    <div className="textBoxRight">
    <h3  className="boxTop">Cutting Plastic Out</h3>
    <p className="boxText">Very hard to do these days with the single-use plastics. You can make a dent with using your own grocery bag (I recommend a nice thick canvas bag). Stop drinking water from plastic bottles and buy your own metal water bottle. Double walled bottles are great for keeping your drinks hot or cold for longer.</p>
    <p className="boxText">Here are some great resources for limiting plastic waste:</p>
    <ul>
      <li><a className="boxLink" href='https://plasticfreeshopper.com/plastic-free-living/'>Plastic Free Living</a></li>
      <li><a className="boxLink" href='https://www.consumerreports.org/environment-sustainability/how-to-quit-plastic/'>Consumer Report's How to Quir Plastic</a></li>
      <li><a  className="boxLink" href='https://www.eatingwell.com/article/7948273/how-to-cut-back-on-plastic-food-home/'>Eating Well's 8 Simple Ways to Cut Back on Plastic in Your Food and at Home</a></li>

    </ul>
    <p className="boxText">Limiting plastic use is not only good for the planet, but also your health too!</p>
    </div>
    <img className='rightPic' src="/assets/waterBottle.webp"></img>
    </div>

    <div className='leftBox'>
    <img className="leftPic"  src="/assets/collection.jpg"></img>
    <div className="textBoxLeft">
    <h3 className="boxTop">Donating</h3>
    <p className="boxText">There are several organizations lobbying, organizing, and acting for remediation on the plastic problem. There are charities attempting to boost </p>
    </div>
    </div>

    <div className='rightBox'>
    <div className="textBoxRight">
    <h3 className="boxTop">Protesting</h3>
    <p className="boxText">The best way to get your voice heard in the real world, is showing up, pound pavement and slay with slogans. There are numerous organizations going up against plastic over-use, many of them hand in hand with climate change awareness groups.</p>
    </div>
    <img src="/assets/protest.jpg" className='rightPic'></img>
    </div>

    <div className='leftBox'>

    <img src="/assets/voteBox.png" className="leftPic" height='400' width ='600'></img>
    <div className="textBoxLeft">
    <h3 className="boxTop">Voting</h3>
    <p className="boxText">Federally, locally, or referendum there is enough small scale action.</p>
    </div>
    </div>
    </div>
  )
}
//https://calmatters.org/commentary/2022/03/vote-to-reduce-plastics-and-clean-up-our-environment/
//https://theoceancleanup.com/donate/
