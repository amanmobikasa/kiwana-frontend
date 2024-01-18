import React from 'react'
import pdpBlueImg from '../../Assest/images/blueImg.png';
import pdpBlueImgDesktop from '../../Assest/images/blue_pdp_img_desktop.png';

const PdpBlueComp = () => {
    return <>
    <section className='main-container w-full h-fit mt-8 lg:mt-[5.5rem]'>
        <div className="outer-container">
            <div className="inner-container w-full bg-[#78BDC0] h-full  pb-[2rem] lg:pb-0 lg:flex lg:flex-row-reverse ">
                <div  className='object-cover h-full w-full'>
                    <img src={pdpBlueImg} className='h-full w-full lg:hidden' alt="Unveil Brighter Eyes in the Blink of an Eye! " />
                    <img src={pdpBlueImgDesktop} className='h-full w-full hidden lg:block' alt="Unveil Brighter Eyes in the Blink of an Eye! " />
                </div>
                <div className='text-container w-full  h-[20.5rem] lg:h-[29.5rem]  relative'>
                    <div className='inner-text-container w-11/12 lg:w-9/12 flex flex-col mx-auto text-center  h-full items-center justify-center gap-y-2'>
                        <div className='w-full -space-y-1 '>
                            <div className='w-10/12 mx-auto lg:w-full'>
                                <h3 className='text-[#276756] text-[14px] lg:text-[19px] uppercase tracking-wide'>"Revitalize. Rejuvenate. Rapid Repair Under Eye Cream – </h3>
                            </div>
                            <div className='w-full lg:w-11/12 mx-auto'>
                                <h1 className='text-white text-[32px] lg:text-[34px] font-[800] font-playfair '>Unveil Brighter Eyes in the Blink of an Eye!"</h1>
                            </div>
                        </div>
                        <div className='lg:mt-4'>
                            <button className='bg-transparent px-12 lg:px-14 py-3 text-white border-white border-[0.01rem] font-playfair uppercase font-[400] text-[14px] lg:text-[20px]'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}
export default PdpBlueComp;