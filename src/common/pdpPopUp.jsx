import React, { useEffect, useState } from 'react'
// import productImg1 from '../Assest/images/pdppopupimg1.png';
// import { FaRegStar } from "react-icons/fa";
// import { LuMinus, LuPlus } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import {  NavLink, useNavigate } from 'react-router-dom';
// import { Modal } from 'flowbite-react';
import StarRatingComponent from './starRating';
import CouterCommon from './CouterCommon';
import ProductShopNow from '../Components/productShopNow/ProductShopNow';
import { toastFailed, toastSuccess } from './toast';
import { productQuantityReducer } from '../Redux/reducer/addToCartSlice';
import { useDispatch } from 'react-redux';
import Magnifier from 'react-magnifier';

const PdpPopup = ({hidePdp,hidePdpPopup, pdpPopUpData}) => {

    const [pdpPopUpDataState, setPdpPopUpDataState] = useState(pdpPopUpData);
    const [productTypeState, setProductTypeState] = useState([]);
    const [productWeightState, setProductWeightState] = useState([])
    const [itemCount, setItemCount] = useState({productId : 1, productCount : 1})
    const [addToCartState, setAddtoCartState] = useState(null)
    const [productPrice, setProductPrice] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("pdpPopUpdata", pdpPopUpDataState);

    const hidePdpPopUp = () => {
        hidePdp(false)
    }

    useEffect(()=>{
        if(pdpPopUpDataState?.product_price){
            setProductPrice(pdpPopUpDataState?.product_price)
        }
    },[pdpPopUpData])
 

    //handle the product type selected fucntion
    const handleProductTypeSelected = (event, product_type_obj) => {
        const indexToUpdate = pdpPopUpDataState.product_type.findIndex(
            (radio_data) => radio_data.label == product_type_obj.label
          );
          // console.log("id", indexToUpdate);
      
          if (indexToUpdate !== -1) {
            const updatedProductTypes = pdpPopUpDataState.product_type?.map(
              (radio_data, index) => {
                if (parseInt(index) === parseInt(indexToUpdate)) {
                  setItemCount({productId : parseInt(pdpPopUpDataState?.pdp_link), productCount : parseInt(pdpPopUpDataState?.product_quantity)})
                  return {
                    ...radio_data,
                    selected: true,
                  };
                  
                }
                return radio_data;
              }
            );
            // Update the state with the new product types
            setProductTypeState(updatedProductTypes);
          
          }
    }

    // console.log("pdpDataPopup", productTypeState);

    const handleWeightSelected = (event, product_weight_obj) => {

        const indexToUpdate = pdpPopUpDataState.product_weight.findIndex(
            (item_weight) => item_weight.weight_label === product_weight_obj.weight_label
          );

        const updatedProductWeight = pdpPopUpDataState.product_weight.map(
            (item_weight, index) => {
              if (index === indexToUpdate) {
                setItemCount({productId : parseInt(pdpPopUpDataState?.pdp_link), productCount : parseInt(pdpPopUpDataState?.product_quantity)})
                return {
                  ...item_weight,
                  selected: true,
                };
                
              } else {
                setItemCount({productId : parseInt(pdpPopUpDataState?.pdp_link), productCount : parseInt(pdpPopUpDataState?.product_quantity)})
                return {
                  ...item_weight,
                  selected: false,
                };
                
              }
            }
          );
          // Update the state with the new product weight
          setProductWeightState(updatedProductWeight);
    }

    console.log("updatedProductWeight", productWeightState)
    
    const handleStarRating = (event) => {
        // setting the star rating
        
    }

    // handle the add to bag function
    const handleCounterQuantity = (productCount) => {
        console.log("count", productCount)
        setProductPrice(pdpPopUpDataState?.product_price * productCount.count);
        setItemCount((prev)=>{
            return {
                ...prev,
                productCount : productCount.count,
                productId : parseInt(pdpPopUpDataState?.pdp_link)
            }
        })
    }
     
    // handle the add to bag function
    const handleAddtoCartProduct = () =>{
        // alert("hello wordl")
        if(productTypeState || productWeightState || itemCount){
            setPdpPopUpDataState((prevData) => {
                const updatedData = {
                  ...prevData,
                  product_quantity: {productId : parseInt(prevData?.pdp_link) , productCount : itemCount?.productCount ? itemCount?.productCount : 1},
                  product_type: Array.isArray(productTypeState) && productTypeState.length > 0 ? productTypeState : prevData.product_type,
                  product_weight: Array.isArray(productWeightState)  && productWeightState.length > 0 ? productWeightState : prevData.product_weight,
                  product_price : productPrice || prevData.product_price,
                };
                setAddtoCartState(updatedData);
                return updatedData;
              });
        }
        else{
            toastFailed("Something went wrong while adding to cart 😒");
        }
    } 

    useEffect(()=>{
        if(addToCartState !== null){
            console.log("addtocartstate", addToCartState);
            toastSuccess("Product added to cart");
            dispatch(productQuantityReducer(addToCartState))
            navigate('/cartpage');
        } 
       },[addToCartState])
  

    return <>
    <section className='lg:h-[150rem] h-[130vh] w-full bg-black bg-opacity-45 absolute top-0 left-0 z-10'>
        <div className=' w-full h-full'>
            <div className='inner-container relative flex items-center justify-center w-full h-full'>
                <article className='lg:w-10/12 w-9/12 lg:h-auto h-auto bg-white relative overflow-hidden z-20 '>
                    <div className='w-full h-fit lg:h-full grid lg:grid-cols-5 grid-cols-1 justify-between gap-0'>
                        {/* for image div */}
                        <div className='lg:col-span-2 w-full h-[27.5rem] relative'>
                            <div className='object-contain h-[27.5rem] lg:h-fit'>
                                <Magnifier src={pdpPopUpDataState.product_image} className='h-full w-full' alt={pdpPopUpDataState.product_title} />
                                {/* <img src={pdpPopUpDataState.product_image} className='h-full w-full'  /> */}
                            </div>
                        </div>
                        {/* for product div */}
                        <div className='lg:col-span-3 w-full h-full relative'>
                            <div className='inner-container-pdp-text  w-full h-full lg:p-[2.3rem] p-[0px] lg:px-[4.6rem] py-[15px] px-[20px] '>
                                <div className='content-container w-full h-full lg:space-y-3 space-y-2 '>
                                    <div className=''>
                                        <h1 className='text-[43px] font-[600] font-playfair hidden lg:block'>{pdpPopUpDataState?.product_title}</h1>
                                        <div>
                                            <h1 className='lg:hidden text-[35px] text-[#333] font-playfair font-[600]'>{pdpPopUpDataState?.product_title}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='font-[400] lg:text-[30px] text-[18px] '>${/* pdpPopUpDataState?.product_price * itemCount?.productCount */ }{productPrice} </h4>
                                    </div>
                                    <div>
                                        <div className='w-full flex h-fit justify-start items-center pt-[1rem] lg:gap-1 '>
                                     
                                        <StarRatingComponent handleStarRating={handleStarRating}></StarRatingComponent>
                                            
                                            <div>
                                                <span className='text-[#363636] text-[10px] pl-1 lg:pl-0 lg:text-lg'>{pdpPopUpDataState?.product_review} reviews</span>
                                            </div>
                                        </div>
                                        <div className='pt-4 '>
                                            <p className=''>Only Item is <span>{pdpPopUpDataState?.product_stock}</span> In stock!</p>
                                        </div>
                                    </div>
                                    <div className='lg:pt-3 relative lg:w-11/12 w-full h-2 bg-gray-200 rounded-full '>
                                        <div className='h-full lg:w-[60%] bg-nav-pink absolute top-0 left-0 rounded-full'></div>
                                        {/* <input type="range" className='w-full h-[0.5rem] bg-nav-pink outline-none border-none ' min="50" max="100" value="0" step="1" /> */}
                                    </div>
                                    <div className='grid lg:grid-cols-4 grid-cols-2 items-center w-full h-fit justify-center lg:gap-y-5 space-y-0 gap-y-8  text-[#363636]'>
                                    {
                                        pdpPopUpDataState.product_type.map((product_type, i)=>{
                                            return <>
                                            <div className='w-fit h-fit relative'>
                                            <label htmlFor={""} className='flex w-fit items-center lg:gap-2 gap-3'>
                                                <input onChange={(event)=>handleProductTypeSelected(event, product_type)} value={product_type?.value}  type="radio" className='w-5 h-5  border-nav-pink ' name="product_type" aria-selected={product_type?.selected}  id="product_type" />
                                                <p className='text-[14px]'>{product_type?.label}</p>
                                            </label>
                                            </div>
                                            </>
                                        })
                                    }
                                    </div>
                                    <div className='weight-container w-full pt-2'>
                                        <div className='inner-container w-full h-full lg:space-y-2 space-y-3'>
                                            <div>
                                                <h1 className='text-[24px] font-[600] font-playfair text-[#363636]'>Weight</h1>
                                            </div>
                                            <div className='flex w-full justify-start items-center gap-2'>
                                            {
                                                pdpPopUpDataState?.product_weight?.map((product_weight, i)=>{
                                                    return <>
                                                    <div>
                                                        <button  onClick={(event)=>handleWeightSelected(event, product_weight)} className={`lg:px-4 lg:py-2 px-5 py-3 ${product_weight?.selected ? "bg-[#363636]" : "bg-nav-pink"}  text-white`}>{product_weight?.weight_label}</button>
                                                    </div>
                                                    </>
                                                })
                                            }
                                                
                                                {/* <div>
                                                    <button className='lg:px-4 lg:py-2 px-5 py-3 bg-nav-pink text-white'>40 ml</button>
                                                </div>
                                                <div>
                                                    <button className='lg:px-4 lg:py-2 px-5 py-3 bg-nav-pink text-white'>40 ml</button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='quantity-container w-full h-fit lg:pt-2 pt-3'>
                                        <div className='inner-container w-full relative h-fit space-y-2'>
                                            <div>
                                                <h1 className='lg:text-[24px] text-[#363636] font-playfair font-[600] text-[29px]'>Quanity</h1>
                                            </div>
                                            <div className='button-container lg:flex w-full h-fit lg:gap-[1rem] lg:items-center lg:justify-between space-y-5 lg:space-y-0'>
                                                <div className='lg:w-4/12 w-8/12 h-fit relative '>
                                                    {/* <div className='w-full h-fit py-2 px-6 flex justify-center items-center border-[0.01rem] border-[#363636]'>
                                                        <button>
                                                            <LuMinus className='text-[1rem] text-[#363636] font-thin'/>
                                                        </button>
                                                        <input type="text" value={pdpPopUpDataState?.product_quantity} className='bg-transparent text-[#363636] border-none w-5/12 mx-auto focus:outline-none text-center text-[1.4rem]' />
                                                        <button>
                                                            <LuPlus className='text-[1rem] text-[#363636] font-thin'/>
                                                        </button>
                                                    </div> */}
                                                    <CouterCommon handleCounterQuantity={handleCounterQuantity} />
                                                </div>
                                                <div className='lg:w-8/12 w-full  h-fit relative '>
                                                    <button onClick={handleAddtoCartProduct} className='lg:w-11/12 w-full py-3 flex items-center justify-center gap-3 border-[0.01rem] border-[#363636] text-[#363636] hover:border-nav-pink hover:bg-nav-pink hover:text-white '>
                                                        <HiOutlineShoppingBag className='text-[1.4rem]  '/>
                                                        <span className='text-[20px]  '>Add to cart</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full h-fit relative'>
                                        <button className='w-full bg-nav-pink text-[20px] font-[500] text-center py-3 text-white uppercase hover:bg-transparent hover:text-nav-pink hover:border-nav-pink   border-[0.01rem]'>Buy now</button>
                                    </div>
                                    <div>
                                        <NavLink to={`/pdp-product/${pdpPopUpDataState?.pdp_link}`} className='text-[14px] underline underline-offset-2 text-[#363636] flex items-center gap-1'>View Full Details <span> <IoIosArrowRoundForward className='text-[24px] ' /> </span></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={hidePdpPopUp} className='absolute top-[1rem] right-[1rem] w-fit h-fit'>
                        <div className='lg:p-3 p-1 rounded-full bg-[#FFF7F3]'>
                            <RxCross1 className='lg:text-[20px] text-[14px] text-[#000000]  '/>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    
    </>
}
export default PdpPopup;