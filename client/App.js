import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Routes from './Routes'
import ScrollUp from './components/ScrollUp'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const App = () => {
  return <div>
      <PayPalScriptProvider
        options={{
          "client-id": "Abp8gM5L5y_aK51TGCGhrggHjYOtzJGViYHwVInCMfYRV9NiRTi0ZAjpfgbb1gepjrnj5p20SrZd5elg",

      }}
      >
      <Navbar />
      <Routes />
      <ScrollUp />
      <Footer />
      </PayPalScriptProvider>
    </div>

}

export default App
