import React, {  useEffect, useState } from 'react'

const MyAccountInfo = () => {
    const [tabNav, setTabNav] = useState([])

    useEffect(()=>{
        setTabNav([...tabButton]);
    },[tabButton])

    const handleTabNav = (event, tab_button) => {
        const updatedTabs = tabNav.map((tab) => ({
            ...tab,
            active: tab.tabId === tab_button.tabId,
        }));
    
        setTabNav(updatedTabs);

    }
    // console.log("tabButton", tabNav);

    return <>
    <section className='main-container-myaccount-info relative w-full h-fit '>
        <div className='inner-container-my-account-info'>
            <div className='content-container-my-account-info '>
                <div className='py-3 lg:py-0'>
                    <p className='text-[#363636] text-[16px] font-[600] lg:text-[19px]'>Hello, Soumya M welcome to your dashboard!</p>
                </div>
                <div className='w-full border-t-[0.01rem] py-5 lg:py-8'>
                    <div className='inner-container w-full h-fit'>
                    <div className='lg:flex lg:justify-start lg:gap-[80px] space-y-6'>
                            <div className='account-details-container lg:w-2/12'>
                                <div className='flex w-full flex-col gap-y-4 lg:gap-y-[10px]'>
                                {
                                    tabNav.map((tab_button, i)=>{
                                        
                                        return <>
                                        <div key={i}>
                                            <button onClick={(event)=>handleTabNav(event, tab_button)} className={`text-left w-[57%] lg:w-full lg:text-[19px] py-[12px] ${tab_button?.active ? "bg-nav-pink text-white" : "bg-white text-[#363636]"}`}><span className='px-8 lg:px-6'>{tab_button?.heading}</span></button>
                                        </div>
                                        </>
                                    })
                                }
                                    
                                    {/* <div>
                                        <button className='text-left w-[57%]  lg:w-full lg:text-[19px] py-[12px] bg-white  text-[#363636]'><span className='px-8 lg:px-6'>Addresses</span></button>
                                    </div>
                                    <div>
                                        <button className='text-left w-[57%] lg:w-full lg:text-[19px]  py-[12px] bg-white text-[#363636]'><span className='px-8 lg:px-6'>Logout</span></button>
                                    </div> */}
                                </div>
                                <div className='user-account-details w-full mt-[2rem] lg:mt-[1.6rem] mx-1 lg:mx-0'>
                                    <div className='inner-container space-y-[2rem]'>
                                        <div className='space-y-3 lg:space-y-1'>
                                            <div>
                                                <h1 className='text-[20px] font-[600] text-[#363636] lg:text-[27px]'>Account Details</h1>
                                            </div>
                                            <div className='space-y-1 lg:space-y-0'>
                                                <p className='text-[15px] font-[400] text-[#363636] lg:text-[19px]'>Soumya M</p>
                                                <p className='text-[15px] font-[400] text-[#363636] lg:text-[19px]'>India</p>
                                            </div>
                                            <div className='lg:pt-5'>
                                                <a href="" className='text-[#363636] underline underline-offset-2 lg:text-[19px]'>View addresses <span>(1)</span></a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='order-history-container'>
                                <div className='inner-container space-y-3'>
                                {
                                    tabNav.map((tabActive , i)=>{
                                        if(tabActive.active && tabActive?.tabId === 1){
                                            return <>
                                            <div className='tab1-container'>
                                                <div>
                                                    <h1 className='text-[20px] font-[600] text-[#363636] lg:text-[27px] lg:font-[600]'>Order History</h1>
                                                </div>
                                                <div>
                                                    <p className='text-[#363636] text-[16px] font-[400] lg:text-[19px] '>You haven't olaced any orders yet.</p>
                                                </div>
                                            </div>
                                            </>
                                        }
                                        if(tabActive.active && tabActive?.tabId === 2){
                                            return <h1>user address</h1>
                                        }
                                        if(tabActive.active && tabActive?.tabId === 3){
                                            return <> <h1>Logout</h1> </>
                                        }

                                    })
                                }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}


const tabButton = [
    {
        tabId : 1,
        heading : "Dashboard",
        active : true
    },
    {
        tabId : 2,
        heading : "Addresses",
        active : false
    },
    {
        tabId : 3,
        heading : "Logout",
        active : false
    }
]

export default MyAccountInfo;