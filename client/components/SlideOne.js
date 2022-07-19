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
        <h4 className="quote">
          "Have you noticed what's happened to Plastic in the last 10 years? It's
          become something in it's own right. I mean early on, if you made
          something in plastic it had to look exactly like what it was
          replacing, I mean particularly leather, or people wouldn't buy it.
          It's not so long since that Plastic was an insult, 'cheap and nasty',
          remember? Not anymore, it's as if we suddenly changed our attitude to
          what 'real' meant and recognized what plastic is: something that
          permits us to own objects that we couldn't afford if they were made in
          the so called 'real thing'. So now its everywhere... '...It's a
          plastic world... ...We live in a world of fast turnover, built in
          obsolence, novelty, thanks to plastics"
        </h4>

        <h5 className="text-center">- James Burke, Connections, 1978</h5>
        <br />
        <p>
          Since its invention in the early 20th century, plastic use has
          exploded on a scale of the Big Bang. There are few products
          made today that do not use some form of plastic as a construction
          material or packaging. It has an understandable appeal: it's cheap,
          many plastics are produced using by-products of oil production, it has
          inherit properties that are not easily found, and is so artifical that
          it is not easily broken down in nature. It is that last fact however
          that has caused a great deal of concern for people and the planet  <br />
        </p>
        <p>
        From the period of 1950 to 2015, it was estimated that 8,300,000,000 tons of plastic were produced globally.<sup>1</sup> An estimated 700,000,000 tonnes were incinerated after disposal, releasing cancerous gasses and compounds into the environment.<sup>2</sup> There are 4,900,000,000 tonnes, about 59% of all plastics ever produced, that are either in landfills or the environment today.<sup>3</sup> The current production of plastics has no signs of stopping, and there remains little to no solutions in permanently removing what plastics already exists.
          <br />
        </p>
        <p>
        One of the most talked about environmental build-up of plastic is the Great Pacific Garbage Patch.<sup>4</sup> It spins and accumulates more and more into its vortex. Majority of it is microplastics; plastics broken down into smaller and smaller portions by sunlight exposure. From there microplastics can end up inside the intestines of fish and sea mammals that can't distinguish their food. Their bodies fill up with plastic debris, wasting energy and digestive space, and killing them off quicker.<sup>5</sup> Even if a species does not consume plastic, their prey might, and they may also find themselves filled with waste or a limited food supply. Microplastics also end up in sea salt extracted from the ocean, and eventually it will end up inside us.
          <br />
        </p>
        <p>
        That isn't to say that if you avoid sea salt you'll avoid plastic. There is still plenty of plastic packaging over food that can be another source of contamination. Chewing gum contains plastic, and it has been documented that fruits and vegetables can also contain microplastics also.<sup>6, 7</sup>The amount of plastic processed within us is under debate, and in some estimations is as much as 5 grams a week. Even if you somehow managed to filter your food, you can still inhale plastics from the plastic items in your home. <sup>8</sup>
          <br />
        </p>
        <p>
        The effect of microplastics on the human body are still not completely understood. If the plastics contain chemical coatings from their manufacture it could potentially leak into our bodies causing or increasing the risk of bodily disorders or disease. <sup>9</sup> It is also possible that the plastic in your gut, lungs, and wherever else can cause persistent inflammation, which can cause a multitude of problems: damaging healthy tissue, increase risk for diabetes, increased risk of cancer, and increased risk of heart disease. <sup>9, 10</sup> Plastic production and pollution threatens all life on earth. If unsolved, we may indeed only leave a plastic world to history.

        </p>
      </div>

      <div className="references">
        <h4 className="text-center">References</h4>
        <ol className="referenceList">
          <li>
            <a href='https://ourworldindata.org/plastic-pollution#:~:text=The%20world%20now%20produces%20more,our%20natural%20environment%20and%20oceans'>"Plastic Pollution" by Hannah Ritchie and Max Roser. Our World In Data, September 2018, updated April 2022</a>

          </li>
          <li>
            <a href='https://www.sciencedirect.com/science/article/pii/S187802961630158X'>
            "Toxic Pollutants from Plast Waste - A Review" by Rinku Verma, K.S Vinoda, M. Papireddy, A.N.S. Gowda, Procedia Environmental Sciences Vol. 35, 2016
            </a>
          </li>
          <li><a href='https://www.science.org/doi/10.1126/sciadv.1700782'>"Production, use, and fate of all plastics ever made" by Roland Geyer, Jenna Jambeck, and Kara Law, Science Advances Vol. 3, Issue 7, 19 Jul 2017</a></li>

          <li>
            <a href='https://education.nationalgeographic.org/resource/great-pacific-garbage-patch'>
              "Great Pacific Garbage Patch", National Geographic
            </a>
          </li>

          <li><a href='https://www.bbc.com/news/science-environment-47914580'>"Early ocean plastic litter traced to 1960's' by Victoria Gill, BBC, 16 April 2019</a></li>
          <li><a href='https://www.ecowatch.com/plastic-chewing-gum-2653209141.html'>"Did You Know There's Plastic in Most Chewing Gum?' by Audrey Nakagawa, EcoWatch, June 2nd, 2021</a>
          </li>
          <li> <a href='https://www.greenpeace.org/eastasia/blog/6016/3-everyday-foods-that-contain-microplastics/#:~:text=Apples%20had%20one%20of%20the,100%2C000%20plastic%20particles%20per%20gram'>"3 Everyday Foods that Contain Microplastics', Green Peace, July 21, 2020</a></li>

          <li><a href='https://www.plasticsoupfoundation.org/en/2018/03/how-damaging-is-breathing-in-microplastics/'>'How Damaging Is Breathing In Microplastics?' Plastic Soup Foundation, 19 May 2020</a></li>

          <li>   <a href='https://www.plastichealthcoalition.org/#:~:text=These%20small%20plastic%20particles%20may,disorders%20like%20ADHD%20and%20autism'>"Does Plastic Make Us Sick?" Plastic Health Coalition.</a>.</li>

          <li><a href='https://www.elcaminohealth.org/stay-healthy/blog/causes-effects-of-inflammation#:~:text=Over%20time%2C%20chronic%20inflammation%20can,disease%2C%20cancer%20and%20rheumatoid%20arthritis'>"The Causes and Effects of Inflammation" El Camino Health, May 2020</a></li>
        </ol>

      </div>
    </div>
  );
}

export default connect()(SlideOne);
