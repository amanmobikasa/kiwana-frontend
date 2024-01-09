import React from 'react'
import landingImg from '../../Assest/images/landingImg.png';
import landingImg2 from '../../Assest/images/homepageLaptop.png'

const LandingComponent = () => {
    return <>
    <section id='landingComp' className='w-full relative overflow-hidden h-fit '>
        <div className='container-inner  w-full h-fit relative'>
            <div className='h-full w-full object-cover'>
                <img src={landingImg} className='h-full w-full lg:hidden' alt='landing_img'/>
                <img src={landingImg2} className='h-full w-full hidden lg:block' alt='landing_img'/>
            </div>
            <div className='content-container h-fit absolute top-[3rem] md:top-[6rem] lg:left-[10.5rem] lg:m-0 lg:top-[11.5rem] left-0 right-0 w-8/12 lg:w-4/12  m-auto  flex justify-center'>
                <div className='w-full space-y-[1rem] md:space-y-[2rem] lg:space-y-[0rem]'>
                    <h1 className='text-white text-[25px] text-center lg:text-left font-[MonteCarlo] font-[400] md:text-[30px]  lg:tracking-wider lg:opacity-80 lg:text-[2.5rem]'>Fabulous Moments Every Day</h1>
                    <h1 className='top-[5rem]  text-white font-playfair text-center lg:text-left font-[700] text-[40px] lg:text-[58px] leading-tight tracking-wider lg:tracking-wider md:text-[55px]'>Clean <span className='font-[500]'>Beauty</span> Visible <span className='font-[500]'>Result</span></h1>
                    <div className='w-full flex justify-center lg:justify-start lg:pt-[3.2rem]'>
                        <button className='uppercase font-poppins text-white bg-transparent px-8 lg:px-5 py-2 border-white border-[0.01rem] text-[14px] lg:text-[20px] tracking-wider hover:bg-nav-pink md:px-12 md:py-3 md:text-lg'>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <MarqueBanner/>
    </>
}

const MarqueBanner = () => {
    return <>
        <marquee className="bg-[#FCEBE8] text-white w-full py-[1rem] ">
            <div className='flex items-center gap-[2rem] justify-evenly'>
                <div className='w-full max-h-max'>
                    <h1 className='text-[18px] font-poppins font-[400] text-black '>Use code : <span>Kiwana10 on checkout</span></h1>
                </div>
                <div className='w-full max-h-max'>
                    <h1 className='text-[18px] font-poppins font-[400] text-black '>Black friday : <span>10% off sitewide</span></h1>
                </div>
                <div className='w-full max-h-max'>
                    <h1 className='text-[18px] font-poppins font-[400] text-black '>Use code : <span>Kiwana10 on checkout</span></h1>
                </div>
                <div className='w-full max-h-max'>
                    <h1 className='text-[18px] font-poppins font-[400] text-black '>Black friday : <span>10% off sitewide</span></h1>
                </div>
                <div className='w-full max-h-max'>
                    <h1 className='text-[18px] font-poppins font-[400] text-black '>Use code : <span>Kiwana10 on checkout</span></h1>
                </div>

            </div>
        </marquee>  
    </>
}

export default LandingComponent;