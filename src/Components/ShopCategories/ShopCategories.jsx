import React from 'react'
import categoryshop1 from '../../Assest/images/category1.png';
import categoryshop2 from '../../Assest/images/category2.png';
import categoryshop3 from '../../Assest/images/category3.png';
import { CustomCarousel } from '../customCarousel';

const ShopCategory = () => {
    return <>
    <section className='main-container  w-full h-fit my-[2.8rem] lg:mb-[20rem] relative'>
        <div className='inner-container px-[1rem] py-[2rem] w-full  space-y-[1.9rem] h-[35rem] bg-[#FFF8F7] '>
            <div className='w-full  ]'>
                <h1 className='text-[25px] text-center text-black font-playfair font-[500] md:text-[33px] lg:text-[2.7rem]'>Shop by Categories</h1>
            </div>
            <div className='crousel-container   py-5 w-full flex-row justify-center'>
                {/*  card1 */}
                <CustomCarousel carouselData = {ShopCategory_api}/> 
            </div>
            <div className='flex justify-center w-full h-fit'>
                <a className='underline underline-offset-2 text-[1.2rem]'>View All {">"}</a>
            </div>
        </div>
    </section>

    </>
}
export default ShopCategory;

const ShopCategory_api = [
    {
        id : 1,
        type : "category",
        cardCss : "",
        imgLink : categoryshop1,
        buttonText : "BODY CARE",
        buttonCss : "px-7 py-3 bg-transparent border-[0.01rem] border-nav-pink hover:text-white hover:bg-nav-pink",
        buttonLink : "/",
    },
    {
        id : 2,
        type : "category",
        cardCss : "",
        imgLink : categoryshop2,
        buttonText : "FACE CARE",
        buttonCss : "",
        buttonLink : "",
    },
    {
        id : 3,
        type : "category",
        cardCss : "",
        imgLink : categoryshop3,
        buttonText : "HAIR CAIR",
        buttonCss : "",
        buttonLink : "",
    },
]