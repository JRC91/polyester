import { render } from "enzyme";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";
export function SlideThree() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className="article">
          <div className='shareBar'>
    <span>
      <h3>Share This Story:</h3></span>
      <span>
      <EmailShareButton>
        <EmailIcon round></EmailIcon>
      </EmailShareButton>
      </span>
      <span>
      <TwitterShareButton
      display='inline-block'
        url="ProjectClear.herokuapp.com/plasticworld"
        title="The Plastic World"
        className="Demo__some-network__share-button"
      >
        <TwitterIcon round></TwitterIcon>
      </TwitterShareButton>
      </span>
      <span>
      <FacebookShareButton
        display="inline-block"
        url="ProjectClear.herokuapp.com/plasticworld"
        title="The Plastic World"
        className="Demo__some-network__share-button"
      >
        <FacebookIcon round></FacebookIcon>
      </FacebookShareButton>
      </span>
      </div>
      <div className="imageContainer">
        <img
          className="d-block mx-auto"
          src="/assets/slidethree.webp"
          width="1200px"
          height="600px"
        ></img>
        <div id="captionArticle">
          <h2>The Blame Game</h2>
          <h4>Who Shoulders The Responsbility?</h4>
        </div>
      </div>
      <div className="main">
        <p>
          Over the years there have been many attempts to individualize global
          problems. Concerned about global warming? Forget about industrial
          emissions, tanker fuel, cruise and freight ship pollution, and
          deforestation, it's up to you to drive less, stop eating meat, and
          limit travel. Ridiculous. There are numerous treaties for
          international trade, trade organizations, and commissions, but
          currently ending plastic waste of a lesser significance.
        </p>
        <p>
          Sure, every little bit helps, but the most substantial changes come at
          the top, and in a globalized world to push for change on a local level
          is almost meaningless. As discussed, a lot of local effort in
          environmental remediation is wasted when plastic is shuttled to
          another country and dumped. The idea that we can recycle any plastic
          has been found to be a complete myth that has been purported by
          manufacturers.<sup>1</sup> Looking at the list of the biggest producers there are
          some familiar names, ExxonMobil, Chevron Phillips Chemical, ENI, and
          SABIC. <sup>2</sup> Why, those companies also have a hand in the petrochemical
          market that contributes so much to global warming.<sup>3</sup> What a strange
          coincidence!
        </p>
        <p>
          They aren't alone however. Hand in hand are many of the big name banks
          and hedge funds that are invested in these companies: Blackrock,
          Vanguard Group, and JP Morgan, if only to name a few.<sup>2</sup> If the most
          powerful and wealthy institutions and people are not putting a stop to
          the practice, what power does the individual have? A Princeton study
          has found the normal citizen has little to no actual influence on
          policy.<sup>4</sup> Therefore, the normal citizen is of little to no fault in what
          has happened on the large scale. Attempting a 'plastic-free' life for
          an individual is almost sisyphean. Looking at recommendations for
          getting groceries, plastic free, is only possible in a fairly niche
          portion of the population.<sup>5</sup>
        </p>
        <p>
          Modern society has existed longer than plastics have been produced,
          and although it may take time and sacrifice we can get back to a more
          environmentally friendly method of product distribution and handling.
          To ensure that society even continues it is paramount that we put the
          blame squarely on the policy makers and the affluent that have made
          their gains at the expense of the health of our planet and ourselves.
        </p>
        <img></img>
      </div>

      <div className="references">
        <h4 className="text-center">References</h4>
        <ol className="referenceList">
        <li>
            <a target="_blank" href="https://www.greenpeace.org/usa/wp-content/uploads/2020/02/Greenpeace-Report-Circular-Claims-Fall-Flat.pdf">
              "Circular Claims Fall Flat: Comprehensive U.S. Survey of Plastics
              Recyclability" by John Hocevar for GreenPeace, February 18, 2020
            </a>
          </li>


          <li>
            <a target="_blank" href="https://cdn.minderoo.org/content/uploads/2021/05/27094234/20211105-Plastic-Waste-Makers-Index.pdf">"The Plastic Waste Makers Index", Minderoo Foundation, Copy 2021</a>
          </li>

          <li>
            <a  target="_blank"href="https://blog.bizvibe.com/blog/plastic-manufacturing-companies">"Top 10 Largest Plastic Manufacturing Companies in the World 2020, Plastic Products Industry Factsheet" BizVibe, 2022</a>

          </li>


<li>
          <a target="_blank" href="https://www.cambridge.org/core/journals/perspectives-on-politics/article/testing-theories-of-american-politics-elites-interest-groups-and-average-citizens/62327F513959D0A304D4893B382B992B">"Testing Theories of American Politics: Elites, Interest Groups, and Average Citizens" by Martin Gilens and Benjamin I. Page, Cambridge University Press, September 18th, 2014</a>
          </li>

<li>         <a target="_blank" href="https://learn.eartheasy.com/guides/plastic-free-grocery-shopping-made-easy/">"Plastic-Free Grocery Shopping Made Easy" Eartheasy, 2022</a></li>
        </ol>
      </div>
    </div>
  );
}

export default connect()(SlideThree);
