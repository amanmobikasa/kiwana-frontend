import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Redux/reducer/userAuthSlice";
import { setUserJwtToken } from "../../Redux/reducer/userAuthTokenSlice";
import {  toastSuccess } from "../../common/toast";
import GlobalPostData from "../../Customhooks/usePostData";
import { useNavigate } from "react-router-dom";

const LoginComp = () => {
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
   const { response, error, isLoading, postData } = GlobalPostData(); // custom postdata function
   const navigate = useNavigate();

//    console.log("responseRes", response);

  useEffect(()=>{
    if(response){
        dispatch(setUserJwtToken(response.jwtToken)); // setting the jwt token to redux store
        sessionStorage.setItem("userJwtToken", response.jwtToken); // setting the jwt token to sessionStorage
        dispatch(userLogin(response.data)); // store the retrive data from login in redux store
        toastSuccess("Login Successfull 😊"); 
        navigate("/");   
    }
  },[response])


  const handleLoginData = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setLoginData(loginData);
    try {
       postData('http://localhost:4000/login', loginData); // sending the login crendentials to the api
        
    } catch (error) {
        console.log("error in trycatch block", error)
    }
  };

  return (
    <>
      {
        isLoading ? <h1>Loading...</h1> :
        <form
        onSubmit={handleLoginSubmit}
        className="bg-white w-full  lg:w-6/12 lg:h-[625px]  relative h-auto shadow-md drop-shadow-md lg:my-[3rem] my-[10rem]"
      >
        <div className="pb-[80px] mx-[13px] lg:mx-[30px] flex-col space-y-6 lg:space-y-10 justify-center lg:pt-[5rem]">
          <div className="">
            <h1 className="text-nav-pink text-[50px] font-[400] text-center font-playfair lg:text-[58px]">
              Login
            </h1>
          </div>
          <div className="content-container px-2 space-y-4  w-full h-fit">
            <div className="flex-col flex gap-y-4">
              <label className="space-y-[15px]">
                <p className="text-[#363636]">Email</p>
                <input
                  required
                  onChange={handleLoginData}
                  type="email"
                  className="w-full py-3 px-3"
                  name="email"
                  value={loginData.email}
                  placeholder="Email Address"
                />
              </label>
              <label className="space-y-[15px]">
                <p className="text-[#363636]">Password</p>
                <input
                  required
                  onChange={handleLoginData}
                  type="password"
                  className="w-full py-3 px-3"
                  name="password"
                  value={loginData.password}
                  placeholder="Password"
                />
              </label>
            </div>
            <div className="space-y-6 lg:space-y-5">
              <div className="pt-2">
                <a className="underline text-[#363636] font-poppins text-[17px] ">
                  Forgot your password?
                </a>
              </div>
              <div>
                <button
                  type="submit"
                  className="uppercase w-full text-[20px] text-white bg-nav-pink py-3 tracking-wider hover:bg-transparent hover:text-nav-pink hover:border-nav-pink border-[0.01rem]"
                >
                  Submit
                </button>
              </div>
              <div className="pt-2 lg:pt-0">
                <a className="underline text-[#363636] font-poppins text-[17px] lg:text-[14px]">
                  New customer?Sign up for an account
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
      }
    </>
  );
};
export default LoginComp;
