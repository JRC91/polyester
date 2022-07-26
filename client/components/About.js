import React, { useState, useEffect, useRef } from "react";


export default function About() {
  const [answer, setAnswer] = useState([{display:'none'}, {display:'none'}, {display:'none'}, {display:'none'}])



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  function flipIt(evt){

    console.log(answer[evt])
    if(answer[evt].display === 'none'){
      answer[evt] = {display:'block'}
      setAnswer([...answer,answer[evt] = {display:'block'}])

    }
    else {
      answer[evt]= {display:'none'}
      setAnswer([...answer,answer[evt] = {display:'none'}])
    }
  }

  return (
    <div className="article">

        {/* <img className='banner'src='/assets/banner.gif'></img> */}
        <div className="missionStatementAbout">
    <h1>
   PROJECT CLEAR
    </h1>

   <p>Project Clear is about boosting awareness concerning plastic pollution and advocating for groups that are taking action against it. </p>

   <h2>Question and Answer</h2>
   <div className="faq">
    <button className="question" onClick={() => flipIt(0)}  id="0">
    <h3>Why Plastics?</h3></button>
    <div className="answer" style={answer[0]}>
      <p>Peek-aboooo SHOW UP DAMNIT</p>
    </div>
   </div>

   <div className="faq">
    <button className="question" onClick={() => flipIt(1)} id="1">
    <h3>What kinds of plastics should be removed?</h3></button>
   <div className="answer" style={answer[1]}>
    <h3>STOP IN THE G</h3>
    </div>
   </div>

    <div className="faq">
    <button className="question" onClick={() => flipIt(2)}><h3>
    What are the alternatives?
      </h3></button>
    <div className="answer" id="2" style={answer[2]}>
      For materials we can look towards other sustainables, but reliable and consistent materials are still being developed.
    </div>
   </div>

   <div className="faq">
   <button className="question" onClick={() => flipIt(3)}><h3>
    What can one person do?
    </h3></button>
   <div className="answer" id="3" style={answer[3]}>
    <p>You can check out our page concerning what a person can do to see what you can do!</p>
    </div>
    </div>


    </div>
    <h1 className="mx-auto">Author</h1>
    <div className='profile'>
    <span>
    <img src='/assets/proflileedit-transformed.jpeg' height='200px' width='200px' className='profileImage'>
      </img>
      </span>
      <span>

    <p className='profileText'>
      Hello, my name is James Carmody, and I'm a Web Developer/Software Engineer born, raised, and residing in Queens, New York. Before working in this field, I got a degree in chemistry and was working in an environmental lab. There isn't a day in nature I haven't enjoyed, and I want to keep it that way.</p>
      </span>
    </div>
    </div>
  );
}
/*Project Clear is about raising awareness concerning plastic pollution and boosting groups that are taking action against it. Whether it be volunteer work, lobbying, or protest. Plastic does have its uses, but its use should be reserved for only the more unqiue and specialized applications it can have.*/
