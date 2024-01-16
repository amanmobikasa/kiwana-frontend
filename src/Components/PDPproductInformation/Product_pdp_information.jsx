import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { LuMinus, LuPlus } from 'react-icons/lu';
import pdpImage2 from '../../Assest/images/pdp_image_2.png';
import pdpImage3 from '../../Assest/images/pdp_image_3.png';
import pdpImage4 from '../../Assest/images/pdp_image_4.png';
import play from '../../Assest/images/play.png';
import { Accordion } from 'flowbite-react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const ProductPdpInformationComp = () => {

    const [itemCount, setItemCount] = useState(1);

    return <>
        <article className='product-information-comp w-full h-full relative overflow-hidden'>
            <div className="outer-container">
                <div className="inner-container space-y-2">
                    <div className='text-left text-[#999]'>
                        <p className='uppercase text-[13px] tracking-widest'><span>Home</span> / Ultra Brightening Face Serum</p>
                    </div>
                    <div className='product_title-container w-full h-full relative'>
                        <div className='space-y-2'>
                            <div>
                                <h1 className='text-[25px] font-playfair text-[#363636] font-[600]'>Ultra Brightening Face Serum</h1>
                            </div>
                            <div>
                                <p className='text-[25px] font-[400]'>$350</p>
                            </div>
                            <div className='flex justify-start items-center gap-1 w-full'>
                                <FaStar className='text-nav-pink  text-xl' />
                                <FaStar className='text-nav-pink  text-xl' />
                                <FaStar className='text-nav-pink  text-xl' />
                                <FaStar className='text-nav-pink  text-xl' />
                                <FaStar className='text-nav-pink  text-xl' />
                                <p className='text-[12px] text-[#999]'>(212)</p>
                            </div>
                            <div className='range-container w-full pt-4 space-y-3'>
                                <div>
                                    <h6 className='text-xs font-[400] text-[#363636] '>Only 56 items in stock!</h6>
                                </div>
                                <div className='w-full bg-gray-200 h-[0.60rem] rounded-full'>
                                    <div className='h-full w-[60%] bg-nav-pink rounded-full'></div>
                                </div>
                            </div>
                            <div className='weight-container pt-4 w-full space-y-2 h-fit'>
                                <div>
                                    <h1 className='text-[#363636] font-playfair text-[18px] '>Weight</h1>
                                </div>
                                <div className='flex w-full justify-start gap-2 '>
                                    <div>
                                        <button className='text-xs text-white bg-[#363636] px-5 py-2'>30ml</button>
                                    </div>
                                    <div>
                                        <button className='text-xs text-[#363636] bg-[#E8968933] px-5 py-2'>50ml</button>
                                    </div>
                                    <div>
                                        <button className='text-xs text-[#363636] bg-[#E8968933] px-5 py-2'>100ml</button>
                                    </div>
                                </div>
                            </div>
                            <div className='quantity-container w-full h-fit  pt-3'>
                                        <div className='inner-container w-full relative h-fit space-y-2'>
                                            <div>
                                                <h1 className='lg:text-[24px] text-[#363636] font-playfair font-[600] text-[20px]'>Quanity</h1>
                                            </div>
                                            <div className='button-container flex w-full h-fit gap-[1.3rem] lg:items-center lg:justify-between  lg:space-y-0'>
                                                <div className='lg:w-4/12 w-7/12 h-fit relative '>
                                                    <div className='w-auto h-fit py-[1px] px-6 flex justify-between items-center border-[0.01rem] border-[#E89689]'>
                                                        <button onClick={()=> itemCount <= 0 ? alert("minimum one product is selected!") : setItemCount(itemCount - 1)}>
                                                            <LuMinus className='text-[1rem] text-[#E89689] font-thin'/>
                                                        </button>
                                                        <input type="text" value={itemCount} className='bg-transparent text-[#E89689] border-none w-8/12 mx-auto focus:outline-none text-center text-[14px]' />
                                                        <button onClick={()=> setItemCount(itemCount + 1)}>
                                                            <LuPlus className='text-[1rem] text-[#E89689] font-thin'/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className='lg:w-8/12 w-full  h-fit relative '>
                                                    <button className='w-full py-2 flex items-center justify-center gap-3 border-[0.01rem] border-[#E89689]'>
                                                        
                                                            <HiOutlineShoppingBag className='text-[16px] text-[#E89689]'/>
                                                            <span className='text-[16px] text-[#E89689] '>Add to cart</span>
                                                       
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                            <div className='w-full h-fit pt-2'>
                                <button className='text-white w-full py-2 bg-nav-pink hover:bg-transparent hover:text-nav-pink hover:border-nav-pink border-[0.01rem]'>BUY NOW</button>
                            </div>
                            <div className='product-image-div w-full h-fit pt-2'>
                                <div className='flex justify-start items-center gap-[0.80rem]'>
                                    {/* item 1 */}
                                    <div className='h-fit w-fit rounded-full relative'>
                                        <div className='object-contain h-[110px] w-[110px]'>
                                            <img src={pdpImage2} className='h-full w-full rounded-full' alt="" />
                                            
                                        </div>
                                        <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center object-contain'>
                                            <img src={play} className='h-[2rem] w-[2rem]' alt=''/>
                                        </div>
                                    </div>
                                    <div className='h-fit w-fit rounded-full relative'>
                                        <div className='object-contain h-[110px] w-[110px]'>
                                            <img src={pdpImage2} className='h-full w-full rounded-full' alt="" />
                                            
                                        </div>
                                        <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center object-contain'>
                                            <img src={play} className='h-[2rem] w-[2rem]' alt=''/>
                                        </div>
                                    </div>
                                    <div className='h-fit w-fit rounded-full relative'>
                                        <div className='object-contain h-[110px] w-[110px]'>
                                            <img src={pdpImage2} className='h-full w-full rounded-full' alt="" />
                                            
                                        </div>
                                        <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center object-contain'>
                                            <img src={play} className='h-[2rem] w-[2rem]' alt=''/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* accordion */}
                            <div className='accordion-container w-full h-fit relative pt-6'>
                                <AccordionPDP />
                                <AccordionPDP />
                            </div>
                            {/* icons div */}
                            <div className='flex items-center justify-start gap-3 mx-2 pt-2'>
                            {
                                iconsArray.map((data, i)=>{
                                    return <>
                                    <NavLink key={i} to={data.href}>
                                        {data.icon}
                                    </NavLink>
                                    </>
                                })
                            }
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </article>
    </>

}

const AccordionPDP = () => {
    return <>
        <div className='w-full h-fit relative overflow-hidden'>
            <div className='outer-container relative w-full h-fit'>
            <Accordion  collapseAll className='bg-transparent border-y-[0.01rem] border-x-0 border-nav-pink rounded-none'>
                <Accordion.Panel arrowIcon={"a"}>
                    <Accordion.Title arrowIcon={<InfoIcon/>} className='flex w-full items-center '>
                        <h6 className='text-[14px] font-playfair text-[#363636] font-[600]'>Description</h6>
                        {/* <p><InfoIcon /></p> */}
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 ">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                            has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the
                            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Figma design system
                            </a>
                            based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    </>
}


const InfoIcon = () => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M8.49988 6.06866C8.0776 6.06866 7.77734 6.24697 7.77734 6.5097V10.0848C7.77734 10.31 8.07763 10.5352 8.49988 10.5352C8.90336 10.5352 9.23177 10.31 9.23177 10.0848V6.5097C9.23177 6.24697 8.90336 6.06866 8.49988 6.06866Z" fill="#E89689"/>
            <path d="M8.49992 3.86356C8.06828 3.86356 7.73047 4.17321 7.73047 4.52978C7.73047 4.88634 8.06828 5.20539 8.49992 5.20539C8.9222 5.20539 9.26 4.88634 9.26 4.52978C9.26 4.17324 8.92216 3.86356 8.49992 3.86356Z" fill="#E89689"/>
            <path d="M8.5 0C4.46243 0 1.19531 3.26546 1.19531 7.30047C1.19531 10.5953 3.36457 13.331 6.28924 14.2601L7.95046 16.7088C8.07404 16.8909 8.27986 17 8.5 17C8.72014 17 8.92596 16.8909 9.04954 16.7088L10.7108 14.2601C13.6367 13.3306 15.8047 10.5938 15.8047 7.30047C15.8047 3.2629 12.5349 0 8.5 0ZM10.1152 13.0521C9.96393 13.0944 9.83261 13.1889 9.74445 13.3188L8.5 15.1531L7.25558 13.3189C7.16739 13.1889 7.03607 13.0944 6.88483 13.0521C4.39533 12.356 2.52344 10.0666 2.52344 7.30047C2.52344 4.00729 5.20452 1.32812 8.5 1.32812C11.7955 1.32812 14.4766 4.00729 14.4766 7.30047C14.4766 10.0693 12.6019 12.3568 10.1152 13.0521Z" fill="#E89689"/>
        </svg>
    </>
}

const iconsArray = [
    {
        id : 1,
        icon : <FaFacebookF className='text-[20px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
    {
        id : 2,
        icon : <FaInstagram className='text-[20px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
    {
        id : 3,
        icon : <FaXTwitter className='text-[20px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
    {
        id : 4,
        icon : <IoShareSocial className='text-[20px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
]

export default ProductPdpInformationComp;