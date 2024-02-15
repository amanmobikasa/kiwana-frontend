import React, { useState } from 'react'
import CartProductList from '../Components/CartProductList/CartProductList';
import OrderInstructionCart from '../Components/OrderInstructionCartPage/OrderInstructionCart';
import ProductCollectionAlsoLike from '../Components/ProductCollectionComp/ProductCollectionAlsoLike';

const ProductCartPage = () => {
    const [productPrice, setProductPrice] = useState(0)
    return <>
        <section className='main-container w-full bg-[#FFF8F7] h-full relative pb-[6rem] lg:pb-[0.5rem]'>
            <div className='content-container  mx-auto h-full'>
                <div className='text-container w-full h-full relative py-[35px] lg:py-[5rem]'>
                    <div className='heading-container text-center w-full h-fit space-y-1 lg:-space-y-1'>
                        <div>
                            <h1 className='text-[#363636] font-playfair font-[500] text-[28px] lg:text-[60px] '>Shopping Cart</h1>
                        </div>
                        <div>
                            <p className='text-[15px] text-[#646464] font-[400] uppercase tracking-wider'><span>Home</span> / <span>Shopping cart</span></p>
                        </div>
                    </div>
                    <div className='w-11/12 mx-auto'>
                        <CartProductList  setProductPrice={setProductPrice} />
                    </div>
                    <div className='w-11/12 mx-auto'>
                        <OrderInstructionCart productPrice={productPrice} />
                    </div>
                    <div className='mt-4 lg:mt-[6rem]'>
                    <ProductCollectionAlsoLike mainTitle = {"Recommended Products"} />
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default ProductCartPage;