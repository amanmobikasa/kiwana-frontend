import React from 'react'
import collectionimg1 from '../../Assest/images/collection1.png';
import collectionimg2 from '../../Assest/images/collectiondesktop1.png';
const CollectionLandingComp = () => {

    return <>
        <div className='w-full h-fit relative '>
            <div className='w-full h-fit mx-auto space-y-[2.5rem] md:space-y-[4.3rem]'>
                <div className='text-center w-full -space-y-1 '>
                    <h1 className='text-[4.5rem] font-[400] font-playfair text-[#363636] md:text-[7rem] lg:text-[58px]'>Skin</h1>
                    <p className='text-[16px] font-[400] uppercase tracking-widest text-[#646464] md:text-[1.7rem] md:tracking-wideest md:font-bold lg:text-[14px] lg:font-[400]'>Home / Skin</p>
                </div>
                <div className='w-full h-[32rem] lg:h-[25rem] md:h-fit bg-[#FCEBE8] p-[15px] md:p-[2.3rem] relative'>
                    <div className='w-full h-full lg:flex lg:flex-row-reverse border-[0.01rem] border-nav-pink border-dashed space-y-[20px] md:space-y-[1rem] z-10'>
                        <div className='object-contain w-full h-fit z-0'>
                            <img src={collectionimg1} className='w-full h-fit lg:hidden' alt='' />
                            <img src={collectionimg2} className='w-full h-fit hidden lg:block' alt='' />
                        </div>
                        <div className='text-center w-full h-auto lg:flex lg:flex-col lg:justify-center lg:gap-6'>
                            <div>
                                <h1 className='font-montycarlo text-[50px] md:text-[5rem] lg:text-[3rem] lg:tracking-wider'>Indulge in Radiance </h1>
                            </div>
                            <div className='w-11/12 lg:w-10/12 mx-auto '>
                                <p className='text-[25px] font-[300] text-[#0A6F66] md:text-[2.5rem] lg:text-[2rem]'>“Glow Up with Exclusive Discounts on Luxe Skincare!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default CollectionLandingComp;  