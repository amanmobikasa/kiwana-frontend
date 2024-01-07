import React from 'react'
import productImg1 from '../Assest/images/pdppopupimg1.png';
import { FaRegStar } from "react-icons/fa";
import { LuMinus, LuPlus } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const PdpPopup = () => {
    return <>
    <section className='h-[150vh] w-full bg-black bg-opacity-45 absolute top-0 left-0 z-10'>
        <div className=' w-full h-full'>
            <div className='inner-container relative flex items-center justify-center w-full h-full'>
                <article className='w-10/12 h-[90vh] bg-white relative overflow-hidden z-20 '>
                    <div className='w-full h-full grid grid-cols-5 justify-between gap-0'>
                        {/* for image div */}
                        <div className='col-span-2 w-full h-full relative'>
                            <div className='object-contain'>
                                <img src={productImg1} className='h-full w-full' alt="<product_title>" />
                            </div>
                        </div>
                        {/* for product div */}
                        <div className='col-span-3 w-full h-full relative'>
                            <div className='inner-container-pdp-text  w-full h-full p-[2.5rem] px-[4.6rem]'>
                                <div className='content-container w-full h-full space-y-3 '>
                                    <div>
                                        <h1 className='text-[43px] font-[600] font-playfair '>Ultra Brightening Face Serum</h1>
                                    </div>
                                    <div>
                                        <h4 className='font-[400] text-[30px]'>$340</h4>
                                    </div>
                                    <div>
                                        <div className='w-full flex h-fit justify-start items-center pt-[1rem] gap-1'>
                                            <div>
                                                <FaRegStar className='text-nav-pink text-2xl fill-nav-pink'/>
                                            </div>
                                            <div>
                                                <FaRegStar className='text-nav-pink text-2xl'/>
                                            </div>
                                            <div>
                                                <FaRegStar className='text-nav-pink text-2xl'/>
                                            </div>
                                            <div>
                                                <FaRegStar className='text-nav-pink text-2xl'/>
                                            </div>
                                            <div>
                                                <FaRegStar className='text-nav-pink text-2xl'/>
                                            </div>
                                            <div>
                                                <span className='text-[#363636]'>(212)</span>
                                            </div>
                                        </div>
                                        <div className='pt-4'>
                                            <p className=''>Only Item is <span>56</span> In stock!</p>
                                        </div>
                                    </div>
                                    <div className='pt-3 w-11/12'>
                                        <input type="range" className='w-full h-[0.5rem] bg-nav-pink outline-none border-none ' min="50" max="100" value="0" step="1" />
                                    </div>
                                    <div className='grid grid-cols-4 items-center w-full h-fit justify-center space-y-2 text-[#363636]'>
                                        <div className='w-fit h-fit relative'>
                                            <label htmlFor="" className='flex w-fit items-center gap-2'>
                                                <input type="radio" className='w-5 h-5 border-nav-pink ' name="addition" id="" />
                                                <p className='text-[14px]'>saffron</p>
                                            </label>
                                        </div>
                                        <div className='w-fit h-fit relative'>
                                            <label htmlFor="" className='flex w-fit items-center gap-2'>
                                                <input type="radio" className='w-5 h-5 border-nav-pink ' name="addition" id="" />
                                                <p className='text-[14px]'>Hyaluronic Acid</p>
                                            </label>
                                        </div>
                                        <div className='w-fit h-fit relative'>
                                            <label htmlFor="" className='flex w-fit items-center gap-2'>
                                                <input type="radio" className='w-5 h-5 border-nav-pink ' name="addition" id="" />
                                                <p className='text-[14px]'>Ferulic Acid</p>
                                            </label>
                                        </div>
                                        <div className='w-fit h-fit relative'>
                                            <label htmlFor="" className='flex w-fit items-center gap-2'>
                                                <input type="radio" className='w-5 h-5 border-nav-pink ' name="addition" id="" />
                                                <p className='text-[14px]'>Vitamin C</p>
                                            </label>
                                        </div>
                                        <div className='w-fit h-fit relative'>
                                            <label htmlFor="" className='flex w-fit items-center gap-2'>
                                                <input type="radio" className='w-5 h-5 border-nav-pink ' name="addition" id="" />
                                                <p className='text-[14px]'>Vitamin E</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='weight-container w-full pt-2'>
                                        <div className='inner-container w-full h-full space-y-2'>
                                            <div>
                                                <h1 className='text-[24px] font-[600] font-playfair text-[#363636]'>Weight</h1>
                                            </div>
                                            <div className='flex w-full justify-start items-center gap-2'>
                                                <div>
                                                    <button className='px-4 py-2 bg-[#363636] text-white'>40 ml</button>
                                                </div>
                                                <div>
                                                    <button className='px-4 py-2 bg-nav-pink text-white'>40 ml</button>
                                                </div>
                                                <div>
                                                    <button className='px-4 py-2 bg-nav-pink text-white'>40 ml</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='quantity-container w-full h-fit pt-2'>
                                        <div className='inner-container w-full relative h-fit space-y-2'>
                                            <div>
                                                <h1 className='text-[24px] text-[#363636] font-playfair font-[600]'>Quanity</h1>
                                            </div>
                                            <div className='button-container flex w-full h-fit gap-[1rem] items-center justify-between'>
                                                <div className='w-4/12 h-fit relative '>
                                                    <div className='w-full h-fit py-2 px-6 flex justify-center items-center border-[0.01rem] border-[#363636]'>
                                                        <button>
                                                            <LuMinus className='text-[1rem] text-[#363636] font-thin'/>
                                                        </button>
                                                        <input type="text" value={"1"} className='bg-transparent text-[#363636] border-none w-5/12 mx-auto focus:outline-none text-center text-[1.4rem]' />
                                                        <button>
                                                            <LuPlus className='text-[1rem] text-[#363636] font-thin'/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className='w-8/12 h-fit relative '>
                                                    <button className='w-11/12 py-3 flex items-center justify-center gap-3 border-[0.01rem] border-[#363636]'>
                                                        
                                                            <HiOutlineShoppingBag className='text-[1.4rem] text-[#363636]'/>
                                                            <span className='text-[20px] text-[#363636] '>Add to cart</span>
                                                       
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full h-fit relative'>
                                        <button className='w-full bg-nav-pink text-[20px] font-[500] text-center py-3 text-white uppercase'>Buy now</button>
                                    </div>
                                    <div>
                                        <a href="" className='text-[14px] underline underline-offset-2 text-[#363636] flex items-center gap-1'>View Full Details <span> <IoIosArrowRoundForward className='text-[24px] ' /> </span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-[1rem] right-[1rem] w-fit h-fit'>
                        <div className='p-3 rounded-full bg-[#FFF7F3]'>
                            <RxCross1 className='text-[20px] text-[#363636]  '/>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    </>
}
export default PdpPopup;