import React from 'react'
import sideimg1 from '../../Assest/images/side1.png';
import sideimg2 from '../../Assest/images/side2.png';
import featuredimg1 from '../../Assest/images/featured1.png';
import featuredimg2 from '../../Assest/images/featured2.png';
import featuredimg3 from '../../Assest/images/featured3.png';
import featuredimg4 from '../../Assest/images/featured4.png';
import { CustomCarousel } from '../customCarousel';

const ProductCollectionAlsoLike = ({mainTitle}) => {
    return <>
    <div id='you-may-also-like' className='w-full h-fit  relative bg-[#FFF8F7] '>
        <div className='inner-container w-full h-fit py-[60px] lg:pl-[30px] relative'>
            <div className='content-container space-y-[42px] '>
                <div className='w-full text-center'>
                    <h1 className='text-[#363636] text-[25px] lg:text-[43px] font-[600] font-playfair'>{mainTitle}</h1>
                </div>
                <div className='z-20 '>
                    {
                        <CustomCarousel carouselData={ProductCollectionAlsoLike_api} />
                    }
                </div>
            </div>
            {/* flower */}
            <div className='absolute w-full lg:h-[50vh]  left-0 top-1/3 flex justify-between items-center '>
                <div className='object-contain w-2/12'>
                    <img src={sideimg1} className='h-full  w-full' alt="" />
                </div>
                <div className='object-contain w-2/12'>
                    <img src={sideimg2} className='w-full h-full' alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
}

const ProductCollectionAlsoLike_api = [
    {
        id : 1,
        type : "featured_products",
        imgLink : featuredimg1,
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
        compCss : "",
    },
    {
        id : 2,
        imgLink : featuredimg2,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
        compCss : ""
    },
    {
        id : 3,
        imgLink : featuredimg3,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
        compCss : ""

    },
    {
        id : 4,
        imgLink : featuredimg4,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
        compCss : ""

    },
    {
        id : 2,
        imgLink : featuredimg2,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
        compCss : ""

    },
    {
        id : 4,
        imgLink : featuredimg4,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
        compCss : ""

    },
    {
        id : 3,
        imgLink : featuredimg3,
        type : "featured_products",
        title : "Ultra Brightening Face Serum",
        price : 340,
        reviews : "",
        reviewsCount : 2947,
        compCss : ""

    },
    
]
export default ProductCollectionAlsoLike; 