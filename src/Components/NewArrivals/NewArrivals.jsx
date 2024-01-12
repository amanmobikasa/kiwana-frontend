import React from 'react'
import arrivalimg1 from '../../Assest/images/arrival1.png';
import arrivalimg2 from '../../Assest/images/arrival2.png';
import arrivalimg3 from '../../Assest/images/arrival3.png';
import arrivalimg4 from '../../Assest/images/arrival4.png';

import { CustomCarousel } from '../customCarousel';

const NewArrivalsProducts = () => {
    return <>
    <section className='main-container  w-full lg:h-[44rem] my-[2rem] md:mb-[15rem]  relative lg:my-[0rem]'>
        <div className='inner-container px-[1rem] py-[2rem] lg:py-0 w-full  space-y-[2rem] h-[35rem]'>
            <div className='w-full lg:mb-[1rem] lg:-mt-4'>
                <h1 className='text-[33px] text-center text-black font-playfair font-[500] md:text-[33px] lg:text-[43px]'>New Arrivals</h1>
            </div>
            <div className='crousel-container lg:mb-[10rem]  py-5 lg:py-0 w-full flex-row justify-start'>
                {/*  card1 */}
                <CustomCarousel carouselData = {NewArrivals_api}/>
            </div>
        </div>
    </section>
    </>
}



const NewArrivals_api = [
    {
        id : 1,
        imgLink : arrivalimg1,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 2,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 3,
        imgLink : arrivalimg3,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 4,
        imgLink : arrivalimg4,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 5,
        imgLink : arrivalimg1,
        title : "hair conditioner",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
    },
]

export default NewArrivalsProducts;