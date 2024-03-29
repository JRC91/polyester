
import React from 'react';
import {
  TwitterIcon,
  FacebookIcon,
} from "react-share";
import {Link} from 'react-router-dom'

export default function Footer () {
  return (
    <div className='footer'>
      <h6 className='footerLink'>Project Clear is a currently fictional organization promoting plastic pollution awareness. Site is a mock-up. Copy 2022</h6>
    <div className='footerNav'>
    <Link to='/howtohelp'>
              <button className='footerLink'>How To Help</button>
            </Link>
            <h4>|</h4>
            <Link to='/resources'>
              <button className='footerLink'>Resources</button>
            </Link>
            <h4>|</h4>
            <Link to="/about">
              <button className='footerLink'>About Us</button>
            </Link>


    </div>
      <div className='socialDiv'>
     <h6 className='mediaText'>Follow Us on Social Media:</h6>
    <span><a target="_blank"  href='https://twitter.com'><TwitterIcon round size='40px'></TwitterIcon></a></span>
    <span><a target="_blank"  href='https://facebook.com'><FacebookIcon round size='40px'></FacebookIcon></a></span>
    </div>
    <Link className="navText" to="/">
            <img
              className="rounded"
              src="/assets/projectClear.png"
              width="200px"
              height="100px"
              style={{paddingTop:'5px', borderRadius:'10px,10px,10px,10px'}}
            />
          </Link>
    </div>
  )
}
