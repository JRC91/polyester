import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Latest() {
  return (
    <div className="sideBar">
      <div>
        <h3>Latest Stories</h3>
        <div className="sideStories">
        <div className="sideDiv">
        <Link  to="/plasticworld">
          <img src="/assets/slideone.jpg" width="100px" height="100px"></img>

          <div id="sideBarStory">
            <h4 >The Plastic World</h4>
            <h5>How did we get to this point?</h5>
          </div>
        </Link>
        </div>
        <div className='sideDiv'>
        <Link  to="/recyclefolly">
          <img src="/assets/slidetwo.png" width="100px" height="100px"></img>

          <div id="sideBarStory">
            <h4 >The Recycle Folly</h4>
            <h5>Thrown Out and Forgotten.</h5>
          </div>
        </Link>
        </div>
        <div className='sideDiv'>
        <Link  to="blamegame">
          <img src="/assets/slidethree.webp" width="100px" height="100px"></img>

          <div id="sideBarStory">
            <h4 >The Blame Game</h4>
            <h5>Who Shoulders The Responsbility?</h5>
          </div>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
