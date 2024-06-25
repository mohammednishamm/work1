import React from 'react'
import a1 from "../../cards/Rectangle 22.png";
import a2 from "../../cards/cropped-WhatsApp-Image-2023-05-20-at-11.37 1.png";
import "../../components/login/Loginpage.css"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigation=useNavigate()

  return (
    <>
    <div className='d-flex col-12  flex-column align-items-center'>
    <div className='col-sm-11 col-md-7 col-11  d-flex justify-content-end'>
      <img className="login-img1" src={a2} />
      </div>
    <div className="col-lg-8 col-md-12  col-sm-12 d-flex flex-sm-row flex-column    justify-content-evenly">
      <div className="col-12 col-sm-5  d-flex align-items-center justify-content-center">
        <img className="col-sm-9 col-7  " src={a1} />
      </div>
      <div className="d-flex flex-column col-11 col-sm-4 gap-4   p-sm-0 p-2 mt-3">
      
          <span className="fs-4 fw-bold mt-5">Sign up</span>
          <span className="login-fonts">
            Let's get you all step so you can acesstour personal account.
          </span>
          <div className='d-flex w-100  gap-1'>
          <div className="position-relative border-1 rounded-2 login-input-sign mt-1 ">
            <label className="login-fonts1 position-absolute bg-white ">
              First Name
            </label>
            <input type="text" className="border-0 mt-1 buttonmaian" />
          </div>
          <div className="position-relative border-1 rounded-2 login-input-sign mt-1 ">
            <label className="login-fonts1 position-absolute bg-white ">
              Last Name
            </label>
            <input type="text" className="border-0 mt-1 buttonmaian" />
          </div> 
          </div>
          <div className="position-relative border-1 rounded-2 login-input mt-1">
            <label className="login-fonts1 position-absolute bg-white ">
              Email
            </label>
            <input type="text" className="border-0 mt-1 buttonmaian" />
          </div>
          <div className="d-flex justify-content-start gap-1 align-items-center">
          <input type="checkbox" />
            <span className=" login-fonts2">
             I agree to all the   {" "}
              <span className="text-danger"> Terms </span>
              and
              <span className="text-danger"> Privacy Policies </span>
            </span>
        
        </div>
          <button className="border-0 pt-2 pb-2 rounded-2 login-button mt-1"  onClick={()=>navigation("/logout")}>Create account</button>
          <div className="d-flex justify-content-center">
            
            <span className=" login-fonts2">
              Already have an account?{" "}
              <span className="text-danger"> Login </span>
            </span>
        
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Signup