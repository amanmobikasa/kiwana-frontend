import React from 'react'
import person1 from '../../Assest/images/person1.png';
import play from '../../Assest/images/play.png'
import profile1 from '../../Assest/images/profile1.png';
import profile2 from '../../Assest/images/testimonialDesktop.png'
import TestimonialsCrousel from './TestimonialsCrousel';

const Testimonials = () => {
    return <>
    <section id='testimonials' className='bg-[#D5F0FF] w-full h-[48rem] md:h-[68rem] lg:h-[49rem] lg:mt-[20rem] relative '>
        <div className='inner-div w-12/12 px-[1rem] pb-[3rem] h-full relative'>
            <div className='absolute left-[4rem] md:left-0 md:right-0 md:mx-auto -top-[9rem] md:-top-[11rem] lg:-top-[13.5rem]'>
                <VideoTestimonials/>
            </div> 
            <div className='flex flex-col justify-end w-full items-center z-20 relative h-full pt-[20rem] md:pt-[20rem] lg:pt-[3rem] space-y-[3rem] '>
                <h1 className='font-playfair text-[26px] font-[500] text-black md:text-[34px] lg:text-[43px]'>Testimonials</h1>
                <div className='w-full h-fit'>
                    <TestimonialsCrousel testimonialsData={testimonials_api} />
                </div>
            </div>
        </div>
    </section>
    </>
}

const VideoTestimonials = () => {
    return <>
        <div className='w-fit md:w-9/12  mx-auto bg-white p-3 md:p-[1rem] md:h-[45rem] lg:w-10/12 lg:h-[32rem] relative rounded-md drop-shadow-md shadow-md'>
            <img src={person1} alt='' className='object-cover h-full w-full md:hidden'/>
            <img src={profile2} alt='' className='object-cover h-full w-full hidden md:block'/>

            {/* <div className='absolute top-[12rem] md:top-[20rem] left-[7rem] md:flex md:justify-center md:w-full  md:left-0 md:right-0 '> */}
                <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center object-contain'>
                <img  src={play} className='h-fit w-fit' alt=''/>
                </div>
            {/* </div> */}
        </div>
    </>
}




const testimonials_api = [
    {
        id : 1,
        heading : "Love, Love, Love",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        rating : 4,
        profile_photo : profile1,
        user_name : "Sumit Sharma"
    },
    {
        id : 2,
        heading : "Love, Love, Love",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        rating : 4,
        profile_photo : profile1,
        user_name : "Sumit Sharma"
    },
    {
        id : 3,
        heading : "Love, Love, Love",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        rating : 4,
        profile_photo : profile1,
        user_name : "Sumit Sharma"
    },
    {
        id : 4,
        heading : "Love, Love, Love",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        rating : 4,
        profile_photo : profile1,
        user_name : "Sumit Sharma"
    },
    {
        id : 5,
        heading : "Love, Love, Love",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        rating : 4,
        profile_photo : profile1,
        user_name : "Sumit Sharma"
    },
    {
        id : 6,
        heading : "Love, Love, Love",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        rating : 4,
        profile_photo : profile1,
        user_name : "Sumit Sharma"
    },
    {
        id : 7,
        heading : "Love, Love, Love",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        rating : 4,
        profile_photo : profile1,
        user_name : "Sumit Sharma"
    },
]  

export default Testimonials;