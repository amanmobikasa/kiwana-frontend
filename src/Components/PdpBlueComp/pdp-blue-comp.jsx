import React from 'react'
import pdpBlueImg from '../../Assest/images/blueImg.png';

const PdpBlueComp = () => {
    return <>
    <section className='main-container w-full h-fit mt-8'>
        <div className="outer-container">
            <div className="inner-container w-full bg-[#78BDC0] h-full pb-[2rem]">
                <div  className='object-cover h-full w-full'>
                    <img src={pdpBlueImg} className='h-full w-full' alt="Unveil Brighter Eyes in the Blink of an Eye!" />
                </div>
                <div className='text-container w-full h-[20.5rem] relative'>
                    <div className='inner-text-container w-11/12 flex flex-col mx-auto text-center h-full items-center justify-center gap-y-2'>
                        <div className='w-full -space-y-1'>
                            <div className='w-10/12 mx-auto'>
                                <h3 className='text-[#276756] text-[14px] uppercase tracking-wide'>"Revitalize. Rejuvenate. Rapid Repair Under Eye Cream – </h3>
                            </div>
                            <div className='w-full '>
                                <h1 className='text-white text-[32px] font-[800] font-playfair '>Unveil Brighter Eyes in the Blink of an Eye!"</h1>
                            </div>
                        </div>
                        <div className=''>
                            <button className='bg-transparent px-12 py-3 text-white border-white border-[0.01rem] font-playfair uppercase font-[400] text-[14px] '>Shop Now</button>
                        </div>
                    </div>
                    {/* <div className='w-11/12 mx-auto '>
                       
                    </div> */}
                    
                </div>
            </div>
        </div>
    </section>
    </>
}
export default PdpBlueComp;