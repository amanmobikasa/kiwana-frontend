import React, { useState } from 'react'
import cartImage1 from '../../Assest/images/cartImage1.png';
import { LuMinus, LuPlus } from 'react-icons/lu';

const CartProductList = () => {

    const [productQuantity , setProductQuantity] = useState({
        productId : null,
        quantity : 1
    });

    const handleCartProductQuantity = (event, type, productId) => {
        if(type === 'increment'){
            setProductQuantity({productId : productId, quantity : productQuantity.quantity + 1});
        }
        if(type === 'decrement'){
            setProductQuantity({productId : productId, quantity : productQuantity.quantity - 1});
        }
    }

    console.log("productid : ", productQuantity);



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
                    <ItemContainerofCart handleCartProductQuantity={handleCartProductQuantity} productQuantity={productQuantity} />
                    <ItemContainerofCart handleCartProductQuantity={handleCartProductQuantity} productQuantity={productQuantity} />
                </div>
            </div>
        </div>
    </section>
    </>
}


// item-container of table cart page.

const ItemContainerofCart = ({handleCartProductQuantity, productQuantity}) => {

    const handleProductQuantity = (event, type, productId) => {
        handleCartProductQuantity(event, type, productId); // calling the parent function
    }

    return <>
    <div className='item-container grid grid-cols-4 items-center justify-start'>
                        <div className='image-container w-full h-fit lg:col-span-2  lg:flex lg:items-center'>
                            <div className='object-contain w-[5rem] lg:w-[143px] lg:h-[168px] shadow-sm drop-shadow-md bg-white h-[6rem] flex items-center justify-center'>
                                <img src={cartImage1} className='lg:h-fit lg:w-full' alt="cart_image_1" />
                                
                            </div>
                            <div className='hidden lg:block lg:space-y-1 lg:px-[3.6rem] lg:-mt-5'>
                                    <div>
                                        <h1 className='font-[600] font-playfair text-[#363636] lg:text-[20px] '>Ultra Brightening Face Serum</h1>
                                    </div>
                                    <div>
                                        <p className='text-[10px] text-[#363636] font-[400] lg:text-[15px] '>Weight : <span>30 ml</span></p>
                                    </div>
                            </div>
                        </div>
                        <div className='product-title-container col-span-2 lg:col-span-1 text-left '>
                            <div className='inner-container-text w-full h-fit space-y-3'>
                                <div className='lg:hidden'>
                                    <h1 className='font-[600] font-playfair text-[#363636]'>Ultra Brightening Face Serum</h1>
                                </div>
                                <div className='lg:hidden'>
                                    <p className='text-[10px] text-[#363636] font-[400] '>Weight : <span>30 ml</span></p>
                                </div>
                                <div className='flex items-center lg:justify-end gap-1 lg:gap-[1.3rem]'>
                                    <div id='item-count-container' className='w-8/12 lg:w-5/12 h-fit py-[1px] lg:py-[2px] px-6 flex justify-between items-center border-[0.01rem] border-[#E89689]'>
                                        <button onClick={(event)=> handleProductQuantity(event, 'decrement', 3)}>
                                            <LuMinus className='text-[1rem] text-[#E89689] font-thin'/>
                                        </button>
                                        <input type="text" value={productQuantity?.quantity} className='bg-transparent text-[#E89689] border-none w-8/12 mx-auto focus:outline-none text-center text-[14px]' />
                                        <button onClick={(event)=> handleProductQuantity(event, 'increment', 3)}>
                                            <LuPlus className='text-[1rem] text-[#E89689] font-thin'/>
                                        </button>
                                    </div>
                                    <div>
                                        <button className='text-[12px] underline lg:text-[19px] lg:font-[500] '>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-end'>
                            <div className='mt-4'>
                                <h1 className='text-[22px] font-[500] text-[#363636] '>$350</h1>
                            </div>
                        </div>
                    </div>

    </>
}

export default CartProductList;