import { Alert } from 'flowbite-react'
import React from 'react'

const BannerAlert = () =>{
    return <>
         <div className='bg-nav-pink text-white items-center gap-2 flex justify-center w-full rounded-none py-3'>
            <p className="font-medium text-center uppercase tracking-widest text-[15px] md:text-[18px]">hurry up! buy now</p>
            <div className='focus:outline-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M7.5 9L4.46891 6H10.5311L7.5 9Z" fill="white"/>
                    <rect x="0.5" y="0.5" width="14" height="14" stroke="white"/>
                </svg>
            </div>
        </div>
    </>
}
export default BannerAlert