import React from 'react'
import SignupForm from './SignupForm'

function Signupcomp() {
  return (
    <>
        <section id='signup-page' className='bg-white w-full relative h-fit '>
            <div className='inner-container w-11/12 mx-auto bg-[#FFF8F7] pb-[3rem] h-full '>
                <div className='content-container w-full flex justify-center items-center mt-[80px] lg:my-0 lg:pt-[80px] lg:bg-[#FFF8F7]'>
                    <SignupForm/>
                </div>
                <div className='content-container w-6/12 mx-auto flex justify-center mb-[2rem] relative gap-x-3'>
                    {/* <div className='w-full '>
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
                    </div> */}

                </div>
                
            </div>
        </section>

    </>
  )
}

export default Signupcomp