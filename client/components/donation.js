import React,  { ReactDOM, useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function Donation () {
const [donate, setDonate] = useState(10)
const [message, setMessage] = useState('')
function charityMessage () {
  if(donate >= 10 && donate < 25){
    setMessage('Your donation could provide someone with a metal bottle to cut down plastic bottle use.')
  }
  if(donate >= 25 && donate < 50){
    setMessage('Your donation could help in cleaning plastic out of the ocean.')
  }
  if(donate >=50){
    setMessage('Your donation could help in funding research into plastic remediation or for plastic alternatives.')
  }
}

useEffect(()=> {
  charityMessage()
}, [donate])



  return (
    <div className="centerStage">
      <div className="infoBox">
        <h5>Even a little donation can make a big impact.</h5>
        <img id='donateImage'src='/assets/girlbottle.jpg' ></img>
        <h4>{message}</h4>
      </div>

      <div className="donationBox">
      <br />
        <div className="buttonBox">
      <button type='button' className="donateButton" onClick={() => {setDonate(50)}}>$50</button>
      <button type='button' className="donateButton"onClick={() => {setDonate(25)}}>$25</button>
      <button type='button' className="donateButton" onClick={() => {setDonate(10)}}>$10</button>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="moneyBox">
      <span>
      <h3>$</h3></span>
      <span><input className='moneyInput'input type="number" min="1"  step='1' value={donate} onChange={(evt) => {setDonate(evt.target.value)}}/></span>
      <span><p>USD</p></span>
      </div>

        <PayPalButtons    />
        <h5>Paypayl is In SandBox Mode</h5>
    </div>
  </div>



  )
}
