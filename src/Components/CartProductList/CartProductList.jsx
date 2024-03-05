import React, { memo, useEffect, useState } from 'react'
// import cartImage1 from '../../Assest/images/cartImage1.png';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import {  } from 'react-router-dom';
import { RemoveCartProduct } from './RemoveCartProduct';
import { productQuantityReducer, updateProductQuantityReducer } from '../../Redux/reducer/addToCartSlice';

const CartProductList = ({setProductPrice}) => {

    const [cartItemsState, setCartItemsState] = useState([]);

    const cartItems = useSelector((state)=> state.productQty.addtoCartQty);

    useEffect(()=>{
        setCartItemsState(cartItems)
    },[cartItems])

    return <>
    <section className='main-container w-full h-fit relative'>
        <div className='content-container my-[26px] w-full space-y-2'>
            <div className='flex justify-between items-center w-full'>
                <div>
                    <h6 className='text-[16px] lg:text-[20px] text-[#363636] font-[400] uppercase'>Product</h6>
                </div>
                <div className='ml-[17rem] hidden lg:block'> 
                    <h6 className='text-[16px] lg:text-[20px] text-[#363636] font-[400] uppercase'>Quantity</h6>
                </div>
                <div>
                    <h6 className='font-[400] lg:text-[20px] text-[16px] uppercase text-[#363636] '>Total</h6>
                </div>
            </div>
            <div className='table-container w-full border-y-[0.01rem] border-[#d1cccc] h-fit'>
                <div className='table-inner-container py-[30px] lg:py-[60px]  space-y-[37px]'>
                {
                   cartItemsState.length > 0 ? cartItemsState?.map((cart_data, i)=>{
                        return <>
                        <ItemContainerofCart key={i} CartData = {cart_data} cartItemsState={cartItemsState} setProductPrice={setProductPrice}   />
                        </>
                    }) : <h1 className='text-center w-full text-[3rem] font-[500] capitalize'>Cart is Empty</h1>
                }
                    
                </div>
            </div>
        </div>
    </section>
    </>
}


const ItemContainerofCart = React.memo(({CartData, cartItemsState, setProductPrice}) => {
    console.log("cartdata", CartData);

    const [singleCartData, setSingleCartData] = useState(CartData);
    const [productSelectedWeight, setProductSelectedWeight] = useState(()=>{
        const filterWeight = singleCartData?.product_weight?.filter((weight)=> weight.selected === true)
            return filterWeight[0]?.weight_label
    })
    const [productSelectedQuantity, setProductSelectedQuantity] = useState(0)

    useEffect(()=>{
        setProductSelectedQuantity((prevVal)=>{
            if(prevVal?.product_quantity){
                return prevVal?.product_quantity 
            }
            else{
                return { productId : 1, productCount : 1 }
            }
        })
        
     },[])

     console.log("cartdata", CartData)

    //  useEffect(()=>{
    //     // debugger;
    //         setProductSelectedWeight((prevVal)=>{
    //             const filterWeight = CartData?.product_weight?.filter((weight)=> weight.selected === true)
    //             console.log("filterWeight", filterWeight);
    //             return filterWeight[0].weight_label ? filterWeight[0].weight_label : "30ml" 
    //         })

    //  },[])

    const [cartPriceState, setCartPriceState] = useState(0);
    const [openModal, setOpenModal] = useState(false) // true means open and false means close.
    // const [updatedSingleCartData, setUpdatedSingleCartData] = useState({});
    const dispatch = useDispatch();
   

    useEffect(()=>{
        const priceUpdate = parseInt(singleCartData?.product_price) * parseInt(productSelectedQuantity?.productCount)
        setCartPriceState(priceUpdate);
        setProductPrice(priceUpdate); // updating the price of orderinstruction comp.
    },[productSelectedQuantity]);

    const updateProductQuantity = (type, productId, prevQuantity) => {
        let newQuantity;
        if (type === 'increment') {
          newQuantity = parseInt(prevQuantity.productCount, 10) + 1;
        } else if (type === 'decrement') {
          newQuantity = parseInt(prevQuantity.productCount, 10) - 1;
        }
      
        return { productId, productCount: isNaN(newQuantity) ? 0 : newQuantity };
      };

      const handleCartProductQuantity = (event, type, productId) => {
        setProductSelectedQuantity((prevQuantity) => updateProductQuantity(type, productId, prevQuantity));
      };

      const handleRemoveProduct = () => {
        setOpenModal(true);
      }

    const handleSaveProductObject = () => {
        // debugger;
        setSingleCartData((prevData) => {   
          const updatedData = {
            ...prevData,
            product_price: cartPriceState,
            product_quantity: productSelectedQuantity,
          };
          if (cartPriceState !== prevData.product_price) {
            dispatch(updateProductQuantityReducer(updatedData));
          }
          return updatedData;
        });
      };

    return <>
    { openModal ? <RemoveCartProduct setOpenModal={setOpenModal} openModal = {openModal} singleCartData={singleCartData} cartItemsState={cartItemsState}   /> : null} 
    <div className='item-container grid grid-cols-4 items-center justify-start'>
                        <div className='image-container w-full h-fit lg:col-span-2  lg:flex lg:items-center'>
                            <div className='object-contain w-[5rem] lg:w-[143px] lg:h-[168px] shadow-sm drop-shadow-md bg-white h-[6rem] flex items-center justify-center'>
                                <img src={singleCartData?.product_image} className='lg:h-fit lg:w-full' alt={singleCartData?.product_title} />
                                
                            </div>
                            <div className='hidden lg:block lg:space-y-1 lg:px-[3.6rem] lg:-mt-5'>
                                    <div>
                                        <h1 className='font-[600] font-playfair text-[#363636] lg:text-[20px] '>{singleCartData?.product_title}</h1>
                                    </div>
                                    <div>
                                        <p className='text-[10px] text-[#363636] font-[400] lg:text-[15px] '>Weight : <span>{productSelectedWeight ? productSelectedWeight : "30ml"}</span></p>
                                    </div>
                            </div>
                        </div>
                        <div className='product-title-container col-span-2 lg:col-span-1 text-left '>
                            <div className='inner-container-text w-full h-fit space-y-3'>
                                <div className='lg:hidden'>
                                    <h1 className='font-[600] font-playfair text-[#363636]'>Ultra Brightening Face Serum</h1>
                                </div>
                                <div className='lg:hidden'>
                                    <p className='text-[10px] text-[#363636] font-[400] '>Weight : <span>{productSelectedWeight ? productSelectedWeight : "30ml" }</span></p>
                                </div>
                                <div className='flex items-center lg:justify-end gap-1 lg:gap-[1.3rem]'>
                                    <div id='item-count-container' className='w-8/12 lg:w-5/12 h-fit py-[1px] lg:py-[2px] px-6 flex justify-between items-center border-[0.01rem] border-[#E89689]'>
                                        <button onClick={(event)=> handleCartProductQuantity(event, 'decrement', productSelectedQuantity?.productId)} >
                                            <LuMinus className='text-[1rem] text-[#E89689] font-thin'/>
                                        </button>
                                        <input type="text" disabled={true} value={productSelectedQuantity?.productCount} className='bg-transparent text-[#E89689] border-none w-8/12 mx-auto focus:outline-none text-center text-[14px]' />
                                        <button onClick={(event)=> handleCartProductQuantity(event, 'increment', productSelectedQuantity?.productId)}>
                                            <LuPlus className='text-[1rem] text-[#E89689] font-thin'/>
                                        </button>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <button onClick={handleRemoveProduct} className='text-[12px] hover:underline lg:text-[19px] lg:font-[500] '>Remove</button>
                                        { productSelectedQuantity?.productCount > 1 ? <button onClick={handleSaveProductObject} className='text-[12px] hover:underline lg:text-[19px] lg:font-[500] px-4 py-1 text-white bg-nav-pink'>Save</button> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-end'>
                            <div className='mt-4'>
                                <h1 className='text-[22px] font-[500] text-[#363636] '>${cartPriceState}</h1>
                            </div>
                        </div>
                    </div>

    </>
})

export { ItemContainerofCart, CartProductList};