import React, { useState } from 'react'
import newsletterimg from '../../Assest/images/newsletterimg.png'
import { RxCross1 } from "react-icons/rx";

const NewsletterPopup = () => {

    const [newsLetterEmail, setNewsLetterEmail] = useState("");
    const [showNewsletter, setShowNewsletter] = useState(true);

    const handleNewsLetter = (e) => {
        const {value} = e.target;
        setNewsLetterEmail(value);    
    }

    const submitNewsLetter = (e) => {
        e.preventDefault();
        console.log(newsLetterEmail);
        setNewsLetterEmail("");
    }

    const handleShowNewsLetter = () => {
        setShowNewsletter(false);
    }

    return <>
        { showNewsletter ? <section className='absolute top-0 left-0 bg-black bg-opacity-80 flex items-center h-[100vh] w-full z-50'>
            <div className='flex relative flex-col justify-center opacity-100 items-center h-fit py-[2rem] shadow-md w-[90vw] mx-auto bg-white'>
                <div className='h-fit w-fit object-contain'>
                    <img src={newsletterimg} className='h-fit w-fit' alt='news-letter-img'/>
                </div>
                <div onClick={handleShowNewsLetter} id='cross' className='absolute top-[1rem] rounded-full right-[1rem] h-[1.8rem] w-[1.8rem] bg-[#FFF7F3] flex justify-center items-center'>
                    <RxCross1 className=' text-black text-sm'/>
                </div>
                <div className='container w-9/12  mx-auto text-left pt-[60px]'>
                    <div className='text-container w-9/12 space-y-2'>
                        <h1 className='text-[25px] font-playfair text-black'>Don’t want to miss anything?</h1>
                        <p className='font-poppins text-[14px] font-[300] text-black'>Subscribe to our newsletter and stay updated!</p>
                    </div>
                <form onSubmit={submitNewsLetter} className='flex flex-col justify-center items-center w-full mt-10 space-y-8'>
                    <input type="email" onChange={handleNewsLetter} value={newsLetterEmail}  placeholder='Enter email' className=' border-[0.01rem] py-4 px-5 placeholder:text-gray-300 placeholder:tracking-widest placeholder:font-[300] placeholder:text-[12px] text-black w-full border-gray-300'/>
                    <button type='submit' className='text-white bg-nav-pink w-full py-4 tracking-widest font-[400] text-[14px] uppercase hover:text-nav-pink hover:bg-transparent hover:border-nav-pink border-[0.01rem]'>Subscribe</button>
                </form>
                </div>
            </div>
        </section> : ''} 
    </>
}
export {NewsletterPopup}