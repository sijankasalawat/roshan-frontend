import React, { useState } from "react";
import { loginApi } from "../apis/Api";
import { toast } from "react-toastify";
import "./login.css";
import Slider from "../pages/Slider";
import { Link } from "react-router-dom";
import Icon2 from "../assets/images/loginpp.png";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const changePhoneNo=(e)=>{
    setPhoneNo(e.target.value);
  };
  const changePassword=(e)=>{
    setPassword(e.target.value);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(phoneNo, password);

    const data = {
        phoneNo: phoneNo,
        password: password,
    };
    loginApi(data).then((res)=>{
        if (res.data.success == true){
            toast.success(res.data.message);
            localStorage.setItem('token',res.data.token)

            const convertedJson = JSON.stringify(res.data.userData)
            localStorage.setItem("user",convertedJson)
        }else{
            toast.error(res.data.message);
        }
    })
    .catch((err)=> {
        console.log(err);
        toast.error("Internal Server Error of FrontEnd.")
    })
  }
  return(
<div className="background-img d-flex justify-content-center">
      
      <div className="bodys d-lg-flex d-md-flex d-sm-block mt-4 ">
        <div className="left-container p-4">
          <div className="change-image">
            <Slider />
          </div>
        </div>
        <div className="right-container  ">
          <div className="d-flex justify-content-center mt-5"> <h2 className="pt-2 pb-2 text-center w-50 rounded-pill shadow-lg p-3 mb-5 bg-body rounded">Log In</h2></div> 
          <div className="d-flex justify-content-center">
          <img src={Icon2} height="150" width="140" /></div> 

              <input onChange={changePhoneNo}
                className="login-input form-control border-success mt-3"
                type="number"
                name="phone_number"
                placeholder="Phone Number"
                required=""
              />
              <div onChange= {changePassword}className='pass'>
                <input
                  className="login-input form-control border-success mt-3"
                  name="pswd"
                  placeholder="Password"
                  required
                />
              </div>
              <hr className="solid" />
              <button onClick={handleSubmit} className="login-btn bg-dark">Log In</button>
              <a href='' className='text-decoration-none text-dark'>Forget Password?</a>
              <h3 className="pt-9">
                Don't have an account?{" "}
                <span className="signup">
                  {" "}
                  <Link to="/register">Sign In</Link>
                </span>
              </h3>
            </div>
          </div>
        </div>
      
  )
};

export default Login;
