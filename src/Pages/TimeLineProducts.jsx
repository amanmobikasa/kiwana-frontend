import React, { memo } from 'react'
import BasicLayout from '../Layouts/BasicLayout';
import Timelinecomp from '../Components/TimelineComp/Timelinecomp';

const TimeLineProducts =()=> {

  const handleCancelOrder = memo(() => {
    
  })

  return (
    <>
        <BasicLayout> 
            <div className='w-11/12 mx-auto space-y-[6rem]'>
              <div className=''>
                  <h1 className='text-nav-pink text-[50px] font-[400] text-center font-playfair lg:text-[58px]'>Order Status</h1>
              </div>
              <div className='container-timeline w-full h-full'>
                  <Timelinecomp />
              </div>
              <div className='w-full inline-flex justify-center gap-6'>
                <div>
                  <button className='bg-nav-pink px-8 py-3 text-white font-[500] hover active:bg-transparent active:text-nav-pink active:border-nav-pink border-[0.01rem]'>Edit Order</button>
                </div>
                <div>
                  <button onClick={handleCancelOrder} className='bg-transparent border-[0.01rem] border-nav-pink px-8 py-3 active:bg-nav-pink active:text-white'>Cancel Order</button>
                </div>
                
              </div>
            </div>
        </BasicLayout>
    </>
  )
}

export default memo(TimeLineProducts);
