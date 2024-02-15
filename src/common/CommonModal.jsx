import { Button, Modal } from 'flowbite-react';
import React, { memo } from 'react'
import IlustratorAnimation from '../Components/TimelineComp/IlustratorAnimation';


const CommonModal = memo(({showModal, setShowModal})=> {
  return (
    <>
        <Modal show={showModal} size="md" onClose={() => setShowModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            
            <IlustratorAnimation imageSrc={"https://lottie.host/f197c475-e200-4b43-be0d-a7e8a467fc10/cC2EedogVL.json"}  />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to cancel this order?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setShowModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
})

export default CommonModal