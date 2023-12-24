import React from 'react'
import side1 from '../Assest/images/side1.png';
import side2 from '../Assest/images/side2.png';


const SubscribeBox = () => {
    return <>
    <section className='w-12/12 h-[25rem] overflow-hidden bg-[#FBFBFB] relative '>
        <div className='absolute h-fit w-fit top-3 left-0 z-0'>
            <img src={side1} className='h-auto w-auto' alt=''/>
        </div>
        <div className='absolute h-fit w-fit top-3 right-0 z-0'>
            <img src={side2} className='h-auto w-auto' alt=''/>
        </div>
        <form className='w-10/12 relative mx-auto flex flex-col space-y-4 h-fit items-center mt-[5rem]'>
            <h1 className='text-nav-blue text-[25px] font-[400] text-center tracking-wider'>Stay Up to Date with All News and Exclusive Offers </h1>
            <input type='email' className='placeholder:font-poppins placeholder:font-[14px] w-11/12 border-[0.02rem] border-gray-300 placeholder:text-gray-300 focus:outline-none' placeholder='Enter your email address' />
            <button className='font-poppins bg-nav-pink rounded-none w-11/12 hover:bg-transparent transition-all text-white py-2 duration-500 delay-150'>Subscribe</button>
            <label className='flex justify-self-start gap-4 w-11/12 ' htmlFor='confirm'>
                <input id="confirm" type='checkbox' className='mt-1 border-[0.01rem] border-nav-pink focus:accent-nav-pink' />
                <p className='text-[12px] text-black'>I accept the <span className='text-nav-pink underline'>terms & conditions</span> and the <span className='text-nav-pink underline'>data protection</span></p>
            </label>
        </form> 
    </section>
    </>
}
export default SubscribeBox;