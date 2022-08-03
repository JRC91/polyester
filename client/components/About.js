import React, { useState, useEffect, useRef } from "react";
import {
LinkedinIcon
} from "react-share";

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
    <div className="navArticle">

        {/* <img className='banner'src='/assets/banner.gif'></img> */}
        <div className="missionStatementAbout">
    <h1>
   PROJECT CLEAR
    </h1>

   <p>Project Clear is about boosting awareness concerning plastic pollution and advocating for groups that are taking action against it. </p>


   <h2>Question and Answer</h2>
   <div className="boxBlock">
   <div className="faq">
    <button className="question" onClick={() => flipIt(0)}  id="0">
    <span><h3>Why plastics?</h3></span><h2 className="questionArrow">{answer[0].display==='block' ? '▲' : '▼' }</h2></button>
    <div className="answer" style={answer[0]}>
      Plastics are a threat to humans and other living organisms because they may never break down completely, are often coated in toxic substances, and are present in the air, oceans, and soil as microplastics. Animals can mistakingly eat these undigestable plastics, making it harder to survive. Microplastics can go into human blood and pass the blood brain barrier. These plastics can cause cell death or inflammation.
    </div>
   </div>

   <div className="faq">
    <button className="question" onClick={() => flipIt(1)} id="1">
    <span><h3>What kind of plastic should be banned?</h3></span> <h2 className="questionArrow">{answer[1].display==='block' ? '▲': '▼' }</h2></button>
   <div className="answer" style={answer[1]}>
    If it was possible to go without plastics entirely we would want to ban them all, wouldn't we? The first step would be stopping single use plastics as they are a large portion of the waste produced. Then we should seriously consider banning plastic items of little significance, for instance cheap little knick-knacks. Plastics should be reserved for items that inheritly require plastic's unique properties.
    </div>
   </div>

    <div className="faq">
    <button className="question" onClick={() => flipIt(2)}><span><h3>
    What are the alternatives?
    </h3></span> <h2 className="questionArrow">{answer[2].display==='block' ? '▲' : '▼' }</h2></button>
    <div className="answer" id="2" style={answer[2]}>
      For materials we can look towards other sustainables, but reliable and consistent materials are still being developed. For many applications we should consider going back to cardboard and glass, which have a more storied success of being recycled over and over again.
    </div>
   </div>

   <div className="faq">
   <button className="question" onClick={() => flipIt(3)}><span><h3>
    What can one person do?
    </h3></span> <h2 className="questionArrow">{answer[3].display==='block' ? '▲' : '▼' }</h2></button>
   <div className="answer" id="3" style={answer[3]}>
    You can cut plastic out of your life for your own benefit. As for large significant change, that requires having large significant power or large and significant numbers. You can check out the 'How To Help' page for more information on some of the things you can do to help curb plastic use and production.
    </div>
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
      <a target="_blank"href='https://www.linkedin.com/in/james-carmody-393312238/'><LinkedinIcon round/></a>
    </div>
    </div>
  );
}
/*Project Clear is about raising awareness concerning plastic pollution and boosting groups that are taking action against it. Whether it be volunteer work, lobbying, or protest. Plastic does have its uses, but its use should be reserved for only the more unqiue and specialized applications it can have.*/
