import React, { memo, useEffect, useState } from 'react'
import BasicLayout from '../Layouts/BasicLayout';
import Timelinecomp from '../Components/TimelineComp/Timelinecomp';
import CommonModal from '../common/CommonModal';
import UserReviewCommon from '../common/UserReviewCommon';
import orderStatusSlice from '../Redux/reducer/orderStatusSlice';
import ModalWrapper from '../common/ModalWrapper';
import { CartItems } from '../common/cartSidebar';
import { Label, Textarea } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { GlobalDeleteData } from '../Customhooks/useDeleteData';
import { toastFailed, toastSuccess } from '../common/toast';
import { useNavigate } from 'react-router-dom';

const TimeLineProducts =()=> {
  const [showModal, setShowModal] = useState(false); // false means hide and true means show.
  const [orderStatusApi, setOrderStatusApi] = useState([]);
  const [showReviewBox, setShowReviewBox] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const [orderIdState, setOrderIdState] = useState([]);
  const navigate = useNavigate();
  const {error,isLoading,response,deleteDataAsync} = GlobalDeleteData() // this is used to delete the data from the api.
  const [finalOrderProductDataState, setFinalOrderProductDataState] = useState([]);

  const order_id = useSelector((state)=> state.orderStatus?.orderDetails[0])
  const add_product_order_data = useSelector((state)=> state.productQty.addtoCartQty);
  const update_product_order_data = useSelector((state)=> state.productQty.updateCartQty);

  useEffect(()=>{
    if(add_product_order_data?.length > 0){
      setFinalOrderProductDataState([...add_product_order_data])
    }else if(update_product_order_data?.length > 0){
      setFinalOrderProductDataState([...update_product_order_data])
    }
  },[add_product_order_data, update_product_order_data]);

  console.log("all data", finalOrderProductDataState)


  useEffect(()=>{
    setOrderIdState((prev)=>{
      return [...prev, order_id]
    });
  },[order_id])

  console.log("orderid", orderIdState);


  useEffect(()=>{
    if(orderStatusApi.length > 0){
      const show_review_box = orderStatusApi.find((order_status) => order_status.orderStatus == "out_of_delivery" ?  true : false );
      setShowReviewBox(show_review_box)
    }else{
      setShowReviewBox(true)
    }
  },[orderStatusApi])


  const handleCancelOrder = () => {
    setShowModal(true) 
    
  }

  // cancel the product from the api.
  const handleCancelButton = () => {
    try {
      if(orderIdState.length > 0){
        orderIdState.forEach((order_id_product)=>{
          console.log("order_id_product", order_id_product)
          const {order_id} = order_id_product
          deleteDataAsync(`delete-order/${order_id}`) // calling the function for delete the data from order.
        })
        setShowModal(false)
      }
    } catch (error) {
      console.error("something went wrong while delete the data : 🥲", error)
    } 
  }

  useEffect(()=>{
    if(response !== null){
      toastSuccess(response.message)
      navigate("/myaccount")
    }
    else if(response?.success){
      toastFailed("Something went wrong, Order not Cancelled!");
    }
  },[response])

  const handleEditOrder = () => {

    setEditModalState(true) 

  }

  // console.log("orderstatus", orderStatusApi)

  return (
    <>
        <BasicLayout className='bg-white w-full relative h-fit'
        > 
        { showModal ? <CommonModal showModal = {showModal} setShowModal={setShowModal} handleCancelButton={handleCancelButton}  /> : null }
        {
          editModalState ? <ModalWrapper editModalState={editModalState} setEditModalState={setEditModalState}  >
            {/* <h1>This is a temp text</h1> */}
            <div className='w-full relative flex flex-col gap-y-5'>
              <div>
              {
                finalOrderProductDataState.length > 0 && finalOrderProductDataState.map((product_data, i)=>{
                  return <>
                  <CartItems finalOrderProductDataState={product_data}  />  {/* send the data to this component for edit and now it send the object of product */}
                  </>
                })
              }
              </div>
              <div className='w-full mx-auto'>
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Edit Your Address " />
              </div>
                <Textarea
                  className="rounded-none resize-none "
                  id="comment"
                  placeholder="House No. / Locality / Landmark / City / State / Pincode"
                  required
                  rows={5}
                />
              </div>
              <div>
                {/* for address edit */}
              </div>
            </div>
          </ModalWrapper> : null
        }
            <div className='w-11/12 mx-auto space-y-[6rem]'>
              <div className=''>
                  <h1 className='text-nav-pink text-[50px] font-[400] text-center font-playfair lg:text-[58px]'>Order Status</h1>
              </div>
              <div className='container-timeline w-full h-full'>
                  <Timelinecomp setOrderStatusApi={setOrderStatusApi} />
              </div>
              { showReviewBox ? null : <div className='w-full inline-flex justify-center gap-6'>
                <div>
                  <button onClick={handleEditOrder} className='bg-nav-pink px-8 py-3 text-white font-[500] hover active:bg-transparent active:text-nav-pink active:border-nav-pink border-[0.01rem]'>Edit Order</button>
                </div>
                <div>
                  <button onClick={handleCancelOrder} className='bg-transparent border-[0.01rem] border-nav-pink px-8 py-3 active:bg-nav-pink active:text-white'>{isLoading ? "Loading..." : "Cancel Order"}</button>
                </div>
              </div>}
              
              {showReviewBox ?  <div>
                <UserReviewCommon />
              </div> : null}

            </div>
        </BasicLayout>
    </>
  )
}

export default memo(TimeLineProducts);
