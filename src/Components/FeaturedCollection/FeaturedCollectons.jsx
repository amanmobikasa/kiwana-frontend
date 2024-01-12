import React from 'react'
import { CustomCarousel } from '../customCarousel';
import featuredimg1 from '../../Assest/images/featured1.png';
import featuredimg2 from '../../Assest/images/featured2.png';
import featuredimg3 from '../../Assest/images/featured3.png';
import featuredimg4 from '../../Assest/images/featured4.png';

const FeaturedCollection = () => {
    return <>
     <section className='main-container  w-full h-fit my-[3rem] md:mb-[14rem] lg:my-[3rem] relative'>
        <div className='inner-container px-[1rem] py-[2rem] w-full  space-y-[2rem] h-[35rem]'>
            <div className='w-full lg:mb-[3rem]'>
                <h1 className='text-[30px] lg:text-[45px] text-center text-black font-playfair font-[500] md:text-[33px]'>Featured Collection</h1>
            </div>
            <div className='crousel-container relative py-5 w-full flex-row justify-center lg:w-auto lg:mx-[2rem] '>
                {/*  card1 */}
                <CustomCarousel carouselData = {FeaturedCollection_api}/>
            </div>
        </div>
    </section>

    </>
}
export default FeaturedCollection;

const FeaturedCollection_api = [
    {
        id : 1,
        type : "featured_products",
        imgLink : featuredimg1,
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 2,
        imgLink : featuredimg2,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 3,
        imgLink : featuredimg3,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 4,
        imgLink : featuredimg4,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 2,
        imgLink : featuredimg2,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 4,
        imgLink : featuredimg4,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
    },
    {
        id : 3,
        imgLink : featuredimg3,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
    },
    
]