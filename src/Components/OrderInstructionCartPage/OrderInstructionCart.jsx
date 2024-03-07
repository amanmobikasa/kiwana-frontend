import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setOrderInstruction } from '../../Redux/reducer/orderinstructionSlice';
import { useNavigate } from 'react-router-dom';
import { toastFailed, toastSuccess } from '../../common/toast';
import { setFinalCartProduct } from '../../Redux/reducer/payementSlice';

const OrderInstructionCart = ({productPrice}) => {
    const [orderInstruction, setHandleInstruction] = useState("");
    const [getCartProductsState, setGetCartProductsState] = useState([]);
    const [updatedProductCartDataState, setUpdatedProductCartDataState] = useState({});
    const [TotalPriceOfProducts, setTotalPriceOfProducts] = useState(0);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [userAuthToken , setUserAuthToken] = useState("");
    const [userJwtToken , setUserJwtToken] = useState("");
    // const getCartProducts = useSelector((state)=> state.productQty.addtoCartQty);

    const USER_AUTH_TOKEN = sessionStorage.getItem("userLoginToken");
    const USER_JWT_TOKEN = useSelector((state)=> state.userJwtToken.userJwtToken);
    useEffect(()=>{
        if(USER_AUTH_TOKEN || USER_JWT_TOKEN){
            setUserAuthToken(USER_AUTH_TOKEN);
            setUserJwtToken(USER_JWT_TOKEN);
        }
    },[]) 


    const updatedProductCartData = useSelector((state)=> state.productQty);    

    useEffect(()=>{
        setUpdatedProductCartDataState(updatedProductCartData); // setting the data from redux to state.
        if(updatedProductCartData){
            // insert all the products to the single state and extract the price from it.
            const productArr = [ ...updatedProductCartData.addtoCartQty, ...updatedProductCartData.updateCartQty ];
            const priceArr = productArr.map((product)=>{
                return product.product_price
            })
            console.log("priceArr", priceArr);  
            setTotalPriceOfProducts((prev)=> {
                const total_price = priceArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                return total_price;
            })
        }
    },[updatedProductCartData, TotalPriceOfProducts])


    const handleOrderInstruction = (e) => {
        setHandleInstruction(e.target.value); 
    }
    const handleCheckOut = (e) => {
        if(userAuthToken == "" && userJwtToken == ""){
            toastFailed("Please Login First")
            navigate("/login")
        }else{
            // debugger;
            // console.log("length", updatedProductCartDataState.updateCartQty);
            if(updatedProductCartDataState.updateCartQty.length > 0 ){
                const productArr = [ ...updatedProductCartDataState.updateCartQty ];
                productArr.forEach((product)=>{
                    dispatch(setFinalCartProduct(product));
                })
                toastSuccess("Proceed to Payment Page");
                return navigate('/checkout')
            }
            else if(updatedProductCartDataState.addtoCartQty.length >= 1) {
                // for addtocart logic
                const productArr = [ ...updatedProductCartDataState.addtoCartQty ]
                productArr.forEach((product)=>{
                    console.log("test", product)
                    dispatch(setFinalCartProduct(product));
                })
                toastSuccess("Proceed to Payment Page");
                return navigate('/checkout')
            }
            else{
                toastFailed("Please Add Products to Cart");
                navigate("/collection");
            }
            
        } 
      };

    //   console.log('length', updatedProductCartDataState.updateCartQty.length)

      const saveOrderInstruction = () => {
        if(orderInstruction !== ""){
            dispatch(setOrderInstruction(orderInstruction));
            toastSuccess("Order Instructions Added Successfully");
            setHandleInstruction("")
        }else{
            toastFailed("Please Add Order Instructions");
        }
      }
    return <>
    <section  className='order-instruction-container w-full relative h-fit mt-[3rem] lg:mt-[3.5rem] '>
        <div className='content-container w-full h-fit'>
            <div className='inner-container px-1 space-y-[2.4rem] lg:space-y-0  lg:flex lg:justify-between lg:items-start lg:gap-x-[80px]'>
                <div className='space-y-4 lg:w-full'>
                    <div>
                        <h6 className='text-[16px] font-[500] text-[#363636] lg:text-[20px] '>Order Instructions</h6>
                    </div>
                    <div className='lg:w-full'>
                        <textarea value={orderInstruction} onChange={handleOrderInstruction} className='w-full border-nav-pink bg-transparent resize-none'  name="" id=""  rows="5"></textarea>
                    </div>
                    <div className='w-full justify-end flex'>
                        <button onClick={saveOrderInstruction} className='bg-nav-pink active:bg-transparent active:border-[0.01rem] border-nav-pink active:text-nav-pink  text-white px-6 py-2 '>Save</button>
                    </div>
                </div>
                <div className='main-container-subtotal text-center lg:text-right  w-full lg:max-w-max h-fit '>
                    <div className='inner-container-subtotal space-y-2'>
                        <div className='flex items-center lg:items-start justify-center lg:justify-end gap-[4.3rem] lg:gap-[7rem]'>
                            <div>
                                <h5 className='text-[20px] font-[600] text-[#363636] '>Subtotal</h5>
                            </div>
                            <div>
                                <h5 className='font-[600] text-[20px] text-[#363636]'>$<span className='font-[400]'>{TotalPriceOfProducts}</span></h5>
                            </div>
                        </div>
                        <div>
                            <p className='text-[16px] lg:text-[15px] text-[#999] font-[400] '>Taxes and shipping calculated at checkout</p>
                        </div>
                        <div className='w-7/12 mx-auto lg:w-full flex justify-center lg:justify-end pt-1 lg:pt-6'>
                            <button onClick={handleCheckOut} className='uppercase lg:w-8/12 w-full bg-nav-pink text-white tracking-widest font-[400] lg:text-[19px] py-3 hover:bg-transparent hover:text-nav-pink border-[0.01rem] hover:border-nav-pink '>check out</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </>
}

export default OrderInstructionCart;
