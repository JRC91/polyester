import { render } from "enzyme";
import { connect } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";
export function SlideOne(props) {
  const [state, setState] = useState([]);

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
          src="/assets/slideone.jpg"
          className="imagePage"
          width="1200px"
          height="600px"
        ></img>
        <div id="captionArticle">
          <h2>The Plastic World</h2>
          <h4>How we got to this point</h4>
        </div>
      </div>
      <div className="main">
        <h3 className="quote">
          Have you noticed what's happened to Plastic in the last 10 years? It's
          become something in it's own right. I mean early on, if you made
          something in plastic it had to look exactly like what it was
          replacing, I mean particularly leather, or people wouldn't buy it.
          It's not so long since that Plastic was an insult, 'cheap and nasty',
          remember? Not anymore, it's as if we suddenly changed our attitude to
          what 'real' meant and recognized what plastic is: something that
          permits us to own objects that we couldn't afford if they were made in
          the so called 'real thing'. So now its everywhere... '...It's a
          plastic world... ...We live in a world of fast turnover, built in
          obsolence, novelty, thanks to plastics'
        </h3>

        <h3>- James Burke, Connections, 1978</h3>
        <br />
        <p>
          Since its invention in the early 20th century, plastic use has
          exploded on a scale of the Big Bang. There are few products that are
          made today that do not use some form of plastic as a construction
          material or packaging. It has an understandable appeal: it's cheap,
          many plastics are produced using by-products of oil production, it has
          inherit properties that are not easily found, and is so artifical that
          it is not easily broken down in nature. It is that last fact however
          that has caused a great deal of concern. <br />
        </p>
        <p>
          From the period of 1950 to 2015, it was estimated that 8,300,000,000
          tons of plastic were produced globally. An estimated 700,000,000
          tonnes were incinerated after disposal, releasing cancerous gases and
          compounds into the environment. There are 4,900,000,000 tonnes, about
          59% of all plastics ever produced, that are either in landfills or the
          environment.
          <br />
        </p>
        <p>
          One of the most talked about environmental build-up of plastic is the
          Great Pacific Garbage Patch. It spins and accumulates more and more
          into its vortex. Majority of it is microplastics; plastics broken down
          into smaller and smaller portions by sunlight exposure. From there
          microplastics can end up inside the intenstines of fish and sea
          mammals that can't destinguish their food. It also ends up in sea salt
          extracted from the ocean, and eventually it will end up inside us.
          <br />
        </p>
        <p>
          That isn't to say that if you avoid sea salt you'll avoid plastic.
          There is still plenty of plastic packaging over food that can be
          another source of contamination. Chewing gum contains plastic, and it
          has been documented that fruits and vegetables can contain
          microplastics also. The amount of plastic processed within us under
          debate, and in some estimations is as much as 5 grams a week.
          <br />
        </p>
        <p>
          The effect of microplastics on the human body are still not completely
          understood. If the plastics contain chemical coatings from their
          manufacture it could potentially leak into our bodies causing or
          increasing the risk of bodily disorders or disease.
          <br />
        </p>
      </div>

      <div className="references">
        <h4>References</h4>
        <ol>
          <li>
            https://ourworldindata.org/plastic-pollution#:~:text=The%20world%20now%20produces%20more,our%20natural%20environment%20and%20oceans.
          </li>
          https://www.greenpeace.org/eastasia/blog/6016/3-everyday-foods-that-contain-microplastics/#:~:text=Apples%20had%20one%20of%20the,100%2C000%20plastic%20particles%20per%20gram.
          https://www.ecowatch.com/plastic-chewing-gum-2653209141.html
          <li>https://www.bbc.com/news/science-environment-44579422</li>
          <li>https://www.bbc.com/news/science-environment-47914580</li>
          <li>
            https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/plastics-material-specific-data
          </li>
          <li>
            https://ourworldindata.org/plastic-pollution#:~:text=The%20world%20now%20produces%20more,our%20natural%20environment%20and%20oceans.
          </li>
          <li>https://www.science.org/doi/10.1126/sciadv.1700782</li>
          <li>
            https://www.sciencedirect.com/science/article/pii/S187802961630158X
          </li>
          <li>
            https://education.nationalgeographic.org/resource/great-pacific-garbage-patch
          </li>
        </ol>
        https://www.plastichealthcoalition.org/#:~:text=These%20small%20plastic%20particles%20may,disorders%20like%20ADHD%20and%20autism.
      </div>
    </div>
  );
}

export default connect()(SlideOne);
