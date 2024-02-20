import React, { memo, useEffect, useState } from 'react'
import BasicLayout from '../Layouts/BasicLayout';
import Timelinecomp from '../Components/TimelineComp/Timelinecomp';
import CommonModal from '../common/CommonModal';
import UserReviewCommon from '../common/UserReviewCommon';
import orderStatusSlice from '../Redux/reducer/orderStatusSlice';
import ModalWrapper from '../common/ModalWrapper';
import { CartItems } from '../common/cartSidebar';
import { Label, Textarea } from 'flowbite-react';

const TimeLineProducts =()=> {
  const [showModal, setShowModal] = useState(false); // false means hide and true means show.
  const [orderStatusApi, setOrderStatusApi] = useState([]);
  const [showReviewBox, setShowReviewBox] = useState(false);
  const [editModalState, setEditModalState] = useState(false);


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

  const handleEditOrder = () => {
    setEditModalState(true) 
  }

  // console.log("orderstatus", orderStatusApi)

  return (
    <>
        <BasicLayout className='bg-white w-full relative h-fit'
        > 
        { showModal ? <CommonModal showModal = {showModal} setShowModal={setShowModal} /> : null }
        {
          editModalState ? <ModalWrapper editModalState={editModalState} setEditModalState={setEditModalState}  >
            {/* <h1>This is a temp text</h1> */}
            <div className='w-full relative flex flex-col gap-y-5'>
              <div>
                <CartItems />
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
                  <button onClick={handleCancelOrder} className='bg-transparent border-[0.01rem] border-nav-pink px-8 py-3 active:bg-nav-pink active:text-white'>Cancel Order</button>
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
