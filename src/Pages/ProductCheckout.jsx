import { Label, Radio } from "flowbite-react";
import React, { useEffect, useState, useRef, useCallback, memo } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentMethod } from "../Redux/reducer/payementSlice";
import GooglePayUpi from "../paymentGateway/GooglePayupi";
import StripeContainer from "../paymentGateway/stripePayment/StripeContainer";
import ModalWrapper from "../common/ModalWrapper";
import UserReviewCommon from "../common/UserReviewCommon";
import { useFetchData } from "../Customhooks/useFetchData";


const ProductCheckout = memo(() => {
    const [payementState, setPaymentState] = useState(payement_api);
    const [currentPaymentMethod, setCurrentPaymentMethod] = useState("upi payment");
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [signUpUserData, setSignUpUserData] = useState(null);
    const dispatch = useDispatch();
    

    const handleChangePayment = useCallback((event, payment_option) => {
      const { id, value } = event.target;
      setCurrentPaymentMethod(id);
    
      if (payement_api) {
        const updatedPaymentState = payement_api.map((payment_method, i) => {
          if (payment_method?.name === id) {
            return {
              ...payment_method,
              checked: true,
            };
          } else {
            return { ...payment_method, checked: false };
          }
        });
        setPaymentState(updatedPaymentState);
      }
    }, [setCurrentPaymentMethod, payement_api, setPaymentState]);

    // console.log("paymentMethod", payementState)

    // dispatch the payment method to the redux store
    const handleSubmitPayment = () => {
    const paymentMethod = payementState.filter((payment_method, i)=>{
        return payment_method.checked;
      })
      dispatch(setPaymentMethod(paymentMethod[0].name))
      setShowPaymentModal(true);
      // toastSuccess("Payment method selected successfully");
    }

    const { data , error } = useFetchData('http://localhost:4000/signup');

    useEffect(() => {
      if (error) {
        console.log('Error:', error);
      }
    }, [error]);

    // console.log("dataNow", data)
  return (
    <>

    { showPaymentModal ? <ModalWrapper editModalState={showPaymentModal} setEditModalState={setShowPaymentModal} paymentType={currentPaymentMethod} modalName={"Payment Method"} hideButton={currentPaymentMethod === "Cash on delivery (COD)" ? true : false} > {/* true means show and false means hide*/}
    <div className="my-[2rem]">
            {currentPaymentMethod === "upi payment" ? (
              <div className="w-full flex justify-center">
                <GooglePayUpi  />
              </div>
          ) : currentPaymentMethod === "credit/debit card" ? (
            <StripeContainer />
          ) : currentPaymentMethod === "Cash on delivery (COD)" ? (
            <div>
              <UserReviewCommon disableArea = {true} placeholderText={"House No. / Loacality / Landmark / City / State / (Pincode)"} labelName={"Address (Primary)"} />
            </div>
          ) : (
            <h1 className="text-center text-2xl font-[500] ">Coming Soon</h1>
            
          )}
    </div>
    </ModalWrapper> : null }

      <section className="main-container-checkout w-full relative' h-fit">
        <div className="inner-container-checkout w-11/12 mx-auto bg-[#fff8f7] py-[2rem] ">
          <div className="text-container-checkout space-y-[2rem]">
            <div className="heading-container text-center w-full h-fit space-y-1 lg:-space-y-1">
              <div>
                <h1 className="text-[#363636] font-playfair font-[500] text-[28px] lg:text-[60px] ">
                  Checkout Product
                </h1>
              </div>
              <div>
                <p className="text-[15px] text-[#646464] font-[400] uppercase tracking-wider">
                  <span>Home</span> / <span>Checkout </span>
                </p>
              </div>
            </div>
            <div className="checkout-products-payment-options w-10/12 mx-auto border-[0.01rem] border-nav-pink bg-white h-[20rem]">
                <div className="inner-container-payment-options px-3 flex items-center w-full h-full  ">
                    <div className="text-container-payment-opions w-full h-fit relative space-y-[2rem]">
                        <div>
                            <h1 className="text-[1.7rem] font-playfair font-[500] ">Payment Options : <span className="font-poppins text-[1.5rem]">Choose One of them mention below</span></h1>
                        </div>
                        <div className="flex my-4 justify-evenly gap-4 w-full">
                            
                            {
                                payementState.map((payment_option, i)=>{
                                    return <>
                                    <div key={i} className="flex items-center justify-start gap-2">
                                        <Radio onChange={(event)=>handleChangePayment(event, payment_option)} className="h-[1.4rem] w-[1.4rem] " id={payment_option?.name} name="payment" value={payment_option?.name} defaultChecked={payment_option?.checked ? payment_option?.checked : false} />
                                        <Label htmlFor={payment_option?.name} className="text-[1.3rem] text-[#363636]">{payment_option?.name}</Label>
                                    </div>
                                    </>
                                })
                            }
                                
                        </div>
                        <div className="w-full flex justify-end pt-[2rem] items-end h-full ">
                            <button onClick={handleSubmitPayment} className="px-8 py-3 bg-nav-pink text-white flex justify-center items-center gap-3 hover:text-nav-pink hover:border-nav-pink border-[0.01rem] hover:bg-transparent font-[500] active:bg-nav-pink active:text-white uppercase">{currentPaymentMethod}<span><FaArrowRightLong /></span></button>
                        </div>
                        <div className="">
                            
                            {/* <StripeContainer /> */}
                          
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
})

// payment json

const payement_api = [
    {
        id : 1,
        name : "net banking",
        checked : false,
    },
    {
        id : 2,
        name : "upi payment",
        checked : true,
    },
    {
        id : 3,
        name : "credit/debit card",
        checked : false,
    },
    {
        id : 4,
        name : "billing payment",
        checked : false,
    },
    {
        id : 5,
        name : "Cash on delivery (COD)",
        checked : false,
    },

]

export default ProductCheckout;
