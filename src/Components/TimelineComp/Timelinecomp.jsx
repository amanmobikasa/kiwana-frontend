import { Button, Timeline, Tooltip } from 'flowbite-react'
import React, { memo, useEffect } from 'react'
import IlustratorAnimation from './IlustratorAnimation'
import { FcOk } from "react-icons/fc";
// import { HiCalendar } from 'react-icons/hi'


export default memo(function Timelinecomp({setOrderStatusApi}) {

  useEffect(()=>{
    setOrderStatusApi(delivery_status)
  },[delivery_status])

  return (
    <>
        <Timeline className='w-11/12 mx-auto' horizontal>
        {
          delivery_status && delivery_status.map((item, i)=>{
            const animationProps = {
            imageSrc: item?.imageSrc || null,
            show: item?.visible || false,
            orderStatus : item?.orderStatus || null,
          };
            return <>
            <Timeline.Item className='w-full' key={i} >
              <Timeline.Point className='' icon={ item?.orderStatus !== "pending" ? FcOk : null }  />
              <IlustratorAnimation {...animationProps} />
              <Timeline.Content>
                {
                  item?.orderStatus !== "pending" ?
                 <><Timeline.Time>February 2022</Timeline.Time>
            <Tooltip placement='bottom' style='' className='bg-white text-gray-400' content={ item?.tooltipText }>
                <Timeline.Title>{item?.status_name}</Timeline.Title>
            </Tooltip> </>
                : <>
                <Timeline.Time>Date : Pending</Timeline.Time>
                <Timeline.Title>{"Pending"}</Timeline.Title>
                </>
                }
                
              </Timeline.Content>
            </Timeline.Item>
            </>
          })
        }
      
    </Timeline>
    </>
  )
})


// for delivery status.

const delivery_status = [
    {
      id : 1,
      status_name : "Order Placed",
      imageSrc : "https://lottie.host/a827e604-1d01-48f8-84ab-dcfa6c9f0df3/9bg4qhNag6.json",
      visible : false,
      tooltipText : "Your Order has been Placed.",
      orderStatus : "order_placed"
      
    },
    {
      id : 2,
      status_name : "Order Shipped",
      imageSrc : "https://lottie.host/469223b9-b6fa-4b8b-b9b4-f64a0c973981/pOpWcDRanz.json",
      visible : false,
      tooltipText : "Your Order has been Shipped.",
      orderStatus : "pending"
    },
    {
      id : 3,
      status_name : "Out of delivery",
      imageSrc : "https://lottie.host/52f7f019-de67-447e-9c15-2abb20cceefc/B4ZcBogWT1.json",
      visible : false,
      tooltipText : "Your Order is Out of Delivery.",
      orderStatus : "pending"

    },
    {
      id : 4,
      status_name : "Delivered",
      imageSrc : "https://lottie.host/6d08eedf-467f-43ea-ac04-1f8801f92c49/zoH2y2MsF4.json",
      visible : false,
      tooltipText : "Your Order is Delivered.",
      orderStatus : "pending"
    },

]
