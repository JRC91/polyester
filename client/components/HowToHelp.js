




import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import {Link} from 'react-router-dom'


export default function Help () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="padding">
    <div className="backgroundSky">
    <div className='tree'>   <h1 className="latest">How to Help</h1></div>
    <div className="inner">
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
    <p className="boxText">There are several organizations lobbying, organizing, and acting for remediation on the plastic problem. There are other charities attempting to boost recognition of plastic overproduction. Below are some prominent groups working today.</p>
    <ul>
    <li><a href='https://www.plasticpollutioncoalition.org/' className='boxLink'>Plastic Pollution Coalition</a></li>
    <li><a  className='boxLink'href='https://www.plasticfreejuly.org/'>Plastic Free July</a></li>
    <li><a className="boxLink" href="https://www.take3.org/donate/">Take 3 For the Sea</a></li>
    <li><a className="boxLink" href='https://www.plasticpollutioncoalition.org/'>Plastic Pollution Coalition</a></li>
    <li><a className="boxLink" href="https://theoceancleanup.com/">Ocean Cleanup</a></li>
    </ul>
    <p className="boxText">Your money could be going towards development of renewable materials, or subsidizing alternatives for the public good.</p>
    </div>
    </div>

    <div className='rightBox'>
    <div className="textBoxRight">
    <h3 className="boxTop">Protesting</h3>
    <p className="boxText">The best way to get your voice heard in the real world, is showing up, pound pavement and slay with slogans. There are numerous organizations going up against plastic over-use, many of them hand in hand with climate change awareness groups. <a className="boxLink" href="https://www.earthday.org/">Earth Day</a> is the most prominent organization in environmentalism and has significant experience in planning and acting. Greenpeace is also a big name fighting pollution on all fronts, and has a long history of storied demonstrations. On the more extreme end you have Extinction Rebellion.
    </p>
    </div>
    <img src="/assets/protest.jpg" className='rightPic'></img>
    </div>

    <div className='leftBox'>

    <img src="/assets/voteBox.png" className="leftPic" height='400' width ='600'></img>
    <div className="textBoxLeft">
    <h3 className="boxTop">Voting</h3>
    <p className="boxText">Federally, locally, or referendum there is enough small scale action to mandate restrictions on single use plastic. If enough places restrict single use plastics, it would mean companies would have to change how they package and sell their goods. Here are some national and local organizations that are operating within politics and policy.
    <ul>
      <li> <a  className="boxLink" href='https://www.plasticfreejuly.org/get-involved/what-you-can-do/local-policies/'>Plastic Free July: Local Politics</a></li>
      <li> <a  className="boxLink" href='https://cleanair.org/'> Clean Air in Philadelphia </a></li>

    </ul>
    </p>
    <p className="boxText"> Already there has been many cities and states such as NY, NJ, and California that have banned or limited single-use plastics.</p>
    </div>
    </div>
    </div>
    </div>
    </div>

  )
}
//https://calmatters.org/commentary/2022/03/vote-to-reduce-plastics-and-clean-up-our-environment/
//https://theoceancleanup.com/donate/
