
import React, { useState, useEffect, useRef } from "react";

export default function Allies () {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


return (
  <div className="navArticle">
     <h1 className="text-center">Anti-Plastic Organizations</h1>
    <div className="allies">
    <div className="textBack">


    <h3 className="subHead">International</h3>
    <ul className="aff">
      <h4>
    <li><a target="_blank" href='https://www.greenpeace.org/international/'>Green Peace </a></li>
    <li><a target="_blank" href='https://www.plasticfreejuly.org/'>Plastic Free</a></li>
    <li><a target="_blank" href='https://www.breakfreefromplastic.org/'>Break Free From Plastic</a></li>
    <li><a target="_blank"href='https://onepercentfortheplanet.org/'>1% For the Planet</a></li>
    <li><a target="_blank"href='https://earthshotprize.org/'>Earthshot Prize</a></li>
    <li><a target="_blank"href='https://www.plasticpollutioncoalition.org/'>Plastic Pollution Coalition</a></li>
    </h4>
    </ul>
    <h3 className="subHead">United States</h3>
    <ul className="aff">
      <h4>
    <li><a target="_blank"href='https://www.earthday.org/'>Earth Day</a></li>
    <li><a target="_blank"href='https://pennenvironment.org/'>Penn Environment</a></li>
    <li><a target="_blank"href='https://uspirg.org/'>U.S. PIRG</a></li>
    <li><a target="_blank"href='https://www.surfrider.org/'>Surfrider Foundation</a></li>
    <li><a target="_blank"href='https://bagalliance.org/'>American Recyclable Plastic Bag Alliance</a></li>
    </h4>
    </ul>
    </div>
    </div>

  <h2>Plastic Industry Information</h2>
  <h5>Understanding the industry of plastics and petrochemicals helps us comprehend why we use plastic, and what needs to change in order to whittle down its uses.</h5>
  <div className="aft">
  <ul className="aff" >
    <h4>
    <li><a target="_blank" className="boxLink" href='https://www.plasticsnews.com/'>Plastics News</a></li>
    <li><a target="_blank" className="boxLink" href='https://www.plasticstoday.com/'>Plastics Today</a></li>
    <li><a target="_blank" className="boxLink"href='https://www.sustainableplastics.com/'>Sustainable Plastics</a></li>
    <li><a target="_blank" className="boxLink" href='https://www.americanchemistry.com/'>American Chemistry Council</a></li>
    </h4>
  </ul>
  </div>
  </div>
)

}
