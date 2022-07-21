import { render } from "enzyme";
import { connect } from "react-redux";
import React, { useState, useEffect, useRef } from "react";

export default function ScrollUp (props) {
const [buttonD, setButton] = useState({display:'none'})

function topFunc () {
  console.log(document.documentElement.scrollTop)
  window.scrollTo(0, 0)
}

useEffect(() => {
  const handleScroll = event => {
    checkIt(window.scrollY)
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

function checkIt (scroll) {

  if(scroll > 200){
    setButton({display:'block'})
  }
  else {setButton({display:'none'})}
}
  return(
    <button onScroll={(evt) =>checkIt(evt)} onClick={topFunc} style={buttonD} id="myBtn" title="Go to top">^</button>
  )

}
