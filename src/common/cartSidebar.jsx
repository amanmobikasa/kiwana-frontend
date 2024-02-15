import React, { memo } from 'react';
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import cartImage from '../Assest/images/cartimg1.png';
import { LuMinus, LuPlus } from 'react-icons/lu';
import CouterCommon from './CouterCommon';


function CartSideBar({setShowCartSidebar, showCartSidebar}) {
//   const [openModal, setOpenModal] = useState(true);

    // const hideCartPopUp = 

  return <>
      <Modal id='cart-container' dismissible show={showCartSidebar} onClose={showCartSidebar} >
        <div className='main-container-cart-popup'>
            <div className='content-container w-11/12 mx-auto py-[2.2rem] '>
                <div className='w-full flex justify-between h-fit items-center px-3'>
                    <div className='flex justify-start gap-2 '>
                        <div onClick={()=> setShowCartSidebar(false)}>
                            <IoMdCheckmark className='text-lg text-[#363636]'/>
                        </div>
                        <div>
                            <p className='text-[13px] font-[600] font-poppins text-[#363636] '>Items added to your cart</p>
                        </div>
                    </div>
                    <div>
                        <RxCross2 className='text-lg text-[#363636]' />
                    </div>
                </div>
                <div className='mt-[3rem] overflow-scroll relative '>
                    <div className='snap-x snap-mandatory  w-[30rem] space-y-[2.5rem] '>
                        <div>
                            <CartItems />
                        </div>
                        <div>
                            <CartItems />
                        </div>
                    </div>
                </div>
                <div className='w-full overflow-hidden relative '>
                        <div className='content-container pt-[3.2rem] pb-[2rem] h-fit'>
                            <div className='inner-container w-full  h-fit'>
                                <div className='flex w-full justify-start items-center gap-[9px]'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                            <path d="M8.8075 2.71234H3.51091C3.30859 2.71234 3.14453 2.8764 3.14453 3.07872C3.14453 3.28104 3.30859 3.44509 3.51091 3.44509H8.8079C9.01023 3.44509 9.17428 3.28104 9.17428 3.07872C9.17428 2.8764 9.00982 2.71234 8.8075 2.71234Z" fill="#999999"/>
                                            <path d="M9.17387 5.14433C9.17387 4.94201 9.00982 4.77795 8.8075 4.77795H3.51091C3.30859 4.77795 3.14453 4.94201 3.14453 5.14433C3.14453 5.34665 3.30859 5.51071 3.51091 5.51071H8.8079C9.00982 5.51071 9.17387 5.34665 9.17387 5.14433Z" fill="#999999"/>
                                            <path d="M3.51091 6.84393C3.30859 6.84393 3.14453 7.00799 3.14453 7.21031C3.14453 7.41263 3.30859 7.57669 3.51091 7.57669H6.17895C6.38127 7.57669 6.54532 7.41263 6.54532 7.21031C6.54532 7.00799 6.38127 6.84393 6.17895 6.84393H3.51091Z" fill="#999999"/>
                                            <path d="M4.46296 11.8812H2.1959C1.88326 11.8812 1.62924 11.6267 1.62924 11.3145V1.7822C1.62924 1.46956 1.88367 1.21554 2.1959 1.21554H10.1243C10.4365 1.21554 10.691 1.46997 10.691 1.7822V5.26075C10.691 5.46307 10.855 5.62713 11.0573 5.62713C11.2597 5.62713 11.4237 5.46307 11.4237 5.26075V1.7822C11.4237 1.06573 10.8408 0.482788 10.1247 0.482788H2.1959C1.47943 0.482788 0.896484 1.06573 0.896484 1.7822V11.3145C0.896484 12.031 1.47943 12.6139 2.1959 12.6139H4.46296C4.66528 12.6139 4.82934 12.4499 4.82934 12.2476C4.82934 12.0452 4.66528 11.8812 4.46296 11.8812Z" fill="#999999"/>
                                            <path d="M11.4454 6.92047C10.9138 6.38841 10.0479 6.38841 9.51664 6.92047L6.14801 10.2891C6.04135 10.3958 5.97134 10.5309 5.9461 10.6795L5.76209 11.7717C5.72301 12.0017 5.79832 12.2374 5.96319 12.4023C6.09916 12.5387 6.28438 12.614 6.47409 12.614C6.51398 12.614 6.55388 12.6107 6.59377 12.6038L7.68517 12.4194C7.83416 12.3945 7.96972 12.3249 8.07637 12.2179L11.445 8.84924C11.9771 8.31759 11.9771 7.45212 11.4454 6.92047ZM7.56426 11.6968L6.48467 11.8934L6.66582 10.8069L9.09002 8.38272L9.98316 9.27587L7.56426 11.6968ZM10.9272 8.33102L10.501 8.75765L9.60783 7.8645L10.0345 7.43787C10.1574 7.31493 10.3194 7.25346 10.481 7.25346C10.6426 7.25346 10.8043 7.31493 10.9276 7.43787C11.1735 7.68457 11.1735 8.08473 10.9272 8.33102Z" fill="#999999"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className='text-[16px] font-[600] text-[#999]'>Note</p>
                                    </div>
                                </div>
                                <div className='w-full h-fit pt-[2rem] space-y-2'>
                                    <div>
                                        <div className='w-full flex justify-between items-center'>
                                            <div className='max-w-fit'>
                                                <h1 className='text-[1.8rem] font-playfair font-[600] capitalize text-[#363636]'>subtotal</h1>
                                            </div>
                                            <div>
                                                <h1 className='text-[1.7rem] font-[600]'>$700</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-[#999] text-[12px] font-[400] '>Taxes and shipping calculated at checkout</p>
                                    </div>
                                </div>
                                <div className='button-container flex items-center justify-evenly w-full gap-3 mt-4'>
                                    <div className='w-6/12'>
                                        <button className='text-[15px] font-[400] uppercase w-full py-3  border-[0.01rem] border-nav-pink '>View Cart</button>
                                    </div>
                                    <div className='w-6/12'>
                                        <button className='text-[15px] font-[400] uppercase w-full py-3 bg-nav-pink border-[0.01rem] border-nav-pink text-white'>Buy now</button>
                                    </div>
                                </div>

                        
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </Modal>
    </>
}

const CartItems = () => {
    return <>
        <main className='cart-item-container w-full h-fit relative'>
            <div className='content-container flex  justify-start w-full items-start gap-x-8 '>
                <div className='image-container object-contain   h-[190px] w-[14.2rem] flex place-items-center justify-start border-[0.01rem]'>
                    <img src={cartImage} className='h-fit w-fit' alt="cart_product_image" />
                </div>
                <div className='text-container w-full h-fit pt-2'>
                    <div className='inner-container space-y-4'>
                        <div className='space-y-2'>
                            <h1 className='text-[16px] font-playfair font-[600] text-[#363636] capitalize'>Ultra Brightening Face Serum</h1>
                            <div>
                                <p className='text-[#363636] text-[14px] font-[400] '>Weight <span>30 ml</span></p>
                            </div>
                        </div>
                        <div className='price-container'>
                            <p className='text-nav-pink text-[18px] font-[600] '>$450</p>
                        </div>
                        <div className='quantity-container flex items-center gap-2'>
                            <CouterCommon />
                            <div>
                                <button className='underline font-[600] text-[14px]'>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export {CartItems,CartSideBar}; 
