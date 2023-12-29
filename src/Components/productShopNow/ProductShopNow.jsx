import React from 'react'
import shopnow1 from '../../Assest/images/shopnow_1.png';
import shopnow2 from '../../Assest/images/shopnow_2.png';
import shopnow3 from '../../Assest/images/shopnow_3.png';


const ProductShopNow = () => {
    return <>
        <section id='productShopNow' className='w-12/12 h-fit  relative overflow-hidden lg:w-11/12 lg:mt-[20rem] lg:mb-[5rem]  lg:mx-auto'>
            <div className='flex custom-grid-list flex-col w-11/12 md:w-10/12 lg:w-full lg:flex-row mx-auto relative space-y-10 lg:space-y-0 lg:bg-pink-500 lg:justify-evenly lg:gap-[1.5rem]'>
            {
                ProductShopNow_api.map((data, i)=>{
                    return <>
                    <div key={i} className={`custom-grid-box w-full ${data.parentDiv} h-full relative bg-yellow-500`}>
                    <div className='custom-grid-box-inner lg:h-full lg:w-full lg:bg-red-500'>
                    <img src={data.image_link} className='w-full h-full object-cover ' alt=''/>
                    <div className={`${data?.divStyle}`}>
                        <h1 className={`${data.headingStyle}`}>{data?.heading}</h1>
                        <a href={`${data.linkHref}`} className={`flex items-center text-[18px] md:text-[28px] font-[400] justify-center gap-2 underline underline-offset-2 font-poppins ${data?.linkStyle}`}>
                        Shop Now
                            <span className=''>
                                <svg className={`${data?.linkStyle ? data.linkStyle : ""}`} xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
                                <path d="M6.85337 6.85373L1.85393 11.8535C1.80748 11.8999 1.75234 11.9368 1.69165 11.9619C1.63096 11.9871 1.56591 12 1.50022 12C1.43453 12 1.36948 11.9871 1.3088 11.9619C1.24811 11.9368 1.19296 11.8999 1.14651 11.8535C1.10006 11.807 1.06322 11.7519 1.03808 11.6912C1.01294 11.6305 1 11.5654 1 11.4997C1 11.4341 1.01294 11.369 1.03808 11.3083C1.06322 11.2476 1.10006 11.1925 1.14651 11.146L5.79287 6.5L1.14651 1.85398C1.0527 1.76017 1 1.63293 1 1.50025C1 1.36758 1.0527 1.24034 1.14651 1.14652C1.24032 1.05271 1.36755 1 1.50022 1C1.63289 1 1.76012 1.05271 1.85393 1.14652L6.85337 6.14627C6.89986 6.1927 6.93673 6.24784 6.96189 6.30854C6.98705 6.36924 7 6.4343 7 6.5C7 6.5657 6.98705 6.63076 6.96189 6.69146C6.93673 6.75216 6.89986 6.8073 6.85337 6.85373Z" fill="white" stroke="white" stroke-width="0.2"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                    </div>
                </div>

                    </>
                })
            }
                
            </div>
        </section>
    </>
}

const ProductShopNow_api = [
    {
        id : 1,
        heading : "Revitalise your Gaze with Under Eye Cream",
        divStyle : "absolute top-[111px] left-[30px] text-white text-center font-[600] space-y-6  mx-auto h-fit text-[25px] md:text-[48px] w-10/12",
        headingStyle : " ",
        parentDiv : "lg:w-3/12 lg:h-full",
        linkName : "Shop Now",
        linkHref : "/",
        image_link : shopnow1,
        image_alt : "shopnow1",
        imageStyle : ""
    },
    {
        id : 2,
        heading : "Purify with Aloe & Neem Glow",
        divStyle : "absolute top-[2rem] left-[30px] text-white text-center font-[600] space-y-2  mx-auto h-fit text-[25px] md:text-[40px] w-10/12",
        headingStyle : "",
        parentDiv : "lg:w-6/12 lg:h-full",
        linkName : "Shop Now",
        linkHref : "/",
        image_link : shopnow3,
        image_alt : "shopnow3",
        imageStyle : ""
    },
    {
        id : 3,
        heading : "Illuminate your Skin’s Glow with Face Serum",
        divStyle : "absolute top-[111px] left-[30px]  text-center font-[600] space-y-6  mx-auto h-fit text-[25px] md:text-[48px] w-10/12",
        headingStyle : "text-black",
        parentDiv : "lg:w-3/12 lg:h-full",
        linkName : "Shop Now",
        linkHref : "/",
        image_link : shopnow2,
        image_alt : "shopnow2",
        imageStyle : "",
        linkStyle : "text-black"
    },
]

export default ProductShopNow;