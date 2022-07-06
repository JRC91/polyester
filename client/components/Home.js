import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
export const Home = (props) => {
  const [carousel, setCarousel] = useState([]);
  const [currentCar, setCurrentCar] = useState({img: '', description: ''});

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  useEffect(() => {
    let array = [{ image: "", description: "The Plastic Islands of the Ocean" }, {image: '', description:'The Folly of Recycling Plastic'}, {image: '', description: 'The niche applications of plastic'}, {image:'', description: 'The Blame Game'}];
    setCurrentCar({img: '', description: ''})
  }, []);
  return (
    <div>
      <h3></h3>
      <div className="carousel">

        {
          <div><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/13892/production/_118881008_plastic_gettyimages-1152932601.jpg"width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></img>
            <img src={currentCar.img} />
            <p>{currentCar.description}</p>
          </div>
        }


</div>
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <footer></footer>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {};

export default connect()(Home);

/*
Have you noticed what's happened to Plastic in the last 10 years. It's become something in it's own right. I mean early on, if you made something in plastic it had to look exactly like what it was replacing, I mean particularly leather, or people wouldn't buy it. It's not so long since that Plastic was an insult, 'cheap and nasty', remember? Not anymore, it's as if we suddenly changed our attitude to what 'real' meant and recognized what plastic is: something that permits us to own objects that we couldn't afford if they were made in the so called real thing. So now its everywhere... '...It's a plastic world...  ...We live in a world of fast turnover, built in obsolence, novelty, thanks to plastics'
-James Burke, 1978

Today, plastics are literally everywhere, as we have begun to understand in the last decade, althought not unexpectedly, plastics do not break down like organic material. From your street corner to the bottom of the Marinas Trench, there are microplastics all over.


Plastic waste is not a failure of the individual. It is a problem of legislation, of manufacture, and

*/
