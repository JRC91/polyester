import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'

export const Home = (props) => {
  const [carousel, setCarousel] = useState([]);
  const [currentCar, setCurrentCar] = useState({img: '', description: ''});

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  useEffect(() => {
    let array = [{ image: "", description: "The Plastic Islands of the Ocean" }, {image: '', description:'The Folly of Recycling Plastic'}, {image: '', description: 'The niche applications of plastic'}, {image:'', description: 'The Blame Game'}];
    setCurrentCar({img: '', description: ''})
  }, []);
  return (
    <div className="frontPage">
      <div className='bannerSection'>
        {/* <img className='banner'src='/assets/banner.gif'></img> */}
        <div className="missionStatement">
    <h1>
   PROJECT CLEAR
    </h1>

    <h3 className='statement'> We only have one planet, let's not muck this one up. </h3>
    </div>
    </div>
    <div className="Carousel">
<h2 className='latest'>Latest News</h2>
<Carousel activeIndex={index}  className='w-60 'variant="dark" onSelect={handleSelect}>
      <Carousel.Item className='imageCarousel'>
      <img className="d-block mx-auto"  src="/assets/slideone.jpg"
      width='900px'
      height='600px'></img>
          <Link to='/plasticworld'>
          <div id='caption'>
          <h2 >The Plastic World</h2>
          <h4>How did we get to this point?</h4>
          </div>
          </Link>

      </Carousel.Item>
      <Carousel.Item className='imageCarousel'>
       <img className='d-block mx-auto' src='/assets/slidetwo.png'
        width='900px'
        height='600px'
       ></img>

          <Link to='/recyclefolly'>
        <div id='caption'>
          <h2 >The Recycle Folly</h2>
          <h4>Thrown Out and Forgotten.</h4>
          </div>
          </Link>

      </Carousel.Item>
      <Carousel.Item className='imageCarousel'>
      <img  className="d-block mx-auto" src='/assets/slidethree.webp'
       width='900px'
       height='600px'></img>

        <Link to='blamegame'>
        <div id='caption'>
          <h2>The Blame Game</h2>
          <h4>
          Who Shoulders The Responsbility?
          </h4>
          </div>
          </Link>

      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
};


const mapState = (state) => {};

export default connect()(Home);


