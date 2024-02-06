import React from 'react'
import LoginComp from '../Components/LoginComp/LoginComp';
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { toastSuccess } from '../common/toast';
import { useNavigate } from 'react-router-dom';
import GoogleLogoutbutton from '../Components/GoogleLogoutbutton/GoogleLogoutbutton';
import FacebookLoginComp from '../Components/FacebookLogin/FacebookLogin';


const CLIENT_ID = "826747554533-t0h1gs01tcprer0jt1gl38gqsvso36nf.apps.googleusercontent.com"; 

const LoginPage = () => {
    const navigate = useNavigate()

    const responseSuccess = (res) => {
        console.log("success login", res.profileObj)
        const getLoginData = JSON.parse(sessionStorage.getItem("userLogin"));
        if(res.profileObj){
            sessionStorage.setItem("userLogin", JSON.stringify(res.profileObj))
            toastSuccess(`Login Success, Welcome ${res.profileObj.givenName} `)
            // navigate("/");
        }

        if(getLoginData){
            toastSuccess("You're already logged in")
        } 
    }
    const responseFailure = (res) => {
        console.log("failure login", res)
    
    }

    return <>
        <section id='login-page' className='bg-white w-full relative h-fit '>
            <div className='inner-container w-11/12 mx-auto bg-[#FFF8F7] pb-[3rem] h-full '>
                <div className='content-container w-full flex justify-center items-center mt-[80px] lg:my-0 lg:pt-[80px] lg:bg-[#FFF8F7]'>
                    <LoginComp />
                </div>
                <div className='content-container w-6/12 mx-auto flex justify-center mb-[2rem] relative gap-x-3'>
                    <div className='w-full '>
                        <GoogleLogin
                                clientId={CLIENT_ID}
                                buttonText='Sign Up with Google'
                                onSuccess={responseSuccess}
                                onFailure={responseFailure}
                                cookiePolicy='single_host_origin'
                                className='w-full py-3 rounded-md shadow-sm font-[500] font-poppins text-[#363636]'
                                isSignedIn={true}
                            />
                    </div>
                    <div className='w-full'>
                        <FacebookLoginComp />
                    </div>

                </div>
                
            </div>
        </section>
    </>
}

export default LoginPage;  