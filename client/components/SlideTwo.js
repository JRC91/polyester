import { render } from "enzyme";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
export const SlideTwo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="article">
      <div className="shareBar">
        <span>
          <h3>Share This Story:</h3>
        </span>
        <span>
          <EmailShareButton>
            <EmailIcon round></EmailIcon>
          </EmailShareButton>
        </span>
        <span>
          <TwitterShareButton
            display="inline-block"
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
          src="/assets/slidetwo.png"
          width="1200px"
          height="600px"
        ></img>
        <div id="captionArticle">
          <h2>The Recycle Folly</h2>
          <h4>Thrown Out and Forgotten.</h4>
        </div>
      </div>
      <div className="main">
        <h3></h3>
        <p>
          In every food court and on every side walk you will find recycle bins
          and people doing their part. For glass and paper, recycling has been a
          success in driving down waste; for plastic it is a more complicated
          matter. Of the 8.3 billion tonnes of plastic produced, merely 500
          million tonnes of plastic have been recycled, or merely 6% of all
          plastic. Of that 500 million, 300 million ended up being eventually
          discarded.<sup>1</sup> According to a study done by Greenpeace,
          majority of single-use plastics are never recycled, even though on the
          packaging it states that it could be. In essence it becomes long term
          waste after a short shelf life.<sup>2</sup>
        </p>
        <p>
          In the United States, there was an attempt to find a simple answer to
          a complex problem, as the saying goes: the easiest way to do something
          is to have someone else do it for you. So off their plastic waste
          went, sent with payment to companies in China and Vietnam, with no
          agreements in place for the handling of the waste or any oversight
          whatsoever.<sup>3</sup> Majority of it was dumped, and this inflow of
          trash was such a problem that many of these nations in turn have begun
          banning importation of these non-recyclable plastics.<sup>4</sup>{" "}
          Little surprise that the vast majority of ocean pollution originates
          from Asia.<sup>11</sup> All the effort and work of people cleaning up
          their parks and beaches, thoughtfully separating and collecting
          bottles for the recycle bin, squandered because the people in charge
          looked for easy solutions to a problem that doesn't have one.
        </p>
        <p>
          Even with the effort, the big problem with recycling plastic is that
          there are many different kinds of plastics with different properties.
          Some such as Polypropylene and Polyethylene are recyclable, others
          such as Polyvinyl Chloride (PVC) and Low Density Polyethylene (plastic
          bags) not so much. <sup>5,6</sup> These different plastics have
          different properties, and are not interchangeable. Many of the
          single-use plastics, the ones that adorn our food as packaging or as
          bags, are very difficult to recycle, and sadly they are the most
          ubiquitous.
        </p>
        <p>
          For plastic that does get successfully recycled, there is a risk that
          it contains contaminants. Artificial turf, for instance, often uses
          recycled materials, primarily synthetic rubber tires, for its 'infill'. This has
          been found to contain Toxic transition metals like lead, zinc, and
          cadmium, or Phthalates, or other carcinogens.<sup>7</sup> In a 2022
          report, IPEN determined that many recycled plastic objects in China,
          Russia, and Indonesia contained toxic chemicals like fire retardants,
          PFAs, and the notorious chemical BPA. This raises another problem: if
          you ban a known toxic chemical, how can you recycle plastic that was
          made/contained/or was treated with it?<sup>8,9</sup> Even determining
          if the plastic contained contaminates would be a lengthy process. It
          doesn't help that as it stands, making bottles from recycled plastic
          is more than three times expensive than making it new.<sup>7</sup>{" "}
          Recycled plastic is also more brittle and weaker every time it is
          recycled, making it impossible to use it again, over and over.{" "}
          <sup>10</sup>
        </p>

        <p>
          Plastic recycling in its current form is a small inadequate band-aid
          for a grievous wound we have inflicted on the earth. On a policy
          level, it is ineffective and, at best, wasteful. It has done little to
          curb production of new plastics, and if anything makes plastic use
          seem more viable and benign than it really is. For the effort and
          money put into it, plastic recycling is a fool's errand. It would be
          better to curb production and mandate an end to single use plastics.
        </p>
      </div>

      <div className="references">
        <h4 className="text-center">References</h4>
        <ol className="referenceList">
          <li>
            <a target="_blank" href="https://www.science.org/doi/10.1126/sciadv.1700782">
              "Production, use, and fate of all plastics ever made" by Roland
              Geyer, Jenna Jambeck, and Kara Law, Science Advances Vol. 3, Issue
              7, 19 Jul 2017
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.greenpeace.org/usa/wp-content/uploads/2020/02/Greenpeace-Report-Circular-Claims-Fall-Flat.pdf">
              "Circular Claims Fall Flat: Comprehensive U.S. Survey of Plastics
              Recyclability" by John Hocevar for GreenPeace, February 18, 2020
            </a>
          </li>

          <li>
            {" "}
            <a target="_blank" href="https://www.theguardian.com/global-development/2018/oct/05/huge-rise-us-plastic-waste-shipments-to-poor-countries-china-ban-thailand-malaysia-vietnam">
              "Huge rise in US plastic waste shipments to poor countries
              following China Ban" by Karen McVeigh. The Guardian, October 5th,
              2018.
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.npr.org/2019/08/20/750864036/u-s-recycling-industry-is-struggling-to-figure-out-a-future-without-china#:~:text=in%20Elkridge%2C%20Md.-,In%202018%2C%20China%20announced%20it%20would%20no%20longer%20buy%20most,places%20like%20the%20United%20States.&text=The%20U.S.%20used%20to%20send,imports%20of%20the%20world's%20waste">
              "U.S. Recycling Industry Is Struggling to Figure Out A Future
              Without China", by Christopher Joyce, NPR, August 20th, 2019{" "}
            </a>{" "}
          </li>

          <li>
            <a target="_blank" href="https://www.consumerreports.org/environment-sustainability/the-big-problem-with-plastic">
              "The Big Problem With Plastic" by Kevin Loria, Consumer Reports,
              September 8, 2021
            </a>
            /
          </li>
          <li>
            <a target="_blank" href="https://www.npr.org/2020/09/11/897692090/how-big-oil-misled-the-public-into-believing-plastic-would-be-recycled">
              "How Big Oil Misled The Public Into Believing Plastic Would Be
              Recycled", by Laura Sullivan, NPR, September 11, 2020
            </a>
          </li>

          <li>
            <a target="_blank" href="https://njwec.org/PDFs/fact-artificialterf.pdf">
              "Be Aware of Artificial Turf Hazards' New Jersey Environment
              Council Fact Sheet, WEC
            </a>
          </li>
          <li>
            <a target="_blank" href="https://ipen.org/sites/default/files/documents/ipen-plastic-poison-circ-econ-v1_4w-en.pdf">
              "How Plastics Poison The Circular Economy", International
              Pollutants Elimination Network, February 2022
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.sciencedirect.com/science/article/pii/S187802961630158X">
              "Toxic Pollutants From Plastic Waste- A Review" by Rinku Verma,
              K.S Vinoda, M. Papireddy, A.N.S Gowda, Procedia Environmental
              Sciences Vol. 35, 2016
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.slrecyclingltd.co.uk/what-plastics-can-and-cannot-be-recycled/#:~:text=Examples%20of%20non%2Drecyclable%20plastics,cling%20film%20and%20blister%20packaging">
              "What Plastics Can and Cannot be Recycled?" SL Recycling
            </a>
          </li>
          <li>
            {" "}
            <a target="_blank" href="https://blog.nationalgeographic.org/2018/04/04/7-things-you-didnt-know-about-plastic-and-recycling/">
              "7 Things You Didn't Know About Plastic (and Recycling)" by Lilly
              Sedaghat, National Geographic Society Newsroom, April 4th, 2018{" "}
            </a>
          </li>

          <li>
            <a target="_blank" href="https://www.weforum.org/agenda/2022/07/plastic-pollution-ocean-circular-economy/">
              "Plastic Pollution Is A Public Health Crisis. How do we reduce
              plastic waste?" by World Economic Forum, July 13 2022
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default connect()(SlideTwo);
