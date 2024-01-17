import React from 'react'
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import image1 from '../Assest/images/pdp_image_1.png';

function PopUpCommon({setShowPopup, activePopUpImage}) {
//   const [openModal, setOpenModal] = useState(true);
    //  const [activePopupImage , setActivePopUpImage] = useState(null);

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal size={"5xl"} className='main-container' show={true} onClose={() => setShowPopup(false)}>
        <Modal.Header className='border-none py-3 bg-transparent'></Modal.Header>
        <Modal.Body className='content-container h-[50vh] '>
          <div className='w-full h-full object-cover  box-content'>
            <img src={activePopUpImage} className='h-full w-full' alt="" />
          </div>
        </Modal.Body>
      </Modal>
      
    </>
  );
}

export default PopUpCommon;
