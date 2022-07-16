import { render } from "enzyme"
import React from "react"
import { connect } from "react-redux";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
export function SlideThree () {


  return (
    <div className="article">
       <TwitterShareButton
        url="ProjectClear.herokuapp.com/plasticworld"
        title="The Plastic World"
        className="Demo__some-network__share-button"
      >
        <TwitterIcon round></TwitterIcon>
      </TwitterShareButton>
      <FacebookShareButton
        url="ProjectClear.herokuapp.com/plasticworld"
        title="The Plastic World"
        className="Demo__some-network__share-button"
      >
        <FacebookIcon round></FacebookIcon>
      </FacebookShareButton>
      <div className="imageContainer">
      <img  className="d-block mx-auto" src='/assets/slidethree.webp'
       width='1200px'
       height='600px'></img>
          <div  id='captionArticle'>
          <h2>The Blame Game</h2>
          <h4>
          Who Shoulders The Responsbility?
          </h4>
          </div>
          </div>
          <div className="main">
<h3>

</h3>
<p>
    Over the years there has been many attempts to individualize global problems. Concerned about global warming? Forget about about industrial emissions, tanker fuel, cruises, and deforestation, it's up to you to drive less, stop eating meat, and limiting vacation. Ridiculous. There are numerous treaties for international trade, trade organizations, comissions, but currently ending plastic waste is of no great significance.
    </p>
    <p>
    Sure, every little bit helps, but the most substaintial changes come at the top, and in a globalized world to push for change on a local level is almost meaningless. Although many corporations will proclaim going green, the biggest producers are being funded by the largest hedgefunds and banks such as Blackrock, JP Morgan-Chase, and Vanguard Group.

  </p>
  <img></img>
</div>


<div className="references">
<h4>References</h4>
<ol>
<li>
https://cdn.minderoo.org/content/uploads/2021/05/27094234/20211105-Plastic-Waste-Makers-Index.pdf
<li>
https://www.weforum.org/agenda/2022/07/plastic-pollution-ocean-circular-economy/</li>
<li>
1. https://ourworldindata.org/plastic-pollution#:~:text=The%20world%20now%20produces%20more,our%20natural%20environment%20and%20oceans.</li>
<li>
https://www.greenpeace.org/usa/wp-content/uploads/2020/02/Greenpeace-Report-Circular-Claims-Fall-Flat.pdf</li>
<li>
https://www.sciencedirect.com/science/article/pii/S0304389422001984</li>
<li>
https://cdn.minderoo.org/content/uploads/2021/05/27094234/20211105-Plastic-Waste-Makers-Index.pdf</li>
<li>
https://www.npr.org/2019/08/20/750864036/u-s-recycling-industry-is-struggling-to-figure-out-a-future-without-china#:~:text=in%20Elkridge%2C%20Md.-,In%202018%2C%20China%20announced%20it%20would%20no%20longer%20buy%20most,places%20like%20the%20United%20States.&text=The%20U.S.%20used%20to%20send,imports%20of%20the%20world's%20waste.</li>
<li>
https://www.bbc.com/news/science-environment-44579422</li>
<li>
https://www.bbc.com/news/science-environment-47914580</li>
<li>
https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/plastics-material-specific-data</li>
<li>
https://ourworldindata.org/plastic-pollution#:~:text=The%20world%20now%20produces%20more,our%20natural%20environment%20and%20oceans</li>
<li>
https://www.science.org/doi/10.1126/sciadv.1700782</li>
<li>
https://www.sciencedirect.com/science/article/pii/S187802961630158X</li>
<li>
https://education.nationalgeographic.org/resource/great-pacific-garbage-patch</li>
<li></li>
https://njwec.org/PDFs/fact-artificialterf.pdf</li>
</ol>

</div>
</div>
)


}

export default connect()(SlideThree)
