import React, { useEffect } from 'react'
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/reducer/addToCartSlice';

function RemoveCartProduct({setOpenModal,openModal, singleCartData, cartItemsState}) {

    const [cartProduct, setCartProduct] = useState(singleCartData);
    const [allCartProducts, setAllCartProducts] = useState([]);
    const dispatch = useDispatch();

    console.log("testest", cartItemsState);

    useEffect(()=>{
      setAllCartProducts(cartItemsState)
    },[cartItemsState, allCartProducts])
    // console.log("cart", cartProduct);

    const handleRemoveCartProduct = (event, productId) =>{
      
      if (productId) {
        let updatedCartProducts = allCartProducts.findIndex((item) => item.product_quantity?.productId === productId );
        console.log("tet", updatedCartProducts);
        dispatch(removeFromCart(updatedCartProducts)); // remove the product from cart.
        setOpenModal(false);
      }
    }
  

  return (
    <>
   
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to remove this product from Cart?
            </h3>
            <div className="flex justify-center gap-4">
              <Button onClick={(event)=>handleRemoveCartProduct(event, cartProduct?.product_quantity?.productId)} className=''  color='failure' >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { RemoveCartProduct };
