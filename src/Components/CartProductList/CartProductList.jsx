import React, { useEffect, useState } from 'react'
// import cartImage1 from '../../Assest/images/cartImage1.png';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import { useFetcher } from 'react-router-dom';
import { RemoveCartProduct } from './RemoveCartProduct';

const CartProductList = () => {

    const [cartItemsState, setCartItemsState] = useState([]);

    const cartItems = useSelector((state)=> state.productQty.addtoCartQty);

    useEffect(()=>{
        setCartItemsState(cartItems)
    },[cartItems])
   

  

    

    // console.log("productid : ", productQuantity);



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
                        <ItemContainerofCart key={i} CartData = {cart_data} cartItemsState={cartItemsState}   />
                        </>
                    }) : <h1 className='text-center w-full text-[3rem] font-[500] capitalize'>Cart is Empty</h1>
                }
                    
                </div>
            </div>
        </div>
    </section>
    </>
}


// item-container of table cart page.

const ItemContainerofCart = ({CartData, cartItemsState}) => {
    const [singleCartData, setSingleCartData] = useState(CartData);
    const [productSelectedWeight, setProductSelectedWeight] = useState(()=>{
        const filterWeight = singleCartData?.product_weight?.filter((weight)=> weight.selected === true)
            return filterWeight[0]?.weight_label
    })
    const [productSelectedQuantity, setProductSelectedQuantity] = useState(()=>{
        if(singleCartData?.product_quantity.productCount){
            return singleCartData?.product_quantity 
        }
        else{
            return { productId : 1, productCount : 3 }
        }
    })
    const [cartPriceState, setCartPriceState] = useState(0);
    const [openModal, setOpenModal] = useState(false) // true means open and false means close.

    useEffect(()=>{
        const priceUpdate = parseInt(singleCartData?.product_price) * parseInt(productSelectedQuantity?.productCount)
        setCartPriceState(priceUpdate);
    },[productSelectedQuantity]);



    
   
    const handleCartProductQuantity = (event, type, productId) => {
        if (type === 'increment') {
          setProductSelectedQuantity((prevQuantity) => {
            const newQuantity = parseInt(prevQuantity.productCount, 10) + 1;
            return { productId: productId, productCount: isNaN(newQuantity) ? 0 : newQuantity };
          });
        }
      
        if (type === 'decrement') {
          setProductSelectedQuantity((prevQuantity) => {
            const newQuantity = parseInt(prevQuantity.productCount, 10) - 1;
            return { productId: productId, productCount: isNaN(newQuantity) ? 0 : newQuantity };
          });
        }
      };

      const handleRemoveProduct = () => {
        setOpenModal(true);
      }
      
  
    
    // console.log("qty", productSelectedQuantity)
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
                                    <div>
                                        <button onClick={handleRemoveProduct} className='text-[12px] underline lg:text-[19px] lg:font-[500] '>Remove</button>
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
}

export default CartProductList;