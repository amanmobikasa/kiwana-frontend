import React from 'react'
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import image1 from '../Assest/images/pdp_image_1.png';
import Magnifier from "react-magnifier";
import ImageMagnifier from './imageMagnifier';

function PopUpCommon({setShowPopup, activePopUpImage}) {
//   const [openModal, setOpenModal] = useState(true);
    //  const [activePopupImage , setActivePopUpImage] = useState(null);

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal size={"5xl"} className='main-container' show={true} onClose={() => setShowPopup(false)}>
        <Modal.Header className='border-none py-3 bg-transparent'></Modal.Header>
        <Modal.Body className='content-container h-[50vh] overflow-hidden'>
          <div className='w-9/12 mx-auto h-fit object-cover  box-content'>
            {/* <img src={activePopUpImage} className='h-full w-full' alt="" /> */}
            <Magnifier src={activePopUpImage} className='h-full w-full' mgWidth={300} mgHeight={300} mgShape='square'  />
            {/* <ImageMagnifier imageUrl={activePopUpImage} /> */}
          </div>
        </Modal.Body>
      </Modal>
      
    </>
  );
}

export default PopUpCommon;
