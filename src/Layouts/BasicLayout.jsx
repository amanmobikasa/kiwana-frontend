import React, { memo } from 'react'

export default memo(function BasicLayout({children}) {
  return (
    <>
        <section id='signup-page' className='bg-white w-full relative h-fit '>
            <div className='inner-container w-11/12 mx-auto bg-[#FFF8F7] pb-[3rem] h-full '>
                <div className='content-container w-full flex justify-center items-center mt-[80px] lg:my-0 lg:pt-[80px] lg:bg-[#FFF8F7]'>
                    {children}
                </div>
                <div className='content-container w-6/12 mx-auto flex justify-center mb-[2rem] relative gap-x-3'>
                </div>
            </div>
        </section>
    </>
  )
});
