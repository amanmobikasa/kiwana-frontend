import {  Modal } from 'flowbite-react';
import React, { memo } from 'react'

const  ModalWrapper = ({children,handleOrderStatusPage, editModalState, setEditModalState, paymentType, modalName, hideButton})=> {

  const handleSaveButton = (event) => {
    event.preventDefault();
    setEditModalState(false)
    handleOrderStatusPage(event)

  }

  return (
    <>  <Modal show={editModalState} size={"2xl"} onClose={() => setEditModalState(false)}>
        <Modal.Header className='border-b-0'>{modalName ? modalName : "Edit Order"}</Modal.Header>
        <Modal.Body className=''>
        {children}
        </Modal.Body>
        <Modal.Footer className='border-t-0'>
          {hideButton && <button onClick={handleSaveButton} className='bg-nav-pink px-8 py-3 text-white font-[500] hover active:bg-transparent active:text-nav-pink active:border-nav-pink border-[0.01rem]'>Save</button>}
          <button color="gray" onClick={() => setEditModalState(false)} className='bg-transparent border-[0.01rem] border-nav-pink px-8 py-3 active:bg-nav-pink active:text-white'>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default memo(ModalWrapper);
