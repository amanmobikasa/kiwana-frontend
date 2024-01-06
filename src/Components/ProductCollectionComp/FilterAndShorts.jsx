import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";


const FilterShortCollection = () => {

    const [showFilterValue, setShowFilterValue] = useState(filterSort);

    const handleFilterBanner = (event, dataObj) => {
        const remove = event.target.innerHTML;
        if(remove === "Remove All"){
            setShowFilterValue([]);
        }else{
        const updatedJson = showFilterValue.filter((data)=> data.id !== dataObj.id)
        setShowFilterValue(updatedJson)
        }
    }


return <>
        <div className='mt-[30px] md:mt-[4rem] w-full lg:w-full relative h-fit lg:hidden'>
            <div className='w-full content-container h-fit'>
                <div className='inner-container '>
                    <div className='flex justify-between w-full items-center'>
                        <div className=''>
                            <button className='bg-[#FCEBE8] text-[18px] text-black px-6 py-2 md:px-[2.5rem] md:py-3.5 md:text-[2rem] flex items-center gap-3'>
                                <div>
                                    <svg className='md:h-[2rem] md:w-[2rem]' xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                                        <path d="M14 2.5H1" stroke="#363636" stroke-linecap="round"/>
                                        <path d="M14 9.5H1" stroke="#363636" stroke-linecap="round"/>
                                        <path d="M10.5 11.5C11.6046 11.5 12.5 10.6046 12.5 9.5C12.5 8.39543 11.6046 7.5 10.5 7.5C9.39543 7.5 8.5 8.39543 8.5 9.5C8.5 10.6046 9.39543 11.5 10.5 11.5Z" fill="#FCEBE8" stroke="#363636"/>
                                        <path d="M4.5 4.5C5.60457 4.5 6.5 3.60457 6.5 2.5C6.5 1.39543 5.60457 0.5 4.5 0.5C3.39543 0.5 2.5 1.39543 2.5 2.5C2.5 3.60457 3.39543 4.5 4.5 4.5Z" fill="#FCEBE8" stroke="#363636"/>
                                    </svg>
                                </div>
                                <span>Filter and sort</span>
                            </button>
                        </div>
                        <div>
                            <h1 className='text-[20px] text-black  font-[600] md:text-[2rem]'><span>10</span> Product</h1>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap gap-3 md:gap-5 items-center mt-[26px] md:mt-[2.5rem]'>
                    {
                        showFilterValue.map((data, i)=>{
                            return <>
                            
                             <button  key={i} className='flex px-4 py-1 items-center justify-between bg-[#EEE] gap-3 md:gap-3 text-[#7E7E7E]'>
                            <div>
                                <span className='text-[15px] md:text-[1.5rem]'>{data.filterName}: <span>{data.filterValue}</span></span>
                            </div>
                            <div onClick={(event)=>handleFilterBanner(event, data)}>
                                <RxCross1 className='text-[16px] md:text-[1.4rem]'/>
                            </div>
                            </button>
                            </>
                        })
                    }  
                        <a onClick={(event)=>handleFilterBanner(event)} className='underline text-[15px] md:text-[1.5rem]'>Remove All</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

 const filterSort = [
        {
            id : 1,
            filterName : "Availability",
            filterValue : "In Stock",
            show : true,
        },
        {
            id : 2,
            filterName : "Price",
            filterValue : "$5.00 - $80.00",
            show : true,
        },
        {
            id : 3,
            filterName : "Product Type",
            filterValue : "Hair & Skin",
            show : true,
        },
        
    ] 

export default FilterShortCollection;

