import { Label, Radio } from "flowbite-react";
import React, { useEffect, useState, useRef, useCallback, memo, Children } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentMethod } from "../Redux/reducer/payementSlice";
import GooglePayUpi from "../paymentGateway/GooglePayupi";
import StripeContainer from "../paymentGateway/stripePayment/StripeContainer";
import ModalWrapper from "../common/ModalWrapper";
import UserReviewCommon from "../common/UserReviewCommon";
import { userLogin } from "../Redux/reducer/userAuthSlice";
import { toastFailed, toastSuccess } from "../common/toast";
import useUpdateUserAddress from "../Customhooks/usePutData";
import { useNavigate } from "react-router-dom";
import GlobalPostData from "../Customhooks/usePostData";


const ProductCheckout = memo(() => {
    const [payementState, setPaymentState] = useState(payement_api);
    const [currentPaymentMethod, setCurrentPaymentMethod] = useState("upi payment");
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [userInfoState, setUserInfoState] = useState({}); 
    const [valueOfAddress, setValueOfAddress] = useState("");
    const [disableTextArea, setDisableTextArea] = useState(true); // true means disable and false means enable
    const [buttonText, setButtonText] = useState("Edit");
    const [addtoCartQtyState, setAddtoCartQtyState] = useState([]); // set the addtoCartQty products.
    const [updateCartQtyState, setUpdateCartQtyState] = useState([]); // set the updateCartQty products.
    const dispatch = useDispatch();
    const btnref = useRef(null); // reference for button text
    const {updateUserAddress, loading, errorAddress, responseData} = useUpdateUserAddress()
    const navigate = useNavigate();
    const {error,isLoading,message,postData,response} = GlobalPostData()
    const [finalProductOrderState, setFinalProductOrderState] = useState([{
      product_name : "",
      product_price : "",
      product_qty : "",
      product_id : "",
      product_image : "",
      product_weight : "",
      payment_mode : "",
      order_status : ""
    }]);
    

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

    
    const user_info = useSelector((state)=> state.users.usersData[state.users.usersData.length-1]); // getting the user data from redux store
    const add_to_cart_products = useSelector((state)=> state.productQty.addtoCartQty);
    const update_cart_qty_products = useSelector((state)=> state.productQty.updateCartQty);


    useEffect(()=>{
      if(add_to_cart_products && update_cart_qty_products){
        setAddtoCartQtyState(add_to_cart_products)
        setUpdateCartQtyState(update_cart_qty_products)
      }
    },[add_to_cart_products, update_cart_qty_products])

    console.log("addtoCartQty", addtoCartQtyState);
    console.log("updatecartQty", updateCartQtyState);


    useEffect(()=>{ // setting the retrive data to state.
      if(user_info){
        setUserInfoState(user_info)
        setValueOfAddress(user_info?.address); // setting the value address of user.
      }
    },[user_info])

    // for getting the response of successful update the address
    useEffect(()=>{
      if(responseData){
        console.log("responseData", responseData)
        toastSuccess(responseData?.message)
        navigate("/delivery-status")
      }else{
        console.log("responseDataError", errorAddress)
      }
    },[responseData])

    // dispatch the payment method to the redux store
    const handleSubmitPayment = () => {
    const paymentMethod = payementState.filter((payment_method, i)=>{
        return payment_method.checked;
      })
      dispatch(setPaymentMethod(paymentMethod[0].name))
      setShowPaymentModal(true);
    }

    // handle the edit address of modal
    const handleEditAddress = (event) => {
      const { value } = event.target;
      setValueOfAddress(value); // updating the value of address.
      if(valueOfAddress !== ""){
        setButtonText("Save")
      }else{
        toastFailed("Please enter the address");
      }
    }

    // handle the button function
    const handleButtonFunction = () => {
      const btnInnerText = btnref.current.innerText;
      if(btnInnerText === "Edit"){
        setDisableTextArea(false);
      }
      else if(btnInnerText === "Save"){
        setUserInfoState((preVal)=>{
          const updatedData = {
            ...preVal, 
            address: valueOfAddress
          }
          dispatch(userLogin(updatedData)); // dispatch the updated data to the redux store.
          return updatedData;
        })
        setDisableTextArea(true);
        setButtonText("Edit")
        updateUserAddress("/change-address", { email : userInfoState?.email, newAddress : valueOfAddress })
      }
    }

    // render to the order status page and hit the api for the final order of products.
    const handleOrderStatusPage = async()=>{
      try {
        if(updateCartQtyState.length <= 0){
          // debugger;
          addtoCartQtyState.forEach((product_obj)=>{
            // console.log("obj", product_obj);
            setFinalProductOrderState((prevVal)=>{
              const updatedFinalProductOrder =  [...prevVal, {
                product_id : product_obj?.pdp_link,
                product_name : product_obj?.product_title,
                product_price : product_obj?.product_price,
                product_image : product_obj?.product_image,
                product_qty : product_obj?.product_quantity?.productCount,
                product_weight : Array.isArray(product_obj?.product_weight) ? (product_obj?.product_weight.find(prod_weight => prod_weight?.selected)?.weight_label || "30ml") : "30ml",
                order_status : "order_placed",
                payment_mode : currentPaymentMethod
              }]
              return updatedFinalProductOrder
            })
          })
        }
        else {
          updateCartQtyState.forEach((product_obj)=>{
            setFinalProductOrderState((prevVal=>{
              return [...prevVal, {
                product_id : product_obj?.pdp_link,
                product_name : product_obj?.product_title,
                product_price : product_obj?.product_price,
                product_image : product_obj?.product_image,
                product_qty : product_obj?.product_quantity?.productCount,
                product_weight : Array.isArray(product_obj?.product_weight) ? product_obj?.product_weight.find((prod_weight)=>{
                  if(prod_weight?.selected){
                    return prod_weight?.weight_label
                  }
                }) : "30ml",
                order_status : "order_placed",
                payment_mode : currentPaymentMethod
              }]
            }))
          })
        }


      // call the api for the final order of products.
      // await postData("http://localhost:4000/order-product", finalProductOrderState[finalProductOrderState.length -1]);
      // console.log("data now", finalProductOrderState[finalProductOrderState.length -1])

      // if(response.success){
      //   // console.log("responseOrder", response.message)
      //   toastSuccess(response.message)

      // }else{
      //   toastFailed(error.message);
      // }
        
      } catch (error){
        console.error("something went wrong while sending the data to the server", error);
      }
    }

    useEffect(() => {
      const sendOrderData = async () => {
        try {
          // Call the API for the final order of products.
          postData("http://localhost:4000/order-product", finalProductOrderState[finalProductOrderState.length - 1]);
          console.log("data now", finalProductOrderState[finalProductOrderState.length - 1]);
    
          if (response.success) {
            toastSuccess(response.message);
            navigate("/delivery-status");
          } else {
            toastFailed(error.message);
          }
        } catch (error) {
          console.error("Error while sending data to the server", error);
        }
      };
    
      // Check if there are products in finalProductOrderState before making the API call
      if (finalProductOrderState.length > 0) {
        sendOrderData();
      }
    }, [finalProductOrderState]);

    
    
    
    // console.log("updatedFinalData", finalProductOrderState);


  return (
    <>

    { showPaymentModal ? <ModalWrapper handleOrderStatusPage={handleOrderStatusPage} editModalState={showPaymentModal} setEditModalState={setShowPaymentModal} paymentType={currentPaymentMethod} modalName={"Payment Method"} hideButton={currentPaymentMethod === "Cash on delivery (COD)" ? true : false} > {/* true means show and false means hide*/}
    <div className="my-[2rem]">
            {currentPaymentMethod === "upi payment" ? (
              <div className="w-full flex justify-center">
                <GooglePayUpi  />
              </div>
          ) : currentPaymentMethod === "credit/debit card" ? (
            <StripeContainer />
          ) : currentPaymentMethod === "Cash on delivery (COD)" ? (
            <div className="">
              <UserReviewCommon onChangeModal={handleEditAddress} disableArea = {disableTextArea} placeholderText={"House No. / Loacality / Landmark / City / State / (Pincode)"} valueAddress = {valueOfAddress} labelName={"Address (Primary)"} />
              <div className="flex justify-end w-full mt-4">
                <button ref={btnref} onClick={handleButtonFunction} className="bg-nav-pink text-white px-6 py-2 active:bg-transparent active:text-nav-pink border-[0.01rem] active:border-nav-pink">{buttonText}</button>
              </div>
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
                            <button onClick={handleSubmitPayment} className="px-8 py-3 bg-nav-pink text-white flex justify-center items-center gap-3 hover:text-nav-pink hover:border-nav-pink border-[0.01rem] hover:bg-transparent font-[500] active:bg-nav-pink active:text-white uppercase">{isLoading ? "loading..." : currentPaymentMethod}<span><FaArrowRightLong /></span></button>
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



