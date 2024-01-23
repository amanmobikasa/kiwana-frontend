import React from 'react'

const OrderInstructionCart = () => {
    return <>
    <section className='order-instruction-container w-full relative h-fit mt-[3rem] lg:mt-[3.5rem] '>
        <div className='content-container w-full h-fit'>
            <div className='inner-container px-1 space-y-[2.4rem] lg:space-y-0  lg:flex lg:justify-between lg:items-start lg:gap-x-[80px]'>
                <div className='space-y-4 lg:w-full'>
                    <div>
                        <h6 className='text-[16px] font-[500] text-[#363636] lg:text-[20px] '>Order Instructions</h6>
                    </div>
                    <div className='lg:w-full'>
                        <textarea className='w-full border-nav-pink bg-transparent resize-none'  name="" id=""  rows="5"></textarea>
                    </div>
                </div>
                <div className='main-container-subtotal text-center lg:text-right  w-full lg:max-w-max h-fit '>
                    <div className='inner-container-subtotal space-y-2'>
                        <div className='flex items-center lg:items-start justify-center lg:justify-end gap-[4.3rem] lg:gap-[7rem]'>
                            <div>
                                <h5 className='text-[20px] font-[600] text-[#363636] '>Subtotal</h5>
                            </div>
                            <div>
                                <h5 className='font-[600] text-[20px] text-[#363636]'>$<span className='font-[400]'>700</span></h5>
                            </div>
                        </div>
                        <div>
                            <p className='text-[16px] lg:text-[15px] text-[#999] font-[400] '>Taxes and shipping calculated at checkout</p>
                        </div>
                        <div className='w-7/12 mx-auto lg:w-full flex justify-center lg:justify-end pt-1 lg:pt-6'>
                            <button className='uppercase lg:w-8/12 w-full bg-nav-pink text-white tracking-widest font-[400] lg:text-[19px] py-3'>check out</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </>
}

export default OrderInstructionCart;
