import React, { useCallback, useEffect, useState } from "react";
import { Checkbox, Table } from "flowbite-react";
import CommonModal from "./CommonModal";
import { GlobalDeleteData } from "../Customhooks/useDeleteData";
import { toast } from "react-toastify";
import { toastSuccess } from "./toast";
import { useDispatch } from "react-redux";
import { cancelOrderFinal } from "../Redux/reducer/orderProductsSlice";

const TableCommon = ({ finalCartProductsTable }) => {
  const [tableDataProducts, setTableDataProducts] = useState(
    finalCartProductsTable || []
  );
  const [showModal, setShowModal] = useState(false)
  const { response, error, isLoading, deleteDataAsync } = GlobalDeleteData()
  const [orderIdState, setOrderIdState] = useState("");
  const dispatch = useDispatch();

  const handleOrderIdChange = (event, order_id) => {
    setShowModal(true);
    if(order_id){
        setOrderIdState(order_id);
    }
  }

  // console.log("orderIdState", orderIdState)
  
  const handleDeleteProduct = useCallback((event) => {
    if(orderIdState !== ""){
        deleteDataAsync("delete-order/" + orderIdState);
        // dispatch()
    }

  },[tableDataProducts, orderIdState])

  useEffect(()=>{
    if(response?.success === true){
        console.log("orderIdres", response)
        const newTableData = tableDataProducts.filter(product => product.order_id !== response.data) // response.data give me the order_id
        setTableDataProducts(newTableData)
        dispatch(cancelOrderFinal(response.data)); // dispatch for cancelling the product from redux store.
        toastSuccess(response?.message);
    }else if(response?.success === false){
        toast(response?.message);
    }
    else{ return; }
  },[response])

  return <>
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head className="bg-nav-pink">
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Order-Id</Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>DATE</Table.HeadCell>
          <Table.HeadCell>IMAGE</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell className="   ">
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {tableDataProducts.length > 0 &&
            tableDataProducts.map((products, i) => {
              const { order_date, order_id, product_details } = products;
              const originalDate = new Date(order_date);
              const formattedDate = (originalDate.getMonth() + 1) + '-' + originalDate.getDate() + '-' + originalDate.getFullYear();

              return (
                <>
                { showModal ? <CommonModal showModal={showModal} setShowModal={setShowModal} handleCancelButton={handleDeleteProduct}   /> : null  }
                  <Table.Row key={i} className="bg-white  dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>{order_id}</Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {product_details?.product_title}
                    </Table.Cell>
                    <Table.Cell>{formattedDate}</Table.Cell>
                    <Table.Cell>
                        <img src={product_details?.product_image} className="h-[3rem] w-[3rem]" alt="" />
                    </Table.Cell>
                    <Table.Cell>${product_details?.product_price}</Table.Cell>
                    <Table.Cell className="flex gap-4 place-items-center  h-full">
                      <button
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 h-full"
                      >
                        Edit
                      </button>
                      <button
                      onClick={(event)=> handleOrderIdChange(event, order_id)}
                        className="font-medium text-red-500 hover:underline dark:text-red-600 h-full"
                      >
                        {isLoading ? "Loading..." : "Delete"}
                      </button>
                    </Table.Cell>
                  </Table.Row>
                </>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  </>
};

export default TableCommon;
