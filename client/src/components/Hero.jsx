import React, { useState } from 'react'
import Logo from '../assets/financeLogo.png'
import Signup from './Signup';

const Hero = () => {
  const [SignupSwitch, setSignupSwitch] = useState(0)

  return (
    <>
      {(SignupSwitch == 1) ? <Signup SignupSwitch={setSignupSwitch} /> : ""}
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src={Logo} alt="" width="120" height="120" />
        <h1 className="display-5 fw-bold text-body-emphasis">Take Charge of Your Finances Like a Pro</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Get a clear view of your money with our easy-to-use finance tracker. Effortlessly track spending, set budgets, and generate insightful reports to stay in control of your financial future.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={() => setSignupSwitch(1)}>Get Started</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero