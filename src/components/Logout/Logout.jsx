import React from 'react'
import a2 from "../../cards/cropped-WhatsApp-Image-2023-05-20-at-11.37 1.png";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigation=useNavigate()

  return (
    <>
    <div className='vh-100 d-flex flex-column justify-content-between'>
    <div className='col-sm-11 col-md-10 col-11  d-flex justify-content-end'>
      <img className="login-img1" src={a2} />
      </div>
    <div className='conatiner d-flex align-items-center justify-content-center  gap-3 flex-column'>
<span className='fs-5 fw-bolder'>91 9876543210</span>
<button className="border-0 col-md-3 col-10 pt-2 pb-2 rounded-2 login-button mt-1 mb-5">Create account</button>

    </div>
    <span></span>
    </div>
    </>
  )
}

export default Logout