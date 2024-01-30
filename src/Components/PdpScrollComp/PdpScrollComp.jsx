import { Dropdown } from 'flowbite-react'
import { calcLength } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { LuMinus, LuPlus } from 'react-icons/lu'
import { useSelector } from 'react-redux'

const PdpScrollComp = () => {
        const [itemCount, setItemCount] = useState({
            productId: "",
            productCount: 1,
        })
        const [pdpInformationData, setPdpInformationData] = useState()
        const [weightDropdown, setWeightDropdown] = useState([]);


        const pdp_information_data = useSelector(state => state.pdpProductData.pdpData);

        useEffect(()=>{
            setPdpInformationData(pdp_information_data)
            // setWeightDropdown(pdp_information_data.product_weight)
        },[pdp_information_data])

        console.log("pdpInfoData", pdpInformationData);

        useEffect(()=>{
            if(pdpInformationData && pdpInformationData.product_weight){
                setWeightDropdown(pdpInformationData.product_weight); 
            }
        },[pdpInformationData])

        

        // console.log("testest", pdpInformationData)
        // console.log("product_weight : ", weightDropdown)

        const handleProductQuantity = (event, type, productID) => {
            let newCount;
        
            if (type === "increment") {
                newCount = Math.min(itemCount.productCount + 1, pdpInformationData.product_stock);
            } else if (type === "decrement") {
                newCount = Math.max(itemCount.productCount - 1, 0);
            }
        
            setItemCount({ productId: productID, productCount: newCount });
        
            if (newCount >= pdpInformationData.product_stock) {
                alert(`Quantity can't be more than ${pdpInformationData.product_stock}`);
            } else if (newCount < 0) {
                alert("Quantity can't be negative");
            }
    
            // now dispatch the state to the addtocart reducer
        };

        // handle selected weight of dropdown
        const handleSelectedWeight = (event, weightObject) => {
            console.log("weightOject : ", weightObject);
            if(weightObject && weightDropdown){
                const updatedWeightDropdown = weightDropdown.map((weight_obj)=>{
                    if(weight_obj.weight_label === weightObject.weight_label){
                        return { ...weight_obj , selected : true }
                        // console.log("testest", weight_obj);
                    }
                    return { ...weightObject, selected : false }
                })

                setWeightDropdown(updatedWeightDropdown);
                console.log("testest", weightDropdown);
            }
        }

        const label = weightDropdown.find(item => item.selected === true)?.weight_label || "30ml - $600"; // getting the current selected label of dropdown
        
        

    return <>
        <section className='main-container w-full h-[8.5rem] lg:h-fit lg:py-1 border-t-[0.01rem] border-nav-pink bg-white fixed bottom-0 left-0 z-50'>
            <div className='inner-container'>
                <div className="content-container w-full h-full">
                    <div className='px-[25px] py-[15px] w-full h-full '>
                        <div className='w-11/12 mx-auto lg:flex lg:gap-[3rem] lg:justify-between lg:space-y-0 h-full space-y-3'>
                            <div className='w-full lg:flex lg:items-center  lg:justify-center lg:gap-[4rem] lg:w-6/12  h-fit  dropdown-container'>
                                <div className='text-[25px] lg:w-8/12 font-playfair font-[400] text-[#363636] hidden lg:block'>
                                    <h1>Ultra Brightening Face Serum</h1>
                                </div>
                                <div className='lg:w-4/12'>
                                    <Dropdown className='rounded-none group-hover:bg-nav-pink group-hover:text-white' label={"300ml - $200"}   dismissOnClick={false}>
                                        {
                                            weightDropdown?.map((items, i)=>{
                                                return <>
                                                    <Dropdown.Item onClick={(event)=>handleSelectedWeight(event, items)} key={i}>{items.weight_label} - $300</Dropdown.Item>
                                                </>
                                            })
                                        }
                                        
                                    </Dropdown>
                                </div>
                                
                            </div> 
                             <div className='lg:w-6/12 mx-auto '>        
                                <div className='flex justify-center w-full gap-2 lg:gap-[3rem] items-center lg:justify-evenly'>
                                    <div id='item-count-container' className='w-6/12 lg:w-4/12 h-fit py-[1px] lg:py-[2px] px-6 flex justify-between items-center border-[0.01rem] border-[#E89689]'>
                                        <button onClick={(event)=> handleProductQuantity(event, "decrement", parseInt(pdpInformationData.pdp_link))}>
                                            <LuMinus className='text-[1rem] text-[#E89689] font-thin'/>
                                        </button>
                                        <input type="text" value={pdpInformationData?.product_quantity ? pdpInformationData.product_quantity : itemCount.productCount} className='bg-transparent text-[#E89689] border-none w-8/12 mx-auto focus:outline-none text-center text-[14px]' />
                                        <button onClick={(event)=> handleProductQuantity(event, "increment", parseInt(pdpInformationData.pdp_link))}>
                                            <LuPlus className='text-[1rem] text-[#E89689] font-thin'/>
                                        </button>
                                    </div>
                                    <div className='w-6/12 lg:w-4/12'>
                                        <button className='px-8 uppercase bg-nav-pink text-white py-[10px]'>Add to Cart</button>
                                    </div>
                                    <div className='w-4/12 hidden lg:block'>
                                        <button className='px-8 uppercase bg-nav-pink text-white py-[10px]'>Buy Now</button>
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

export default PdpScrollComp