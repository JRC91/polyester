import { render } from "enzyme"
import React from "react"
import { connect } from "react-redux";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
export const SlideTwo = () => {


  return (
    <div className='article'>
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
 <img className='d-block mx-auto' src='/assets/slidetwo.png'
        width='1200px'
        height='600px'
       ></img>
      <div  id='captionArticle'>
          <h2 >The Recycle Folly</h2>
          <h4>Thrown Out and Forgotten.</h4>
          </div>
      </div>
      <div className="main">
<h3>

</h3>
<p>
  Although started with good intentions, the recycling movement has ultimatly failed in curbing the amount of plastic waste produced, and has little to no dent in plastic production.  Of the 8.3 billion tonnes of plastic produced, merely 500 million tonnes of plastic have been recycled, and of that figure, 300 million ended up being eventually discarded. For majority of single-use plastic, according to a study done by Greenpeace, majority of single-use plastics are never recycled.
  </p>
  <p>
  For plastic that does get succesffully reycled, there is a risk that it contains contaminates. Artificial turf, for instance, had made significant gains over natural grass due to seemingly ease of maintaining. It often uses reycled materials, primarily rubber tire, for its 'infill' has been found to contain Toxic transitive metals like lead, zinc, and cadmium, or Phtalates, or other carcinogens.
  </p><p>
  A further complication is that there are several different kinds of plastics, and you cannot interchangeably use them together, meaning they have to be separated out to be properly recycled. Germany
  </p>
  <p>
  For however much recycling the United States would usually sends its plastic garbage to China or Vietnam to handle. Where ofcourse, there was no oversight on where it ended up.
  </p>
  <p>
  Recycling as it currently stands in the United States and the Western World is a complete failure. It is a system that requires reform, and even then it is doubtful it will curb production rates. It would be better to change to biodegradables if possible, or to severly limit the production, if not out-right ban, the production of single use plastics.
  </p>
  </div>



  <div className='references' >
<h4>References</h4>
<ol>
<li>1. https://ourworldindata.org/plastic-pollution#:~:text=The%20world%20now%20produces%20more,our%20natural%20environment%20and%20oceans</li>
<li>
https://www.greenpeace.org/usa/wp-content/uploads/2020/02/Greenpeace-Report-Circular-Claims-Fall-Flat.pdf</li>
<li>
https://www.sciencedirect.com/science/article/pii/S0304389422001984</li>
<li>
https://www.npr.org/2019/08/20/750864036/u-s-recycling-industry-is-struggling-to-figure-out-a-future-without-china#:~:text=in%20Elkridge%2C%20Md.-,In%202018%2C%20China%20announced%20it%20would%20no%20longer%20buy%20most,places%20like%20the%20United%20States.&text=The%20U.S.%20used%20to%20send,imports%20of%20the%20world's%20waste.</li>
<li>
https://www.bbc.com/news/science-environment-44579422</li>
<li>
https://www.bbc.com/news/science-environment-47914580</li>
<li>
https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/plastics-material-specific-data</li>
<li>
https://ourworldindata.org/plastic-pollution#:~:text=The%20world%20now%20produces%20more,our%20natural%20environment%20and%20oceans.
</li>
<li>
https://www.science.org/doi/10.1126/sciadv.1700782
</li>
<li>
https://www.sciencedirect.com/science/article/pii/S187802961630158X
</li>
<li>
https://education.nationalgeographic.org/resource/great-pacific-garbage-patch
</li>
<li>
https://njwec.org/PDFs/fact-artificialterf.pdf
</li>
</ol>

</div>
</div>
)


}

export default connect()(SlideTwo)
