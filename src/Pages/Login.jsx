import React from 'react'
import LoginComp from '../Components/LoginComp/LoginComp';

const LoginPage = () => {
    return <>
        <section id='login-page' className='bg-white w-full relative h-fit '>
            <div className='inner-container w-11/12 mx-auto bg-[#FFF8F7] h-full '>
                <div className='content-container w-full flex justify-center items-center my-[80px] lg:my-0 lg:py-[80px] lg:bg-[#FFF8F7]'>
                    <LoginComp />
                </div>
            </div>
        </section>
    </>
}

export default LoginPage;  