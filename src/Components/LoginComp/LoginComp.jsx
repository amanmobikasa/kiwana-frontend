import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/reducer/userAuthSlice';
import { useSelector } from 'react-redux';


const LoginComp = () => {
    const dispatch = useDispatch();


    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
    })

    const handleLoginData = (event) => {
        const {name, value } = event.target;
        setLoginData({...loginData, [name] : value})
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("loginData", JSON.stringify(loginData));
        dispatch(userLogin(loginData))
        setLoginData({email : "", password : ""})
        }

    const user_details = useSelector(state=> console.log(state))    
    // console.log("user_details",user_details)


    return <>
    <form onSubmit={handleLoginSubmit} className='bg-white w-full lg:w-6/12 lg:h-[625px]  relative h-auto shadow-md drop-shadow-md lg:my-[3rem] my-[10rem]'>
        <div className='pb-[80px] mx-[13px] lg:mx-[30px] flex-col space-y-6 lg:space-y-10 justify-center lg:pt-[5rem]'>
            <div className=''>
                <h1 className='text-nav-pink text-[50px] font-[400] text-center font-playfair lg:text-[58px]'>Login</h1>
            </div>
            <div className='content-container px-2 space-y-4  w-full h-fit'>
                <div className='flex-col flex gap-y-4'>
                    <label className='space-y-[15px]'>
                        <p className='text-[#363636]'>Email</p>
                        <input required onChange={handleLoginData} type='email' className='w-full py-3 px-3' name='email' value={loginData.email} placeholder='Email Address'  />
                    </label>
                    <label className='space-y-[15px]'>
                        <p className='text-[#363636]'>Password</p>
                        <input required onChange={handleLoginData} type='password' className='w-full py-3 px-3' name='password' value={loginData.password} placeholder='Password'  />
                    </label>
                    
                </div>
                <div className='space-y-6 lg:space-y-5'>
                        <div className='pt-2'>
                            <a className='underline text-[#363636] font-poppins text-[17px] '>Forgot your password?</a>
                        </div>
                        <div>
                            <button type='submit' className='uppercase w-full text-[20px] text-white bg-nav-pink py-3 tracking-wider hover:bg-transparent hover:text-nav-pink hover:border-nav-pink border-[0.01rem]'>Submit</button>
                        </div>
                        <div className='pt-2 lg:pt-0'>
                            <a className='underline text-[#363636] font-poppins text-[17px] lg:text-[14px]'>New customer?Sign up for an account</a>
                        </div>
                    </div>
            </div>
        </div>
    </form>

    </>
}
export default LoginComp;  