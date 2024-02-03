import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { LuMinus, LuPlus } from 'react-icons/lu';
import pdpImage2 from '../../Assest/images/pdp_image_2.png';
// import pdpImage3 from '../../Assest/images/pdp_image_3.png';
// import pdpImage4 from '../../Assest/images/pdp_image_4.png';
import play from '../../Assest/images/play.png';
import { Accordion } from 'flowbite-react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pdpDescription } from '../../Redux/reducer/productDescriptionSlice';
import { toastFailed, toastSuccess } from '../../common/toast';
import { productQuantityReducer } from '../../Redux/reducer/addToCartSlice';


const ProductPdpInformationComp = () => {

    const [pdpInformationData, setPdpInformationData] = useState({});
    const [itemCount, setItemCount] = useState({
        productId : null,
        productCount : 1,
    });
    const [productWeightState, setUpdateProductWeightState] = useState({}) // handling the updated json of weight
    const [updateProductTypeState, setUpdateProductTypeState] = useState({}) // handling the updated json of product types
    const [addtocartState, setAddtoCartState] = useState(null);
    const navigate = useNavigate()

    const pdp_description_data =  useSelector((state)=> state.pdpProductData.pdpData)
    const dispatch = useDispatch();
   
    useEffect(()=>{
         setPdpInformationData(pdp_description_data);
    },[pdp_description_data, pdpInformationData])

    

    const updateProductPdpData = (event, radio_type) => {
    const id = event.target.id;

  if (id === "product-type-container") {
    const indexToUpdate = pdpInformationData.product_type.findIndex(
      (radio_data) => radio_data.label == radio_type.label
    );
    // console.log("id", indexToUpdate);

    if (indexToUpdate !== -1) {
      const updatedProductTypes = pdpInformationData.product_type.map(
        (radio_data, index) => {
          if (parseInt(index) === parseInt(indexToUpdate)) {
            return {
              ...radio_data,
              selected: true,
            };
            
          }
          return radio_data;
        }
      );
      // Update the state with the new product types
      setUpdateProductTypeState(updatedProductTypes);
    
    }
  }

  if (id === "weight-container") {
    const indexToUpdate = pdpInformationData.product_weight.findIndex(
      (item_weight) => item_weight.weight_label === radio_type.weight_label
    );

    if (indexToUpdate !== -1) {
      const updatedProductWeight = pdpInformationData.product_weight.map(
        (item_weight, index) => {
          if (index === indexToUpdate) {
            return {
              ...item_weight,
              selected: true,
            };
          } else {
            return {
              ...item_weight,
              selected: false,
            };
          }
        }
      );
      // Update the state with the new product weight
      setUpdateProductWeightState(updatedProductWeight);
    }
  }
};

    const handleProductQuantity = (event, type, productID) => {
        let newCount;
    
        if (type === "increment") {
            newCount = Math.min(itemCount.productCount + 1, pdpInformationData.product_stock);
        } else if (type === "decrement") {
            newCount = Math.max(itemCount.productCount - 1, 0);
        }
    
        setItemCount({ productId: productID, productCount: newCount });
    
        if (newCount >= pdpInformationData.product_stock) {
            toastFailed(`Quantity can't be more than ${pdpInformationData.product_stock}`);
        } else if (newCount < 0) {
            toastFailed("Quantity can't be negative");
        }
    };

    

    const handleAddtocart = () => {
        if(productWeightState || updateProductTypeState || itemCount){
            setPdpInformationData((prevData) => {
                const updatedData = {
                  ...prevData,
                  product_quantity: itemCount,
                  product_type: Array.isArray(updateProductTypeState) ? updateProductTypeState : prevData.product_type,
                  product_weight: Array.isArray(productWeightState) ? productWeightState : prevData.product_weight,
                };
                setAddtoCartState(updatedData)
                return updatedData;
              });
            toastSuccess("Product added to cart");
            setAddtoCartState(pdpInformationData) 
            
        }  else{
            toastFailed("something went wrong 😒");
        }
    }
   useEffect(()=>{
    if(addtocartState !== null){
        dispatch(productQuantityReducer(addtocartState))
        navigate('/cartpage');
    } 
   },[addtocartState])
     
    
   

    
    return <>
        <article className='product-information-comp w-full h-full relative overflow-hidden'>
            <div className="outer-container">
                <div className="inner-container space-y-2">
                    <div className='text-left text-[#999]'>
                        <p className='uppercase text-[13px] lg:text-[15px]  tracking-widest'><span>Home</span> / {pdpInformationData?.product_title}</p>
                    </div>
                    <div className='product_title-container w-full h-full relative'>
                        <div className='space-y-2 lg:space-y-0'>
                            <div className='lg:pt-2'>
                                <h1 className='text-[25px] lg:text-[2.7rem] font-playfair text-[#363636] font-[600]'>{pdpInformationData?.product_title}</h1>
                            </div>
                            <div className='lg:space-y-1'>
                                <div>
                                    <p className='text-[25px] font-[400]'>$350</p>
                                </div>
                                <div className='flex justify-start items-center gap-1  w-full'>
                                    <FaStar className='text-nav-pink  text-xl lg:text-[1.50rem]' />
                                    <FaStar className='text-nav-pink  text-xl lg:text-[1.50rem]' />
                                    <FaStar className='text-nav-pink  text-xl lg:text-[1.50rem]' />
                                    <FaStar className='text-nav-pink  text-xl lg:text-[1.50rem]' />
                                    <FaStar className='text-nav-pink  text-xl lg:text-[1.50rem]' />
                                    <p className='text-[12px] lg:text-[14px] text-[#999]'>({pdpInformationData?.product_review})</p>
                                </div>
                            </div>
                           
                            <div className='range-container w-full pt-4 space-y-3 lg:space-y-5'>
                                <div>
                                    <h6 className='text-xs lg:text-[16px] font-[400] text-[#363636] '>Only {pdpInformationData?.product_stock} items in stock!</h6>
                                </div>
                                <div className='w-full bg-gray-200 h-[0.60rem] rounded-full'>
                                    <div className='h-full w-[60%] bg-nav-pink rounded-full'></div>
                                </div>
                            </div>

                            <div className='option-container w-full h-fit hidden lg:block lg:pt-7'>
                                <div className='lg:grid lg:grid-cols-3 grid-cols-2 items-center w-full h-fit justify-center lg:gap-y-5 space-y-0 gap-y-8  text-[#363636]'>
                                        {
                                            pdpInformationData?.product_type?.map((radio_type, i)=>{
                                                return <>
                                                <div key={i} className='w-fit h-fit relative'>
                                                    <label htmlFor="" className='flex w-fit items-center lg:gap-2 gap-3'>
                                                        <input id='product-type-container' onClick={(event)=> updateProductPdpData(event, radio_type)} aria-selected={radio_type?.selected} value={radio_type?.value} type="radio" className='w-6 h-6 border-nav-pink ' name="product_type"  />
                                                        <p className='text-[14px]'>{radio_type?.label}</p>
                                                    </label>
                                                </div>
                                                </>
                                            })
                                        }         
                                                
                                </div>
                            </div> 

                            <div className=' pt-4 lg:pt-6 w-full space-y-2 h-fit'>
                                <div>
                                    <h1 className='text-[#363636] font-playfair text-[18px] lg:text-[20px] lg:font-[600] '>Weight</h1>
                                </div>
                                <div className='flex w-full justify-start gap-2 '>
                                {
                                    Array.isArray(pdpInformationData?.product_weight)  && pdpInformationData?.product_weight?.map((weight_button, i)=>{
                                        return <>
                                        <div key={i}>
                                            <button id='weight-container' onClick={(event)=> updateProductPdpData(event, weight_button)} className={`text-xs ${weight_button?.selected ? "text-white bg-[#363636] " : "text-[#363636] bg-[#E8968933]"}  px-5 py-2 lg:py-3 lg:text-[14px]`}>{weight_button?.weight_label}</button>
                                        </div>
                                        </>
                                    })
                                }
                                    
                                   
                                </div>
                            </div>
                              
                            <div className='quantity-container w-full h-fit  pt-3 lg:pt-6'>
                                        <div className='inner-container w-full relative h-fit space-y-2'>
                                            <div>
                                                <h1 className='lg:text-[22px] tracking-wider text-[#363636] font-playfair font-[600] text-[20px] '>Quanity</h1>
                                            </div>
                                            <div className='button-container flex w-full h-fit gap-[1.3rem] lg:items-center lg:justify-between  lg:space-y-0'>
                                                <div className='lg:w-4/12 w-7/12 h-fit relative '>
                                                    <div id='item-count-container' className='w-auto h-fit py-[1px] lg:py-[4px] px-6 flex justify-between items-center border-[0.01rem] border-[#E89689]'>
                                                        <button onClick={(event)=>handleProductQuantity(event, 'decrement', pdpInformationData.pdp_link)}>
                                                            <LuMinus className='text-[1rem] text-[#E89689] font-thin'/>
                                                        </button>
                                                        <input type="text" value={itemCount.productCount} className='bg-transparent text-[#E89689] border-none w-8/12 mx-auto focus:outline-none text-center text-[14px]' />
                                                        <button onClick={(event)=>handleProductQuantity(event, 'increment', pdpInformationData.pdp_link)}>
                                                            <LuPlus className='text-[1rem] text-[#E89689] font-thin'/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className='lg:w-8/12 w-full  h-fit relative '>
                                                    <button onClick={handleAddtocart} className='w-full py-2 lg:py-[10px] flex items-center justify-center gap-3 lg:gap-4 text-[#E89689] border-[0.01rem] border-[#E89689] active:bg-[#E89689] active:text-white'>
                                                            <HiOutlineShoppingBag className='text-[16px] lg:text-[20px] '/>
                                                            <span className='text-[16px] lg:text-[20px]'>Add to cart</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                            <div className='w-full h-fit pt-2 lg:pt-[0.90rem]'>
                                <button className='text-white w-full py-2 bg-nav-pink hover:bg-transparent hover:text-nav-pink hover:border-nav-pink border-[0.01rem] lg:text-[22px]'>BUY NOW</button>
                            </div>
                            <div className='product-image-div w-full h-fit pt-2 lg:pt-9'>
                                <div className='flex justify-start items-center gap-[0.80rem]'>
                                    {/* item 1 */}
                                    <div className='h-fit w-fit rounded-full relative'>
                                        <div className='object-contain h-[110px] w-[110px]'>
                                            <img src={pdpImage2} className='h-full w-full rounded-full' alt="" />
                                            
                                        </div>
                                        <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center object-contain'>
                                            <img src={play} className='h-[2rem] w-[2rem]' alt=''/>
                                        </div>
                                    </div>
                                    <div className='h-fit w-fit rounded-full relative'>
                                        <div className='object-contain h-[110px] w-[110px]'>
                                            <img src={pdpImage2} className='h-full w-full rounded-full' alt="" />
                                            
                                        </div>
                                        <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center object-contain'>
                                            <img src={play} className='h-[2rem] w-[2rem]' alt=''/>
                                        </div>
                                    </div>
                                    <div className='h-fit w-fit rounded-full relative'>
                                        <div className='object-contain h-[110px] w-[110px]'>
                                            <img src={pdpImage2} className='h-full w-full rounded-full' alt="" />
                                            
                                        </div>
                                        <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center object-contain'>
                                            <img src={play} className='h-[2rem] w-[2rem]' alt=''/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* accordion */}
                            <div className='accordion-container w-full h-fit relative pt-6'>
                                <AccordionPDP />
                                <AccordionPDP />
                            </div>
                            {/* icons div */}
                            <div className='flex items-center justify-start gap-3 mx-2 pt-2'>
                            {
                                iconsArray.map((data, i)=>{
                                    return <>
                                    <NavLink key={i} to={data.href}>
                                        {data.icon}
                                    </NavLink>
                                    </>
                                })
                            }
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </article>
    </>

}

const AccordionPDP = () => {
    return <>
        <div className='w-full h-fit relative overflow-hidden'>
            <div className='outer-container relative w-full h-fit'>
            <Accordion  collapseAll className='bg-transparent border-y-[0.01rem] border-x-0 border-nav-pink rounded-none'>
                <Accordion.Panel arrowIcon={"a"}>
                    <Accordion.Title arrowIcon={<InfoIcon/>} className='flex w-full items-center '>
                        <h6 className='text-[14px] font-playfair text-[#363636] font-[600] lg:text-[19px]'>&nbsp; &nbsp; &nbsp; Description</h6>
                        {/* <p><InfoIcon /></p> */}
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 ">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                            has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the
                            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Figma design system
                            </a>
                            based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    </>
}


const InfoIcon = () => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M8.49988 6.06866C8.0776 6.06866 7.77734 6.24697 7.77734 6.5097V10.0848C7.77734 10.31 8.07763 10.5352 8.49988 10.5352C8.90336 10.5352 9.23177 10.31 9.23177 10.0848V6.5097C9.23177 6.24697 8.90336 6.06866 8.49988 6.06866Z" fill="#E89689"/>
            <path d="M8.49992 3.86356C8.06828 3.86356 7.73047 4.17321 7.73047 4.52978C7.73047 4.88634 8.06828 5.20539 8.49992 5.20539C8.9222 5.20539 9.26 4.88634 9.26 4.52978C9.26 4.17324 8.92216 3.86356 8.49992 3.86356Z" fill="#E89689"/>
            <path d="M8.5 0C4.46243 0 1.19531 3.26546 1.19531 7.30047C1.19531 10.5953 3.36457 13.331 6.28924 14.2601L7.95046 16.7088C8.07404 16.8909 8.27986 17 8.5 17C8.72014 17 8.92596 16.8909 9.04954 16.7088L10.7108 14.2601C13.6367 13.3306 15.8047 10.5938 15.8047 7.30047C15.8047 3.2629 12.5349 0 8.5 0ZM10.1152 13.0521C9.96393 13.0944 9.83261 13.1889 9.74445 13.3188L8.5 15.1531L7.25558 13.3189C7.16739 13.1889 7.03607 13.0944 6.88483 13.0521C4.39533 12.356 2.52344 10.0666 2.52344 7.30047C2.52344 4.00729 5.20452 1.32812 8.5 1.32812C11.7955 1.32812 14.4766 4.00729 14.4766 7.30047C14.4766 10.0693 12.6019 12.3568 10.1152 13.0521Z" fill="#E89689"/>
        </svg>
    </>
}

const iconsArray = [
    {
        id : 1,
        icon : <FaFacebookF className='text-[22px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
    {
        id : 2,
        icon : <FaInstagram className='text-[23px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
    {
        id : 3,
        icon : <FaXTwitter className='text-[25px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
    {
        id : 4,
        icon : <IoShareSocial className='text-[24px] font-[600] hover:text-pink-600'/>,
        href : "/",
    },
]

export default ProductPdpInformationComp;

