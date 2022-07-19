import React, { useState, useEffect, useRef } from "react";


export default function About() {






  return (
    <div className="article">

        {/* <img className='banner'src='/assets/banner.gif'></img> */}
        <div className="missionStatementAbout">
    <h1>
   PROJECT CLEAR
    </h1>

   <p>Project Clear is about raising awareness concerning plastic pollution and boosting groups that are taking action against it. Whether it be volunteer work, lobbying, or protest. Plastic does have its uses, but its use should be reserved for only the more unqiue and specialized applications it can have.</p>

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
