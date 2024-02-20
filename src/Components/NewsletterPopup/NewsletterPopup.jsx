import React, { useEffect, useState } from 'react'
import newsletterimg from '../../Assest/images/newsletterimg.png'
import { RxCross1 } from "react-icons/rx";
import { motion } from 'framer-motion'
import GlobalPostData from '../../Customhooks/usePostData';
import { toastFailed, toastSuccess } from '../../common/toast';

const NewsletterPopup = () => {

    const [newsLetterEmail, setNewsLetterEmail] = useState("");
    const [showNewsletter, setShowNewsletter] = useState(true);
    const [disableScroll, setDisableScroll] = useState(true);
    const {response, error, isLoading, postData, message} = GlobalPostData();

    const handleNewsLetter = (e) => {
        const {value} = e.target;
        setNewsLetterEmail(value);    
    }

    const submitNewsLetter = (e) => {
        e.preventDefault();
        try {
            console.log(newsLetterEmail);
            postData("http://localhost:4000/subscribe", {email : newsLetterEmail})
            setNewsLetterEmail("");
            // if(response !== null){
            //     toastSuccess(message);
            // }
            handleShowNewsLetter();
            
        } catch (error) {
             console.log("error is", error);
        }
    }

    const handleShowNewsLetter = () => {
        setShowNewsletter(false);
        setDisableScroll(false);
    }

    useEffect(()=>{
        if(response !== null){
            toastSuccess(message);
        }
        
    },[response])



    useEffect(()=>{
        document.body.scrollTop = 0;
        document.body.style.overflow = disableScroll ? "hidden" : "auto";
    },[disableScroll])

    return <>
        { showNewsletter ? <motion.section initial={{opacity:0 }} animate={{opacity:1, transition:{duration:0.5}}} className='absolute top-0 left-0 bg-black bg-opacity-80 flex items-center h-[100vh] w-full z-50'>
            <motion.div initial={{opacity:0, scale:0.5, y:-100}} animate={{opacity:1, scale:1, y:0}} transition={{duration:2}}  className='flex relative  flex-col lg:flex-row lg:items-end lg:pb-0 justify-center opacity-100 items-center h-fit py-[2rem] shadow-md w-[90vw] lg:w-[50vw] lg:mx-auto mx-auto bg-white'>
                <div className='h-fit w-fit lg:h-full lg:w-6/12  object-contain lg:object-cover lg:flex lg:items-end '>
                    <img src={newsletterimg} className='h-fit w-fit ' alt='news-letter-img'/>
                </div>
                <div className=' w-9/12 lg:w-6/12  mx-auto text-left pt-[60px] lg:pb-[1.5rem]'>
                    <div className='text-container w-9/12 space-y-2'>
                        <h1 className='text-[25px] lg:text-[30px] font-playfair text-black'>Don’t want to miss anything? </h1>
                        <p className='font-poppins text-[14px] font-[300] text-black'>Subscribe to our newsletter and stay updated!</p>
                    </div>
                    <form onSubmit={submitNewsLetter} className='flex flex-col justify-center items-center w-full lg:w-11/12 mt-10 space-y-8'>
                        <input type="email" onChange={handleNewsLetter} value={newsLetterEmail}  placeholder='Enter email' className=' border-[0.01rem] py-4 px-5 placeholder:text-gray-300 placeholder:tracking-widest placeholder:font-[300] placeholder:text-[12px] text-black w-full border-gray-300'/>
                        <button type='submit' className='text-white bg-nav-pink w-full py-4 tracking-widest font-[400] text-[14px] uppercase hover:text-nav-pink hover:bg-transparent hover:border-nav-pink border-[0.01rem]'>{isLoading ? "Loading..." :"Subscribe"}</button>
                    </form>
                </div>
                <div onClick={handleShowNewsLetter} id='cross' className='absolute top-[1rem] rounded-full right-[1rem] h-[1.8rem] w-[1.8rem] bg-[#FFF7F3] flex justify-center items-center'>
                    <RxCross1 className=' text-black text-sm'/>
                </div>
            </motion.div>
        </motion.section> : ''} 
    </>
}
export default NewsletterPopup;


