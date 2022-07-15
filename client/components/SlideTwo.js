import { render } from "enzyme"
import React from "react"
import { connect } from "react-redux";

export function SlideTwo () {


  return (
    <div>
 <img className='d-block mx-auto' src='/assets/slidetwo.png'
        width='1200px'
        height='600px'
       ></img>
    <div className="cc">
          <h2 >The Recycle Folly</h2>
          <h4>Thrown Out and Forgotten.</h4>
          </div>

<h3>

</h3>
<p>
  Although started with good intentions, the recycling movement has ultimatly failed in curbing the amount of plastic waste produced, and has little to no dent in plastic production.  Of the 8.3 billion tonnes of plastic produced, merely 500 million tonnes of plastic have been recycled, and of that figure, 300 million ended up being eventually discarded. For majority of single-use plastic, according to a study done by Greenpeace, majority of single-use plastics are never recycled.


  For plastic that does get succesffully reycled, there is a risk that it contains contaminates. Artificial turf, for instance, had made significant gains over natural grass due to seemingly ease of maintaining. It often uses reycled materials, primarily rubber tire, for its 'infill' has been found to contain Toxic transitive metals like lead, zinc, and cadmium, or Phtalates, or other carcinogens.

  A further complication is that there are several different kinds of plastics, and you cannot interchangeably use them together, meaning they have to be separated out to be properly recycled. Germany

  For however much recycling the United States would usually sends its plastic garbage to China or Vietnam to handle. Where ofcourse, there was no oversight on where it ended up.

  Recycling as it currently stands in the United States and the Western World is a complete failure. It is a system that requires reform, and even then it is doubtful it will curb production rates. It would be better to change to biodegradables if possible, or to severly limit the production, if not out-right ban, the production of single use plastics.
  </p>
  <img></img>




<h4>References</h4>
<p>
1. https://ourworldindata.org/plastic-pollution#:~:text=The%20world%20now%20produces%20more,our%20natural%20environment%20and%20oceans.

https://www.greenpeace.org/usa/wp-content/uploads/2020/02/Greenpeace-Report-Circular-Claims-Fall-Flat.pdf

https://www.sciencedirect.com/science/article/pii/S0304389422001984

https://www.npr.org/2019/08/20/750864036/u-s-recycling-industry-is-struggling-to-figure-out-a-future-without-china#:~:text=in%20Elkridge%2C%20Md.-,In%202018%2C%20China%20announced%20it%20would%20no%20longer%20buy%20most,places%20like%20the%20United%20States.&text=The%20U.S.%20used%20to%20send,imports%20of%20the%20world's%20waste.

https://www.bbc.com/news/science-environment-44579422

https://www.bbc.com/news/science-environment-47914580

https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/plastics-material-specific-data

https://ourworldindata.org/plastic-pollution#:~:text=The%20world%20now%20produces%20more,our%20natural%20environment%20and%20oceans.

https://www.science.org/doi/10.1126/sciadv.1700782

https://www.sciencedirect.com/science/article/pii/S187802961630158X

https://education.nationalgeographic.org/resource/great-pacific-garbage-patch

https://njwec.org/PDFs/fact-artificialterf.pdf

</p>

</div>
)


}

export default connect()(SlideTwo)
