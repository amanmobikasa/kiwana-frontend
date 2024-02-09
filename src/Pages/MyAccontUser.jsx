import React from 'react'
import MyAccountInfo from '../Components/MyAccountInfo/MyAccountInfo';

const MyAccount = () => {
    return <>
    <section className='my-account-container w-full relative h-fit bg-[#FFF8F7] pb-[7.5rem] lg:pb-[3rem]'>
        <div className='inner-account-container w-11/12 lg:w-[93%] mx-auto h-fit'>
            <div className='content-container w-full h-fit'>
                <div className='heading-container w-full py-[4.5rem] lg:py-[4.3rem] text-center '>
                    <div>
                        <h1 className='text-[45px] text-[#363636] font-playfair font-[400] lg:text-[61px] '>My Account</h1>
                        <p className='text-[#646464] text-[15px] lg:text-[17px] font-[400] uppercase '><span>Home</span> / <span>My Account</span></p>
                    </div>
                </div>
                <div>
                    <MyAccountInfo />
                </div>
            </div>
        </div>
    </section>
    </>
}
export default  MyAccount;