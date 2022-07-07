import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Carousel from 'react-bootstrap/Carousel'


export const Home = (props) => {
  const [carousel, setCarousel] = useState([]);
  const [currentCar, setCurrentCar] = useState({img: '', description: ''});

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  useEffect(() => {
    let array = [{ image: "", description: "The Plastic Islands of the Ocean" }, {image: '', description:'The Folly of Recycling Plastic'}, {image: '', description: 'The niche applications of plastic'}, {image:'', description: 'The Blame Game'}];
    setCurrentCar({img: '', description: ''})
  }, []);
  return (
    <div>
      <h3></h3>

<Carousel fade activeIndex={index}  className='w-60'variant="dark" onSelect={handleSelect}>
      <Carousel.Item>
      <img className="d-block mx-auto"  src="/assets/slideone.jpg"
      width='1200px'
      height='600px'></img>

        <Carousel.Caption>
          <div className="cc">
          <h3 >The Plastic World</h3>
          <h5>How we got to this point</h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='d-block mx-auto' src='/assets/slidetwo.jpg'
        width='1200px'
        height='600px'
       ></img>
        <Carousel.Caption>
        <div className="cc">
          <h3 >The Recycle Folly</h3>
          <p>Thrown Out and Forgotten.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  className='d-block mx-auto' src='/assets/slidethree.webp'
       width='1200px'
       height='600px'></img>
        <Carousel.Caption>
        <div className="cc">
          <h3>The Blame Game</h3>
          <p>
           Moral Responsibility Being Passed On To Individuals
          </p>
          </div>
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
Have you noticed what's happened to Plastic in the last 10 years. It's become something in it's own right. I mean early on, if you made something in plastic it had to look exactly like what it was replacing, I mean particularly leather, or people wouldn't buy it. It's not so long since that Plastic was an insult, 'cheap and nasty', remember? Not anymore, it's as if we suddenly changed our attitude to what 'real' meant and recognized what plastic is: something that permits us to own objects that we couldn't afford if they were made in the so called 'real thing'. So now its everywhere... '...It's a plastic world...  ...We live in a world of fast turnover, built in obsolence, novelty, thanks to plastics'
-James Burke, Connections, 1978

Today, plastics are literally everywhere, as we have begun to discover the extent of what was often warned: plastics do not break down like organic material and exist as micro-plastics. Micro-plastics are found in the water, the air, in the remotest parts of the earth. From your street corner to the bottom of the Marinas Trench, there are microplastics all over. Microplastics are found in the gut of sea-creatures,
 It is claimed that people ingest as much as 5 grams a week.


https://www.nationalgeographic.com/environment/article/microplastics-found-90-percent-table-salt-sea-salt

The Recycle Folly

For all the plastics processed, only a small percentage

Plastic waste is not a failure of the individual. It is a problem of legislation, of manufacture, and

*/
