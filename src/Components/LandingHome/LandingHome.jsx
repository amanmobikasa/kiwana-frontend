import React from 'react'
import LandingImage from '../../Assest/images/homeImage.png';
const LandingHome = () => {
    return <>
    <div className='container w-full h-fit relative -z-10'>
        <div className='image-container relative h-full w-full -z-20'>
            <img src={LandingImage} alt='landingimage' className='h-full w-full'/>
            <div className='absolute h-full w-full top-0 left-0 bg-black z-20 opacity-50 bg-gradient-to-b from-[#E89689] to-[#FFFFFF]'>
            </div>
            <div>
                <h1 className='text-center text-[25px] font-[400] text-white'>Fabulous Moments Every Day</h1>
            </div>
        </div>
    </div>

    </>
}
export default LandingHome;