import React from 'react'
import videoCollection1 from '../../Assest/images/videoCollection1.png';
import videoCollection2 from '../../Assest/images/videoCollection2.png';
import videoCollection3 from '../../Assest/images/videoCollection3.png';
import videoCollection4 from '../../Assest/images/videoCollection4.png';
import videoCollection5 from '../../Assest/images/videoCollection5.png';
import { CustomCarousel } from '../customCarousel';


const ProductCollectionVideoComp = () => {
    return <>
    <div className='w-full relative h-fit overflow-auto bg-[#D5F0FF]'>
        <div className='inner-container w-full h-fit pl-[23px] py-[100px]'>
            <div className='content-container  justify-start items-center gap-[25px]'>
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