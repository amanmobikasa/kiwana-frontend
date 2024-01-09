import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
const BannerAlert = () =>{

    const [showBanner, setShowBanner] = useState(false)

    const HandleHideBanner = () =>{
        setShowBanner(false)
    }
    const handleShowBanner = () =>{
        setShowBanner(!showBanner)

    }

    return <>
         <div className='bg-nav-pink text-white w-full rounded-none  '>
            <div className='content-container w-full h-fit relative'>
                <div className='content-container w-full h-fit'>
                    <div id="hurry-up-banner" className="gap-2 flex justify-center items-center py-3 lg:py-2">
                        <div>
                            <p className="font-medium text-center uppercase tracking-widest lg:tracking-normal text-[19px] md:text-[18px]">hurry up! buy now</p>
                        </div>
                        <div onClick={handleShowBanner} className='focus:outline-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M7.5 9L4.46891 6H10.5311L7.5 9Z" fill="white"/>
                                <rect x="0.5" y="0.5" width="14" height="14" stroke="white"/>
                            </svg>
                        </div>
                    </div>
                   { showBanner ? <div className='w-full h-fit relative border-t-[0.01rem] py-[42px] border-white '>
                        <div className="container w-9/12 mx-auto text-center space-y-[1.1rem]">
                            <div className='w-full'>
                                <h1 className='text-[32px] font-playfair font-[500] '>Order more than ₹ 1000 & get free shipping</h1>
                            </div>
                            <div className=''>
                                <p className=''>Pair text with an image to focus on your chosen product, collection, or blog post. Include information about availability, style, or even a review.</p>
                            </div>
                            <div className='pt-6'>
                                <button className='text-nav-pink bg-white px-10 py-4 text-[20px] font-[600]'>Shop Now</button>
                            </div>
                        </div>
                        {/* icon cross */}
                        <div onClick={HandleHideBanner} className='absolute top-[1rem] right-[1.2rem] '>
                            <RxCross1 className='text-white text-[2rem] font-thin' />
                        </div>
                    </div> : null}
                </div>
                
            </div>
            
        </div>
    </>
}
export default BannerAlert