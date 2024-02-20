import { Accordion } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import { filterandshort_api } from './filterandshortJSON';
import MultiRangeSlider from "multi-range-slider-react";
import { useDispatch } from 'react-redux';
import { productFilter } from '../../Redux/reducer/filterProductSlice';
import '../../index.css';

const FilterAndShortDesktop = () => {
    const [showFilterValue, setShowFilterValue] = useState(filterSort);
    const [filterAndShortApi, setFilterAndShortApi] = useState(filterandshort_api)
    const [filterChangeValue, setFilterChangeValue] = useState([])
    const [filterBannerArrayState, setFilterBannerArrayState] = useState([])
    const dispatch = useDispatch();

    const handleFilterBanner = (event,dataObj) => {
        // console.log(dataObj)
        if(event.target.innerHTML === "Remove All"){
            setFilterBannerArrayState([]);
        }else{
            
        const updatedJson =  filterBannerArrayState?.filter((data)=> data.id !== dataObj.id)

        setFilterBannerArrayState(updatedJson)
        }
    }

    const handleFilterValue = (parentInputData) => {
        setFilterChangeValue([...filterChangeValue, parentInputData]);
      
        
    }
  

    useEffect(()=>{
        handleFilterBannerUpdate();
    },[filterChangeValue,filterAndShortApi])

    //handle banner updation based on filter checked.
    const handleFilterBannerUpdate = () => {
        const filterObj = [];
        let i = 0;
        const filterBannerArray = [];
        filterAndShortApi.map(product => {
          if(product.tabItems.some(tab => tab.default_check)) {
            filterObj.push(product);
          }
        });
      
        filterObj.map(product => {
          product?.tabItems?.map((items)=>{
            if(items?.default_check === true){
                 filterBannerArray.push({
                    id : i++,
                    filterName : product?.tabName,
                    filterValue : items?.input_value,
                    show : true
                })
            }
          })
        });
            dispatch(productFilter(filterBannerArray)) // sending the filter banner array of object to redux store.
            setFilterBannerArrayState(filterBannerArray)
      }

      
      

    return <>
        <section id='filter-and-short-desktop' className='hidden lg:block w-full h-fit relative overflow-auto'>
            <div className='content-container w-10/12 mx-auto  h-fit'>
                <div className="inner-container w-full">
                    <div className='filter-text-container'>
                        <div className='filter-text-container-inner'>
                            <div className='flex justify-between w-full'>
                                <h1 className='text-[20px] font-[600] text-[#363636]'>Filters</h1>
                                <a onClick={(event)=>handleFilterBanner(event, filterSort)} className='text-[16px] font-[400] underline capitalize '>Remove All</a>
                            </div>
                            <div className='banner-container flex flex-col gap-[16px] w-fit'>
                            {
                                filterBannerArrayState.map((data, i)=>{
                            return <>
                            
                             <button key={i} className='flex px-4 py-[1px] w-fit items-center justify-between bg-[#EEE] gap-3 md:gap-3 text-[#7E7E7E]'>
                            <div>
                                <span className='text-[15px] md:text-[1.5rem] lg:text-[14px] '>{data.filterName}: <span>{data.filterValue}</span></span>
                            </div>
                            <div onClick={(event)=>handleFilterBanner(event,data)}>
                                <RxCross1 className='text-[16px] md:text-[1.4rem] lg:text-[10px] '/>
                            </div>
                            </button>
                            </>
                        })
                    }  
                            </div>
                        </div>
                    </div>
                    {/* all accordion */}
                    {
                        filterAndShortApi.map((items, i)=>{
                            return <>
                            <div key={i} className='mt-[1.2rem]'>
                                <AccordionsComps inputItems={items} handleFilterValue={handleFilterValue} />
                            </div>
                            </>
                        })
                    } 
                </div>
            </div>
        </section>
    </>
}

// accordions 

const AccordionsComps = ({inputItems, handleFilterValue}) => {

    const handleFilterInputValue =(event, InputData, parentInputItems) => {
        const {name, value, checked} = event.target;
        console.log("inputData", InputData);
        // console.log("checked",checked)
        // console.log("parentInputItems : ", parentInputItems)
        if(InputData.input_name === name && parentInputItems){
            InputData.default_check = checked;
            if(InputData.default_check === checked){
                handleFilterValue(parentInputItems);
            }
        } 
    }

    // for pricehandle
    const handlePriceInputRange = (PriceRange) => {
        console.log('test')
        // const {minValue, maxValue} = PriceRange;
        // console.log("minValue : ", minValue, " maxValue : ", maxValue);
    }

    return <>
    <Accordion className='border-0 rounded-none h-fit '>
        <Accordion.Panel className='shadow-md drop-shadow-md'>
            <Accordion.Title className='py-3 first:rounded-t-none bg-[#FCEBE8] focus:ring-0 focus:ring-transparent hover:bg-nav-pink hover:text-white'>{inputItems.tabName} {inputItems.tabValue ? `(${inputItems.tabValue})` : null}  </Accordion.Title>
                <Accordion.Content>
                    <ul className='w-full container'>
                        <li>
                            <div className='main-container space-y-4'>
                                {
                                    inputItems.tabItems.map((sub_items, i)=>{
                                        {/* console.log("sub_ite,ms",sub_items.minPrice); */}
                                        return <>
                                        {sub_items?.input_type === "range" ?  <div className=''>
                                            <h5 className='text-[14px] text-[#363636] font-[500]'>The highest price is $80.00</h5>
                                        </div> : null}
                                        <div key={i} className='inner-container w-full flex justify-between items-center'>
                                            <label htmlFor="" className='flex gap-2 items-center justify-start w-full'>
                                                { sub_items?.input_type === "range" ? <RangeComponent  handlePrieChangeFunction="" />  :  <input onChange={(e)=> handleFilterInputValue(e, sub_items, inputItems)} checked={sub_items?.default_check} type={sub_items?.input_type} name={sub_items?.input_name} value={sub_items?.input_value}  className='accent-nav-pink ' />   }
                                                <p className='text-[16px] text-[#363636] font-[500]'>{sub_items?.input_label}</p>
                                            </label>
                                           {sub_items?.input_type === "range" ? null : <div>
                                                <h3 className='text-[14px]'>({sub_items?.input_item_value})</h3>
                                            </div>}
                                        </div>
                                        {sub_items?.input_type === "range" ?  <div className=''>
                                            <h5 className='text-[14px] text-[#363636] font-[500]'>Price: $<span>0</span> - $<span>80</span></h5>
                                        </div> : null}
                                        </>
                                    })
                                }
                                
                            </div>
                        </li>
                    </ul>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    </>
}

const RangeComponent = () => {
    const [priceRange, setPriceRange] = useState({
        minValue : 0,
        maxValue : 80,
    });

    const handlePrieChange = (event) =>{
      setPriceRange({minValue : event.minValue, maxValue : event.maxValue});
      console.log(priceRange); 
    }
    return <>
        <MultiRangeSlider
        className=' w-full price-container'
			min={0}
			max={120}
			step={1}
			minValue={priceRange.minValue}
			maxValue={priceRange.maxValue}
			onChange={handlePrieChange}
            ruler={false}
            label={false}
            barLeftColor='gray'
            barRightColor='gray'
            barInnerColor='pink'
            thumbLeftColor='pink'
            thumbRightColor='pink'
		/>
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
        filterName : "Product Type",
        filterValue : "Hair & Skin",
        show : true,
    },
    
] 
export default FilterAndShortDesktop;