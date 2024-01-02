import React from 'react'
import aboutimg4 from '../../Assest/images/aboutimg4.png';
import play from '../../Assest/images/play.png'
import aboutimg6 from '../../Assest/images/aboutimg6.png';
const AboutKiwanaCompVideo = () => {
    return <>
        <section id='video' className='w-full relative h-[43rem] lg:h-[33.5rem] pb-[70px] mt-[16rem] bg-[#F7E4DA99]'>
            <div className='inner-container w-11/12 mx-auto h-full  '>
                <div className='absolute -top-[17rem] md:-top-[28rem] lg:-top-[15rem]  w-11/12 mx-auto'>
                    <PlayVideoBanner />
                </div>
                <div className='h-full flex items-end w-full'>
                    <p className='text-[15px] font-poppins font-[300] text-center text-[#333] md:text-[17px] lg:text-[18px] lg:tracking-wide'>Welcome to Kiwana, where beauty and care converge to create a transformative experience. At Kiwana, we passionately curate premium beauty care products that celebrate your unique radiance. Our commitment to quality, innovation, and sustainability sets us apart, ensuring that each product not only enhances your beauty but also prioritizes the health and vitality of your skin. We believe in the power of self-love and inclusivity, offering a diverse range of solutions for every skin type and tone. Join us on a journey of rediscovery, where Kiwana is not just a brand but a celebration of your individual beauty.</p>
                </div>
            </div>
        </section>
    </>
}

const PlayVideoBanner = () => {
    return <>
        <div className='w-11/12 md:w-10/12 lg:w-11/12 mx-auto relative h-fit shadow-md '>
            <div className='inner-container object-contain w-full lg:w-full h-auto bg-white p-[14px] relative'>
                <div className='object-contain w-11/12 lg:w-full  mx-auto bg-red-500'>
                    <img src={aboutimg4} className='lg:hidden h-fit w-full md:w-full  mx-auto' alt='about-us-video'/>
                    <img src={aboutimg6} className='hidden lg:block lg:w-full lg:h-full' alt='about-us-video'/>
                </div>
                <div className='absolute top-0 flex items-center justify-center w-full h-full'>
                    <img src={play} className='' alt=''/>
                </div>
            </div>
            
        </div>
    </>
}

export default AboutKiwanaCompVideo;