import React from 'react'
import videoCollection1 from '../../Assest/images/videoCollection1.png';
import videoCollection2 from '../../Assest/images/videoCollection2.png';
import videoCollection3 from '../../Assest/images/videoCollection3.png';
import videoCollection4 from '../../Assest/images/videoCollection4.png';
import videoCollection5 from '../../Assest/images/videoCollection5.png';
import { CustomCarousel } from '../customCarousel';


const ProductCollectionVideoComp = () => {
    return <>
    <div className='w-full relative h-fit bg-[#D5F0FF] lg:h-full lg:pb-[3rem]'>
        <div className='inner-container w-full h-fit pl-[23px] py-[100px] lg:py-[40px]'>
            <div className='w-full text-center '>
                <h1 className='lg:font-[500] lg:text-[40px] font-playfair text-[30px] font-[400] text-[#363636] capitalize tracking-wider'>Watch it.Love it</h1>
            </div>
            <div className='content-container lg:mt-[60px] mt-[40px] justify-start items-center gap-[25px] lg:pr-[25px]'>
                {
                    <CustomCarousel carouselData={productCollectionVideoComp_api} />
                }
            </div>
        </div>
    </div>
    </>

}

const productCollectionVideoComp_api = [
    {
        id : 1,
        imgLink : videoCollection1,
        type : "videoCollection",
        video_url : "",
    },
    {
        id : 2,
        imgLink : videoCollection2,
        type : "videoCollection",
        video_url : "",
    },
    {
        id : 3,
        imgLink : videoCollection3,
        type : "videoCollection",
        video_url : "",
    },
    {
        id : 4,
        imgLink : videoCollection4,
        type : "videoCollection",
        video_url : "",
    },
    {
        id : 5,
        imgLink : videoCollection5,
        type : "videoCollection",
        video_url : "",
    }
]

export default ProductCollectionVideoComp;