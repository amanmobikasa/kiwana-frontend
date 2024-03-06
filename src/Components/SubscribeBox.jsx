import React, { useCallback, useEffect, useState } from 'react'
import side1 from '../Assest/images/side1.png';
import side2 from '../Assest/images/side2.png';
import GlobalPostData from '../Customhooks/usePostData';
import { toastFailed, toastSuccess } from '../common/toast';
import isEmail from 'validator/lib/isEmail';
import { scrollTop } from '../common/scrollTop';


const SubscribeBox = () => {

    const [email, setEmail] = useState({});
    const {error,isLoading,message,postData,response} = GlobalPostData()

    const handleEmailInput = useCallback((e) => {
        const {name, value,checked} = e.target;
        if(name === 'email'){
            setEmail({...email, [name] : value});
        }
        else if (name === 'confirm'){
            setEmail({...email, [name] : checked});
        }

    },[email, setEmail])

    const handleSubmitSubscribe = useCallback((event) => {
        event.preventDefault()
        try {
            if(isEmail(email.email)){
                postData('http://localhost:4000/subscribe', {email : email.email, confirm : email.confirm})
            }else{
                toastFailed("please enter a valid email");
            }
        } catch (error) {
            console.error("something went wrong", error)
        }

    },[email, postData, response])  

    useEffect(()=>{
        if(response?.success){
            toastSuccess(response?.message)
            scrollTop(0, "smooth"); // scroll to top of page.
        }else if(response?.success === false){
            toastFailed(response?.message)
        }else return;
    },[response])

    // console.log("response bdia wala", response);

    return <>
    <section className='w-12/12  h-[25rem] md:h-[30rem] lg:h-[20rem]  overflow-hidden bg-[#FBFBFB] relative '>
        <div className='absolute h-fit w-fit  top-3 left-0 z-0'>
            <img src={side1} className='h-full w-[7rem] ' alt=''/>
        </div>
        <div className='absolute h-fit w-fit top-3 right-0 z-0'>
            <img src={side2} className='h-full w-[7rem]' alt=''/>
        </div>
        <form onSubmit={handleSubmitSubscribe} className='w-11/12 lg:w-[35%] relative mx-auto flex flex-col space-y-4 md:space-y-8 lg:space-y-5 h-fit items-center mt-[1.5rem] lg:pt-[2rem]'>
            <h1 className='text-nav-blue text-[25px] lg:text-[32px] font-[400] text-center  md:text-[30px] lg:w-11/12 '>Stay Up to Date with All News and Exclusive Offers </h1>
            <div className='lg:space-y-0 ml-7 lg:ml-0 w-full lg:w-11/12 lg:flex lg:items-center space-y-6'>
                <input onChange={handleEmailInput} value={email?.email} type='email' name='email' className='placeholder:font-poppins text-black placeholder:font-[14px] w-11/12 border-[0.02rem] md:py-3 border-gray-300 placeholder:text-gray-300 focus:outline-none lg:w-9/12' placeholder='Enter your email address' />
                <button type='submit' className='font-poppins bg-nav-pink rounded-none w-11/12 md:text-[20px] md:tracking-wider hover:bg-transparent transition-all text-white py-2 md:py-3 duration-500 delay-150 border-[0.01rem] border-nav-pink hover:text-nav-pink lg:text-[15px] lg:w-3/12'>{isLoading ? "Loading..." : "Subscribe"}</button>
            </div>
            <label className='flex justify-self-start gap-4 w-11/12 items-start lg:w-10/12 lg:mx-auto' htmlFor='confirm'>
                <input onChange={handleEmailInput} name='confirm'  value={email?.confirm} id="confirm" type='checkbox' className='mt-1 md:m-0 h-[22px] w-[22px] md:h-[24px] md:w-[24px] lg:w-[22px] lg:h-[22px] border-[0.01rem] border-nav-pink focus:accent-nav-pink ' />
                <p className='text-[14px] text-black md:text-[14px]'>I accept the <span className='text-nav-pink underline'>terms & conditions</span> and the <span className='text-nav-pink underline'>data protection</span></p>
            </label>
        </form> 
    </section>
    </>
}
export default SubscribeBox;