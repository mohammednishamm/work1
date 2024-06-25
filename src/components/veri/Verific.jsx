

import React from 'react'
import a1 from "../../cards/Rectangle 20.jpg";
import a2 from "../../cards/cropped-WhatsApp-Image-2023-05-20-at-11.37 1.png";
import "../../components/login/Loginpage.css"
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Verific = () => {
  const navigation=useNavigate()

  return (
    <>
    <div className='d-flex col-12  flex-column align-items-center'>
    <div className='col-7   '>
      <img className="login-img1" src={a2} />
      </div>
    <div className="col-lg-8 col-md-12  col-sm-12 d-flex flex-sm-row flex-column-reverse    justify-content-evenly">
      <div className="d-flex flex-column col-11 col-sm-4 gap-3  p-sm-0 p-2 ">
          <span className='mt-5 backtologin'><IoChevronBackOutline /> Back to login</span>
          <span className="fs-4 fw-bold ">Verify code</span>
          <span className="login-fonts">
            an authentication code has been sent to your email.
          </span>
          <div className="position-relative border-1 rounded-2 login-input mt-1">
            <label className="login-fonts1 position-absolute bg-white ">
              Enter Code
            </label>
            <input type="text" className="border-0 mt-1 buttonmaian" />
          </div>
          <div className="d-flex justify-content-start">
            <span className=" login-fonts2">
              Didn't recieve a code?{" "}
              <span className="text-danger"> Resend </span>
            </span>
        
        </div>
          <button className="border-0 pt-2 pb-2 rounded-2 login-button mt-1"  onClick={()=>navigation("/signup")}>Verify</button>
      </div>
      <div className="col-12 col-sm-5  d-flex align-items-center justify-content-center">
        <img className="col-sm-11 col-7  " src={a1} />
      </div>
    </div>
    </div>
    </>
  )
}

export default Verific