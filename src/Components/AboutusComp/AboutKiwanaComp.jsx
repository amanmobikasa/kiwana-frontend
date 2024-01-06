import React from 'react'
import aboutImg1 from '../../Assest/images/aboutimg1.png';
import aboutImg2 from '../../Assest/images/aboutimg2.png';
import aboutImg3 from '../../Assest/images/aboutimg3.png';
import aboutimg5 from '../../Assest/images/aboutimg5.png'

const AboutKiwanaComp = () => {
    return <>
        <div className='w-full h-fit relative mx-auto mt-[78px] lg:mt-[6.5rem]'>
        <div className='content-container w-full h-fit space-y-[2.9rem] lg:space-y-[5rem]'>
            <div className='text-center font-playfair '>
                <h1 className='text-[50px] font-[400] lg:text-[58px]'>About Kiwana</h1>
                <p className='text-[16px] uppercase font-poppins tracking-wider text-[#646464]'><span>Home</span> / <span>about us</span></p>
            </div>
            <div className='img-container w-10/12  lg:w-11/12 mx-auto  h-fit '>
                <img src={aboutImg1} className='h-full w-full lg:hidden' alt='about-img' />
                <img src={aboutimg5} className='hidden lg:block w-full' alt=''/>
            </div>
            <div className='lg:pt-5'>
                <div className="flex w-10/12 space-y-5 mx-auto flex-col justify-center text-center lg:space-y-10">
                    <h1 className='capitalize text-[30px] font-[400] font-playfair text-[#363636] lg:text-[44px]'>About Kiwana</h1>
                    <p className='text-[16px] text-[#363636] lg:text-[18px]'>Welcome to Kiwana, where beauty and care converge to create a transformative experience. At Kiwana, we passionately curate premium beauty care products that celebrate your unique radiance. Our commitment to quality, innovation, and sustainability sets us apart, ensuring that each product not only enhances your beauty but also prioritizes the health and vitality of your skin. We believe in the power of self-love and inclusivity, offering a diverse range of solutions for every skin type and tone. Join us on a journey of rediscovery, where Kiwana is not just a brand but a celebration of your individual beauty.</p>
                </div>  
            </div>
            <div className='container mx-auto w-11/12  object-contain space-y-[42px] lg:space-y-[5.5rem] lg:flex lg:justify-between'>
                <div className='lg:w-6/12 lg:h-fit'>
                    <img src={aboutImg2} className='w-full h-full ' alt='' />
                </div>
                <div className='lg:w-6/12 lg:h-auto'>
                    <img src={aboutImg3} className='w-full h-full' alt='' />
                </div>
            </div>
        </div>

        </div>
    </>
}

export default AboutKiwanaComp;